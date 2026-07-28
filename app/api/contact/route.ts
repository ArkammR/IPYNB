import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();

    const { name, business, email, phone, industry, projectType, budget, message } = body;

    // Server-side validation
    if (!name?.trim()) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    if (!message?.trim()) return NextResponse.json({ error: 'Message is required.' }, { status: 400 });

    const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Colombo' });

    await resend.emails.send({
      from: 'IPYNB Solutions <info@ipynb.site>',
      to: [
        process.env.CONTACT_EMAIL || 'info@ipynb.site',
        ...(process.env.FOUNDER_EMAIL ? [process.env.FOUNDER_EMAIL] : []),
      ],
      replyTo: email,
      subject: `New Inquiry from ${name}${business ? ` - ${business}` : ''}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
          <div style="border-bottom: 3px solid #6366F1; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="color: #0D1117; font-size: 24px; margin: 0;">New Inquiry — IPYNB Solutions</h1>
            <p style="color: #4B5563; font-size: 14px; margin: 8px 0 0;">${timestamp} (Sri Lanka Time)</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['Full Name', name],
              ['Business Name', business || '—'],
              ['Email', email],
              ['Phone', phone || '—'],
              ['Industry', industry || '—'],
              ['Project Type', projectType || '—'],
              ['Estimated Budget', budget || '—'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 12px 16px; background: #F2F3FF; font-size: 13px; font-weight: 600; color: #4B5563; width: 40%; border-bottom: 1px solid #e2e8f0;">${label}</td>
                <td style="padding: 12px 16px; font-size: 14px; color: #0D1117; border-bottom: 1px solid #e2e8f0;">${value}</td>
              </tr>
            `).join('')}
          </table>

          <div style="margin-top: 32px; padding: 24px; background: #F2F3FF; border-left: 4px solid #6366F1; border-radius: 4px;">
            <p style="font-size: 13px; font-weight: 600; color: #4B5563; margin: 0 0 8px;">Message</p>
            <p style="font-size: 15px; color: #0D1117; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">This inquiry was submitted via ipynb.site</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the customer
    await resend.emails.send({
      from: 'IPYNB Solutions <info@ipynb.site>',
      to: email,
      subject: `We've received your inquiry, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

          <!-- Header -->
          <div style="background: #0D1117; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; letter-spacing: -0.5px;">
              IPYNB <span style="color: #6366F1;">Solutions</span>
            </h1>
          </div>

          <!-- Body -->
          <div style="padding: 40px 32px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #0D1117; font-size: 22px; margin: 0 0 16px;">
              Thanks for reaching out, ${name.split(' ')[0]}!
            </h2>
            <p style="color: #4B5563; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              We've received your inquiry and our team will review it shortly. You can expect to hear from us within <strong style="color: #0D1117;">24 hours</strong> during business hours.
            </p>
            <p style="color: #4B5563; font-size: 15px; line-height: 1.7; margin: 0 0 32px;">
              In the meantime, if you have any urgent questions, feel free to reach us directly on WhatsApp — we typically respond within minutes.
            </p>

            <!-- CTA Button -->
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94724218840'}?text=Hi%20IPYNB!%20I%20just%20submitted%20an%20inquiry%20and%20wanted%20to%20follow%20up."
                style="display: inline-block; background: #6366F1; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600;">
                Chat on WhatsApp
              </a>
            </div>

            <!-- Divider -->
            <div style="border-top: 1px solid #e2e8f0; padding-top: 32px;">
              <p style="color: #0D1117; font-size: 13px; font-weight: 600; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Us</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px; width: 24px;">📧</td>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">
                    <a href="mailto:info@ipynb.site" style="color: #6366F1; text-decoration: none;">info@ipynb.site</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">📞</td>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">
                    <a href="tel:+94724218840" style="color: #6366F1; text-decoration: none;">+94 72 421 8840</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">📍</td>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">Colombo, Sri Lanka</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">🕐</td>
                  <td style="padding: 6px 0; color: #4B5563; font-size: 14px;">Mon – Sat, 9:00 AM – 5:00 PM</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #F2F3FF; padding: 20px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              © 2026 IPYNB Solutions. Made with ❤️ for Sri Lankan Business.
            </p>
            <p style="color: #94a3b8; font-size: 12px; margin: 6px 0 0;">
              <a href="https://ipynb.site/privacy" style="color: #94a3b8;">Privacy Policy</a>
              &nbsp;·&nbsp;
              <a href="https://ipynb.site/terms" style="color: #94a3b8;">Terms of Service</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
