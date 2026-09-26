import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const host = process.env.SMTP_HOST || "qodessystems.com";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const secure = process.env.SMTP_SECURE !== "false";
    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";
    const recipient = process.env.ENQUIRY_RECIPIENT_EMAIL || "info@qodessystems.com";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"Qodes Systems" <${user || "no-reply@qodessystems.com"}>`,
      to: recipient,
      subject: subject || "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send message" });
  }
}
