import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { comparePassword, signToken } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const fallbackEmail = (process.env.ADMIN_EMAIL || 'admin@qodessystems.com').toLowerCase().trim();
    const fallbackPassword = process.env.ADMIN_PASSWORD || 'admin123';

    // 1. Check fallback / developer admin credentials
    if (normalizedEmail === fallbackEmail && password === fallbackPassword) {
      const token = signToken({
        id: 1,
        email: fallbackEmail,
        name: 'Qodes Administrator',
        role: 'superadmin',
      });

      const response = NextResponse.json({
        success: true,
        user: { id: 1, name: 'Qodes Administrator', email: fallbackEmail, role: 'superadmin' },
      });

      response.cookies.set('qodes_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    // 2. Query PostgreSQL if credentials didn't match fallback
    try {
      const result = await query(
        'SELECT id, name, email, password_hash, role FROM users WHERE email = $1 LIMIT 1',
        [normalizedEmail]
      );

      const user = result.rows[0];

      if (user) {
        const passwordMatch = await comparePassword(password, user.password_hash);
        if (passwordMatch) {
          const token = signToken({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          });

          const response = NextResponse.json({
            success: true,
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
          });

          response.cookies.set('qodes_session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
          });

          return response;
        }
      }
    } catch {
      // Database not reachable
    }

    return NextResponse.json(
      { error: 'Invalid email or password. Please verify your credentials.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal authentication error' },
      { status: 500 }
    );
  }
}
