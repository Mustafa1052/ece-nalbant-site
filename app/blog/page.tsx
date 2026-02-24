import { BlogList } from '@/components/BlogList';

export const metadata = {
  title: 'Hukuki Kaynak Merkezi | Av. Ece Nalbant',
  description: 'Hukuki bilgilendirme ve güncel makaleler. Ceza, aile, ticaret ve iş hukuku alanında güncel yazılar.',
};

export default function BlogPage() {
  return <BlogList />;
}
