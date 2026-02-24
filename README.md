# Av. Ece Nalbant — Hukuk Danışmanlığı Web Sitesi

Modern, premium ve profesyonel avukat sitesi. Next.js 14, React, TailwindCSS, Framer Motion ve Swiper ile geliştirilmiştir.

## Özellikler

- **Next.js 14** — App Router, SSR, hızlı performans
- **TailwindCSS** — Premium renk paleti (#0F3D2E, #C6A75E, #F5F3EE)
- **Framer Motion** — Akıcı animasyonlar
- **Swiper** — Müvekkil yorumları slider
- **SEO** — Meta etiketleri, Schema.org (Attorney, LegalService)
- **Responsive** — Mobil, tablet, masaüstü
- **Sticky header** — Kaydırmada sabit menü
- **İletişim** — Form, WhatsApp CTA, Google Maps alanı
- **Blog** — Örnek makaleler, SEO dostu URL’ler
- **404** — Özelleştirilmiş hata sayfası

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açın.

## Yapılandırma

- **Telefon / WhatsApp:** `components/Header.tsx`, `components/Footer.tsx`, `components/Contact.tsx` içinde `905XXXXXXXXX` ve `+90 5XX XXX XX XX` değerlerini gerçek numara ile değiştirin.
- **E-posta:** `info@ecenalbat.com` → kendi e-posta adresiniz.
- **Google Maps:** `components/Contact.tsx` içindeki `iframe` `src` linkini kendi ofis konumunuzun embed URL’i ile değiştirin.
- **Domain:** `app/layout.tsx` içindeki `jsonLd.url` ve `metadata` alanlarında `ecenalbat.com` yerine kendi domain’inizi yazın (örn. `ecenalbant.av.tr`).

## Sayfa Yapısı

| Bölüm      | Açıklama                          |
|-----------|------------------------------------|
| Hero      | Ana başlık, CTA, profesyonel görsel |
| Hakkımda  | Biyografi, değerler, kariyer özeti  |
| Hizmetler | Ceza, medeni, ticaret, idare hukuku |
| Yorumlar  | Swiper slider ile müvekkil yorumları |
| Blog      | Makale listesi ve detay sayfaları   |
| S.S.S.    | Accordion sıkça sorulan sorular     |
| İletişim  | Form, tel/mail/WhatsApp, harita     |

## Build & Deploy

```bash
npm run build
npm start
```

### Vercel deploy

- **Build komutu:** `next build`
- **Output:** Next.js varsayılan (`.next` + standalone değil)
- **Environment variables:** Şu an zorunlu değişken yok. İleride e-posta (ör. Resend) veya form webhook için `CONTACT_EMAIL` veya `FORMSPREE_ID` eklenebilir.
- **.gitignore:** `.env*`, `node_modules`, `.next` zaten dahil.

Lighthouse skorları (performans, erişilebilirlik, SEO) hedeflenebilir. Görseller lazy load ve `next/image` ile optimize edilmiştir.

## Lisans

Proje avukat Ece Nalbant için özel olarak hazırlanmıştır.
