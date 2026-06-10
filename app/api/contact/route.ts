import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Ketaki Menon Website" <${process.env.GMAIL_USER}>`,
      to: 'ketaki10nk@gmail.com',
      replyTo: email,
      subject: `[Website Enquiry] ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3D1010;">
          <div style="background: #6B1A1A; padding: 24px 32px;">
            <h2 style="color: #E8C97A; margin: 0; font-size: 22px; letter-spacing: 2px;">New Website Enquiry</h2>
          </div>
          <div style="padding: 32px; background: #FAF6EE; border: 1px solid #C9A84C33;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #9B7070; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; width: 120px;">Name</td>
                <td style="padding: 8px 0; font-size: 15px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9B7070; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #6B1A1A;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9B7070; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Subject</td>
                <td style="padding: 8px 0; font-size: 15px;">${subject || '—'}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #C9A84C44; margin: 20px 0;" />
            <p style="color: #9B7070; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px;">Message</p>
            <p style="font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="padding: 16px 32px; background: #F4E8E8; text-align: center;">
            <p style="color: #9B7070; font-size: 11px; margin: 0;">Sent via ketakimenon.com contact form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
