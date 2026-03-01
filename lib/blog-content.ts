export type ContentBlock = { type: 'h2'; text: string } | { type: 'h3'; text: string } | { type: 'p'; text: string };

export interface PostContent {
  blocks: ContentBlock[];
}

const cezaBlocks: ContentBlock[] = [
  { type: 'h2', text: 'Giriş' },
  {
    type: 'p',
    text: 'Ceza hukuku sisteminde savunma hakkı, adil yargılanma ilkesinin temel unsurunu oluşturmaktadır. Şüpheli veya sanığın kendisine yöneltilen suçlamalara karşı hukuki ve fiilî olarak kendisini savunabilmesi, hukuk devleti ilkesinin zorunlu sonucudur. Ceza yargılamasında savunma hakkı, yalnızca bireysel bir hak değil; aynı zamanda yargılamanın meşruiyetini sağlayan yapısal bir güvencedir. Bu bağlamda ceza hukukunda savunma hakkı, hem anayasal hem de uluslararası hukuk düzenlemeleri ile koruma altına alınmıştır.',
  },
  { type: 'h2', text: 'I. Savunma Hakkının Anayasal Dayanağı' },
  {
    type: 'p',
    text: "Türkiye Cumhuriyeti Anayasası'nın 36. maddesi uyarınca herkes, meşru vasıta ve yollardan faydalanmak suretiyle yargı mercileri önünde savunma hakkına sahiptir. Bu düzenleme, \"hak arama özgürlüğü\" başlığı altında yer almakla birlikte, doğrudan ceza yargılamasında savunma hakkını da kapsamaktadır. Anayasal güvence, savunma hakkının kısıtlanamayacağını, engellenemeyeceğini ve keyfi uygulamalara konu edilemeyeceğini ifade etmektedir.",
  },
  { type: 'h2', text: 'II. Avrupa İnsan Hakları Sözleşmesi Kapsamında Savunma Hakkı' },
  {
    type: 'p',
    text: "Avrupa İnsan Hakları Sözleşmesi'nin 6. maddesi, adil yargılanma hakkını düzenlemekte olup, savunma hakkını bu hakkın ayrılmaz bir unsuru olarak kabul etmektedir. AİHS m.6/3 kapsamında sanığın müdafi yardımından yararlanma, kendini savunma veya müdafi seçme, tanıkları sorguya çekme ve aleyhindeki deliller hakkında bilgi sahibi olma hakları açıkça düzenlenmiştir. Avrupa İnsan Hakları Mahkemesi içtihatlarında, savunma hakkının yalnızca teorik değil, pratik ve etkili (practical and effective) olması gerektiği vurgulanmaktadır.",
  },
  { type: 'h2', text: 'III. Ceza Muhakemesi Kanunu Çerçevesinde Savunma Hakkı' },
  {
    type: 'p',
    text: 'Ceza Muhakemesi Kanunu (CMK), savunma hakkını soruşturma ve kovuşturma aşamalarında ayrıntılı biçimde düzenlemiştir.',
  },
  { type: 'h3', text: '1. Müdafi Yardımından Yararlanma Hakkı' },
  {
    type: 'p',
    text: 'CMK m.149 ve devamı maddeleri uyarınca şüpheli veya sanık, her aşamada bir müdafi yardımından yararlanabilir. Özellikle ağır ceza mahkemesinin görev alanına giren suçlarda müdafi bulundurulması zorunludur.',
  },
  { type: 'h3', text: '2. Susma Hakkı' },
  {
    type: 'p',
    text: 'Ceza hukukunda savunma hakkının önemli bir unsuru da susma hakkıdır. Şüpheli veya sanık, kendisini suçlayıcı beyanda bulunmaya zorlanamaz. Bu hak, masumiyet karinesi ile doğrudan bağlantılıdır.',
  },
  { type: 'h3', text: '3. Dosyayı İnceleme ve Delil Sunma Hakkı' },
  {
    type: 'p',
    text: 'Savunma makamının dosyaya erişim hakkı, etkin savunmanın temel koşuludur. Delillere erişim engellenirse savunma hakkı ihlal edilmiş olur.',
  },
  { type: 'h2', text: 'IV. Soruşturma Aşamasında Savunma Hakkının Önemi' },
  {
    type: 'p',
    text: 'Savunma hakkı yalnızca kovuşturma aşamasında değil, soruşturma aşamasında da geçerlidir. Özellikle gözaltı işlemleri, ifade alma süreci ve tutuklama talepleri sırasında müdafi yardımının sağlanması, ceza yargılamasının hukuka uygunluğunu belirleyen temel faktördür. Bu aşamada yapılan usule aykırılıklar, ilerleyen süreçte hükmün bozulmasına neden olabilmektedir.',
  },
  { type: 'h2', text: 'V. Savunma Hakkının İhlali ve Hukuki Sonuçları' },
  {
    type: 'p',
    text: 'Savunma hakkının ihlali, hem ulusal hukuk hem de uluslararası hukuk bakımından ciddi sonuçlar doğurur. Savunma hakkının kısıtlanması halinde hükmün temyiz aşamasında bozulması, yargılamanın yenilenmesi, Anayasa Mahkemesi\'ne bireysel başvuru ve Avrupa İnsan Hakları Mahkemesi\'ne başvuru gündeme gelebilmektedir. Bu nedenle ceza davalarında savunma hakkının korunması, yargılamanın adilliği bakımından hayati öneme sahiptir.',
  },
  { type: 'h2', text: 'VI. Ceza Davalarında Etkin Savunma Stratejisi' },
  {
    type: 'p',
    text: 'Ceza hukukunda etkin savunma, yalnızca suçlamayı reddetmekten ibaret değildir. Etkin bir savunma stratejisi; dosya kapsamının ayrıntılı incelenmesini, delillerin hukuka uygunluk denetimini, usul hatalarının tespitini ve alternatif hukuki nitelendirmelerin değerlendirilmesini gerektirir. Bu nedenle, ceza soruşturmalarında ve ceza davalarında erken aşamada hukuki destek alınması, hak kayıplarının önlenmesi bakımından kritik önemdedir.',
  },
  { type: 'h2', text: 'Sonuç' },
  {
    type: 'p',
    text: 'Ceza hukukunda savunma hakkı, bireyin devlet karşısındaki en güçlü anayasal güvencesidir. Savunma hakkının etkin ve eksiksiz kullanılması, yalnızca sanığın değil, adalet sisteminin bütünlüğünün korunmasını sağlar. Hukuk devleti ilkesinin somutlaşması, savunma hakkının tam ve eksiksiz uygulanması ile mümkündür.',
  },
];

const bosanmaBlocks: ContentBlock[] = [
  { type: 'h2', text: 'Giriş' },
  {
    type: 'p',
    text: 'Boşanma davaları, yalnızca evlilik birliğinin sona erdirilmesi süreci olmayıp; mal rejimi, velayet, nafaka ve tazminat gibi birçok hukuki sonucu da beraberinde getiren karmaşık bir yargılama sürecidir. Bu nedenle boşanma davası açmadan önce dikkat edilmesi gerekenler, hak kaybı yaşanmaması açısından büyük önem taşımaktadır. Türk Medeni Kanunu çerçevesinde yürütülen boşanma davaları, somut olayın özelliklerine göre farklı hukuki sonuçlar doğurabilmektedir.',
  },
  { type: 'h2', text: 'I. Boşanma Sebebinin Doğru Belirlenmesi' },
  {
    type: 'p',
    text: "Boşanma davasında ilk ve en önemli husus, davanın hangi hukuki sebebe dayandırılacağının doğru şekilde tespit edilmesidir. Türk Medeni Kanunu'na göre boşanma sebepleri: zina, hayata kast ve pek kötü muamele, suç işleme ve haysiyetsiz hayat sürme, terk, akıl hastalığı ve evlilik birliğinin temelinden sarsılması (şiddetli geçimsizlik). Yanlış hukuki sebebe dayandırılan dava, sürecin uzamasına veya davanın reddine neden olabilir.",
  },
  { type: 'h2', text: 'II. Delillerin Hazırlanması' },
  {
    type: 'p',
    text: 'Boşanma davalarında iddiaların ispatı esastır. Özellikle çekişmeli boşanma davalarında tanık beyanları, mesaj kayıtları, sosyal medya paylaşımları, fotoğraflar, sağlık raporları ve polis tutanakları gibi deliller önem taşımaktadır. Delillerin hukuka uygun şekilde elde edilmiş olması gerekmektedir. Hukuka aykırı deliller mahkemece dikkate alınmayabilir.',
  },
  { type: 'h2', text: 'III. Velayet Konusu' },
  {
    type: 'p',
    text: 'Boşanma davalarında en hassas konulardan biri velayettir. Mahkeme, çocuğun üstün yararını gözeterek karar verir. Velayet değerlendirmesinde çocuğun yaşı, ebeveynlerin ekonomik ve sosyal durumu, çocuğun bakım şartları ve eğitim ile psikolojik gelişim gibi unsurlar dikkate alınır. Velayet davalarında stratejik hazırlık yapılması son derece önemlidir.',
  },
  { type: 'h2', text: 'IV. Nafaka ve Maddi Talepler' },
  {
    type: 'p',
    text: 'Boşanma sürecinde üç tür nafaka gündeme gelebilir: tedbir nafakası, iştirak nafakası ve yoksulluk nafakası. Ayrıca maddi ve manevi tazminat talepleri de söz konusu olabilir. Nafaka ve tazminat miktarları belirlenirken tarafların ekonomik durumu, kusur oranı ve yaşam standartları dikkate alınır.',
  },
  { type: 'h2', text: 'V. Mal Rejimi Tasfiyesi' },
  {
    type: 'p',
    text: 'Boşanma kararından sonra mal paylaşımı süreci başlar. Edinilmiş mallara katılma rejimi geçerliyse, evlilik süresince edinilen mallar üzerinde eşlerin katılma alacağı hakkı doğar. Mal rejimi davaları teknik ve hesaplama gerektiren süreçlerdir. Bu nedenle uzman hukuki destek alınması önemlidir.',
  },
  { type: 'h2', text: 'VI. Anlaşmalı Boşanma ve Çekişmeli Boşanma Arasındaki Fark' },
  {
    type: 'p',
    text: 'Anlaşmalı boşanmada evlilik en az 1 yıl sürmüş olmalı, taraflar tüm hususlarda mutabık kalmalı ve hakim protokolü uygun bulmalıdır. Çekişmeli boşanmada taraflar arasında uyuşmazlık vardır, yargılama süreci uzayabilir ve delil ile tanık süreci yoğun geçer. Doğru dava türünün belirlenmesi, sürecin hızını ve sonucunu doğrudan etkiler.',
  },
  { type: 'h2', text: 'VII. Boşanma Davasında Yapılan Yaygın Hatalar' },
  {
    type: 'p',
    text: 'Aceleyle dava açmak, delil toplamadan süreci başlatmak, sosyal medya paylaşımlarına dikkat etmemek, hak kaybına yol açacak beyanlarda bulunmak ve profesyonel hukuki destek almamak sık görülen hatalardandır. Boşanma süreci yalnızca duygusal değil, aynı zamanda hukuki bir süreçtir.',
  },
  { type: 'h2', text: 'Sonuç' },
  {
    type: 'p',
    text: 'Boşanma davalarında dikkat edilmesi gerekenler, yalnızca evlilik birliğinin sona erdirilmesiyle sınırlı değildir. Velayet, nafaka, tazminat ve mal paylaşımı gibi birçok hak ve yükümlülük söz konusudur. Sürecin başından itibaren doğru hukuki stratejinin belirlenmesi, hak kayıplarının önlenmesi bakımından kritik öneme sahiptir.',
  },
];

