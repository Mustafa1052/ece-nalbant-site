import Link from 'next/link';

export const metadata = {
  title: 'Balıkesir Ceza Avukatı | Ceza Davalarında Savunma | Av. Ece Nalbant',
  description:
    'Balıkesir ceza avukatı. Ceza hukuku, ağır ceza davaları, soruşturma ve kovuşturma süreçlerinde savunma. Balıkesir Adliyesi nezdinde temsil.',
  keywords: 'Balıkesir ceza avukatı, Balıkesir ağır ceza avukatı, ceza davası savunma, Balıkesir ceza hukuku',
  openGraph: {
    title: 'Balıkesir Ceza Avukatı | Av. Ece Nalbant',
    description: 'Balıkesir ilinde ceza davalarında savunma ve hukuki danışmanlık.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ecenalbat.av.tr' },
    { '@type': 'ListItem', position: 2, name: 'Balıkesir Ceza Avukatı', item: 'https://ecenalbat.av.tr/balikesir-ceza-avukati' },
  ],
};

export default function BalikesirCezaAvukatiPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-primary-dark/70 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-accent hover:underline">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span>Balıkesir Ceza Avukatı</span>
        </nav>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
          Balıkesir Ceza Avukatı – Ceza Davalarında Savunma ve Temsil
        </h1>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Balıkesir ceza avukatı olarak ceza hukuku kapsamındaki soruşturma ve kovuşturma süreçlerinde savunma ve temsil hizmeti sunulmaktadır. Şüpheli veya sanık konumundaki kişilerin anayasal savunma hakkının etkin kullanılması, ceza yargılamasının adil ve hukuka uygun yürütülmesi açısından büyük önem taşımaktadır. Balıkesir Adliyesi ve Balıkesir Cumhuriyet Başsavcılığı nezdinde yürütülen ceza dosyalarında erken aşamada hukuki destek alınması, hak kayıplarının önlenmesine katkı sağlar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Ceza Hukukunda Savunma Hakkı
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Türkiye Cumhuriyeti Anayasası&apos;nın 36. maddesi uyarınca herkes, yargı mercileri önünde savunma hakkına sahiptir. Ceza Muhakemesi Kanunu (CMK) ise soruşturma ve kovuşturma aşamalarında müdafi yardımından yararlanma hakkını düzenlemiştir. Özellikle ağır ceza mahkemesinin görevine giren suçlarda müdafi bulundurulması zorunludur. Balıkesir ceza avukatı ile soruşturma başlangıcından itibaren iletişime geçmek, ifade ve gözaltı süreçlerinde hukuki rehberlik almanızı sağlar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ceza davalarında delillerin toplanması, usul kurallarına uygunluk denetimi ve savunma stratejisinin belirlenmesi profesyonel destek gerektirir. Balıkesir ilinde ceza davası açılmış veya soruşturma devam eden kişiler, Balıkesir ağır ceza avukatı desteği ile sürecin her aşamasında temsil edilebilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Soruşturma Aşamasında Yapılacaklar
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Ceza soruşturması, savcılık veya kolluk tarafından suç şüphesi üzerine başlatılır. Şüpheli olarak ifadeye çağrılmanız veya gözaltına alınmanız halinde susma hakkınız bulunmaktadır. İfade öncesinde müdafi ile görüşme hakkı CMK ile güvence altına alınmıştır. Balıkesir ceza avukatı ile bu aşamada iletişime geçmeniz, ifade içeriğinin hukuki çerçevede belirlenmesine yardımcı olur.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Tutuklama veya adli kontrol talepleri de soruşturma aşamasında gündeme gelebilir. Tutuklama itirazları ve adli kontrol koşullarının değerlendirilmesi avukat desteği ile yürütülmelidir. Balıkesir&apos;de ceza soruşturmalarında deneyimli bir avukat, sürecin haklarınızı koruyacak şekilde ilerlemesine katkı sağlar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Kovuşturma ve Duruşma Süreci
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Soruşturma sonunda kamu davası açılması halinde dosya mahkemeye gelir. Ağır ceza davaları Balıkesir Ağır Ceza Mahkemesi&apos;nde görülür. Duruşmalara katılım, delillerin tartışılması, tanık dinlenmesi ve savunma dilekçelerinin sunulması bu aşamada gerçekleşir. Balıkesir ceza avukatı, duruşma takvimine uygun şekilde temsili sürdürür ve savunma stratejisini mahkeme nezdinde uygular.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Beraat, cezada indirim veya hükmün açıklanmasının geri bırakılması gibi sonuçlar, delil durumu ve hukuki nitelendirmeye bağlıdır. Profesyonel savunma, bu sonuçlara ulaşmada önemli rol oynar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Ceza Davalarında İstinaf ve Temyiz
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Mahkemece verilen hükme karşı kanun yollarına başvurulabilir. İstinaf, Bölge Adliye Mahkemesi nezdinde yapılır; temyiz ise Yargıtay&apos;a yöneliktir. Süreler CMK&apos;da belirtilmiş olup, süresinde itiraz dilekçesi verilmesi gerekir. Balıkesir ceza avukatı, hükmün bozulması gerektiğini düşündüğü hususları (usul hataları, delil değerlendirmesi, hukuki nitelendirme) istinaf veya temyiz dilekçesinde gerekçeli şekilde ortaya koyar.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Bozma kararı sonrası mahkeme yeniden yargılama yapar; yerel mahkeme kararı onanırsa hüküm kesinleşir. Bu süreçte avukat desteği, sürelerin kaçırılmaması ve itiraz gerekçelerinin hukuken sağlam sunulması açısından önem taşır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Balıkesir&apos;de Ceza Avukatı Seçimi
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Balıkesir&apos;de ceza avukatı arıyorsanız; avukatın ceza hukuku alanındaki deneyimi, soruşturma ve kovuşturma süreçlerine hakimiyeti ve Balıkesir Adliyesi ile koordinasyonu dikkate alınmalıdır. Erken aşamada temsil, delil toplama sürecinin hukuka uygunluğunun denetlenmesi ve tutuklama itirazları gibi konularda etkin destek sağlanması önemlidir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Uyuşturucu suçları, dolandırıcılık suçları ve diğer ceza dosyalarında özelleşmiş bir Balıkesir ceza avukatı ile çalışmak, savunma hakkının etkin kullanılmasına olanak tanır. Balıkesir hukuk danışmanlık hizmeti kapsamında iletişim formu veya telefon üzerinden randevu alarak somut dosyanız hakkında ön değerlendirme talep edebilirsiniz.
        </p>

        <div className="mt-10 p-6 bg-white rounded-xl border border-primary/10">
          <h3 className="font-serif text-lg font-semibold text-primary mb-4">Ceza davasında hukuki destek için</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/#iletisim" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
              İletişim Formu
            </Link>
            <a href="tel:+905533704571" className="text-primary font-medium hover:underline">+90 553 370 45 71</a>
            <Link href="/balikesir-uyusturucu-avukati" className="text-accent font-medium hover:underline">Balıkesir uyuşturucu avukatı</Link>
            <Link href="/balikesir-dolandiricilik-avukati" className="text-accent font-medium hover:underline">Balıkesir dolandırıcılık avukatı</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
