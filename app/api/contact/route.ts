import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO || 'kayalp2001@gmail.com';

    if (!RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY. Check your .env.local file.');
    }

    const resend = new Resend(RESEND_API_KEY);

    const body = await req.json();
    console.log('Parsed body:', body); // ✅ Debug log

    const { name, email, subject, message, botField } = body;

    if (botField) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const response = await resend.emails.send({
      from: 'Kayalvizhi Portfolio <onboarding@resend.dev>',
      to: TO,
      subject: subject ? `[Portfolio] ${subject}` : 'New message from your portfolio',
      html,
      replyTo: email,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