const ticariBlocks: ContentBlock[] = [
  { type: 'h2', text: 'Giriş' },
  {
    type: 'p',
    text: 'Ticari sözleşmeler, taraflar arasındaki ekonomik ilişkinin hukuki çerçevesini belirleyen temel belgelerdir. Ancak sözleşme metinlerinde yer alan eksiklikler, belirsizlikler veya hukuka aykırılıklar ciddi mali ve hukuki sonuçlara yol açabilmektedir. Bu nedenle ticari sözleşmelerde riskler, sözleşme imzalanmadan önce dikkatle analiz edilmelidir. Özellikle şirketler açısından, sözleşmesel risk yönetimi kurumsal sürdürülebilirliğin temel unsurlarından biridir.',
  },
  { type: 'h2', text: 'I. Belirsiz ve Muğlak Hükümler' },
  {
    type: 'p',
    text: 'Ticari sözleşmelerde en sık karşılaşılan risklerden biri, hükümlerin açık ve net olmamasıdır. Belirsiz ifadeler, taraflar arasında farklı yorumlara yol açarak uyuşmazlık riskini artırır. Hizmet kapsamının net tanımlanmaması, teslim süresinin belirsiz bırakılması, ücret ve ödeme planının açık olmaması ve cezai şartın muğlak düzenlenmesi riskli alanlardır. Sözleşme dili açık, ölçülebilir ve yoruma kapalı olmalıdır.',
  },
  { type: 'h2', text: 'II. Cezai Şart ve Tazminat Riskleri' },
  {
    type: 'p',
    text: 'Cezai şart hükümleri, sözleşmeye aykırılık durumunda uygulanacak yaptırımı düzenler. Ancak orantısız cezai şartlar, tek taraflı yükümlülükler ve haksız tazminat hükümleri taraflardan biri açısından ağır mali yük doğurabilir. Türk Borçlar Kanunu uyarınca hâkim, fahiş cezai şartı indirebilir; ancak bu her durumda koruma sağlamayabilir.',
  },
  { type: 'h2', text: 'III. Sorumluluk Sınırlandırma Maddeleri' },
  {
    type: 'p',
    text: 'Birçok ticari sözleşmede sorumluluğun sınırlandırıldığı görülmektedir. Ancak ağır kusur, kasıt ve kamu düzenine aykırılık hallerinde sorumluluk sınırlandırmaları geçersiz sayılabilir. Bu nedenle sözleşmede yer alan sorumluluk maddeleri dikkatle incelenmelidir.',
  },
  { type: 'h2', text: 'IV. Yetki ve Tahkim Şartları' },
  {
    type: 'p',
    text: 'Ticari sözleşmelerde yer alan yetki ve tahkim hükümleri, uyuşmazlık halinde davanın nerede ve hangi usulle görüleceğini belirler. Yabancı ülke mahkemelerinin yetkili kılınması, yüksek maliyetli tahkim şartları ve tek taraflı yetki hükümleri dava açma sürecini zorlaştırabilir.',
  },
  { type: 'h2', text: 'V. Mücbir Sebep Hükümleri' },
  {
    type: 'p',
    text: 'Mücbir sebep maddeleri, tarafların kontrolü dışındaki olağanüstü durumlarda sorumluluğun askıya alınmasını düzenler. Mücbir sebebin tanımı dar bırakılmışsa, bildirim süreleri düzenlenmemişse veya sürenin belirsizliği söz konusuysa taraflar ciddi zararlarla karşılaşabilir.',
  },
  { type: 'h2', text: 'VI. Gizlilik ve Rekabet Yasağı Maddeleri' },
  {
    type: 'p',
    text: 'Ticari sözleşmelerde sıklıkla yer alan gizlilik ve rekabet yasağı hükümleri, ticari sırların korunması açısından önemlidir. Ancak aşırı geniş düzenlenen rekabet yasağı hükümleri, Türk Borçlar Kanunu kapsamında geçersiz sayılabilir. Süre, coğrafi alan ve faaliyet kapsamı ölçülü olmalıdır.',
  },
  { type: 'h2', text: 'VII. Sözleşmenin Feshi ve Süre Riskleri' },
  {
    type: 'p',
    text: 'Fesih şartlarının açık düzenlenmemesi, taraflar açısından belirsizlik yaratır. Haklı fesih sebepleri, bildirim süreleri, otomatik uzama hükümleri ve tazminat yükümlülükleri dikkatle değerlendirilmelidir. Fesih şartları dengeli ve açık olmalıdır.',
  },
  { type: 'h2', text: 'VIII. Kurumsal Risk Yönetimi Açısından Sözleşme İncelemesi' },
  {
    type: 'p',
    text: 'Ticari sözleşmelerde risk analizi yapılmadan imza atılması, uzun vadede ciddi mali kayıplara yol açabilir. Profesyonel bir sözleşme incelemesi hukuki risk analizi, mali yükümlülük değerlendirmesi, uyuşmazlık ihtimali analizi ve alternatif madde önerileri içermelidir.',
  },
  { type: 'h2', text: 'Sonuç' },
  {
    type: 'p',
    text: 'Ticari sözleşmeler, yalnızca bir iş ilişkisinin başlangıcı değil; aynı zamanda hukuki sorumlulukların belirlenmesidir. Sözleşme metinlerinde yer alan küçük bir eksiklik dahi, ilerleyen süreçte büyük uyuşmazlıklara neden olabilir. Bu nedenle ticari sözleşmelerde risk analizi, sözleşme imzalanmadan önce yapılmalı ve her hüküm titizlikle değerlendirilmelidir.',
  },
];

