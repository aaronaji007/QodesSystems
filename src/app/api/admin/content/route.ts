import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT key, value, category, updated_at FROM site_content ORDER BY key ASC');
    const contentMap: Record<string, string> = {};
    for (const row of result.rows) {
      contentMap[row.key] = row.value;
    }
    return NextResponse.json({ success: true, content: contentMap, rows: result.rows });
  } catch (error) {
    console.error('Failed to fetch site_content:', error);
    // Return empty map gracefully if DB is not configured yet
    return NextResponse.json({ success: true, content: {}, rows: [] });
  }
}

export async function POST(req: Request) {
  try {
    const items: Record<string, string> = await req.json();

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

    return NextResponse.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Failed to update site_content:', error);
    return NextResponse.json({ success: false, error: 'Database update failed' }, { status: 500 });
  }
}
