'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_CATEGORIES, postsMeta, type CategoryId } from '@/lib/blog';

const categoryLabels: Record<CategoryId, string> = {
  all: 'Tümü',
  ceza: 'Ceza Hukuku',
  aile: 'Aile Hukuku',
  ticaret: 'Ticaret Hukuku',
  is: 'İş Hukuku',
};

export function BlogList() {
  const [category, setCategory] = useState<CategoryId>('all');

  const filtered = useMemo(() => {
    if (category === 'all') return postsMeta;
    return postsMeta.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-14">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
            Hukuki Kaynak Merkezi
          </h1>
          <p className="text-primary-dark/80 max-w-2xl text-lg leading-relaxed">
            Hukuki bilgilendirme ve güncel makaleler. Ceza, aile, ticaret ve iş hukuku alanında
            güncel yazılar ve rehber içerikler.
          </p>
        </section>

        <div className="flex flex-wrap gap-2 mb-10">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary-dark border border-primary/20 hover:border-primary/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="group">
              <article className="bg-white rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {categoryLabels[item.category]}
                  </span>
                  <span className="text-sm text-primary-dark/60 mt-1">{item.date}</span>
                  <h2 className="font-serif text-xl font-semibold text-primary mt-2 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-primary-dark/70 text-sm leading-relaxed line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center mt-4 text-accent font-medium text-sm group-hover:underline">
                    Devamını Oku →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <section className="mt-14 p-6 bg-white rounded-xl border border-primary/10 text-center">
          <p className="text-primary-dark/80 text-sm">
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
            {' · '}
            <Link href="/balikesir-avukat" className="text-accent hover:underline font-medium">Balıkesir avukat</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