const ispatBlocks: ContentBlock[] = [
  { type: 'h2', text: 'Giriş' },
  {
    type: 'p',
    text: `İspat hakkı, Türk medeni usul hukukunda ilk defa 6100 sayılı HMK ile ayrıca ve açıkça düzenlenmiş bulunmaktadır. İspat bir hak olarak hukuki dinlenilme hakkının bir parçasıdır. İspat hukuku tahkikat aşamasına ilişkin olup dilekçeler ve sözlü yargılama aşamasında da önem arz etmektedir. İspatın temele sorusu neyi kimin nasıl ispat edeceğidir. “Kim?” sorusunun amacı ispat yükünü yüklenen tarafını bulmaktır. “Neyi?” sorusu ise maddi vakıalardır ve ispatın konusunu belirler. Maddi hukuk kurallarının unsurlarını karşılayacak maddi vakıaları ve bunların gerçekten meydana gelip gelmediğini tespit ederek doğru hüküm verebilmek amaçtır.`,
  },
  {
    type: 'p',
    text: `Usul hukukunda hangi vakıaların hangi delillerle nasıl ispat edileceğine ilişkin bazı sınırlamalar vardır. Deliller kural olarak davaların taraflarınca getirilir. Fakat re’sen hakimin keşif ve bilirkişi delillerine başvurması bu durumun istisnasını oluşturur. Dava malzemesinin taraflarca getirilmesi ilkesinin bir görünümü olarak taraflar iddialarını haklı gösterecek olan vakıalarına dilekçelerinde yer verirler. Dilekçede yer verilen vakıaların hukuki işleme ya da hukuki fiile yönelik olmasının HMK m.119/e hükmünün yerine getirilmesi açısından bir önemi olmamakla birlikte, bunların ispatı noktasında önemli bir farklılık ortaya çıkmaktadır.`,
  },
  {
    type: 'p',
    text: `Buna göre, ispata konu vakıa bir hukuki işleme dayanıyor ve değeri ispat sınırını aşıyor ise bu vakıanın ispatı sadece kesin deliller ile (bu arada senetle) olabilecektir. Oysa dilekçelerde yer verilen ve ispata muhtaç vakıa bir hukuki fiile yönelik ise bu vakıanın her tür delille ispatı mümkündür. Türk ispat hukuku alanında bu ayırıma kanun koyucu tarafından önem verilmiştir. Nitekim HMK m.200 ile ispata muhtaç vakıanın bir hukuki işlem olması faraziyesinde ispat gereğinin kanun tarafından önceden tespit edilmiş bazı ispat vasıtaları ile yerine getirilebileceği açık olarak düzenlenmiştir.`,
  },
  {
    type: 'p',
    text: `İlk olarak, ispat hakkını tanımlayabilmek, onun kapsamı, bu anlamda özellikle ispat hakkının muhatapları ile bu hakkın hukuki niteliği üzerinde bazı değerlendirmelerde bulunmak istiyoruz. Konuyu tüm yönleriyle değerlendirmek bakımından bir iddiamız olmaksızın, medeni usul hukukunda ispat hakkının genel bir çerçevesini çizmeye çalışmaktayız.`,
  },
  { type: 'h2', text: 'İSPAT HUKUKUNA DAİR GENEL DEĞERLENDİRMELER' },
  { type: 'h3', text: 'İSPATIN KONUSU' },
  {
    type: 'p',
    text: `Mahkemeye yöneltilmiş usulî talep, kural olarak bir hakkın mevcudiyetinin tespitini ve/veya gereğinin yerine getirilmesini yahut mevcut olmadığının tespitini konu alır. Hukuk muhakemeleri kanununun 187’nci maddesi ispatın konusunu düzenlemektedir. Buna göre, "İspatın konusunu tarafların üzerinde anlaşamadıkları ve uyuşmazlığın çözümünde etkili olabilecek çekişmeli vakıalar oluşturur ve bu vakıaların ispatı için delil gösterilir. Herkesçe bilinen vakıalarla, ikrar edilmiş vakıalar çekişmeli sayılmaz". Vakıa, hukuk kuralının öngördüğü sonucu hükmedilebilmesi için varlığı veya yokluğu aranan yer ve zaman itibariyle somutlaştırılmış geçmişte gerçekleşen veya hala devam eden dış dünyaya yansımış olaylar veya durumlar ile içsel durumları ifade eder.`,
  },
  {
    type: 'p',
    text: `Uyuşmazlıkta bütün vakalar için ispat faaliyeti gerekli değildir. Yalnızca uyuşmazlığın konusu bakımından önemli vakalar ispatın konusunu oluşturur. Çekişmeli olmayan vakıaların ispatına gerek yoktur. Yalnızca çekişmeli vakıalar ispatın konusunu oluşturur. Son olarak da kural olarak taraflarca getirilmiş olan vakıalar ispatın konusunu oluşturur.`,
  },
  {
    type: 'p',
    text: `Mevcut bulunan veya dış dünyada gerçekleşen bir olay veya duruma ilişkin olan vakıalara "müspet vakıalar" adını vermekteyiz. Bazı durumlarda ise vakıalar mevcut dünyada bulunmamaya veya gerçekleşmemeye ilişkin olabilirler. Biz bunlara "menfi vakıalar" adını vermekteyiz. Arabanın camının kırık olması müspet vakıalara örnek oluşturur. Fakat reşit olunmadığına veya bir husus hakkında bilgi sahibi olunmadığına dair durumlar ise menfi vakıalara örnek olarak gösterilebilir.`,
  },
  {
    type: 'p',
    text: `Müspet vakıaların ispatı menfi vakalara göre daha kolaydır. Zira mevcut bir durumun dış dünyada yansımasını delil şeklinde mahkemeye ibraz etmek mümkündür. Ancak menfi vakıalar için bu durum biraz farklıdır. Menfi vakalarda bir hususun mevcut olmadığı sebepten veya sonuçtan hareketli ispat edilebilir. Ya da aksi durumun imkansızlığı ortaya konularak o hususun mevcut olmadığı ispat edilebilir. Menfi vakıaların ispatının zorluğu bu gibi yöntemlerin çıkmasına neden olmuştur.`,
  },
  { type: 'h3', text: 'İSPATIN GEREKMEDİĞİ HALLER' },
  {
    type: 'p',
    text: `Bazı vakalar uyuşmazlığın çözümü bakımından önem taşımalarına rağmen bir kısım vakaların ise ispata gerekli değildir. Herkesçe bilinen vakıa, ikrar ve karine ispatın gerekmediği hallerdendir.`,
  },
  { type: 'h3', text: '1. Herkesçe bilinen vakıalar' },
  {
    type: 'p',
    text: `Mutlak herkesin bildiği vakıalara herkesçe bilinen vakıa denmektedir. Örnek olarak 29 Ekim'in 2021 yılında hangi güne denk geldiğine dair bir bilgi, uzmanlık veya araştırma gerektirmeksizin herkesin bilebileceği bir durumdur. Bu vakıaların özel bir uzmanlığa ihtiyaç olmaksızın bilinebilmeleri mümkündür. Bu sebeple buna benzer durumlarda kanun koyucu bu tür vakıaların çekişmeli sayılamayacağını ve ispatına gerek olmadığını düzenlemiştir.`,
  },
  {
    type: 'p',
    text: `Herkesçe bilinen vakıalar zamanı ve yere göre farklılık arz ettiği durumlarda bir yerde herkesçe bilinen bir vaka olarak kabul edilen hususun başka bir yerde ispatı gerekebilir. Bu gibi durumlarda gerçekten öyle olmadığına yönelik ispat faaliyeti caizdir.`,
  },
  { type: 'h3', text: '2. İkrar' },
  {
    type: 'p',
    text: `Aleyhine vakıa bulunan kişinin, o vakıanın doğru olduğunu kanunun temsilcisi aracılığıyla veyahut kendisinin bizzat mahkemeye bildirmesine ikrar denir. İkrarda asıl maksat ilgili vakıaya ilişkin ispat yükünü karşı tarafın taşımasıdır. Yani doğrulanan vakıanın ikrar beyanında bulunan kişinin aleyhine olması gerekir.`,
  },
  {
    type: 'p',
    text: `İkrar beyanı duruşma esnasında sözlü olarak yapılabilirken aynı zamanda mahkemeye sunulan bir belge aracılığıyla, kural olarak da dilekçe ile yapılabilir. Mahkemeye sözlü olarak yapılan ikrar beyanının tutanağa geçirilip, ikrarda bulunan kişi tarafından imzalanması gerekmektedir. Mahkeme dışında bir vakanın doğruluğunun beyan edilmesi ikrar niteliği taşımaz. Ancak niteliği varsa mahkeme dışında gerçekleşen doğrulama beyanı bir delil olarak kullanılabilir.`,
  },
  {
    type: 'p',
    text: `Medeni usul hukuku açısından zımni ikrar yani susma geçerli değildir. İkrarın açık olması gereklidir. Fakat kanun bazı durumlarda susmayı zımni ikrar olarak bir sonuca bağlamışsa bu durumda zımni ikrar geçerli olur. İkrar kural olarak bağlayıcıdır ve ilişkin olduğu vakıayı çekişmeli olmaktan çıkarır; mahkeme de kural olarak ikrarla bağlıdır.`,
  },
  {
    type: 'p',
    text: `Açık ikrardan, bunun ancak maddi bir hatadan kaynaklandığı iddia ve ispat edilerek dönülebilir. İkrar bir usul işlemi olduğu için iradeyi sakatlayan sebeplere dayanılarak ikrardan dönülmesi mümkün değildir. Ayrıca sulh görüşmeleri sırasında yapılan ikrar tarafları bağlamaz.`,
  },
  { type: 'h3', text: '3. Karine' },
  {
    type: 'p',
    text: `Karine, genel olarak, bilinen bir olaydan bilinmeyen başka bir olayın veya hukuksal durumun varlığı yahut yokluğu hakkında sonuç çıkarılmasıdır. Bilinen yani ispatlanabilen vakıa, karine temeli olarak adlandırılır. Bilinmeyen, ispatı gereken ve uyuşmazlığın durumu bakımından önem taşıyan vakıa ise karine sonucu olarak ifade edilir.`,
  },
  {
    type: 'p',
    text: `Karineler çıkarım yapmayı sağlayan kuralın dayanağına göre fiili karineler ve kanuni karineler olmak üzere ikiye ayrılır. Bilinen bir vakıadan hareket edilip genel hayat tecrübelerine dayanılarak bilinmeyen bir vakıa hakkında hakim tarafından sonuç çıkarılmasına fiili karineler denir. Kanuni karineler ise belli bir vakıadan bilinmeyen bir vakıa hakkında sonuç çıkarılmasının doğrudan kanun hükmü ile yapılmasıdır.`,
  },
  {
    type: 'p',
    text: `Kanuni karineler kesin olanlar ve kesin olmayanlar şeklinde ayrılır. Kesin olanların aksi ispat edilemezken, adi kanuni karinelerin aksi ispat edilebilir. Karineye dayanan taraf için ilgili vakıa açısından artık ispatı gereken hiçbir husus kalmadığı söylenemez; her şeyden önce karine temeli ispatlanmalıdır.`,
  },
  { type: 'h3', text: 'İSPAT HUKUKUNA İLİŞKİN YÜKLER' },
  { type: 'h3', text: '1. İddia Yükü Kavramı' },
  {
    type: 'p',
    text: `İddia yükü, taraflarca hazırlama ilkesinin geçerli olduğu yargılamalarda soyut hukuk kuralının öngördüğü sonuca talip olan tarafın, o kuralın öngördüğü koşul vakıalara karşılık gelen somut vakaları mahkemeye bildirme ve ileri sürme yüküdür. İddia yükü davalı açısından ise ileri sürmüş olduğu savunma sebeplerine dayanak olan vakaların gösterilmesi şeklinde ortaya çıkar.`,
  },
  {
    type: 'p',
    text: `İddia yükünü yerine getirmeyen taraf için hakimin bu durumu hatırlatması veya getirilmeye zorlaması mümkün değildir. İddianın değiştirilmesi ve genişletilmesi yasağı başlayıncaya kadar bu yükün gereği yerine getirilebilir. Hiç yerine getirilmemişse mahkemenin esası hakkında karar verebileceği bir dava konusu kalmadığından davanın usulden reddi gerekir. Re'sen araştırma ilkesinin uygulandığı davalarda iddia yükü aranmaz.`,
  },
  { type: 'h3', text: '2. Somutlaştırma Yükü Kavramı' },
  {
    type: 'p',
    text: `Somutlaştırma yükü de iddia yükü gibi usulî bir yük olmakla birlikte sonucu iddia yükünden farklıdır. İddia yükünde ortada bir vakıa yokken, somutlaştırma yükünde bir vakıa mevcuttur; ancak kanunun aradığı şekilde açık ve somut değildir. Somutlaştırma yükü, iddia edilen her bir vakıanın hangi delille ispat edilmek istendiğinin gösterilmesini de kapsar.`,
  },
  {
    type: 'p',
    text: `Somutlaştırma yükünü yerine getirmeyen taraf için hakim, vakıaları somutlaştırmaya veya hangi vakıanın hangi delille ispat edileceğini açıklamaya davet eder. Bu yükümlülük yerine getirilmezse hakim ilgili vakıayı dikkate almaksızın karar verir. Re'sen araştırma ilkesinin uygulandığı davalarda somutlaştırma yükünden söz edilemez.`,
  },
  { type: 'h3', text: '3. İspat Yükü' },
  {
    type: 'p',
    text: `Bir davanın kazanılması ya da kaybedilmesinde en belirleyici unsur, iddia ya da savunmaya ilişkin vakıaların gerçekleşip gerçekleşmediğinin hakimi de ikna edecek biçimde ortaya konmasıdır. Hakimin bu noktada vakıaların meydana gelip gelmediğini re’sen inceleyebilmesi mümkün değildir. Bu durum, dava malzemesinin taraflarca getirilmesi ilkesiyle de uyumludur.`,
  },
  {
    type: 'p',
    text: `Taraflar vakıa ve delillerini dosyaya sunmuşsa hakim bunları incelemek durumundadır. Deliller dava hakkında yeterli kanaat oluşturmuyorsa ispat yükünün hangi tarafta olduğu belirleyici hale gelir. Sorun özellikle ispatsızlık halinde ortaya çıkar ve temel soru, vakıanın meydana gelip gelmediğinin ortaya konması yükünün kimde olduğudur.`,
  },
  {
    type: 'p',
    text: `HMK m.190/1'e göre kanunda özel bir düzenleme bulunmadıkça ispat yükü, iddia edilen vakıaya bağlanan hukuki sonuçtan kendi lehine hak çıkaran tarafa aittir. Bazı durumlarda hakkaniyet ve somut durumdaki ispat zorluğu sebebiyle kanun, genel kuraldan ayrılarak ispat yükünü özel olarak düzenlemiştir.`,
  },
  { type: 'h3', text: '4. Delil İkame Yükü' },
  {
    type: 'p',
    text: `Delil ikame yükü, tarafları muhatap alarak yargılamanın başında ve sürecinde, ispatsız kalma nedeniyle davanın kaybedilmesi sonucundan kaçınmak için uyuşmazlık konusu vakıalar hakkında hangi tarafın delil getirebileceğini ve getirmesi gerektiğini gösterir. Yalnızca taraflarca hazırlama ilkesinin uygulandığı davalarda geçerlidir.`,
  },
  {
    type: 'p',
    text: `Soyut delil ikame yükü, yargılamadan önce ve yargılamanın başında hangi tarafın delil ikame yükünü taşıdığını ifade eder. Somut delil ikame yükü ise yargılama ilerledikçe delillerin değerlendirilmesi sonucunda davayı kaybetmemek için hangi tarafın delil getirmesi gerektiği sorusuna ilişkindir. Bu nedenle somut delil ikame yükü dinamik bir yapıya sahiptir.`,
  },
  { type: 'h3', text: 'İSPAT ÖLÇÜSÜ' },
  {
    type: 'p',
    text: `Bir vakıanın ispatlanmış sayılabilmesi için hakimin o vakıanın doğruluğu hakkında kanaate sahip olması gerekir. İspat ölçüsü, bir vakıayı düzenleyen normun, o vakıa hakkındaki ispatın yeterliliği konusunda beklediği düzeydir. İspat ölçüsü bazen tam aranırken bazen yaklaşık yeterli görülmektedir.`,
  },
  {
    type: 'p',
    text: `Hukukumuzda geçerli olan kesin delille ispat zorunluluğuna ilişkin kural ile ispat ölçüsü bir yönüyle objektif hale getirilmiştir. Kesin delille ispat ölçüsü tam ispattır. Kanunda açıkça belirtilen durumlar dışında hakim delilleri serbestçe değerlendirir. Hakim sadece iddiaya bakarak karar veremez; yaklaşık ispat derecesinde de olsa asgari ölçüde ispat faaliyeti zorunludur.`,
  },
  { type: 'h3', text: 'a. Tam İspat (Kesin İspat)' },
  {
    type: 'p',
    text: `Deliller ile vakıaların tam olarak kurulması ile sağlanan ispata tam ispat denir. Tam ispata göre hakimin, iddia edilen olayın vuku bulup bulmadığına tam olarak inanması ve bu konuda makul, kabul edilebilir bir şüphenin kalmaması gerekir. Tam ispat için hakim usulüne uygun, tam araştırma ve değerlendirme yapmalı; deliller ve beyanlar arasındaki çelişkiler giderilmelidir.`,
  },
  { type: 'h3', text: 'b. Yaklaşık İspat (Gerçeğe Yakın İspat)' },
  {
    type: 'p',
    text: `Yaklaşık ispatta hakim, ispat edilmek istenen olayı muhtemel görmelidir; ancak vakıanın gerçekleşmeyeceği ihtimali tamamen ortadan kalkmaz. İddianın doğru olma ihtimali, doğru olmama ihtimalinden fazla olmalıdır. Yaklaşık ispat özellikle acele karar verilmesi gereken hallerde ve geçici hukuki tedbirlerde söz konusu olur.`,
  },
  {
    type: 'p',
    text: `Hukukumuzda tam kanaat oluşumu (kesin ispat) kural, yaklaşık kanaat oluşumu ise istisnadır. Kanun açıkça veya dolaylı biçimde imkan tanımadıkça hakim tam ispatı aramalıdır.`,
  },
  { type: 'h3', text: 'İSPAT TÜRLERİ' },
  {
    type: 'p',
    text: `Hukuk Muhakemeleri Kanunu'nun önem verdiği ayrımlardan biri olan ispat türleri; asıl ispat, karşı ispat ve aksini ispat olmak üzere üçe ayrılır.`,
  },
  { type: 'h3', text: 'Asıl İspat' },
  {
    type: 'p',
    text: `Bir vakıaya dayanan ve o vakıayı ispat yükü altında bulunan tarafın yerine getirdiği ilk ispat faaliyetidir. Asıl ispatın hedefi, hakimde iddia olunan vakıaların gerçekleştiği ya da gerçekleşmediği konusunda kanaat uyandırmaktır.`,
  },
  { type: 'h3', text: 'Karşı İspat' },
  {
    type: 'p',
    text: `Asıl ispat faaliyeti henüz amacına ulaşmadan, hakimde oluşan geçici kanaati sarsmak veya çürütmek üzere karşı tarafça yapılan ispat faaliyetine karşı ispat denir. Amaç, asıl ispat yükünü taşıyan tarafça oluşturulan kanaati sarsmak ve hakimde şüphe uyandırmaktır.`,
  },
  { type: 'h3', text: 'Aksini İspat' },
  {
    type: 'p',
    text: `Asıl ispat konusunu oluşturan vakıaların ispat edilmiş sayılmasından sonra karşı tarafın, o vakıanın aksini ispata çalışmasıdır. Aksini ispat kural olarak yasal karinelerin çürütülmesine yönelik bir faaliyet olup aslında bağımsız bir asıl ispat niteliği taşır.`,
  },
  {
    type: 'p',
    text: `Aksini ispat ile karşı ispat arasındaki temel fark şudur: Karşı ispatta bir taraf asıl ispat faaliyeti yürütür, diğer taraf bunun doğru olmadığını göstermeye çalışır. Aksini ispata ise çoğu kez asıl ispat gerekmeksizin, karine gereğince var sayılan vakıanın gerçekte öyle olmadığının ortaya konması söz konusudur.`,
  },
  { type: 'h2', text: 'Sonuç' },
  {
    type: 'p',
    text: `HMK m.33 çerçevesinde hakimin hukuku re’sen uygulaması ilkesinin altlama faaliyeti ile yakından ilişkili olduğu açıktır. Hakimin olaya uygun hukuk normunu doğru tespit edememesi veya delillerin değerlendirilmesinde yapabileceği hatalar, altlama faaliyetinin yanlış yapılmasına ve hükmün maddi hakikati temsil etmekten uzaklaşmasına sebebiyet verebilir.`,
  },
  {
    type: 'p',
    text: `İspat hakkı, ispat yükü kuralından bağımsız bir yargısal temel haktır. İspat yükü esasen maddi hukuka ait bir mesele iken, ispat hakkı davanın her iki tarafına da ait usulî bir güvencedir.`,
  },
  {
    type: 'p',
    text: `İspat hakkının varlığı, HMK m.189'da öngörülen genel sınırlar yanında bazı usulî koşulların yerine getirilmesine bağlıdır. İspata yönelik menfaatin bulunması, vakıa iddialarının somutlaştırılması ve bu vakıaların uyuşmazlığın çözümünde etkili olması gerekir. Ayrıca ikame veya elde edilmek istenen delillerin mahkemece yerinde görülmesi de zorunludur.`,
  },
  {
    type: 'p',
    text: `Gerek vakıaların gerek delillerin yerindeliği konusunda hakimin takdir yetkisi mevcuttur. Aranan koşullar bulunmadığında ispat hakkı doğmayacağından ret kararı ispat hakkının ihlali sayılmaz. Buna karşılık koşullar mevcutken hakimin ispat hakkının gereğini yerine getirmesi bir ödevdir.`,
  },
  { type: 'h2', text: 'Kaynakça' },
  {
    type: 'p',
    text: `Alangoya, Yavuz / Yıldırım, M. Kamil / Deren-Yıldırım, Nevhis: Medeni Usul Hukuku Esasları, 7. Bası, İstanbul 2009.`,
  },
  { type: 'p', text: `Boran Güneysu, Nilüfer; Medeni Usul Hukukunda Karar, Ankara 2014.` },
  { type: 'p', text: `Bolayır, N.; Hukuk Yargılamasında Delillerin Toplanmasında Tarafların ve Hakimin Rolü, İstanbul: Vedat, 2014.` },
  { type: 'p', text: `Konuralp, H.; İspat Kurallarının Zorlanan Sınırları, 2. Bası, Ankara: Yetkin, 2009.` },
  { type: 'p', text: `Kuru, Baki: Hukuk Muhakemeleri Usulü, 6. Bası, C. II, İstanbul 2001.` },
  { type: 'p', text: `Murat Atalı / İbrahim Ermenek / Ersin Erdoğan, Medeni Usul Hukuku, 4. Baskı, Ankara 2021.` },
  { type: 'p', text: `Pekcanıtez, Hakan / Atalay Oğuz / Özekeş, Muhammet; Medeni Usul Hukuku, 14. Bası, Ankara 2013.` },
  { type: 'p', text: `Topuz, Gökçen: Medeni Usul Hukukunda Karinelerle İspat, Ankara 2012.` },
];

