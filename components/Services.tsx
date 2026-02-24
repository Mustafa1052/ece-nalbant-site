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
    description:
      'Ceza soruşturması ve kovuşturması süreçlerinde; delil değerlendirmesi, koruma tedbirlerinin hukuka uygunluk denetimi, savunma stratejisinin oluşturulması ve şüpheli/sanık müdafiliği ile katılan vekilliği kapsamında profesyonel hukuki temsil sağlanmaktadır.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Aile Hukuku',
    description:
      'Boşanma, velayet, nafaka, mal rejimi uyuşmazlıkları ve koruyucu-önleyici tedbir süreçlerinde; kişisel hak ve menfaatlerin korunmasına yönelik kapsamlı hukuki danışmanlık ve dava takibi yürütülmektedir.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ticaret Hukuku',
    description:
      'Ticari sözleşmelerin hazırlanması, şirketler hukuku uyuşmazlıkları, ticari alacakların tahsili, haksız rekabet ve ticari davalara ilişkin süreçlerde analiz, danışmanlık ve temsil hizmeti sunulmaktadır.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V5a4 4 0 00-8 0v2M5 9h14l-1 10H6L5 9zm5 4v3m4-3v3" />
      </svg>
    ),
    title: 'İş Hukuku',
    description:
      'İşçi ve işveren uyuşmazlıklarında; kıdem ve ihbar tazminatları, işe iade davaları, iş kazası ve meslek hastalığı süreçlerinde hukuki inceleme, hak taleplerinin değerlendirilmesi ve dava takibi gerçekleştirilmektedir.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'İdare Hukuku',
    description:
      'İdari işlem ve eylemlere karşı açılan iptal ve tam yargı davaları, disiplin işlemleri, kamu kurumlarıyla yaşanan uyuşmazlıklar ve idari başvuru süreçlerinde teknik hukuki destek ve temsil sunulmaktadır.',
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4">
            Hizmet Alanları
          </h2>
          <p className="text-primary-dark/80 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
            Ceza Hukuku, Medeni Hukuk, Ticaret Hukuku, İş Hukuku ve İdare Hukuku alanlarında nitelikli
            hukuki danışmanlık, temsil ve uyuşmazlık çözümü hizmetleri sunulmaktadır. Her bir hizmet
            alanında, dosyaların maddi ve hukuki yönleri kapsamlı şekilde değerlendirilmekte; mevzuata
            uygun, teknik ve stratejik çözüm yöntemleri benimsenerek süreçlerin etkin ve profesyonel
            şekilde yürütülmesi hedeflenmektedir.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm border border-primary/5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-primary-dark/70 text-[13px] sm:text-sm leading-6 flex-1">
                {item.description}
              </p>
              <a
                href="/#iletisim"
                className="inline-block mt-3 sm:mt-4 text-accent font-medium text-sm hover:underline"
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
