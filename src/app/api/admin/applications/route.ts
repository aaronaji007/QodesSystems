import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(
      'SELECT id, name, email, phone, position, experience_years, resume_url, cover_letter, status, created_at FROM job_applications ORDER BY created_at DESC'
    );
    return NextResponse.json({ success: true, applications: result.rows });
  } catch (error) {
    console.error('Failed to fetch job applications:', error);
    return NextResponse.json({ success: true, applications: [] });
  }
}
