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
    slug: 'hukumet-sistemleri-baskanlik-parlamenter',
    title: 'HÜKÛMET SİSTEMLERİ (BAŞKANLIK-PARLÂMENTER)',
    excerpt:
      'Kuvvetler birliği ve kuvvetler ayrılığı sistemleri ekseninde; başkanlık, yarı-başkanlık ve parlâmenter sistemlerin temel özellikleri, etkileşim araçları ve değerlendirmesi.',
    image: 'https://images.unsplash.com/photo-1575320181282-9afab399332c?w=600&q=80',
    date: '25 Şubat 2026',
    category: 'ceza',
    keywords: [
      'hükûmet sistemleri',
      'başkanlık sistemi',
      'parlâmenter sistem',
      'kuvvetler ayrılığı',
      'kuvvetler birliği',
      'yarı başkanlık',
      'rasyonelleştirilmiş parlamenterizm',
    ],
  },
  {
    slug: 'ispat-hukukuna-dair-genel-degerlendirmeler',
    title: 'İSPAT HUKUKUNA DAİR GENEL DEĞERLENDİRMELER',
    excerpt:
      'İspat hakkı, ispatın konusu, ispatın gerekmediği haller, ispat yükleri ve ispat ölçüsü başlıklarında HMK çerçevesinde genel bir değerlendirme.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&q=80',
    date: '25 Şubat 2026',
    category: 'ceza',
    keywords: [
      'ispat hukuku',
      'ispat hakkı',
      'HMK 187',
      'ispat yükü',
      'delil ikame yükü',
      'karine',
      'ikrar',
      'tam ispat',
      'yaklaşık ispat',
    ],
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
