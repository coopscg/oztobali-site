import type { VercelRequest, VercelResponse } from '@vercel/node';

const NOTIFY_EMAIL = 'oztobali1@gmail.com';
const FROM_EMAIL = 'OztoBali <onboarding@resend.dev>';

const INTEREST_LINKS: Record<string, { label: string; url: string }> = {
  'Visas & residency': { label: 'Visas & Residency guide', url: 'https://oztobali.com/visas-residency' },
  'Renting in Bali': { label: 'Renting in Bali guide', url: 'https://oztobali.com/property/renting' },
  'Buying property in Bali': { label: 'Buying in Bali guide', url: 'https://oztobali.com/property/buying' },
  'Tax & exiting Australia': { label: 'Australian Tax & Exit guide', url: 'https://oztobali.com/taxation/australia' },
  'Planning a holiday': { label: 'Holiday guides', url: 'https://oztobali.com/holidays' },
};

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server not configured' });
    return;
  }

  const { name, email, interest, timeframe, message } = req.body ?? {};

  if (!name || !email || typeof name !== 'string' || typeof email !== 'string') {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  const safeName = escapeHtml(name);
  const safeInterest = escapeHtml(interest || 'Not specified');
  const safeTimeframe = escapeHtml(timeframe || 'Not specified');
  const safeMessage = escapeHtml(message || '(no message)').replace(/\n/g, '<br />');

  try {
    // 1. Notify the OztoBali inbox with the full enquiry
    await sendEmail(apiKey, {
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      reply_to: email,
      subject: `New OztoBali enquiry: ${safeInterest} (${name})`,
      html: `
        <h2>New enquiry from OztoBali</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Interest:</strong> ${safeInterest}</p>
        <p><strong>Timeframe:</strong> ${safeTimeframe}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    // 2. Auto-reply to the person who submitted, no manual reply needed
    const relevantLink = INTEREST_LINKS[interest as string];
    const linkHtml = relevantLink
      ? `<p>While you wait, our <a href="${relevantLink.url}">${relevantLink.label}</a> covers most of what people in your situation ask first.</p>`
      : `<p>In the meantime, our <a href="https://oztobali.com">full set of guides</a> covers visas, tax, property and holidays.</p>`;

    await sendEmail(apiKey, {
      from: FROM_EMAIL,
      to: [email],
      subject: 'Got your enquiry, OztoBali',
      html: `
        <p>Hi ${safeName},</p>
        <p>Thanks for reaching out to OztoBali. We've received your enquiry about "${safeInterest}" and someone will review it and get back to you if there's a good next step for your situation.</p>
        ${linkHtml}
        <p>If anything's urgent, just reply directly to this email.</p>
        <p>Cheers,<br />OztoBali</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form email error:', err);
    res.status(502).json({ error: 'Could not send email' });
  }
}
