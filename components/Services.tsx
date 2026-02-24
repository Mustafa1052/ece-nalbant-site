'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında savunma ve şikayet süreçlerinde profesyonel hukuki destek.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Medeni Hukuk',
    description: 'Boşanma, velayet, miras ve taşınmaz uyuşmazlıklarında danışmanlık.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ticaret Hukuku',
    description: 'Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklarda hukuki destek.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'İdare Hukuku',
    description: 'İdari işlemlere karşı itiraz ve idari davalarda temsil.',
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
            Hizmet Alanları
          </h2>
          <p className="text-primary-dark/80 max-w-2xl mx-auto">
            Balıkesir ceza avukatı hizmeti dahil; ceza, medeni, ticaret ve idare hukuku alanlarında profesyonel danışmanlık ve dava takibi.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary/5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-primary-dark/70 text-sm leading-relaxed">
                {item.description}
              </p>
              <a
                href="/#iletisim"
                className="inline-block mt-4 text-accent font-medium text-sm hover:underline"
              >
                Bilgi al →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
