import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // 1. Persist application into PostgreSQL
    try {
      await query(
        `INSERT INTO job_applications (full_name, email, phone, subject, message, status)
         VALUES ($1, $2, $3, $4, $5, 'pending')`,
        [name.trim(), email.trim(), phone?.trim() || null, subject?.trim() || 'General Application', message?.trim() || null]
      );
    } catch (dbErr) {
      console.warn('PostgreSQL job_applications insert failed:', dbErr);
    }

    // 2. Dispatch email notification to careers team
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && user && pass) {
      try {
        const port = parseInt(process.env.SMTP_PORT || '465', 10);
        const secure = process.env.SMTP_SECURE !== 'false';
        const careersEmail = 'careers@qodessystems.com';

        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        });

        await transporter.sendMail({
          from: `"Qodes Systems Careers" <${user}>`,
          to: careersEmail,
          replyTo: email,
          subject: `[Career Application] ${subject || 'New Application'} - ${name}`,
          text: `Applicant: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\n\nNotes/Cover:\n${message || 'N/A'}`,
        });
      } catch (mailErr) {
        console.error('SMTP career notification failed:', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application received successfully! Our talent acquisition team will review your profile.',
    });
  } catch (error) {
    console.error('Join Us API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
