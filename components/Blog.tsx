'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { postsMeta } from '@/lib/blog';

export function Blog() {
  const featured = postsMeta.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
            Hukuki Kaynak Merkezi
          </h2>
          <p className="text-primary-dark/80 max-w-2xl mx-auto">
            Hukuki konularda güncel yazılar ve bilgilendirici içerikler.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${item.slug}`} className="block group">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-sm text-accent font-medium">{item.date}</span>
                <h3 className="font-serif text-xl font-semibold text-primary mt-1 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-primary-dark/70 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <span className="inline-block mt-3 text-accent font-medium text-sm group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="text-center mt-12 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-md border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Tüm yazılar
          </Link>
          <p className="text-primary-dark/70 text-sm">
            Balıkesir&apos;de hukuki destek:{' '}
            <Link href="/balikesir-ceza-avukati" className="text-accent hover:underline font-medium">Balıkesir ceza avukatı</Link>
            {' · '}
            <Link href="/balikesir-uyusturucu-avukati" className="text-accent hover:underline font-medium">uyuşturucu ve uyarıcı suçlar avukatı</Link>
            {' · '}
            <Link href="/balikesir-dolandiricilik-avukati" className="text-accent hover:underline font-medium">dolandırıcılık suçları avukatı</Link>
            {' · '}
            <Link href="/balikesir-bosanma-avukati" className="text-accent hover:underline font-medium">boşanma avukatı</Link>
            {' · '}
            <Link href="/balikesir-agir-ceza-avukati" className="text-accent hover:underline font-medium">ağır ceza avukatı</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
