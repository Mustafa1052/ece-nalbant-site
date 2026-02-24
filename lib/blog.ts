export const BLOG_CATEGORIES = [
  { id: 'all', label: 'Tümü' },
  { id: 'ceza', label: 'Ceza Hukuku' },
  { id: 'aile', label: 'Aile Hukuku' },
  { id: 'ticaret', label: 'Ticaret Hukuku' },
  { id: 'is', label: 'İş Hukuku' },
] as const;

export type CategoryId = (typeof BLOG_CATEGORIES)[number]['id'];

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: CategoryId;
  keywords?: string[];
}

export const postsMeta: BlogPostMeta[] = [
  {
    slug: 'ceza-hukukunda-savunma-hakki',
    title: 'Ceza Hukukunda Savunma Hakkı: Anayasal ve Uluslararası Boyutuyla Değerlendirme',
    excerpt: 'Ceza hukuku sisteminde savunma hakkı, adil yargılanma ilkesinin temel unsurunu oluşturmaktadır. Anayasa, AİHS ve CMK çerçevesinde değerlendirme.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    date: '15 Şubat 2025',
    category: 'ceza',
    keywords: ['ceza hukukunda savunma hakkı', 'ceza davasında savunma', 'ceza avukatı', 'müdafi hakkı', 'susma hakkı', 'adil yargılanma hakkı', 'CMK savunma hakkı'],
  },
  {
    slug: 'bosanma-davalarinda-dikkat-edilecekler',
    title: 'Boşanma Davalarında Dikkat Edilecek Hususlar: Hukuki Süreç ve Stratejik Değerlendirme',
    excerpt: 'Boşanma davaları, mal rejimi, velayet, nafaka ve tazminat gibi birçok hukuki sonucu beraberinde getiren karmaşık bir yargılama sürecidir.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    date: '10 Şubat 2025',
    category: 'aile',
    keywords: ['boşanma davası', 'çekişmeli boşanma', 'anlaşmalı boşanma', 'boşanma avukatı', 'velayet davası', 'nafaka hesaplama', 'mal paylaşımı davası'],
  },
  {
    slug: 'ticari-sozlesmelerde-riskler',
    title: 'Ticari Sözleşmelerde Riskler: Hukuki ve Stratejik Bir Değerlendirme',
    excerpt: 'Ticari sözleşmelerde eksiklikler, belirsizlikler veya hukuka aykırılıklar ciddi mali ve hukuki sonuçlara yol açabilmektedir.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    date: '5 Şubat 2025',
    category: 'ticaret',
    keywords: ['ticari sözleşmelerde riskler', 'sözleşme inceleme hizmeti', 'ticari sözleşme danışmanlığı', 'cezai şart riski', 'tahkim şartı riskleri'],
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return postsMeta.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: CategoryId, limit = 3): BlogPostMeta[] {
  const sameCategory = postsMeta.filter((p) => p.slug !== slug && p.category === category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const rest = postsMeta.filter((p) => p.slug !== slug && !sameCategory.includes(p));
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getReadingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / 200);
}
