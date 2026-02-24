import Link from 'next/link';

export const metadata = {
  title: 'Balıkesir Uyuşturucu Avukatı | TCK 188, 191 Savunma | Av. Ece Nalbant',
  description:
    'Balıkesir uyuşturucu avukatı. Uyuşturucu suçları (TCK 188, 191), yakalama, ifade, adli kontrol ve tutuklama itirazı süreçlerinde savunma.',
  keywords: 'Balıkesir uyuşturucu avukatı, TCK 188, TCK 191, uyuşturucu suçu savunma, Balıkesir ceza',
  openGraph: {
    title: 'Balıkesir Uyuşturucu Avukatı | Av. Ece Nalbant',
    description: 'Uyuşturucu suçlarında soruşturma ve kovuşturma süreçlerinde hukuki savunma.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ecenalbat.av.tr' },
    { '@type': 'ListItem', position: 2, name: 'Balıkesir Uyuşturucu Avukatı', item: 'https://ecenalbat.av.tr/balikesir-uyusturucu-avukati' },
  ],
};

export default function BalikesirUyusturucuAvukatiPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-primary-dark/70 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-accent hover:underline">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span>Balıkesir Uyuşturucu Avukatı</span>
        </nav>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
          Balıkesir Uyuşturucu Avukatı – Uyuşturucu Suçlarında Savunma
        </h1>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Balıkesir uyuşturucu avukatı olarak Türk Ceza Kanunu&apos;nda düzenlenen uyuşturucu ve uyarıcı madde suçları kapsamında soruşturma ve kovuşturma süreçlerinde savunma ve temsil hizmeti verilmektedir. Uyuşturucu madde kullanma, bulundurma, ticareti ve örgütlü suç dosyalarında delil incelemesi, usul denetimi ve savunma stratejisi oluşturulması konularında Balıkesir ilinde hukuki destek sunulmaktadır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          TCK 188 – Uyuşturucu veya Uyarıcı Madde Kullanma
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Türk Ceza Kanunu&apos;nun 188. maddesi, uyuşturucu veya uyarıcı madde kullanılmasını kişinin kendi kullanımı için satın almak, kabul etmek veya bulundurmak suretiyle cezalandırır. Madde kapsamında kullanım amacıyla elde bulundurma da suçun oluşumuna yol açar. Balıkesir&apos;de bu kapsamda soruşturma veya kovuşturmaya konu olan kişilerin, TCK 188&apos;in unsurları ve olası hukuki savunma yolları konusunda avukat desteği alması önemlidir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Kullanım amacıyla bulundurma miktarı, maddenin türü ve somut olayın özellikleri cezanın belirlenmesinde etkilidir. Hukuki savunmada delillerin geçerliliği, usul hataları ve nitelendirme konuları titizlikle incelenmelidir. Balıkesir uyuşturucu avukatı ile erken aşamada iletişime geçmek, soruşturma sürecinde yapılan işlemlerin hukuka uygunluğunun denetlenmesine olanak tanır.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          TCK 191 – Uyuşturucu veya Uyarıcı Madde İmal ve Ticareti
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          TCK 191. madde, uyuşturucu veya uyarıcı maddeleri ruhsatsız veya izinsiz olarak imal, ithal veya ihraç eden, satan, satın alan, sevk eden, nakleden, depolayan veya başka bir surette ticarete konu eden kişileri cezalandırır. Bu suçlar ağır ceza kapsamında olup, müdafi bulundurulması zorunludur. Balıkesir Ağır Ceza Mahkemesi&apos;nde görülen uyuşturucu ticareti davalarında savunma stratejisi, delillerin değerlendirilmesi ve nitelikli unsurların tartışılması ile şekillenir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Örgütlü suç kapsamında işlenen uyuşturucu ticareti suçlarında cezalar artırılmış olup, savunmada örgüt üyeliği ve faaliyetin kapsamı irdelenir. Balıkesir uyuşturucu avukatı, TCK 191 kapsamındaki dosyalarda hukuki analiz ve savunma hazırlığı yaparak müvekkilin haklarının korunmasına katkı sağlar.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Yakalama Süreci ve Haklar
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Uyuşturucu suçlarına ilişkin soruşturmada şüpheli yakalanabilir. CMK uyarınca yakalama, suçüstü halinde veya gecikmesinde sakınca bulunan hallerde yapılır. Yakalama sonrası şüpheliye susma hakkı ve müdafi ile görüşme hakkı hatırlatılmalıdır. Balıkesir&apos;de uyuşturucu soruşturması kapsamında yakalanan kişilerin, en kısa sürede Balıkesir uyuşturucu avukatı ile iletişime geçmesi, ifade ve sonraki süreçlerde haklarının korunması açısından kritik öneme sahiptir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Yakalama tutanağı, arama ve elkoyma işlemlerinin usule uygunluğu, süre aşımı ve delillerin toplanma şekli savunmada değerlendirilir. Usule aykırılık tespit edilmesi halinde delilin hükme esas alınmaması veya yargılamanın yenilenmesi gündeme gelebilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          İfade Alma Süreci
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Soruşturma aşamasında savcılık veya kolluk tarafından şüpheli ve tanıkların ifadesi alınır. Şüpheli, ifade vermeden önce müdafi ile görüşme hakkına sahiptir. İfade sırasında yanlış anlaşılmalara yol açabilecek beyanlardan kaçınmak ve hukuki rehberlik almak önemlidir. Balıkesir uyuşturucu avukatı, ifade öncesi hukuki bilgilendirme yaparak müvekkilin kendi lehine ve hukuka uygun şekilde beyanda bulunmasına yardımcı olur.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          İfade alma sürecinde usul kurallarına uyulmaması (örneğin müdafi hakkının engellenmesi, zorla ifade) ileride delil ve hüküm açısından itiraz konusu olabilir. Bu nedenle ifade sürecinin başından itibaren avukat desteği alınması tavsiye edilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Adli Kontrol ve Tutuklama
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          CMK&apos;da düzenlenen adli kontrol, tutuklama alternatifi bir koruma tedbiridir. Şüpheli veya sanık, belirli yükümlülüklere (ikametgah bildirme, yurt dışına çıkmama, belirli yerlere gitmeme vb.) uymak koşuluyla serbest bırakılabilir. Hakim veya mahkeme, tutuklama yerine adli kontrol uygulanmasına karar verebilir. Balıkesir uyuşturucu avukatı, tutuklama talep edildiği durumlarda adli kontrol talebinde bulunabilir veya tutuklama itirazı hazırlayabilir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Tutuklama, kuvvetli suç şüphesi ile birlikte tutuklama nedenlerinden birinin (kaçma, delil karartma vb.) varlığı halinde uygulanır. Tutuklama süreleri CMK&apos;da belirtilmiş olup, bu sürelerin aşılması veya tutuklama nedenlerinin ortadan kalkması halinde tahliye talep edilebilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Tutuklama İtirazı
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Tutuklama kararına itiraz, kararı veren Sulh Ceza Hakimliği veya mahkemeye yapılır. İtiraz incelemeleri kısa sürede sonuçlandırılır. Tutuklama itirazında; kuvvetli suç şüphesinin yetersizliği, tutuklama nedenlerinin (kaçma, delil karartma) bulunmaması veya ölçülülük ilkesine aykırılık gerekçe gösterilebilir. Balıkesir uyuşturucu avukatı, tutuklama itirazı dilekçesini hukuki gerekçelerle hazırlayarak müvekkilin tahliye talebini destekler.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Tutuklama itirazının reddi halinde, tutukluluk süresinin belirli aşamalarda yeniden değerlendirilmesi ve tahliye talebi tekrarlanabilir. Dosyanın gelişimi ve delil durumuna göre tahliye imkanı değişebilir.
        </p>

        <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">
          Balıkesir&apos;de Uyuşturucu Suçları Süreci
        </h2>
        <p className="text-primary-dark/90 leading-relaxed mb-4">
          Balıkesir ilinde uyuşturucu suçlarına ilişkin soruşturmalar Balıkesir Cumhuriyet Başsavcılığı bünyesinde yürütülür. Kovuşturma aşamasında davalar Balıkesir Ağır Ceza Mahkemesi&apos;nde görülür. Yerel mahkemelere aşinalık ve süreç takibi, Balıkesir uyuşturucu avukatı ile çalışmanın avantajlarındandır. Delil incelemesi, bilirkişi raporları ve duruşma stratejisi somut dosyaya göre belirlenir.
        </p>
        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Uyuşturucu suçlarında erken aşamada hukuki destek almak, savunma hakkının etkin kullanılması ve olası usul hatalarının tespiti açısından önemlidir. İletişim formu veya telefon ile randevu alarak Balıkesir uyuşturucu avukatı ile görüşebilirsiniz.
        </p>

        <div className="mt-10 p-6 bg-white rounded-xl border border-primary/10">
          <h3 className="font-serif text-lg font-semibold text-primary mb-4">Uyuşturucu suçlarında hukuki destek</h3>
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
