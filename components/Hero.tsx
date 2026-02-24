'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Balıkesir avukat - Ana sayfa">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Balıkesir hukuk ofisi - Av. Ece Nalbant"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Av. Ece Nalbant Hukuk ve Danışmanlık Bürosu
        </motion.h1>
        <motion.p
          className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ceza hukuku, aile hukuku ve ticari uyuşmazlıklar başta olmak üzere çeşitli hukuk alanlarında müvekkillerine kapsamlı avukatlık ve hukuki danışmanlık hizmeti sunmaktadır. Her dosyada titiz analiz, stratejik yaklaşım ve şeffaf iletişim ilkesi benimsenerek, hak ve menfaatlerin etkin şekilde korunması hedeflenmektedir.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/#iletisim"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
          >
            Randevu Oluştur
          </a>
          <a
            href="https://wa.me/905533704571"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            Hukuki destek için iletişime geçin
          </a>
        </motion.div>
      </div>
    </section>
  );
}
