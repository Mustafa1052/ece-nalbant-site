import Link from 'next/link';

export const metadata = {
  title: 'Balıkesir Dolandırıcılık Avukatı | TCK 157, 158 Savunma | Av. Ece Nalbant',
  description:
    'Balıkesir dolandırıcılık avukatı. Dolandırıcılık (TCK 157, 158), bilişim ve banka dolandırıcılığı, ağır ceza sürecinde savunma.',
  keywords: 'Balıkesir dolandırıcılık avukatı, TCK 157, TCK 158, bilişim dolandırıcılık, banka dolandırıcılığı',
  openGraph: {
    title: 'Balıkesir Dolandırıcılık Avukatı | Av. Ece Nalbant',
    description: 'Dolandırıcılık suçlarında hukuki savunma ve temsil.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ecenalbat.av.tr' },
    { '@type': 'ListItem', position: 2, name: 'Balıkesir Dolandırıcılık Avukatı', item: 'https://ecenalbat.av.tr/balikesir-dolandiricilik-avukati' },
  ],
};

export default function BalikesirDolandiricilikAvukatiPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-primary-dark/70 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-accent hover:underline">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span>Balıkesir Dolandırıcılık Avukatı</span>
        </nav>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
          Balıkesir Dolandırıcılık Avukatı – Dolandırıcılık Suçlarında Savunma
        </h1>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Balıkesir dolandırıcılık avukatı olarak Türk Ceza Kanunu&apos;nda düzenlenen dolandırıcılık suçları (TCK 157, 158) ve bilişim yoluyla dolandırıcılık, banka dolandırıcılığı ile nitelikli dolandırıcılık dosyalarında savunma ve temsil hizmeti verilmektedir. Balıkesir Adliyesi ve Ağır Ceza Mahkemesi nezdinde yürütülen dolandırıcılık davalarında delil analizi, hukuki nitelendirme ve savunma stratejisi oluşturulmaktadır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          TCK 157 – Dolandırıcılık
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Türk Ceza Kanunu&apos;nun 157. maddesi, bir malvarlığı transferi veya borç altına sokulma ile sonuçlanacak şekilde, kişiyi yanıltıcı davranışlarla aldatıp bu suretle kendisine veya başkasına yarar sağlayan kişiyi cezalandırır. Dolandırıcılık suçunun oluşması için aldatma, yanıltma ve malvarlığında zarar unsurlarının bir arada bulunması gerekir. Balıkesir dolandırıcılık avukatı, somut olayda bu unsurların varlığının irdelenmesi ve savunma stratejisinin buna göre belirlenmesi konusunda hukuki destek sunar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ticari uyuşmazlıklarla dolandırıcılık iddialarının karıştığı dosyalarda, hukuki nitelendirme büyük önem taşır. Borç ödenmemesi tek başına dolandırıcılık oluşturmaz; aldatıcı davranış ve kastın varlığı ispat edilmelidir. Savunmada bu ayrımın vurgulanması ve delillerin değerlendirilmesi yapılır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          TCK 158 – Nitelikli Dolandırıcılık
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          TCK 158. madde, belirli nitelikli hallerde işlenen dolandırıcılığı daha ağır ceza ile cezalandırır. Örneğin dini inanç ve duyguların istismar edilmesi, kişinin içinde bulunduğu tehlikeli durumun istismarı, mesleki bilgi veya sıfatın kötüye kullanılması veya bilişim sistemlerinin kullanılması nitelikli haller arasındadır. Balıkesir dolandırıcılık avukatı, nitelikli dolandırıcılık iddiasıyla yürütülen davalarda bu nitelikli unsurların somut olayda gerçekleşip gerçekleşmediğinin tartışılması ve savunmanın buna göre kurgulanması konusunda müvekkiline yardımcı olur.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Nitelikli dolandırıcılık ağır ceza kapsamında olduğundan, müdafi zorunludur. Duruşmalar Balıkesir Ağır Ceza Mahkemesi&apos;nde görülür ve savunma stratejisi delil durumu ile nitelikli unsurların ispatına göre şekillenir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Bilişim Yoluyla Dolandırıcılık
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Bilişim sistemleri kullanılarak işlenen dolandırıcılık suçları, TCK 158 kapsamında nitelikli dolandırıcılık olarak cezalandırılır. İnternet, e-posta, sahte web siteleri veya elektronik ödeme sistemleri üzerinden gerçekleştirilen aldatıcı işlemler bu kapsamdadır. Balıkesir dolandırıcılık avukatı, bilişim yoluyla dolandırıcılık dosyalarında delillerin toplanma usulü, dijital delillerin geçerliliği ve savunma argümanlarının oluşturulması konularında hukuki danışmanlık verir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Bilişim suçlarında delillerin korunması ve usule uygun inceleme büyük önem taşır. Savunmada delil toplama yönteminin hukuka uygunluğu, IP ve log kayıtlarının değerlendirilmesi ve kimlik tespiti konuları irdelenir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Banka Dolandırıcılığı
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Banka veya kredi kartlarının kötüye kullanılması, sahte çek veya senet kullanımı, kredi başvurularında yanıltıcı bilgi verilmesi gibi haller banka ve finans odaklı dolandırıcılık iddialarını oluşturur. Bu dosyalar sıklıkla ağır ceza kapsamında görülür ve çok sayıda mağdur ile yüksek tutarlar söz konusu olabilir. Balıkesir dolandırıcılık avukatı, banka dolandırıcılığı soruşturma ve davalarında savunma hazırlığı, delil incelemesi ve duruşma stratejisi konularında temsil sağlar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ticari ilişkiden doğan borçlarla dolandırıcılık iddiasının ayrımı, bu tür dosyalarda sık gündeme gelir. Savunmada ticari uyuşmazlık niteliğinin vurgulanması ve ceza hukuku yerine medeni/ticari hukuk yollarının uygunluğu tartışılabilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Ağır Ceza Süreci
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Nitelikli dolandırıcılık ve büyük tutarlı dolandırıcılık dosyaları Ağır Ceza Mahkemesi&apos;nin görevine girer. Bu davalarda müdafi bulundurulması zorunludur. Soruşturma aşamasında savcılık iddianamesi hazırlar; iddianame kabul edilirse kovuşturma aşaması başlar. Balıkesir Ağır Ceza Mahkemesi&apos;nde görülen dolandırıcılık davalarında duruşma takibi, delillerin tartışılması ve savunma dilekçelerinin sunulması avukat tarafından yürütülür.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Tutuklama, adli kontrol ve tahliye talepleri de ağır ceza sürecinde gündeme gelir. Balıkesir dolandırıcılık avukatı, bu süreçlerde müvekkilin haklarının korunması ve savunma hakkının etkin kullanılması için hukuki destek sunar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Balıkesir&apos;de Dolandırıcılık Davaları
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Balıkesir ilinde dolandırıcılık suçlarına ilişkin soruşturmalar Cumhuriyet Başsavcılığı bünyesinde, kovuşturma ise Balıkesir Ağır Ceza Mahkemesi veya Asliye Ceza Mahkemesi (basit dolandırıcılık) nezdinde yürütülür. Yerel mahkemelere ve süreçlere hakim bir Balıkesir dolandırıcılık avukatı ile çalışmak, duruşma takvimi ve dosya takibi açısından avantaj sağlar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Dolandırıcılık iddiasıyla soruşturma veya dava sürecinde olan kişilerin, erken aşamada hukuki destek alması savunma stratejisinin belirlenmesi ve delillerin değerlendirilmesi açısından önemlidir. İletişim formu veya telefon ile randevu alarak Balıkesir dolandırıcılık avukatı ile görüşebilirsiniz.
        </p>

        <div className="mt-10 p-6 bg-white rounded-xl border border-primary/10">
          <h3 className="font-serif text-lg font-semibold text-primary mb-4">Dolandırıcılık davasında hukuki destek</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/#iletisim" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
              İletişim
            </Link>
            <a href="tel:+905533704571" className="text-primary font-medium hover:underline">+90 553 370 45 71</a>
            <Link href="/balikesir-ceza-avukati" className="text-accent font-medium hover:underline">Balıkesir ceza avukatı</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
