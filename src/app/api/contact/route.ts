import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 1. Persist directly into PostgreSQL so inquiries are never lost
    try {
      await query(
        `INSERT INTO enquiries (name, email, phone, subject, message, status)
         VALUES ($1, $2, $3, $4, $5, 'new')`,
        [name.trim(), email.trim(), phone?.trim() || null, subject?.trim() || 'General Inquiry', message.trim()]
      );
    } catch (dbErr) {
      console.warn('PostgreSQL record insert failed (database may be unconfigured):', dbErr);
    }

    // 2. Dispatch email notification if SMTP is configured
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && user && pass) {
      try {
        const port = parseInt(process.env.SMTP_PORT || '465', 10);
        const secure = process.env.SMTP_SECURE !== 'false';
        const recipient = process.env.ENQUIRY_RECIPIENT_EMAIL || 'info@qodessystems.com';

        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        });

        await transporter.sendMail({
          from: `"Qodes Systems Web" <${user}>`,
          to: recipient,
          replyTo: email,
          subject: subject ? `[Inquiry] ${subject}` : `New Contact Form Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
        });
      } catch (mailErr) {
        console.error('SMTP notification failed:', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received and our team will get back to you shortly.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