const hukumetSistemleriBlocks: ContentBlock[] = [
  { type: 'h2', text: 'HÜKÜMET SİSTEMLERİ' },
  { type: 'h3', text: 'I. Hükûmet Sistemlerinin Tasnifi' },
  {
    type: 'p',
    text: `Hükümet sistemlerinin tasnifi, kuvvetler ayrılığı ve birliğine göre yapılır. Bu sebepten dolayı direkt hükümet sistemlerine geçmek yerine öncelikle “kuvvetler ayrılığı teorisi”ni inceleyelim.`,
  },
  { type: 'h3', text: 'A. Kuvvetler Ayrılığı' },
  {
    type: 'p',
    text: `Kuvvetler ayrılığı teorisi, bir devlette yasama, yürütme ve yargı olmak üzere üç ayrı kuvvetin bulunduğunu ve bu kuvvetlerin birbirinden bağımsız olan üç ayrı organa verilmesi gerektiğini savunan bir teoridir. Bu düşünceler aslında bir nevi eski çağlarda Aristo tarafından da savunulmuştur. Aristo da devletin baskısından korunma metodu olarak kuvvetlerin ayrılması gerektiğini düşünür. Ancak kuvvetler ayrılığın ilkesinin temel hak ve özgürlüklerin garantisi olarak savunulması ilk önce J. Locke tarafından işlenmiştir. Fakat kuvvetler ayrılığı teorisinin gerçek kurucusu olarak Montesquieu kabul edilir.`,
  },
  {
    type: 'p',
    text: `Montesquieu’ye göre yasama kuvveti sınırlı bir kuvvettir; çünkü, kendi koyduğu kuralları uygulama yetkisi yoktur. Yürütme kuvveti de sınırlı bir kuvvettir; çünkü, yasamanın koyduğu kuralları yürütmektedir. Yargı da sınırlı bir kuvvettir; çünkü, hakimler kanunların sözlerini telaffuz eden birer ağızdan başka bir şey değildirler. Bu üç kuvvet kendi görevlerinin dışına çıkarlarsa, yani yasama kendi koyduğu kuralları yürütürse, yürütme ise yürüttüğü kuralları kendi koyarsa, yargı ise “kanun koyucunun ağzı” olmakla yetinmeyip kendisi yorum yoluyla yeni kurallar koymaya kalkarsa, o sistemde hürriyet ortadan kalkar1.`,
  },
  { type: 'h3', text: 'I. Kuvvetler Birliği Sistemleri' },
  {
    type: 'p',
    text: `Kuvvetler birliği sistemleri, yasama ve yürütme kuvvetlerinin aynı yerde birleştiği hükûmet sistemleridir. Bu birleşmede iki durum söz konusu olabilir. Yasama ve yürütme kuvvetleri, ya yürütme organında ya da yasama organında birleşir.`,
  },
  { type: 'h3', text: 'A. Yürütme Organında Birleşme' },
  {
    type: 'p',
    text: `İlk olarak birinci durumu ele alalım. Yani yürütme organı hem kanunları yürütmekte hem de yürüttüğü kanunları kendisi koymaktadır. Bu durumun mutlak monarşi ve diktatörlük olmak üzere iki şekli vardır.`,
  },
  { type: 'h3', text: '1. Mutlak Monarşi' },
  {
    type: 'p',
    text: `Mutlak monarşi, yasama ve yürütme kuvvetlerinin hükümdarda toplandığı bir hükümet sistemidir. Bu sistemde devlet içinde en yüksek otoriteye sahip ve tek olan hükümdar yasama ve yürütme yetkisinin yanında hatta yargı yetkisinin de sahibidir. Yani hükümdar kanun koymakta, kanunları uygulamakta ve ortaya çıkan uyuşmazlıkları çözmektedir.`,
  },
  {
    type: 'p',
    text: `“Meşruti monarşi”yi mutlak monarşi ile karıştırmamak gerekir. Meşruti monarşi, hükümdarın saltanat haklarının kanuni bir sınırlandırmaya tâbi tutulduğu monarşidir. Meşruti monarşi, kuvvetler birliği sistemi değil, bir kuvvetler ayrılığı sistemidir2.`,
  },
  { type: 'h3', text: '2. Diktatörlük' },
  {
    type: 'p',
    text: `Diktatörlük yasama yürütme ve yargı organlarının tek bir kişinin ya da tek bir grubun elinde toplandığı demokratik olmayan rejimlerdir. Bazen bazı diktatörlükler kendierinin demokratik olduklarını iddia ederler ve demokratikler süsü vermek adına düzmece seçimler ve halkoylamaları düzenlerler. Bu seçimlerde de sürekli olarak iktidarın başına da önceki iktidardaki kişi ya da grup gelir. Bu tür diktatörlüklere “plebisiter diktatörlükler” diyoruz.`,
  },
  {
    type: 'p',
    text: `Diktatörlükleri “totaliter diktatörlükler” ve “ otoriter diktatörlükler” olarak ikiye ayırıyoruz.`,
  },
  { type: 'h3', text: 'a) Totaliter Diktatörlük' },
  {
    type: 'p',
    text: `Juan Linz’den yararlanarak3 “totaliter diktatörlük (totalitarian dictatorship)”, anti plüralizmin, toptancı ideolojinin, kütlesel tek partinin ve yaygın terörün bulunduğu bir diktatörlük olarak tanımlanabilir. Fark edileceği gibi bu tanımda dört ayrı unsur vardır: Anti Plüralizm, toptancı ideoloji, kütlesel tek parti ve yaygın terör.`,
  },
  {
    type: 'p',
    text: `(1) Totaliter diktatörlük, devlet içinde iktidar gruplarının olmasına tahammül edemez ve toplum içindeki bütün çeşitli plüralist yapıları yok eder4.`,
  },
  {
    type: 'p',
    text: `(2) Totaliter diktatörlüklerde tek bir parti vardır.`,
  },
  {
    type: 'p',
    text: `(3) Totaliter diktatörlüklerde Marksizm ve Faşizm gibi toptancı ideolojiler vardır.`,
  },
  {
    type: 'p',
    text: `(4) Totaliter diktatörlüklerde diğer muhalif bireyleri ya da grupları bastırmak ve yok etmek adına keyfi bir zor kullanma (terör) görülür.`,
  },
  { type: 'h3', text: 'b) Otoriter Diktatörlük' },
  {
    type: 'p',
    text: `Otoriter diktatörlüklerde güç merkezidir ve bir kişide toplanmıştır. Halkın ve muhaliflerin düşüncelerini ifade etme özgürlüğü baskı altındadır. Amaçlarına ulaşabilmek için siyasi partileri ve toplu kalabalıkları kullanır ve insanlara yaptırmak istediği şeyleri yaptırır.`,
  },
  { type: 'h3', text: 'B. Yasama Organında Birleşme: Meclis Hükûmeti' },
  {
    type: 'p',
    text: `Yasama organının hem kanun yapıp hem de kendi yaptığı kanunları uyguladığı sisteme “meclis hükûmeti” sitemi veya “konvansiyonel sistem” denir. Bu sistemin ayırıcı özelliği, yasama ve yürütme yetkisinin mecliste toplanmasıdır. Bu sisteme güçler birliği ilkesi egemendir.`,
  },
  { type: 'h3', text: 'Meclis Hükûmeti Sisteminin Yasama Organına İlişkin Özellikleri' },
  {
    type: 'p',
    text: `1. Meclis hükûmeti Sistemi, meclisin üstünlüğü ilkesine dayanır.`,
  },
  {
    type: 'p',
    text: `2. Meclis hükûmeti sistemlerinde yasama organı her halükârda tek-meclislidir5. Parlamenter sistemlerde yasama, tek-meclisli olabileceği gibi iki meclisli de olabilir.`,
  },
  {
    type: 'p',
    text: `3. Meclis hükûmeti sistemlerine, meclis kendi kendini toplantıya çağırır6. Parlamenter sistemde ise meclisi yürütme organı da toplantıya çağırabilir.`,
  },
  {
    type: 'p',
    text: `4. Meclis hükûmeti sisteminde, meclis sürekli olarak çalışır7. Parlamenter sistemlerde ise meclis tatil yapabilir ama meclis hükûmeti sisteminde meclis tatil yapamaz.`,
  },
  {
    type: 'p',
    text: `5. Meclis hükûmeti istemlerinde, meclis ancak kendi kendini feshedebilir8. Parlamenter sistemlerde ise devlet başkanlarının da fesih hakları vardır.`,
  },
  { type: 'h3', text: 'Meclis Hükûmeti Sisteminin Yürütme Organına İlişkin Özellikleri' },
  {
    type: 'p',
    text: `Meclis hükûmeti sisteminde yürütme görevi bir kişiye değil, bir “heyet”e verilir. Bu heyetin üyeleri temel kamu hizmeti görevlerinin sağlanmasından sorumludurlar. İlk bakışta bu üyeler “bakan”a benzetilebilir. Ama parlâmenter hükûmet sistemindeki bakanlıklardan aşağıda görebileceğimiz gibi oldukça farklıdır. Bu nedenler bu heyete “ bakanlar kurulu” veya “hükûmet” ismi verilemez. Biz de bu heyete 1921 Anayasası dönemi Türkiye Büyük Millet Meclisi hükûmeti terimlerinden esinlenerek “icra heyeti”, bu heyetin üyelerine de “icra vekili” ismini vereceğiz9. Meclis hükûmeti sisteminin yürütmeye ilişkin olarak gösterdiği başlıca özellikler şunlardır:
`,
  },
  {
    type: 'p',
    text: `1. Meclis hükûmeti sistemlerinde devlet başkanı yoktur.`,
  },
  {
    type: 'p',
    text: `2. Meclis hükûmeti sistemlerinde bir başbakanlık makamı da yoktur.`,
  },
  {
    type: 'p',
    text: `3. İcra vekilleri heyetinin üyeleri meclis içinden ve meclis tarafından tek tek seçilir ve gerektiğinde de yine meclis tarafından serbestçe görevden alınırlar.`,
  },
  {
    type: 'p',
    text: `4. İcra vekilleri heyeti üyeleri meclise karşı bireysel olarak sorumludurlar. Bu sorumluluk mutlaktır. Meclis hükûmeti sistemlerinde yürütmeyle görevlendirilen bu kişi, bir uşağın efendisine hesap verdiği gibi, meclise hesap verir10.`,
  },
  {
    type: 'p',
    text: `5. Meclis hükûmet sistemlerinde, meclis icra vekillerine kendi işlerini yürütme işini nasıl yapacakları konusunda emir ve talimat verebilir11. Parlâmenter hükûmet sisteminde ise meclis, hükûmete emir ve talimat veremez.`,
  },
  { type: 'h3', text: 'Meclis Hükûmeti Sisteminde Yargının Durumu' },
  {
    type: 'p',
    text: `Meclis hükûmeti sistemlerinde yargının durumuna çok değinilmez çünkü yargı da meclise tâbidir. Bu sistemde tek egemenlik olduğuna ve egemenliğin de bölünemez bir şekilde tek temsilcisinin de meclis olduğundan yargı da teorik olarak meclise tâbidir. Örneğin Türkiye’de Birinci TBMM dönemi meclis hükûmeti sisteminde yargının da büyük ölçüde Meclise tâbi olduğu söylenebilir. Zira bu sistemde üyeleri Meclis tarafından kendi üyeleri arasından seçilen İstiklal Mahkemeleri kurulmuştur12.`,
  },
  { type: 'h3', text: 'Meclis Hükûmet Sisteminde Yürütmenin Üstünlüğü' },
  {
    type: 'p',
    text: `Meclis hükûmeti sisteminde icra vekillerinin (yürütme) geri planda kaldığı yani mecliste alınan kararlara sıkı sıkıya bağlı olduğu ve dıştan bir göz olarak meclisin âdeta uşakları gibi davrandıkları görülebilir. Yalnız bu zamana kadar görülen meclis hükûmeti sistemlerinin çoğunda bunun tam tersi gözlemlenir. Bunun sebebi mecliste yürütmeyle görevlendirilen icra heyetinin kısa bir süre içinde güçlenip meclis karşısında “fiili üstünlük” kurmalarıdır. Meclis hükûmeti sistemi uygulamada diktatörlüğe dönüşür. Gerçekten de meclis hükûmeti sisteminin uygulandığı yerlerde diktatörlük görülmüştür13. Örneğin 1792-1795 yılları arasında Fransa’da uygulanan konvansiyonel sistemde, meclise, Kamu Selameti Komitesi hâkim olmuş, terör estirmiştir14. 1921 Teşkilat-ı Esasiye Kanunu döneminde Türkiye’de uygulanan meclis hükûmeti sisteminde de, İcra Vekilleri Heyetinin Büyük Millet Meclisi karşısında kısa bir süre içinde üstünlüğü ele geçirdiği söylenebilir15.`,
  },
  { type: 'h3', text: 'II. KUVVETLER AYRILIĞI SİSTEMLERİ' },
  {
    type: 'p',
    text: `Kuvvetler ayrılığı sistemleri, yasama ve yürütme kuvvetlerinin ayrı ayrı organlara verildiği hükûmet sistemleridir. Kuvvetler ayrılığı sistemleri kendi içerisinde kuvvetler ayrılığının derecesine göre “sert kuvvetler ayrılığı sistemi” ve “yumuşak kuvvetler ayrılığı sistemi” olmak üzere ikiye ayrılır. Sert kuvvetler ayrılığı sistemi “başkanlık sistemi”, yumuşak kuvvetler ayrılığı sistemi ise “parlâmenter sistem”dir.`,
  },
  { type: 'h3', text: 'A. Sert kuvvetler Ayrılığı: Başkanlık Hükûmet Sistemi' },
  {
    type: 'p',
    text: `Sert kuvvetler ayrılığı sisteminde, yasama ve yürütme kuvvetleri birbirinden mutlak bir şekilde ayrılmış iki organa verilmiştir. Yani, yasama ve yürütme organları ayrı ayrı seçilir ve seçildikten sonra da birbirlerinin varlıklarına son veremezler. Sert kuvvetler ayrılığı sistemine genellikle “başkanlık sistemi ” denir. Bu sisteme “başkanlık sistemi” yerine, “başkanlık rejimi”, “başkanlık hükûmeti” veya kısaca “prezidansiyalizm” dendiği de olur. Başkanlık sisteminin en bilinen örneği Amerika Birleşik Devletleridir.`,
  },
  {
    type: 'p',
    text: `Başkanlık sistemi hangi özelliklerle veya hangi kriterlerle tanımlanmaktadır? Bu özellikleri Arend Lijphart’ın yaptığı gibi, “aslî özellikler” ve “tali özellikler” olarak ikiye ayırabiliriz16.`,
  },
  { type: 'h3', text: '1. Aslî Özellikler' },
  {
    type: 'p',
    text: `Başkanlık sistemini şu üç özellik ile tanımlayabiliriz: Başkanın doğrudan halk tarafından seçilmesi; Belli bir dönem için seçilen yürütmenin yasamanın güvenine dayanmaması; Yürütmenin tek kişiden oluşması.`,
  },
  { type: 'h3', text: 'a. Yürütmenin tek kişiden oluşması:' },
  {
    type: 'p',
    text: `Başkanlık sisteminde yürütme tek kişiden oluşur. O da “başkan”dır. Yani başkanlık sisteminde yürütmede ”tek-başlılık” vardır. Başkanlık sisteminde, başkanın dışında sembolik bir devlet başkanlığı makamı yoktur. Başkan aynı zamanda devlet başkanıdır. Diğer yandan, başkanlık sisteminde, parlâmenter sistemlerde görülen tipte bir “kabine”, yani “kolektif” bir yürütme organı yoktur17. Bütün yürütme yetkisinin sahibi tek başına başkandır. Yürütme birimlerinin yani bakanlıkların başı durumunda olan kişiler (bakanlar), parlâmenter sistemlerdeki ”bakanlar” gibi değil, başkanın yardımcıları konumundadırlar. Amerika Birleşik Devletleri‘nde bunlara “sekreter“ adı verilir. Biz de bu yüzden bunlara sekreter diyeceğiz. Bunlar, yani sekreterler, başkanın emir ve talimatı dışına çıkamazlar. Bu sekreterler başkan tarafından atanıp yine başkan tarafından görevden alınırlar. Aynı zamanda sekreterler, yasama organına karşı değil, başkana karşı sorumludurlar. Yani başkanlık sisteminde, başkan, hem devlet başkanı, hem de hükûmet başkanıdır18.`,
  },
  {
    type: 'p',
    text: `Başkanlık sistemlerinde başkam ve sekreterleri bir araya gelip toplanabilir ve yürütme işlerini görüşebilirler. Hatta Amerika Birleşik Devletleri’nde başkan ve sekreterlerinin toplanmasına “kabine” adı verilir. Ama bu kabine, parlâmenter sistemde olan kabineden oldukça farklıdır. Çünkü bu kabine daha çok bir istişare alanı gibi kullanılır. Ancak onların görüşleri başkanı bağlamaz. Kabinede karar alma yetkisi her zaman başkana aittir. Amerika Birleşik Devletleri tarihinde en çok bilinen olay bu durumu tipik bir şekilde göstermektedir: ABD başkanlarından (1861-1865) Abraham Lincoln kabineye bir öneri getirir. Bu öneriye kendi dışındaki herkes karşı çıkar. Sonuçta Lincoln, “yedi hayır, bir evet; evetler kazandı” diyerek toplantıyı bitirmiştir19.`,
  },
  { type: 'h3', text: 'b. Başkan Halk Tarafından Seçilir:' },
  {
    type: 'p',
    text: `Başkanlık sistemlerinde yürütmenin başı olan başkan, doğrudan doğruya ya da ona benzer şekillerle halk tarafından, belli bir dönem için seçilir. Normal olarak süresi dolmadan da yasama organı tarafından görevinden alınamaz. Bu şu anlama gelmektedir yasama ve yürütme organları yasallıklarını ayrı ayrı halktan alırlar. Her ikisi de halkın oyuna dayanır. Dolayısıyla biri diğerine göre daha yasal değildir. Bu nedenle, başkanlık sisteminde, yasama ve yürütme kuvvetleri arasındaki ayrılık, daha bu kuvvetlerin kaynağından başlamaktadır20. Başkanın doğrudan doğruya halk tarafından seçilmesi ona belli bir otorite verir.`,
  },
  { type: 'h3', text: 'c. Başkan Yasamanın Güvenine Dayanmaz:' },
  {
    type: 'p',
    text: `Başkanlık sisteminde yürütmenin başı, yani başkan, halk tarafından belli bir süre için seçilir. Görev süresi bitene kadar görevde kalır. Başkanın bu süre içinde görevde kalması yasamanın güvenine dayanmaz. Başkan yasama organına karşı sorumlu değil, yalnız kendisini seçen halka karşı sorumludur.`,
  },
  { type: 'h3', text: '2. Tali Özellikler' },
  {
    type: 'p',
    text: `Şimdi de başkanlık sisteminin tali özelliklerini görelim. Hemen belirtelim ki yukarıdaki üç aslî özelliği taşıyan bir hükûmet sistemi, aşağıdaki tali özelliklerden birisini taşımıyorsa, sırf bu nedenle, başkanlık sistemi olmaktan çıkmaz.`,
  },
  { type: 'h3', text: 'a. Başkan Yasama Organını Feshedemez:' },
  {
    type: 'p',
    text: `Yasama ve yürütme kuvvetleri arasındaki mutlak ayrılık, yürütme organının yasama organının çalışmalarına müdahale edememesini gerektirir. Bu nedenle başkanlık sisteminde, başkan ve sekreterler yasama organının çalışmasına katılamaz. Yani başkan ve sekreterler, yasama organlarının toplantılarına katılıp görüş bildiremezler. Başkanın da kanun teklif etme yetkisi yoktur. Başkanın yasama organının toplanmasını engelleme hakkı, toplanmış meclisin toplantılarını kapatma, meclisi tatile sokma yetkisi yoktur21.`,
  },
  { type: 'h3', text: '3. Başkanlık Sisteminde Yasama ve Yürütme Arasında Karşılıklı Etkileşim Araçları' },
  {
    type: 'p',
    text: `Başkanlık sistemi, bir “sert” kuvvetler ayrılığı sistemidir. Bu sistemde yasama ve yürütme kuvvetleri birbirinden her bakımından bağımsız iki ayrı organa verilmiştir. Bu organlar ayrı ayrı seçilmekte ve seçildikten sonra da birbirlerinin varlıklarına son verememektedirler. Keza, bu organların birbirinin faaliyetlerine, yetkilerine karışması da mümkün değildir. Ne var ki, bu sistem tam olarak uygulanırsa ve yasama ve yürütme kuvvetleri arasında uyum ve karşılıklı işbirliği olmazsa, devlet hayatı felce uğrar22. İşte bu nedenle, başkanlık sistemlerinde de, yasama ve yürütme kuvvetleri arasında birtakım karşılıklı etkileşim araçları öngörülmüştür. Amerika Birleşik Devletleri örneğinde şu karşılıklı etkileşim araçları vardır23:`,
  },
  { type: 'h3', text: 'a. Atamalar' },
  {
    type: 'p',
    text: `Atamalar yürütmenin (Başkanın) elindedir. Ancak bazı önemli atamalar Senatonun onayına tâbidir.`,
  },
  { type: 'h3', text: 'b. Milletlerarası Antlaşmaların Onaylanması' },
  {
    type: 'p',
    text: `Amerika Birleşik Devletleri’nde dış ilişkileri yürütmek, milletlerarası antlaşmalar yapmak yetkisi Başkana aittir. Ancak yapılan antlaşmaların geçerliliği Senato tarafından 2/3 çoğunlukla onaylanmalarına bağlıdır24.`,
  },
  { type: 'h3', text: 'c. Meclis Araştırması' },
  {
    type: 'p',
    text: `Kongrenin yürütme alanına giren faaliyetlerde bir araştırma yapması mümkündür. Ancak, araştırma olumsuz sonuçlansa bile, Kongre, başkanı görevden alamaz.`,
  },
  { type: 'h3', text: 'd. Suçlama' },
  {
    type: 'p',
    text: `“Suçlama”, Başkanın cezaî sorumluluğuna yol açabilecek bir yasama meclisi soruşturmasıdır25. Özenle belirtmek gerekir ki, suçlama usûlü, siyasi nitelikte değil, cezai nitelikte bir usûldür.`,
  },
  { type: 'h3', text: 'e) Bütçe' },
  {
    type: 'p',
    text: `Yürütmenin bütçeye ihtiyacı vardır. Kongre, Başkanın bütçesini onaylamayabilir veya kısabilir. İyi bir bütçeye ihtiyacı olan Başkan, Kongre ile iyi geçinmek zorundadır.`,
  },
  { type: 'h3', text: 'f) Veto26' },
  {
    type: 'p',
    text: `Kongrenin yukarıdaki önemli yetkilerine mukabil, Başkanın da Kongreye karşı kullanabileceği çok önemli bir yetkisi vardır: Veto. Başkan, Kongrenin kabul ettiği kanunları veto edebilir27.`,
  },
  { type: 'h3', text: 'g) Mesaj28' },
  {
    type: 'p',
    text: `Başkanın kanun teklif etme yetkisi yoksa da Kongreye “mesaj hakkı” vardır. Bu mesajlardan en önemlisi Anayasanın 2’nci maddesinin 3’üncü bölümünde geçen “Birliğin durumu”na ilişkin mesajdır. Başkan bu ve başka mesajlarıyla Kongreye istediği kanunları çıkarmasını telkin edebilir29.`,
  },
  { type: 'h3', text: '4. Başkanlık Sisteminin Güçlü ve Zayıf Yanları' },
  {
    type: 'p',
    text: `Her siyasal sistem gibi başkanlık sisteminin de güçlü ve zayıf yanları vardır. Şimdi bunları inceleyelim:`,
  },
  { type: 'h3', text: 'a) Güçlü Yanları' },
  {
    type: 'p',
    text: `1. Başkanlık sistemi istikrarlı bir yönetime yol açar. Çünkü başkan belli bir süre için seçilir ve güvensizlik oyu almadığı takdirde görevinden alınamaz. Buradan başkanlık sisteminin hükûmet krizlerini önlediği yorumu çıkarılabilir.
2. Başkanlık sistemi güçlü bir yönetim yaratır30. Çünkü devlet, tek kişi tarafından daha güçlü bir şekilde yönetilir. Ayrıca halk tarafından seçilen başkanın otoritesi oldukça yüksektir. Aynı zamanda görev süresi içinde görevden alınamayacağını bilen başkan, politikalarını korkusuzca uygulayabilir.
3. Başkanlık sistemi daha demokratik bir yönetim yaratır31. Çünkü başkanın doğrudan doğruya halk tarafından seçilmesi, başkanlık sistemine tartışılmaz bir demokratik nitelik kazandırır. Ayrıca yürütme tek kişinin (başkanın) elinde toplandığından olası bir durumda halk kimden hesap soracağını bilir.`,
  },
  { type: 'h3', text: 'b) Zayıf Yanları' },
  {
    type: 'p',
    text: `1. Başkanlık sistemi rejim krizlerine yol açabilir. Yasama ve yürütme organları karşılıklı olarak birbirlerinin hukukî varlığına son veremediklerine göre, eğer bir kriz çıkarsa, bu krizin seçime gidilerek çözülme imkânı yoktur. Demokratik olmayan yollarla, askeri darbeyle, çözülmesi, ihtimal dahilindedir.`,
  },
  {
    type: 'p',
    text: `2. Başkanlık sistemi katıdır. Bir kere seçilmiş başkan daha sonra halkın desteğini yitirse bile görevden alınamaz. Sistem, bu katılık yüzünden gelecek seçimlere kadar kilitlenebilir.`,
  },
  {
    type: 'p',
    text: `3. Başkanlık sistemi siyasal kutuplaşmaya yol açabilir. Başkanlık sisteminde kazanan her şeyi kazanmakta ve kaybeden her şeyi kaybetmektedir. Bu da gerilimlerin olmasına yol açmaktadır.`,
  },
  {
    type: 'p',
    text: `4. Başkanlık sistemi iktidarın kişiselleşmesine yol açabilir. Yürütme organının tek kişiden oluşması ve belli bir süre boyunca görevden alınamayacak olması başkanın kendisini âdeta bir “kral” gibi hissetmesine yol açabilir.`,
  },
  { type: 'h3', text: '5. Yarı-Başkanlık Sistemi' },
  {
    type: 'p',
    text: `Cumhurbaşkanının halk tarafından seçildiği bir parlâmenter sisteme yarı-başkanlık sistemi denir32.`,
  },
  { type: 'h3', text: 'a) İki-Başlı Yürütme' },
  {
    type: 'p',
    text: `Bir tarafta cumhurbaşkanı diğer tarafta ise hükûmet (bakanlar kurulu) bulunur. Bu bakımdan bu sistem parlâmenter sisteme benzetilir.`,
  },
  { type: 'h3', text: 'b) Seçim Usûlü' },
  {
    type: 'p',
    text: `Başkanlık sisteminde olduğu gibi cumhurbaşkanı doğrudan doğruya halk tarafından seçilir.`,
  },
  { type: 'h3', text: 'c) Yasamanın Güveni' },
  {
    type: 'p',
    text: `Oysa yarı-başkanlık sisteminde yürütme organının bir kolu olan bakanlar kurulu yasama organına karşı sorumludur. Yasama organı kabineyi, güvensizlik oyuyla görevden alabilir.`,
  },
  {
    type: 'p',
    text: `Sert kuvvetler ayrılığı sistemini gördükten sonra şimdi yumuşak kuvvetler ayrılığını yani parlâmenter sistemi görelim.`,
  },
  { type: 'h3', text: 'B. Yumuşak Kuvvetler Ayrılığı: Parlâmenter Hükûmet Sistemi' },
  {
    type: 'p',
    text: `Bu sistemde yasama ve yürütme yetkileri kural olarak iki ayrı organa verilmişse de, bu organlar birbirinden tam olarak bağımsız değildir. Bu organlar karşılıklı olarak birbirlerinin hukukî varlıklarına da son verebilirler. Bu sistemde, bu organlar arasında karşılıklı iş birliği vardır. Bu nedenle “kuvvetlerin işbirliği” sistemi de denir.`,
  },
  {
    type: 'p',
    text: `Parlâmenter sistemin ayırıcı özelliklerini “aslî özellikler” ve “tali özellikler” olarak ikiye ayırıp inceleyebiliriz.`,
  },
  { type: 'h3', text: '1. Asli Özellikler' },
  {
    type: 'p',
    text: `Parlâmenter sistemin üç temel ayırıcı özelliği vardır: Hükûmet yasama organından kaynaklanır; yani yasama organı tarafından seçilir. Hükûmet yasama organına karşı sorumludur. Yürütme ikili yapıdadır33.`,
  },
  { type: 'h3', text: 'a. Yürütmenin Yapısı: İki-Başlılık' },
  {
    type: 'p',
    text: `Parlâmenter hükûmet sistemlerinde yürütme organı “iki-başlı)”dır. Bir yanda “devlet başkanı”, diğer yanda ise “bakanlar kurulu” vardır. Devlet başkan, monarşik parlâmenter sistemlerde “kral”, cumhuriyet tipi parlâmenter sistemlerde ise “cumhurbaşkanı” dır. Gerek kral olsun, gerekse cumhurbaşkanı olsun, devlet başkanı yasama organı karşısında sorumsuzdur34 . Yürütme organının diğer kanadında ise “bakanlar kurulu” bulunur. İşte yürütme organının bu ikinci kanadı yasama organı karşısında sorumludur. Bakanlar kurulunun başlıca görevi ülkenin genel siyasetini belirlemek ve hükûmet etmektir.`,
  },
  { type: 'h3', text: 'b. Yürütmenin Göreve Gelişi' },
  {
    type: 'p',
    text: `Parlâmenter hükûmet sistemlerinde yürütme organı doğrudan doğruya halk tarafından seçilmez. Yürütme organının birinci kanadı olan “devlet başkanı”, monarşik parlâmenter sistemlerde, “veraset” yoluyla belirlenir. Yani devlet başkanlığı (krallık) babadan oğula irsî olarak intikal eder. Cumhurî parlâmenter sistemlerde ise devlet başkanı, doğrudan doğruya halk tarafından değil, yasama organı tarafından seçilir35.`,
  },
  {
    type: 'p',
    text: `Parlâmenter sistemlerde yürütme organının ikinci kanadı olan kabine de doğrudan doğruya halk tarafından seçim usûlüyle değil, yasama organı tarafından belirlenir. Kabine parlâmentonun içinden çıkar; ondan kaynaklanır. Kabinenin parlamentodan çıkması, ondan kaynaklanması konusunda çeşitli usûller vardır. Örneğin Almanya’da, İrlanda’da Japonya’da başbakan doğrudan doğruya yasama organı tarafından seçilir36. Diğer bir kısım ülkelerde ise, devlet başkanı (kral veya cumhurbaşkanı), parlâmentodan güven oyu alabilecek bir kişiyi (örneğin çoğunluk partisinin liderini) başbakan olarak atar. Bu kişi diğer bakanları seçer. Başbakan tarafından seçilen kişiler kral veya cumhurbaşkanı tarafından bakan olarak atanırlar. Daha sonra bu şekilde kurulmuş olan kabine, yasama organından güven ister. Bu nedenle, parlâmenter hükûmet sisteminde her halükârda, kabinenin nihaî tahlilde yasama organı tarafından belirlendiğini söyleyebiliriz37.`,
  },
  { type: 'h3', text: 'c. Sorumluluk: Yasamanın Güvenine Dayanma' },
  {
    type: 'p',
    text: `Parlâmenter hükûmet sistemlerinde, yürütmenin bir kanadı olan devlet başkanı (kral veya cumhurbaşkanı) yasama organı karşısında sorumsuzdur. Ancak, yürütmenin ikinci kanadı olan kabine (başbakan ve bakanlar) yasama organı karşısında sorumludur. Parlâmenter sistemde, kabine (hükûmet, bakanlar kurulu), yasama organının “güven”ine dayanır. Yasama organı güvensizlik oyuyla kabineyi görevden alabilir. Bu şu anlama gelir: Yasama organı kabine hakkında “güvensizlik oyu” vermişse, bütün kabine olduğu gibi düşer. Görevini iyi yapmış olduğu düşünülen bakanlar da görevlerini kaybederler.`,
  },
  { type: 'h3', text: '2. Tali Özellikler' },
  {
    type: 'p',
    text: `Yukarıdaki üç özelliği taşıyan sistemlere rahatlıkla parlâmenter sistem diyebiliriz. Bu üç özelliği taşıyan sistemi tali özelliklerden birini taşımıyorsa, parlâmenter sistem olmaktan çıkmaz.`,
  },
  { type: 'h3', text: 'a. Yürütme Organı, Yasama Organını Feshedebilir' },
  {
    type: 'p',
    text: `Parlâmenter hükûmet sistemlerinde, yasama organının hükûmeti güvensizlik oyuyla düşürebilmesine paralel olarak, yürütme organının da yasama organı üzerinde “fesih yetkisi” vardır.`,
  },
  { type: 'h3', text: 'b. Aynı Kişi Hem Yürütmede, Hem de Yasamada Görev Alabilir' },
  {
    type: 'p',
    text: `Yani bir kişi hem parlâmento üyesi, hem de başbakan veya bakan olabilir. Keza birçok parlâmenter sistem de, başbakanın parlâmento üyesi olması zorunludur.`,
  },
  { type: 'h3', text: 'c. Bakanlar Kurulu Yasama Organının Çalışmalarına Katılır' },
  {
    type: 'p',
    text: `Parlâmenter sistemlerde, bakanlar kurulunun kanun teklif etme hakkı vardır. Keza, başbakan ve bakanlar parlâmentoya girme hakkı, orada oturma, tartışmaları izleme, söz alma haklarına sahiptir38.`,
  },
  { type: 'h3', text: '3. Başkanlık Sisteminde Yasama ve Yürütme Arasında Karşılıklı Etkileşim Araçları' },
  {
    type: 'p',
    text: `Parlâmenter sistemde, yasama ve yürütme kuvvetleri kaçınılmaz olarak işbirliği içindedirler. Kaldı ki, parlâmenter hükûmet sistemlerinde, yukarıdaki özelliklere ek olarak çeşitli “etkileşim araçları” da vardır39. Bu araçlar şunlardır:`,
  },
  { type: 'h3', text: 'a. Kanun Yapımına Yürütmenin Katılması' },
  {
    type: 'p',
    text: `Yürütme organı kanun önerme hakkına sahiptir. Genellikle devlet başkanlarına “geciktirici veto” niteliğinde, kanunları “bir kez daha görüşülmek üzere geri gönderme” yetkisi tanınmaktadır. Dolayısıyla devlet başkanı beğenmediği kanunların yürürlüğe girmesini geciktirebilir.`,
  },
  { type: 'h3', text: 'b. Bütçe' },
  {
    type: 'p',
    text: `Bütçeyi yürütme organı hazırlar. Ama yasama organı kabul eder.`,
  },
  { type: 'h3', text: 'c. Uluslararası Antlaşmalar' },
  {
    type: 'p',
    text: `Uluslararası antlaşmalar yapma yetkisi yürütme organına aittir. Bununla birlikte bu antlaşmaların onaylanması yetkisi yasama organına aittir.`,
  },
  { type: 'h3', text: 'd. Denetim' },
  {
    type: 'p',
    text: `Yasama organı, soru, meclis araştırması, meclis soruşturması, gensoru gibi yollarla yürütmeyi denetleyebilir.`,
  },
  { type: 'h3', text: '4. Değerlendirme: Parlâmenter Sistemin Güçlü ve Zayıf Yanları' },
  {
    type: 'p',
    text: `Parlâmenter hükûmet sisteminin burada güçlü ve zayıf yanlarını göreceğiz. Hemen belirtelim ki, birbirinin tersi hükûmet sistemleri olarak, yukarıda başkanlık sisteminin zayıf yanları olarak gördüğümüz özellikler, parlâmenter sistemin güçlü yanları; başkanlık sistemi güçlü yanları olarak gördüğümüz özellikler ise parlâmenter sistemin zayıf yanlarıdır. Bu yüzden kısaca bahsetmemiz yeterlidir.`,
  },
  { type: 'h3', text: 'a) Parlâmenter Sistemin Güçlü Yanları' },
  {
    type: 'p',
    text: `1. Parlâmenter sistemde tıkanıklıkların çözüm yolu vardır.`,
  },
  {
    type: 'p',
    text: `2. Parlâmenter sistem esnektir.`,
  },
  {
    type: 'p',
    text: `3. Parlâmenter sistem kutuplaşmaya yol açmaz.`,
  },
  {
    type: 'p',
    text: `4. Parlâmenter sistemlerde devlet başkanının ılımlılaştırıcı ve uzlaştırıcı bir etkisi vardır40.`,
  },
  { type: 'h3', text: 'b) Parlâmenter sistemin Zayıf Yanları' },
  {
    type: 'p',
    text: `1. Parlâmenter sistem istikrarsız hükûmetlere yol açar.`,
  },
  {
    type: 'p',
    text: `2. Parlâmenter sistem zayıf hükûmetlere yol açar.`,
  },
  {
    type: 'p',
    text: `3. Parlâmenter sistem düşük nitelikli bir demokrasiye yol açar.`,
  },
  { type: 'h3', text: '6. Rasyonelleştirilmiş Parlâmentarizm' },
  {
    type: 'p',
    text: `Parlâmenter hükûmet sistemlerinin önemli bir kısmında zayıf ve istikrarsız hükûmetler olmuştur. İşte, bazı parlâmenter sistemlerde hükümete istikrar ve güç kazandırmak amacıyla birtakım usûller öngörülmüştür. Bu usûlleri barındıran parlâmenter sistemlere genel olarak “rasyonelleştirilmiş parlâmentarizm” denir.`,
  },
  {
    type: 'p',
    text: `Rasyonelleştirilmiş parlâmentarizm başlıca araçları şunlardır: Güvensizlik önergesi verme hakkının sınırlandırılması, serinleme sürelerinin öngörülmesi, güvensizlik oyunda üye tamsayısının salt çoğunluğunun aranması, güven oylamalarında yalnızca güvensizlik oylarının sayılması, yapıcı güvensizlik oyu, fesih tehdidi altında güvenoyu, bu araçlar hükûmetin düşürülmesini zorlaştırırlar41.`,
  },
  {
    type: 'p',
    text: `Rasyonelleştirilmiş parlâmentarizmde, parlâmento tarafından düşürülemeyen bir hükûmetin parlâmentoda çoğunluğa sahip olmaması mümkündür. Zira, yukarıdaki araçlar sayesinde parlâmentoda çoğunluğa sahip olmayan bir hükûmet düşmeyebilir. Ama bu hükûmetin parlâmentodan kanun çıkartması imkansızdır. Bu hükûmetin kanun tasarıları pek muhtemelen parlâmento tarafından reddedilecektir. O halde, hükûmeti sadece ayakta tutmakla iş bitmemekte, hükûmete, parlâmentoyu zorlayabilecek, gerektiğinde parlâmentoyu aşabilecek, anayasal araçlar da vermek gerekmektedir. İşte rasyonelleştirilmiş parlâmentarizm düşüncesinden ilham alan bazı anayasalar, parlâmentoda sağlam bir çoğunluğa sahip olmayan hükûmetlere, hazırladıkları kanun tasarılarının kabul edilmesini sağlayacak anayasal mekanizmalar da getirmektedirler. Bunlardan bazıları şunlardır: Kanun tasarılarının blok hâlinde oylanması, “Giyotin” usûlü, teşriî zorunluluk hâli, vs.`,
  },
  { type: 'h3', text: 'Atıf Notları' },
  { type: 'p', text: `ÖZBUDUN Ergun, 1921 Anayasası, Atatürk Kültür, Dil ve Tarih Yüksek Kurumu, Atatürk Araştırma Merkezi, 1. Baskı, 1992, Ankara` },
  { type: 'p', text: `ULUŞAHİN Nur, Başkanlık Sistemi, Yetkin Yayınları, Birinci Baskı, 1999, Ankara` },
  { type: 'p', text: `ARSEL İlhan, Anayasa Hukuku: Demokrasi, Güven Yayınları, İkinci Baskı, 1955, Ankara` },
  { type: 'p', text: `1 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.221.` },
  { type: 'p', text: `2 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., S.224.` },
  { type: 'p', text: `3 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., S.225. ; LINZ Juan, Totaliter ve Otoriter Rejimler, Çev. Ergun Özbudun, Ankara, Siyasi İlimler Türk Derneği Yayınları, Tarihsiz(1984), s.25 vd.` },
  { type: 'p', text: `4 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.225.` },
  { type: 'p', text: `5 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.27.` },
  { type: 'p', text: `6 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.27.` },
  { type: 'p', text: `7 ÖZBUDUN Ergun, 1921 Anayasası, op. cit., s.55.` },
  { type: 'p', text: `8 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.27.` },
  { type: 'p', text: `9 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.227.` },
  { type: 'p', text: `10 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.227.` },
  { type: 'p', text: `11 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.27. ; ÖZBUDUN Ergun, 1921 Anayasası, op. cit., s.52.` },
  { type: 'p', text: `12 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.227.` },
  { type: 'p', text: `13 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.28.` },
  { type: 'p', text: `14 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit.,, s.228. ; CADART Claude, op. Cit., c.I, s.469-470` },
  { type: 'p', text: `15 ÖZBUDUN Ergun, 1921 Anayasası, op. cit., s.73-74.` },
  { type: 'p', text: `16 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.231. ; LIJPHART Arend, Çağdaş Demokrasiler, op. cit., s.62-67.` },
  { type: 'p', text: `17 ARSEL İlhan, Anayasa Hukuku: Demokrasi, op. cit., s.204.` },
  { type: 'p', text: `18 ULUŞAHİN Nur, Başkanlık Sistemi, op. cit., s.42.` },
  { type: 'p', text: `19 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.42.` },
  { type: 'p', text: `20 ULUŞAHİN Nur, Başkanlık Sistemi, op. cit., s.32.` },
  { type: 'p', text: `21 ARSEL İlhan, Anayasa Hukuku: Demokrasi, op. cit., s.204.` },
  { type: 'p', text: `22 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.235.` },
  { type: 'p', text: `23 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.235.` },
  { type: 'p', text: `24 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit.,, s.235.` },
  { type: 'p', text: `25 GÖZLER Kemal, “Hükümet Sistemleri”, Anayasa Hukukunun Genel Esasları, op. cit., s.235.` },
  { type: 'p', text: `26 GÖZLER Kemal, Devlet Başkanları, op. cit., s.34-36.` },
  { type: 'p', text: `27 GÖZLER Kemal, “Hükümet Sistemleri”, Anayasa Hukukunun Genel Esasları, op. cit., s.236.` },
  { type: 'p', text: `28 TURHAN Mehmet, Hükümet Sistemleri, op. cit., s.35.` },
  { type: 'p', text: `29 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.236.` },
  { type: 'p', text: `30 ULUŞAHİN Nur, Başkanlık Sistemi, op. cit., s.99-142.` },
  { type: 'p', text: `31 ULUŞAHİN Nur, Başkanlık Sistemi, op. cit., s.142-159.` },
  { type: 'p', text: `32 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.241.` },
  { type: 'p', text: `33 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.243.` },
  { type: 'p', text: `34 GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, op. cit., s.589.` },
  { type: 'p', text: `35 GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, op. cit., s.593.` },
  { type: 'p', text: `36 GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, op. cit., s.593. ; LIJPHART Arend, Çağdaş Demokrasiler, op. cit., 1988, s.45.` },
  { type: 'p', text: `37 GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, op. cit., s.593.` },
  { type: 'p', text: `38 GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, op. cit., s.596.` },
  { type: 'p', text: `39 GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, op. cit., s.596.` },
  { type: 'p', text: `40 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.248.` },
  { type: 'p', text: `41 GÖZLER Kemal, Anayasa Hukukunun Genel Esasları, op. cit., s.255-257.` },
  { type: 'h2', text: 'KAYNAKÇA' },
  { type: 'p', text: `GÖZLER Kemal, Anayasa Hukukunun Genel Teorisi, Cilt I, Ekin Yayınları, 2010, Bursa` },
  { type: 'p', text: `GÖZLER Kemal, Anayasa Hukukuna Giriş, Bursa Ekin Kitabevi Yayınları, Onbirinci Baskı, 2019` },
  { type: 'p', text: `TURHAN Mehmet, Hükümet Sistemleri, Dicle Üniversitesi Basımevi, Dokuzuncu Baskı, 1989, Diyarbakır` },
];

