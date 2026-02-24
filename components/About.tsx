'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2020 – 2024', title: 'Hukuk Bürolarında Çalışma', desc: 'Dava dosyası hazırlama, dilekçe yazımı, hukuki araştırma ve icra takip süreçleri' },
  { year: '2024', title: 'Hukuk Fakültesi Mezuniyeti', desc: 'Necmettin Erbakan Üniversitesi Hukuk Fakültesi' },
  { year: '2025', title: 'Baro Stajı ve Avukatlık Ruhsatı', desc: 'Baro stajı tamamlandı, avukatlık ruhsatı alındı' },
  { year: '2025 – Günümüz', title: 'Serbest Avukat', desc: 'Mesleki faaliyetler' },
];

const uzmanlikAlanlari = [
  'Ceza Hukuku',
  'Uyuşturucu ve Uyarıcı Madde Suçları',
  'Dolandırıcılık Suçları',
  'Ağır Ceza Davaları',
  'Boşanma ve Velayet Davaları',
  'Ticaret Hukuku',
  'İş Hukuku',
  'İdare Hukuku',
];

export function About() {
  return (
    <section id="hakkimda" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <motion.div
            className="w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg bg-primary/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/hakkimda.png"
              alt="Av. Ece Nalbant - Balıkesir avukat"
              width={600}    // intrinsic pixel width
              height={800}   // intrinsic pixel height
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>

          <div className="flex flex-col justify-center h-full px-10 py-8 max-w-[600px] mx-auto bg-white shadow-sm border border-gray-200">
            <motion.h2
              className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hakkımda
            </motion.h2>

            {/* BIOGRAPHY */}
            <motion.p
              className="text-primary-dark/90 text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hukuk eğitimimi Necmettin Erbakan Üniversitesi Hukuk Fakültesi’nde tamamladım. Öğrenim
              sürecimde, Konya’da faaliyet gösteren uluslararası bir şirkette staj yaparak kurumsal
              hukuk alanında deneyim edindim. Ardından Balıkesir’e dönerek zorunlu avukatlık stajımı
              burada tamamladım.
            </motion.p>
            <motion.p
              className="text-primary-dark/90 text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Mesleki pratiğim süresince özellikle örgütlü suçlar, uyuşturucu ticareti suçları, ağır
              ceza kapsamındaki suç tipleri ve nitelikli dolandırıcılık dosyalarında çalışma yürüttüm;
              soruşturma ve kovuşturma süreçlerinde aktif görev aldım.
            </motion.p>
            <motion.p
              className="text-primary-dark/90 text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ceza hukukundaki birikimimin yanı sıra; aile hukuku, iş hukuku, icra ve iflas hukuku,
              ticaret hukuku, tüketici hukuku, miras hukuku ve idare hukuku gibi temel hukuk alanlarında
              da avukatlık ve danışmanlık hizmeti sunmaktayım. Müvekkillerin hukuki ihtiyaçlarına çözüm
              odaklı, şeffaf ve profesyonel bir yaklaşım benimseyerek; dava süreçlerinin takibi,
              sözleşme hazırlanması, önleyici hukuk hizmetleri ve genel hukuki danışmanlık konularında
              kapsamlı destek sağlamaktayım.
            </motion.p>

            {/* EXPERTISE */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                Uzmanlık Alanları
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-primary-dark/90 text-sm">
                {uzmanlikAlanlari.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
