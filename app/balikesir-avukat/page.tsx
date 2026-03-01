import Link from 'next/link';

export const metadata = {
  title: 'Balıkesir Avukat – Ceza ve Boşanma Davaları | Av. Ece Nalbant',
  description:
    'Balıkesir avukat arayanlar için ceza hukuku, boşanma davaları, dolandırıcılık ve uyuşturucu suçları alanında hukuki danışmanlık. Balıkesir Adliyesi süreçlerinde yerel temsil.',
  keywords:
    'Balıkesir avukat, Balıkesir ceza avukatı, Balıkesir boşanma avukatı, Balıkesir Adliyesi, Balıkesir hukuk danışmanlık',
  openGraph: {
    title: 'Balıkesir Avukat – Ceza ve Boşanma Davaları',
    description: 'Balıkesir ilinde ceza ve aile hukuku alanında avukatlık hizmeti. Yerel temsil ve danışmanlık.',
  },
};

export default function BalikesirAvukatPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-accent hover:underline text-sm font-medium mb-6 inline-block"
        >
          ← Ana sayfa
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
          Balıkesir&apos;de Avukat Arama Terimleri ve Hukuki Değerlendirme
        </h1>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Balıkesir ilinde hukuki destek arayan kişilerin internet aramalarında sıklıkla
          &ldquo;Balıkesir ceza avukatı&rdquo;, &ldquo;Balıkesir boşanma avukatı&rdquo;,
          &ldquo;Balıkesir ağır ceza avukatı&rdquo;, &ldquo;Balıkesir velayet avukatı&rdquo;,
          &ldquo;Balıkesir icra avukatı&rdquo; gibi ifadeleri kullandığı görülmektedir. Bu
          terimler halk arasında yaygın olsa da Türk hukuk sisteminde teknik anlamda böyle
          bir branşlaşma bulunmamaktadır. Avukatlık mesleği, özel bir uzmanlık ruhsatına
          ayrılmaksızın genel ruhsat kapsamında yürütülür ve mevzuat avukatları ceza, aile,
          iş, ticaret veya miras gibi alanlara unvanla ayırmaz.
        </p>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ceza yargılamasında ortaya çıkan uyuşturucu suçları, nitelikli dolandırıcılık,
          bilişim suçları ve ağır ceza kapsamına giren diğer dosyalar nedeniyle bilgi arayan
          kişiler, pratikte &ldquo;Balıkesir ceza avukatı&rdquo;, &ldquo;Balıkesir ağır ceza
          avukatı&rdquo;, &ldquo;Balıkesir uyuşturucu avukatı&rdquo; gibi terimlere
          yönelmektedir. Bu tür dosyalarda soruşturma ve kovuşturma süreçlerinin teknik
          gereklilikleri; delil değerlendirmesi, usul işlemlerinin denetimi, savcılık
          ifadeleri, gözaltı ve tutuklama süreçleri ile duruşma aşamalarında profesyonel
          temsil gerektirmektedir.
        </p>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Aile hukuku uyuşmazlıklarında da benzer bir durum söz konusudur. Aramalarda
          &ldquo;Balıkesir boşanma avukatı&rdquo;, &ldquo;Balıkesir velayet avukatı&rdquo;,
          &ldquo;Balıkesir nafaka avukatı&rdquo; gibi kavramlar tercih edilse de, aile
          hukukuna ilişkin süreçler Türk Medeni Kanunu hükümleri doğrultusunda teknik
          değerlendirme ve somut olay analizi gerektirir. Anlaşmalı ve çekişmeli boşanma
          davaları, velayet ve nafaka talepleri, mal rejimi tasfiyesi ve diğer aile hukuku
          başlıklarında Balıkesir Aile Mahkemesi nezdinde delil değerlendirmesi, dilekçe ve
          protokol hazırlığı ile duruşma takibi titizlikle yürütülmektedir.
        </p>

        <p className="text-primary-dark/90 leading-relaxed mb-6">
          Ticari uyuşmazlıklarda &ldquo;Balıkesir ticaret avukatı&rdquo;, işçi–işveren
          uyuşmazlıklarında &ldquo;Balıkesir iş hukuku avukatı&rdquo;, alacak takibi
          süreçlerinde &ldquo;Balıkesir icra avukatı&rdquo;, miras paylaşımı aşamalarında ise
          &ldquo;Balıkesir miras avukatı&rdquo; gibi ifadeler halk arasında yön gösterici
          terimler hâline gelmiştir. Ticaret hukuku, iş hukuku, icra ve iflas hukuku, miras
          hukuku ve tüketici hukuku kapsamındaki tüm başlıklar; ilgili mahkemeler ve icra
          müdürlükleri nezdinde mevzuat hükümleri doğrultusunda teknik olarak takip
          edilmektedir.
        </p>

        <p className="text-primary-dark/90 leading-relaxed">
          Bu terimlerin hukuken bir uzmanlık unvanı oluşturmamasına rağmen, ceza, aile,
          ticaret, iş, icra ve miras hukuku gibi farklı alanlarda ortaya çıkan uyuşmazlıkların
          kendine özgü teknik süreçleri bulunduğundan, her dosyada ilgili hukuk dalının usul
          ve maddi hukuk hükümleri çerçevesinde profesyonel temsil, dikkatli dosya analizi ve
          stratejik süreç yönetimi yürütülmektedir.
        </p>
      </article>
    </div>
  );
}
