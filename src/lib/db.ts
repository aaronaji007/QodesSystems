import { Pool, QueryResult, QueryResultRow } from 'pg';

let pool: Pool | null = null;

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

export function getPool(): Pool {
  if (!pool) {
    if (!connectionString) {
      console.warn('⚠️ Neither POSTGRES_URL nor DATABASE_URL environment variable is set.');
    }
    pool = new Pool({
      connectionString,
      ssl: connectionString?.includes('localhost') || connectionString?.includes('127.0.0.1')
        ? false
        : { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });
  }
  return pool;
}

let initialized = false;

export async function initDb(): Promise<void> {
  if (initialized || !connectionString) return;
  const p = getPool();
  await p.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'admin',
      full_name VARCHAR(255),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS enquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      subject VARCHAR(255),
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS job_applications (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      position VARCHAR(255),
      experience_years INT,
      resume_url TEXT,
      cover_letter TEXT,
      status VARCHAR(50) DEFAULT 'submitted',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
  initialized = true;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> {
  if (!initialized && connectionString) {
    try {
      await initDb();
    } catch (err) {
      console.error('Auto DB initialization notice:', err);
    }
  }
  const p = getPool();
  return p.query<T>(text, params);
}

const db = { query, getPool, initDb };
export default db;
