import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { LawyerSchema } from '@/components/seo/LawyerSchema';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://www.ecenalbant.av.tr';

export const metadata: Metadata = {
  title: 'Av. Ece Nalbant | Hukuk ve Danışmanlık',
  description:
    'Balıkesir merkezli Av. Ece Nalbant; ceza hukuku, boşanma davaları ve hukuki danışmanlık alanlarında hizmet sunmaktadır.',
  metadataBase: new URL(siteUrl),
  keywords:
    'Balıkesir avukat, Balıkesir ceza avukatı, Balıkesir boşanma avukatı, Balıkesir dolandırıcılık avukatı, Balıkesir uyuşturucu avukatı, Balıkesir ağır ceza avukatı, Balıkesir hukuk danışmanlık, avukat Ece Nalbant',
  openGraph: {
    title: 'Av. Ece Nalbant | Hukuk ve Danışmanlık',
    description:
      'Balıkesir merkezli Av. Ece Nalbant; ceza hukuku, boşanma davaları ve hukuki danışmanlık alanlarında hizmet sunmaktadır.',
    url: siteUrl,
    siteName: 'Avukat Ece Nalbant',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Avukat Ece Nalbant | Balıkesir Avukat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avukat Ece Nalbant | Balıkesir Avukat',
    description:
      'Balıkesir merkezli Avukat Ece Nalbant; ceza hukuku, boşanma davaları ve hukuki danışmanlık hizmetleri sunmaktadır.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: 'index, follow',
  alternates: { canonical: siteUrl },
};

const jsonLdAttorney = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Av. Ece Nalbant',
  description: 'Balıkesir avukat; ceza hukuku, boşanma davaları, dolandırıcılık ve uyuşturucu suçları alanında hukuki danışmanlık.',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  jobTitle: 'Avukat',
  worksFor: {
    '@type': 'LegalService',
    name: 'Avukat Ece Nalbant Hukuk ve Danışmanlık',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Balıkesir',
    addressRegion: 'TR-10',
    addressCountry: 'TR',
  },
  areaServed: 'Balıkesir',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.6174149,
    longitude: 27.8891624,
  },
  email: 'av.ecenalbant@gmail.com',
  telephone: '+905533704571',
  '@id': `${siteUrl}/#attorney`,
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Avukat Ece Nalbant Hukuk ve Danışmanlık',
  description: 'Balıkesir avukat ve ceza avukatı hizmeti.',
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Balıkesir',
    addressRegion: 'TR-10',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.6174149,
    longitude: 27.8891624,
  },
  telephone: '+905533704571',
  areaServed: { '@type': 'City', name: 'Balıkesir' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAttorney) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LawyerSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Analytics />
        <FloatingWhatsApp />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
