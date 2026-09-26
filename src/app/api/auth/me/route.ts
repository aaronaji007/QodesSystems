import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('qodes_session')?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true, user: payload });
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}

export async function POST() {
  // Logout
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.delete('qodes_session');
  return response;
}
