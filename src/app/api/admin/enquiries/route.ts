import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(
      'SELECT id, name, email, phone, subject, message, status, created_at FROM enquiries ORDER BY created_at DESC'
    );
    return NextResponse.json({ success: true, enquiries: result.rows });
  } catch (error) {
    console.error('Failed to fetch enquiries:', error);
    return NextResponse.json({ success: true, enquiries: [] });
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and status required' }, { status: 400 });
    }

    await query('UPDATE enquiries SET status = $1 WHERE id = $2', [status, id]);
    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (error) {
    console.error('Failed to update enquiry status:', error);
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}
