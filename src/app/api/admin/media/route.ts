import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT id, name, url, category, created_at FROM site_media ORDER BY created_at DESC');
    return NextResponse.json({ success: true, media: result.rows });
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return NextResponse.json({ success: true, media: [] });
  }
}

export async function POST(req: Request) {
  try {
    const { name, url, category } = await req.json();
    if (!name || !url) {
      return NextResponse.json({ success: false, error: 'Name and URL are required' }, { status: 400 });
    }

    const result = await query(
      'INSERT INTO site_media (name, url, category) VALUES ($1, $2, $3) RETURNING *',
      [name.trim(), url.trim(), category || 'general']
    );

    return NextResponse.json({ success: true, media: result.rows[0] });
  } catch (error) {
    console.error('Failed to save media record:', error);
    return NextResponse.json({ success: false, error: 'Failed to record media' }, { status: 500 });
  }
}
