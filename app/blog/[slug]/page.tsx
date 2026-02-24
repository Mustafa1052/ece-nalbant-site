import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getPostBySlug,
  getRelatedPosts,
  getReadingTimeMinutes,
  postsMeta,
} from '@/lib/blog';
import {
  getPostContent,
  getTOCFromBlocks,
  getFullTextFromBlocks,
  slugToId,
} from '@/lib/blog-content';
import { BlogTOC } from '@/components/BlogTOC';
import { BlogShare } from '@/components/BlogShare';

const siteUrl = 'https://ecenalbat.av.tr';

export async function generateStaticParams() {
  return postsMeta.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Yazı bulunamadı' };

  const description = post.excerpt.slice(0, 150) + (post.excerpt.length > 150 ? '...' : '');
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Av. Ece Nalbant`,
    description,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: `${post.title} | Av. Ece Nalbant`,
      description,
      url,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Av. Ece Nalbant`,
      description,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const content = getPostContent(params.slug);
  if (!content) notFound();

  const toc = getTOCFromBlocks(content.blocks);
  const fullText = getFullTextFromBlocks(content.blocks);
  const readingMinutes = getReadingTimeMinutes(fullText);
  const related = getRelatedPosts(params.slug, post.category, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Av. Ece Nalbant' },
    publisher: { '@type': 'LegalService', name: 'Av. Ece Nalbant Hukuk ve Danışmanlık' },
  };

  return (
    <article className="min-h-screen bg-cream pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="lg:w-64 shrink-0 order-2 lg:order-1">
            <BlogTOC items={toc} />
          </div>

          <div className="flex-1 min-w-0 max-w-[800px] mx-auto order-1 lg:order-2">
            <Link
              href="/blog"
              className="text-accent hover:underline text-sm font-medium mb-6 inline-block"
            >
              ← Blog
            </Link>

            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <p className="text-sm text-primary-dark/70 mb-2">
              {readingMinutes} dk okuma • {post.date}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-primary-dark/80 text-lg mb-6 leading-relaxed">{post.excerpt}</p>

            <div className="mb-8">
              <BlogShare title={post.title} url={`${siteUrl}/blog/${post.slug}`} />
            </div>

            <div
              className="prose-article space-y-6 text-primary-dark/90 leading-[1.8]"
              style={{ maxWidth: '800px' }}
            >
              {content.blocks.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2
                      key={i}
                      id={slugToId(block.text)}
                      className="font-serif text-xl font-semibold text-primary mt-10 mb-4 scroll-mt-24"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'h3') {
                  return (
                    <h3
                      key={i}
                      id={slugToId(block.text)}
                      className="font-serif text-lg font-semibold text-accent mt-8 mb-3 scroll-mt-24"
                    >
                      {block.text}
                    </h3>
                  );
                }
                return (
                  <p key={i} className="text-primary-dark/90 leading-[1.8]">
                    {block.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-primary/10">
              <p className="text-sm text-primary-dark/70 italic mb-4">
                Bu makale yalnızca bilgilendirme amaçlıdır. Somut olaylar farklılık gösterebilir.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
                >
                  İletişime Geç
                </Link>
                <a
                  href="tel:+905533704571"
                  className="text-primary font-medium hover:underline"
                >
                  📞 +90 553 370 45 71
                </a>
              </div>
              <p className="text-sm text-primary-dark/70 pt-4 border-t border-primary/10">
                Balıkesir&apos;de hukuki destek:{' '}
                <Link href="/balikesir-ceza-avukati" className="text-accent hover:underline font-medium">Balıkesir ceza avukatı</Link>
                {' · '}
                <Link href="/balikesir-uyusturucu-avukati" className="text-accent hover:underline font-medium">uyuşturucu avukatı</Link>
                {' · '}
                <Link href="/balikesir-dolandiricilik-avukati" className="text-accent hover:underline font-medium">dolandırıcılık avukatı</Link>
                {' · '}
                <Link href="/balikesir-bosanma-avukati" className="text-accent hover:underline font-medium">boşanma avukatı</Link>
                {' · '}
                <Link href="/balikesir-agir-ceza-avukati" className="text-accent hover:underline font-medium">ağır ceza avukatı</Link>
              </p>
            </div>

            {related.length > 0 && (
              <section className="mt-14">
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
                  İlgili Yazılar
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="block p-4 bg-white rounded-lg border border-primary/5 hover:border-accent/30 hover:shadow-md transition-all"
                    >
                      <h3 className="font-serif font-semibold text-primary line-clamp-2 mb-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-primary-dark/70 line-clamp-2">{r.excerpt}</p>
                      <span className="text-accent text-sm font-medium mt-2 inline-block">
                        Devamını Oku →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
