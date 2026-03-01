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
  const isQuotedGovernmentPost = params.slug === 'hukumet-sistemleri-baskanlik-parlamenter';
  const isStyledLegalPost =
    params.slug === 'hukumet-sistemleri-baskanlik-parlamenter' ||
    params.slug === 'ispat-hukukuna-dair-genel-degerlendirmeler';
  const firstCitationNumbers = new Set<string>();

  const renderSuperscriptCitations = (text: string) => {
    const citationMarkerRegex =
      /([A-Za-zÇĞİÖŞÜçğıöşüÂâÎîÛû\)\]»”"'’])(\d{1,2})(?=[\.\,\;\:\s”"'’\)\]]|$)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    for (const match of text.matchAll(citationMarkerRegex)) {
      const fullMatch = match[0];
      const previousChar = match[1];
      const markerNumber = match[2];
      const start = match.index ?? 0;

      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start));
      }

      const citationRefId = !firstCitationNumbers.has(markerNumber)
        ? (() => {
            firstCitationNumbers.add(markerNumber);
            return `fnref-${markerNumber}`;
          })()
        : undefined;

      parts.push(previousChar);
      parts.push(
        <sup
          key={`${start}-${markerNumber}`}
          className="text-[10px] md:text-[11px] align-super text-accent/90 font-semibold"
        >
          <a
            id={citationRefId}
            href={`#fn-${markerNumber}`}
            className="hover:text-accent transition-colors duration-150"
            aria-label={`Dipnot ${markerNumber} bölümüne git`}
          >
            {markerNumber}
          </a>
        </sup>
      );

      lastIndex = start + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length ? parts : text;
  };

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

          <div
            className={`flex-1 min-w-0 mx-auto order-1 lg:order-2 ${
              isStyledLegalPost ? 'max-w-[760px]' : 'max-w-[800px]'
            }`}
          >
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
              className={`prose-article space-y-5 md:space-y-6 leading-[1.85] ${
                isStyledLegalPost
                  ? 'bg-gradient-to-b from-white/90 to-cream/60 border border-accent/15 rounded-xl p-5 md:p-7 shadow-sm'
                  : 'text-primary-dark/90'
              }`}
              style={{ maxWidth: isStyledLegalPost ? '760px' : '800px' }}
            >
              {content.blocks.map((block, i) => {
                const isGovernmentTOCLine =
                  isQuotedGovernmentPost && block.type === 'p' && block.text.includes('................................................................');
                const isGovernmentFootnoteLine =
                  isQuotedGovernmentPost &&
                  block.type === 'p' &&
                  /^\d+\s/.test(block.text.trim());
                const isGovernmentNumberedItem =
                  isQuotedGovernmentPost &&
                  block.type === 'p' &&
                  /^\d+\.\s/.test(block.text.trim());
                const footnoteMatch = isGovernmentFootnoteLine
                  ? block.text.trim().match(/^(\d+)\s/)
                  : null;
                const footnoteId = footnoteMatch ? `fn-${footnoteMatch[1]}` : undefined;
                const footnoteNumber = footnoteMatch?.[1];
                const footnoteBody =
                  isGovernmentFootnoteLine && footnoteNumber
                    ? block.text.trim().replace(/^\d+\s+/, '')
                    : '';

                if (block.type === 'h2') {
                  return (
                    <h2
                      key={i}
                      id={slugToId(block.text)}
                      className={`font-serif font-semibold mt-10 mb-4 scroll-mt-24 ${
                        isStyledLegalPost
                          ? 'text-2xl md:text-[1.75rem] text-primary tracking-wide uppercase border-b border-accent/20 pb-2 pt-2'
                          : 'text-xl text-primary'
                      }`}
                    >
                      {isQuotedGovernmentPost ? renderSuperscriptCitations(block.text) : block.text}
                    </h2>
                  );
                }
                if (block.type === 'h3') {
                  return (
                    <h3
                      key={i}
                      id={slugToId(block.text)}
                      className={`font-serif font-semibold mt-8 mb-3 scroll-mt-24 ${
                        isStyledLegalPost
                          ? 'text-base md:text-lg text-accent'
                          : 'text-lg text-accent'
                      }`}
                    >
                      {isQuotedGovernmentPost ? renderSuperscriptCitations(block.text) : block.text}
                    </h3>
                  );
                }
                return (
                  <p
                    key={i}
                    id={footnoteId}
                    className={`leading-[1.9] ${
                      isStyledLegalPost
                        ? `${
                            isGovernmentTOCLine
                              ? 'whitespace-pre-line font-medium text-primary/75 text-[13px] md:text-sm'
                              : isGovernmentFootnoteLine
                                ? 'whitespace-pre-line text-primary-dark/55 text-xs md:text-[13px] leading-[1.7] italic'
                                : isGovernmentNumberedItem
                                  ? 'text-primary-dark/90 text-[15px] md:text-base text-justify border-l-2 border-accent/20 pl-3'
                                  : 'text-primary-dark/90 text-[15px] md:text-base text-justify'
                          }`
                        : 'text-primary-dark/90'
                    }`}
                  >
                    {isGovernmentFootnoteLine && footnoteNumber ? (
                      <>
                        <a
                          href={`#fnref-${footnoteNumber}`}
                          className="text-accent/90 hover:text-accent font-medium transition-colors duration-150"
                          aria-label={`Metindeki ${footnoteNumber} numaralı atfa dön`}
                        >
                          {footnoteNumber}
                        </a>{' '}
                        {footnoteBody}
                      </>
                    ) : isQuotedGovernmentPost && !isGovernmentTOCLine ? (
                      renderSuperscriptCitations(block.text)
                    ) : (
                      block.text
                    )}
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
