import Link from 'next/link';

export const metadata = {
  title: 'Balıkesir Boşanma Avukatı | Boşanma ve Velayet Davaları | Av. Ece Nalbant',
  description:
    'Balıkesir boşanma avukatı. Anlaşmalı ve çekişmeli boşanma, velayet, nafaka, mal paylaşımı davalarında hukuki danışmanlık. Balıkesir Aile Mahkemesi.',
  keywords: 'Balıkesir boşanma avukatı, Balıkesir velayet davası, anlaşmalı boşanma, çekişmeli boşanma',
  openGraph: {
    title: 'Balıkesir Boşanma Avukatı | Av. Ece Nalbant',
    description: 'Boşanma ve aile hukuku davalarında danışmanlık ve temsil.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ecenalbat.av.tr' },
    { '@type': 'ListItem', position: 2, name: 'Balıkesir Boşanma Avukatı', item: 'https://ecenalbat.av.tr/balikesir-bosanma-avukati' },
  ],
};

export default function BalikesirBosanmaAvukatiPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-primary-dark/70 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-accent hover:underline">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span>Balıkesir Boşanma Avukatı</span>
        </nav>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
          Balıkesir Boşanma Avukatı – Boşanma ve Velayet Davalarında Temsil
        </h1>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Balıkesir boşanma avukatı olarak Türk Medeni Kanunu kapsamındaki boşanma davaları, velayet, nafaka ve mal rejimi tasfiyesi konularında hukuki danışmanlık ve dava takibi hizmeti verilmektedir. Anlaşmalı ve çekişmeli boşanma süreçlerinde tarafların haklarının korunması, çocukların üstün yararının gözetilmesi ve mal paylaşımına ilişkin doğru strateji belirlenmesi profesyonel destek gerektirir. Balıkesir Aile Mahkemesi nezdinde yürütülen davalarda Balıkesir boşanma avukatı ile çalışmak, sürecin hukuka uygun ve müvekkil lehine yönetilmesine katkı sağlar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Anlaşmalı Boşanma
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          TMK uyarınca evlilik birliği en az bir yıl sürmüşse ve taraflar boşanmada, velayet, nafaka ve mal paylaşımı konularında anlaşmışlarsa anlaşmalı boşanma davası açılabilir. Protokol, tarafların mutabakatını yansıtır ve mahkemece onaylanması gerekir. Balıkesir boşanma avukatı, anlaşmalı boşanma protokolünün hazırlanması, velayet ve nafaka koşullarının hukuka uygun düzenlenmesi konularında danışmanlık sunar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Anlaşmalı boşanma davaları genellikle tek veya birkaç celsede sonuçlanır. Sürecin hızlı ve düzenli ilerlemesi için belgelerin eksiksiz hazırlanması ve protokolün mahkemece onanabilir nitelikte olması önemlidir. Balıkesir Aile Mahkemesi&apos;nde açılan anlaşmalı boşanma davalarında avukat desteği almak, olası eksikliklerin önceden giderilmesini sağlar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Çekişmeli Boşanma
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Taraflar boşanma veya boşanmanın sonuçları (velayet, nafaka, mal paylaşımı) konusunda anlaşamıyorsa çekişmeli boşanma davası açılır. Boşanma sebebi (şiddetli geçimsizlik, zina, hayata kast vb.) iddia edilir ve delillerle desteklenir. Balıkesir boşanma avukatı, çekişmeli boşanma sürecinde delil toplama, tanık listesi hazırlama ve duruşma stratejisi belirleme konularında müvekkiline yardımcı olur.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Çekişmeli davalarda süre, delil durumu ve mahkeme yoğunluğuna bağlı olarak uzayabilir. Velayet ve nafaka talepleri aynı davada veya ayrı davalarda ele alınabilir. Hukuki stratejinin baştan netleştirilmesi, sürecin verimli yönetilmesi açısından faydalıdır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Velayet ve Nafaka
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Boşanma kararı ile birlikte çocukların velayeti düzenlenir. Mahkeme, çocuğun üstün yararını gözeterek velayeti ebeveynlerden birine verir. Velayet almayan taraf iştirak nafakası öder. Ayrıca yoksulluk nafakası talepleri de boşanma davası kapsamında veya ayrı davada gündeme gelebilir. Balıkesir boşanma avukatı, velayet ve nafaka konularında hukuki değerlendirme yaparak müvekkilin taleplerini hukuka uygun şekilde mahkemeye sunar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Velayet değişikliği davaları, nafakanın artırılması veya indirilmesi talepleri boşanma sonrasında da açılabilir. Bu davalarda da Balıkesir Aile Mahkemesi görevli olup, avukat desteği alınması sürecin sağlıklı yürütülmesine katkı sağlar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Mal Rejimi Tasfiyesi
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Evlilik birliği sırasında edinilen mallar, mal rejimi hükümlerine göre paylaşılır. Yasal mal rejimi edinilmiş mallara katılma rejimidir. Boşanma kararının kesinleşmesinden sonra mal rejimi tasfiyesi davası açılabilir. Balıkesir boşanma avukatı, mal rejimi tasfiyesi sürecinde malvarlığının tespiti, katılma alacağı hesaplaması ve dava stratejisi konularında danışmanlık verir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Mal paylaşımı davaları teknik ve belge yoğun süreçlerdir. Tapu kayıtları, banka belgeleri ve diğer delillerin toplanması avukat desteği ile daha düzenli yürütülür.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Evlilik Birliğinin Korunması ve Arabuluculuk
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          TMK&apos;ya göre belirli boşanma davalarında önceden aile içi çözüm yollarının denenmesi amacıyla arabuluculuk zorunluluğu getirilebilir. Ayrıca evlilik birliğinin korunması amacıyla açılan davalar da Aile Mahkemesi&apos;nin görev alanındadır. Balıkesir boşanma avukatı, arabuluculuk süreçlerinde hukuki danışmanlık ve boşanma öncesi değerlendirme hizmeti de sunmaktadır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Balıkesir&apos;de Boşanma Davası
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Balıkesir ilinde boşanma davaları Balıkesir Aile Mahkemesi&apos;nde görülür. Balıkesir boşanma avukatı, yerel mahkemelere ve süreçlere aşinalık sayesinde duruşma takvimini takip eder ve müvekkilini temsil eder. Anlaşmalı veya çekişmeli boşanma, velayet ve nafaka konularında hukuki danışmanlık talep etmek için iletişim formu veya telefon ile randevu alabilirsiniz.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ceza hukuku ve diğer alanlarda da hizmet veren ofisimizde <Link href="/balikesir-ceza-avukati" className="text-accent hover:underline">Balıkesir ceza avukatı</Link>, <Link href="/balikesir-avukat" className="text-accent hover:underline">Balıkesir avukat</Link> sayfalarından genel bilgi alabilirsiniz.
        </p>

        <div className="mt-10 p-6 bg-white rounded-xl border border-primary/10">
          <h3 className="font-serif text-lg font-semibold text-primary mb-4">Boşanma davasında hukuki destek</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/#iletisim" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
              İletişim
            </Link>
            <a href="tel:+905533704571" className="text-primary font-medium hover:underline">+90 553 370 45 71</a>
            <Link href="/balikesir-avukat" className="text-accent font-medium hover:underline">Balıkesir avukat</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