export function getPostContent(slug: string): PostContent | null {
  switch (slug) {
    case 'hukumet-sistemleri-baskanlik-parlamenter':
      return { blocks: hukumetSistemleriBlocks };
    case 'ispat-hukukuna-dair-genel-degerlendirmeler':
      return { blocks: ispatBlocks };
    case 'ceza-hukukunda-savunma-hakki':
      return { blocks: cezaBlocks };
    default:
      return null;
  }
}

const trMap: Record<string, string> = { ı: 'i', ş: 's', ğ: 'g', ü: 'u', ö: 'o', ç: 'c', İ: 'i' };

export function slugToId(text: string): string {
  let s = text.toLowerCase();
  Object.entries(trMap).forEach(([from, to]) => { s = s.replace(new RegExp(from, 'g'), to); });
  return s
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export interface TOCEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export function getTOCFromBlocks(blocks: ContentBlock[]): TOCEntry[] {
  return blocks
    .filter((b): b is ContentBlock & { type: 'h2' | 'h3' } => b.type === 'h2' || b.type === 'h3')
    .map((b) => ({
      id: slugToId(b.text),
      text: b.text,
      level: b.type === 'h2' ? 2 : 3,
    }));
}

export function getFullTextFromBlocks(blocks: ContentBlock[]): string {
  return blocks.filter((b) => b.type === 'p').map((b) => (b as { text: string }).text).join(' ');
}
