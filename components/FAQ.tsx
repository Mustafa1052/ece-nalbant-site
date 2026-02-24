'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'İlk görüşme ücretli midir?',
    a: 'İlk görüşmede somut olay değerlendirilir ve hukuki yol haritası belirlenir. Ücretlendirme dosyanın niteliğine göre değişiklik gösterebilir.',
  },
  {
    q: 'Ceza davasında avukat tutmak zorunlu mudur?',
    a: 'Bazı ağır ceza kapsamındaki suçlarda müdafi zorunludur. Ancak zorunlu olmasa dahi, ceza yargılamasında profesyonel hukuki destek alınması hak kaybını önlemek açısından önemlidir.',
  },
  {
    q: "Balıkesir'de ceza avukatı nasıl seçilir?",
    a: "Balıkesir'de ceza avukatı seçerken; avukatın ceza hukuku ve özellikle dosyanızla ilgili alandaki (örneğin uyuşturucu suçları, dolandırıcılık) tecrübesi, Baro kaydı ve mesleki etik kurallara uyumu dikkate alınmalıdır. Soruşturma aşamasından itibaren temsil sunabilmesi ve Balıkesir Adliyesi süreçlerine hakim olması yerel davalarda avantaj sağlar. Ön görüşmede somut olayı değerlendirip size uygun strateji sunabilen bir avukat tercih edilmelidir.",
  },
  {
    q: 'Boşanma davası ne kadar sürer?',
    a: 'Anlaşmalı boşanma davaları genellikle tek celsede sonuçlanabilir. Çekişmeli davalarda süre, delil durumu ve mahkeme yoğunluğuna bağlı olarak değişir.',
  },
  {
    q: 'Nafaka nasıl belirlenir?',
    a: 'Mahkeme nafaka miktarını belirlerken tarafların ekonomik durumu, yaşam standardı ve kusur oranını dikkate alır.',
  },
  {
    q: 'Ticari sözleşme imzalamadan önce avukata danışmak gerekir mi?',
    a: 'Ticari sözleşmeler ciddi mali sorumluluklar doğurabilir. İmzalanmadan önce hukuki inceleme yapılması olası riskleri azaltır.',
  },
  {
    q: 'Ceza soruşturmasında ifade verirken nelere dikkat edilmelidir?',
    a: 'Kişinin susma hakkı vardır. İfade öncesinde müdafi ile görüşme hakkı bulunmaktadır. Usule aykırı alınan ifadeler hukuka aykırı sayılabilir.',
  },
  {
    q: 'Mal paylaşımı davası boşanma ile birlikte mi açılır?',
    a: 'Mal rejimi tasfiyesi genellikle boşanma kararının kesinleşmesinden sonra ayrı bir dava ile talep edilir.',
  },
  {
    q: 'Anlaşmalı boşanma için şartlar nelerdir?',
    a: 'Evliliğin en az 1 yıl sürmüş olması ve tarafların tüm hususlarda mutabakata varması gerekir.',
  },
  {
    q: 'Ceza davasında beraat mümkün müdür?',
    a: 'Delillerin yetersizliği veya suçun unsurlarının oluşmaması halinde beraat kararı verilebilir.',
  },
  {
    q: 'Hukuki danışmanlık süreci nasıl işler?',
    a: 'Dosya incelenir, hukuki risk analizi yapılır ve müvekkile yol haritası sunulur.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 md:py-28 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-primary-dark/80">
            Merak Ettiklerinizin Kısa ve Net Cevapları
          </p>
        </motion.div>
        <div className="space-y-2">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-primary/5 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-primary hover:bg-cream/50 transition-colors rounded-lg"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className={`text-accent shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-primary-dark/80 text-sm leading-relaxed border-t border-cream">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 p-6 md:p-8 bg-white rounded-xl border border-primary/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-dark/80 mb-4">
            Sorunuz burada yer almıyorsa bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a href="tel:+905533704571" className="flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
              📞 +90 553 370 45 71
            </a>
            <a href="mailto:av.ecenalbant@gmail.com" className="flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
              📩 av.ecenalbant@gmail.com
            </a>
            <Link
              href="#iletisim"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
