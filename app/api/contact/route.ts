import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function sanitize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const message = sanitize(body?.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Ad Soyad, E-posta ve Mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    const smtpHost = getRequiredEnv('SMTP_HOST');
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = getRequiredEnv('SMTP_USER');
    const smtpPass = getRequiredEnv('SMTP_PASS');
    const contactToEmail = process.env.CONTACT_TO_EMAIL || 'av.ecenalbant@gmail.com';
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Yeni İletişim Formu Mesajı - ${name}`;
    const text = [
      'Web sitesinden yeni bir iletişim formu mesajı alındı.',
      '',
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      `Telefon: ${phone || '-'}`,
      '',
      'Mesaj:',
      message,
    ].join('\n');

    const html = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || '-'}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    await transporter.sendMail({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Missing environment variable:')) {
      return NextResponse.json(
        { error: 'İletişim servisi henüz yapılandırılmadı. Lütfen site yöneticisiyle iletişime geçin.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}
