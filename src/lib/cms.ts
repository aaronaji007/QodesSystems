import fs from 'fs';
import path from 'path';
import { query } from './db';
import { getDefaultContentMap } from './cms-types';

export * from './cms-types';

const LOCAL_FALLBACK_FILE = path.join(process.cwd(), 'data', 'cms-content.json');

function readLocalBackup(): Record<string, string> {
  try {
    if (fs.existsSync(LOCAL_FALLBACK_FILE)) {
      const raw = fs.readFileSync(LOCAL_FALLBACK_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading local CMS backup:', err);
  }
  return {};
}

function writeLocalBackup(content: Record<string, string>) {
  try {
    const dir = path.dirname(LOCAL_FALLBACK_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_FALLBACK_FILE, JSON.stringify(content, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing local CMS backup:', err);
  }
}

/**
 * Get unified content map with defaults, local JSON fallback, and database overrides.
 */
export async function getSiteContent(): Promise<Record<string, string>> {
  const merged: Record<string, string> = { ...getDefaultContentMap(), ...readLocalBackup() };

  try {
    const result = await query<{ key: string; value: string }>('SELECT key, value FROM site_content');
    for (const row of result.rows) {
      if (row.key && row.value) {
        merged[row.key] = row.value;
      }
    }
  } catch {
    // Database query failed or unconfigured, gracefully rely on fallback
  }

  return merged;
}

/**
 * Persist content map to PostgreSQL database and local backup file.
 */
export async function saveSiteContent(items: Record<string, string>): Promise<boolean> {
  // 1. Always update local JSON store
  const existingLocal = readLocalBackup();
  const updatedLocal = { ...existingLocal, ...items };
  writeLocalBackup(updatedLocal);

  // 2. Update PostgreSQL if reachable
  try {
    for (const [key, value] of Object.entries(items)) {
      if (typeof key === 'string' && typeof value === 'string') {
        await query(
          `INSERT INTO site_content (key, value, updated_at)
           VALUES ($1, $2, CURRENT_TIMESTAMP)
           ON CONFLICT (key) DO UPDATE
           SET value = EXCLUDED.value, updated_at = CURRENT_TIMESTAMP`,
          [key, value]
        );
      }
    }
  } catch (err) {
    console.warn('Notice: PostgreSQL sync paused (running in local fallback mode):', (err as Error).message);
  }

  return true;
}
