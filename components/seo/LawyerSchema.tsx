export function LawyerSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Avukat Ece Nalbant',
    url: 'https://www.ecenalbant.av.tr',
    image: 'https://www.ecenalbant.av.tr/og-image.jpg',
    logo: 'https://www.ecenalbant.av.tr/og-image.jpg',
    description:
      'Balıkesir merkezli Avukat Ece Nalbant; ceza hukuku, boşanma hukuku, ağır ceza davaları ve hukuki danışmanlık hizmetleri sunmaktadır.',
    areaServed: 'Balıkesir, Türkiye',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Balıkesir',
      addressLocality: 'Balıkesir',
      addressCountry: 'TR',
    },
    telephone: '+90 553 370 45 71',
    email: 'av.ecenalbant@gmail.com',
    sameAs: ['https://www.linkedin.com/', 'https://www.instagram.com/ecenalbant_/'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
