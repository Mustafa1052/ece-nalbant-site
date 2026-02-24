import Link from 'next/link';

export const metadata = {
  title: 'Balıkesir Ağır Ceza Avukatı | Ağır Ceza Davalarında Savunma | Av. Ece Nalbant',
  description:
    'Balıkesir ağır ceza avukatı. Ağır ceza mahkemesi süreçleri, tutuklama, iddianame ve duruşma savunması. Balıkesir Adliyesi nezdinde temsil.',
  keywords: 'Balıkesir ağır ceza avukatı, ağır ceza davası, Balıkesir Ağır Ceza Mahkemesi',
  openGraph: {
    title: 'Balıkesir Ağır Ceza Avukatı | Av. Ece Nalbant',
    description: 'Ağır ceza davalarında savunma ve hukuki temsil.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ecenalbat.av.tr' },
    { '@type': 'ListItem', position: 2, name: 'Balıkesir Ağır Ceza Avukatı', item: 'https://ecenalbat.av.tr/balikesir-agir-ceza-avukati' },
  ],
};

export default function BalikesirAgirCezaAvukatiPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-primary-dark/70 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-accent hover:underline">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span>Balıkesir Ağır Ceza Avukatı</span>
        </nav>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
          Balıkesir Ağır Ceza Avukatı – Ağır Ceza Davalarında Savunma
        </h1>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Balıkesir ağır ceza avukatı olarak, ağır ceza mahkemesinin görevine giren suçlara ilişkin soruşturma ve kovuşturma süreçlerinde savunma ve temsil hizmeti verilmektedir. Türk Ceza Kanunu&apos;nda ağır ceza mahkemesinin görevli olduğu suçlar (örneğin nitelikli dolandırıcılık, uyuşturucu ticareti, bazı yaralama ve ölüm neticeli suçlar) ciddi cezai yaptırımlar öngördüğünden, bu davalarda müdafi bulundurulması zorunludur. Balıkesir Ağır Ceza Mahkemesi nezdinde yürütülen davalarda deneyimli bir Balıkesir ceza avukatı ile çalışmak, savunma hakkının etkin kullanılması açısından önem taşır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Ağır Ceza Mahkemesinin Görevi
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Ceza Muhakemesi Kanunu ve 5235 sayılı Kanun uyarınca belirli suçlar ağır ceza mahkemesinin görevine girer. Bu suçlar arasında kasten öldürme (TCK 81 vd.), kasten yaralama (nitelikli haller), uyuşturucu veya uyarıcı madde ticareti (TCK 191), nitelikli dolandırıcılık (TCK 158), zimmet, rüşvet ve benzeri suçlar sayılabilir. Balıkesir ağır ceza avukatı, söz konusu dosyalarda iddianame incelemesi, delil değerlendirmesi ve savunma stratejisi oluşturulması konularında hukuki destek sunar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Duruşmalar Balıkesir Adliyesi bünyesindeki Ağır Ceza Mahkemesi&apos;nde gerçekleşir. Süreç iddianamenin kabulü ile başlar; sanık ve müdafi duruşmalara katılır, deliller tartışılır ve savunma yapılır. Balıkesir ilinde ağır ceza davası açılmış kişilerin, sürecin başından itibaren avukat desteği alması tavsiye edilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Tutuklama ve Koruma Tedbirleri
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Ağır ceza kapsamındaki suçlarda tutuklama talepleri sık gündeme gelir. CMK&apos;da düzenlenen kuvvetli suç şüphesi ve tutuklama nedenleri (kaçma şüphesi, delil karartma vb.) hakim tarafından değerlendirilir. Tutuklama kararına itiraz edilebilir; ayrıca tutukluluk süresinin belirli aşamalarda yeniden değerlendirilmesi ve tahliye talebi mümkündür. Balıkesir ağır ceza avukatı, tutuklama itirazı ve tahliye taleplerinde hukuki gerekçeleri sunarak müvekkilin temel haklarının korunmasına katkı sağlar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Adli kontrol, tutuklama alternatifi bir tedbirdir. Şüpheli veya sanığın belirli yükümlülüklere uyması koşuluyla serbest bırakılması sağlanabilir. Avukat, adli kontrol talebinde bulunabilir veya mevcut tutukluluk koşullarının değişmesi halinde tahliye talebi hazırlayabilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          İddianame ve Hazırlık
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Soruşturma tamamlandığında savcılık iddianame düzenler. İddianamede suçun niteliği, deliller ve talep edilen ceza yer alır. İddianame sanık ve müdafie tebliğ edilir; kabulü halinde dava ağır ceza mahkemesinde açılır. Balıkesir ağır ceza avukatı, iddianame incelemesi yaparak hukuki nitelendirme ve delil eksiklikleri konusunda savunma hazırlığını başlatır.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Duruşma öncesi dosya kapsamının detaylı incelenmesi, tanık ve bilirkişi listesinin değerlendirilmesi ve savunma dilekçesinin hazırlanması sürecin sağlıklı yürütülmesi için gereklidir. Erken aşamada Balıkesir ceza avukatı ile iletişime geçmek, bu hazırlığın eksiksiz yapılmasına olanak tanır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Duruşma Süreci ve Savunma
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Ağır ceza davalarında duruşmalar, mahkeme heyeti ve tarafların katılımı ile yürütülür. Sanık ifadesi, tanık dinlenmesi, delillerin okunması ve tartışılması, savunma konuşması ve nihai savunma aşamaları bulunur. Balıkesir Ağır Ceza Mahkemesi&apos;nde görülen davalarda müdafi, tüm bu aşamalarda müvekkilini temsil eder ve savunma hakkını kullanır.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Hükmün açıklanmasının geri bırakılması (HAGB), cezada indirim veya beraat talepleri somut delil durumuna ve hukuki nitelendirmeye göre değerlendirilir. Profesyonel savunma, bu sonuçlara ulaşmada kritik rol oynar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          İstinaf ve Temyiz
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ağır ceza mahkemesi kararlarına karşı istinaf yolu açıktır. Bölge adliye mahkemesi incelemesinden sonra temyiz yoluna başvurulabilir. Kararın bozulması veya onanması Yargıtay incelemesine bağlıdır. Balıkesir ağır ceza avukatı, istinaf ve temyiz aşamalarında gerekçeli itirazların hazırlanması ve sürelerin takibi konusunda müvekkiline destek verir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Balıkesir&apos;de Ağır Ceza Avukatı
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Balıkesir ilinde ağır ceza davası veya soruşturması devam eden kişiler, Balıkesir ağır ceza avukatı ile çalışarak sürecin her aşamasında hukuki destek alabilir. Balıkesir Adliyesi&apos;ne aşinalık, duruşma takvimi takibi ve yerel uygulamaların bilinmesi yerel avukatlık hizmetinin avantajlarındandır. Uyuşturucu suçları, dolandırıcılık ve diğer ağır ceza kapsamındaki dosyalarda <Link href="/balikesir-ceza-avukati" className="text-accent hover:underline">Balıkesir ceza avukatı</Link>, <Link href="/balikesir-uyusturucu-avukati" className="text-accent hover:underline">uyuşturucu avukatı</Link> ve <Link href="/balikesir-dolandiricilik-avukati" className="text-accent hover:underline">dolandırıcılık avukatı</Link> sayfalarından detaylı bilgi alabilirsiniz.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          İletişim formu veya telefon ile randevu alarak somut dosyanız hakkında ön değerlendirme talep edebilirsiniz.
        </p>

        <div className="mt-10 p-6 bg-white rounded-xl border border-primary/10">
          <h3 className="font-serif text-lg font-semibold text-primary mb-4">Ağır ceza davasında hukuki destek</h3>
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
