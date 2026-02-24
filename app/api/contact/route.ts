import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Ad Soyad, E-posta ve Mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    // Burada e-posta gönderimi (Nodemailer, Resend, vb.) veya Formspree webhook eklenebilir.
    // Şimdilik form verilerini kabul edip 200 dönüyoruz.
    // Örnek: await sendEmail({ to: process.env.CONTACT_EMAIL, subject: `İletişim: ${name}`, body: { name, email, phone, message } });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}
