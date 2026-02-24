export default function KvkkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose prose-sm md:prose-base prose-neutral">
      
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 border-b pb-4">
        Kişisel Verilerin İşlenmesine İlişkin Web Sitesi Aydınlatma Metni
      </h1>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        1. Veri Sorumlusu
      </h2>
      <p>
        Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri
        sorumlusu sıfatıyla Av. Ece Nalbant tarafından hazırlanmıştır.
      </p>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        2. Kişisel Verilerin Toplanma Amacı
      </h2>
      <p>
        Web sitemizi ziyaret etmeniz ve özellikle “Bize Ulaşın” bölümünü kullanmanız halinde,
        tarafınızdan bazı kişisel veriler talep edilmektedir.
      </p>
      <p>
        Bu veriler, tarafınızın hukuki danışmanlık taleplerine yanıt verebilmek, iletişim kurabilmek ve
        talep ettiğiniz hizmeti sunabilmek amacıyla işlenmektedir.
      </p>
      <p>Bu kapsamda işlenen kişisel veriler şunlardır:</p>
      <ul>
        <li>Ad ve soyad</li>
        <li>Telefon numarası</li>
        <li>E-posta adresi</li>
      </ul>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        3. Kişisel Verilerin İşlenme Hukuki Sebebi
      </h2>
      <p>Kişisel verileriniz;</p>
      <ul>
        <li>6698 sayılı KVKK,</li>
        <li>Türkiye Cumhuriyeti Anayasası’nın 20. maddesi,</li>
        <li>Avrupa İnsan Hakları Sözleşmesi’nin 8. maddesi,</li>
        <li>108 sayılı Avrupa Konseyi Sözleşmesi</li>
      </ul>
      <p>hükümleri çerçevesinde ve hukuka uygun olarak işlenmektedir.</p>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        4. Kişisel Verilerin Saklanma Süresi
      </h2>
      <p>
        Toplanan kişisel veriler, işlenme amacının gerektirdiği süre boyunca ve en fazla 10 yıl süre ile
        saklanır. Saklama süresinin sona ermesi veya işlenmesini gerektiren sebeplerin ortadan
        kalkması halinde, veriler re’sen silinir, yok edilir veya anonim hale getirilir.
      </p>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        5. Kişisel Verilerin Aktarılması
      </h2>
      <p>Kişisel verileriniz;</p>
      <ul>
        <li>Açık rızanız bulunmaksızın üçüncü gerçek veya tüzel kişilerle paylaşılmaz.</li>
        <li>
          Yalnızca talep ettiğiniz hizmetin yerine getirilebilmesi için zorunlu olan durumlarda ve
          sınırlı şekilde ilgili çalışanlar tarafından erişilebilir.
        </li>
        <li>
          Kanunen yetkili kamu kurum ve kuruluşlarının hukuka uygun talepleri halinde, yalnızca
          yasal zorunluluk kapsamında paylaşılabilir.
        </li>
        <li>Yurt dışına veri aktarımı söz konusu olması halinde açık rızanız alınacaktır.</li>
      </ul>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        6. İlgili Kişi Olarak Haklarınız
      </h2>
      <p>Kişisel verilerinize ilişkin aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme,</li>
        <li>KVKK’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
        <li>İşlemenin hukuka aykırı olması halinde zararın giderilmesini talep etme.</li>
      </ul>

      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-800">
        7. Başvuru Yöntemi
        </h2>
        <p>
        Haklarınıza ilişkin taleplerinizi; Gaziosmanpaşa Mahallesi, 189. Sokak, 
        Nizam İş Hanı D:2/2 Kat:1 Daire:2, 10100 Altıeylül/Balıkesir adresindeki 
        ofisimize yazılı olarak iletebilir veya{" "}
        <a 
            href="mailto:av.ecenalbant@gmail.com"
            className="text-primary font-medium underline hover:opacity-80 transition"
        >
            av.ecenalbant@gmail.com
        </a>{" "}
        e-posta adresine göndererek kullanabilirsiniz.
        </p>
        <p>Başvurularınız, KVKK’da öngörülen süreler içerisinde sonuçlandırılacaktır.</p>
    </main>
  );
}