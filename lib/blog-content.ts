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
  { type: 'h2', text: 'ÇİNDEKİLER' },
  {
    type: 'p',
    text: `BİRİNCİ BÖLÜM: HÜKÛMET SİSTEMLERİ. Hükûmet sistemleri; kuvvetler birliği ve kuvvetler ayrılığı ekseninde incelenmektedir. Kuvvetler birliği içinde yürütmede birleşme (mutlak monarşi, diktatörlük) ve yasamada birleşme (meclis hükûmeti) yer alırken; kuvvetler ayrılığı içinde sert ayrılık (başkanlık) ve yumuşak ayrılık (parlâmenter sistem) ele alınmaktadır. Ayrıca yarı-başkanlık ve rasyonelleştirilmiş parlâmentarizm başlıklarına da yer verilmektedir.`,
  },
  { type: 'h2', text: 'HÜKÛMET SİSTEMLERİ' },
  { type: 'h3', text: 'I. Hükûmet Sistemlerinin Tasnifi' },
  {
    type: 'p',
    text: `Hükûmet sistemlerinin tasnifi, kuvvetler ayrılığı ve kuvvetler birliği esasına göre yapılır. Bu nedenle doğrudan sistem tiplerine geçmeden önce kuvvetler ayrılığı teorisi değerlendirilmelidir.`,
  },
  { type: 'h3', text: 'A. Kuvvetler Ayrılığı' },
  {
    type: 'p',
    text: `Kuvvetler ayrılığı teorisi; yasama, yürütme ve yargı kuvvetlerinin ayrı organlara verilmesini savunur. Bu yaklaşımın düşünsel kökenleri Aristo'ya kadar uzanır; temel hak ve özgürlüklerin güvencesi boyutu Locke ile gelişir; teorinin sistematik kurucusu ise Montesquieu kabul edilir. Montesquieu'ye göre bu kuvvetlerin kendi sınırlarının dışına çıkması hâlinde hürriyet ortadan kalkar.`,
  },
  { type: 'h3', text: 'I. Kuvvetler Birliği Sistemleri' },
  {
    type: 'p',
    text: `Kuvvetler birliği sistemlerinde yasama ve yürütme aynı yerde birleşir. Birleşme ya yürütme organında ya da yasama organında gerçekleşebilir.`,
  },
  { type: 'h3', text: 'A. Yürütme Organında Birleşme' },
  { type: 'h3', text: '1. Mutlak Monarşi' },
  {
    type: 'p',
    text: `Mutlak monarşi, yasama ve yürütme kuvvetlerinin hükümdarda toplandığı sistemdir. Hükümdar çoğu durumda yargı fonksiyonunu da fiilen kullanır; böylece kanun koyma, uygulama ve uyuşmazlık çözümü tek elde toplanır. Meşruti monarşi ise saltanat yetkilerinin hukukla sınırlandığı farklı bir modeldir.`,
  },
  { type: 'h3', text: '2. Diktatörlük' },
  {
    type: 'p',
    text: `Diktatörlükte yasama, yürütme ve yargı tek kişi veya grubun elinde toplanır. Bazı rejimler seçim ve halkoylaması görünümü verse de gerçek anlamda çoğulcu rekabet bulunmaz. Bu yapı totaliter ve otoriter diktatörlük olarak iki ana başlıkta incelenir.`,
  },
  { type: 'h3', text: 'a. Totaliter Diktatörlük' },
  {
    type: 'p',
    text: `Totaliter diktatörlük; anti-plüralizm, toptancı ideoloji, kütlesel tek parti ve yaygın terör unsurlarıyla tanımlanır. Toplumdaki çoğulcu yapılar bastırılır; muhalefet sistematik biçimde tasfiye edilir.`,
  },
  { type: 'h3', text: 'b. Otoriter Diktatörlük' },
  {
    type: 'p',
    text: `Otoriter diktatörlükte iktidar tek merkezde toplanır; ifade özgürlüğü ciddi biçimde sınırlanır. Siyasal alan, yönetimin amaçları doğrultusunda denetim altında tutulur.`,
  },
  { type: 'h3', text: 'B. Yasama Organında Birleşme: Meclis Hükûmeti' },
  {
    type: 'p',
    text: `Meclis hükûmeti (konvansiyonel sistem), yasama ve yürütmenin mecliste toplandığı modeldir. Sistemde meclis üstünlüğü esastır; yasama genellikle tek meclislidir, meclis sürekli çalışır ve yürütme meclise sıkı biçimde bağlıdır.`,
  },
  { type: 'h3', text: '1. Yasama Organına İlişkin Özellikler' },
  {
    type: 'p',
    text: `Meclisin üstünlüğü ilkesi belirleyicidir. Meclis çoğunlukla tek-meclisli yapıdadır, kendi kendini toplantıya çağırabilir, sürekli çalışır ve fesih yetkisi esasen yine meclisin kendisindedir.`,
  },
  { type: 'h3', text: '2. Yürütme Organına İlişkin Özellikler' },
  {
    type: 'p',
    text: `Yürütme bir kişide değil bir heyette toplanır. Bu heyetin üyeleri meclis içinden seçilir, tek tek görevden alınabilir ve meclise bireysel olarak sorumludur. Devlet başkanı ve başbakanlık makamı klasik anlamda bulunmaz.`,
  },
  { type: 'h3', text: '3. Yargının Durumu' },
  {
    type: 'p',
    text: `Meclis hükûmeti sistemlerinde yargı da teorik olarak meclis üstünlüğünden etkilenir. Tarihsel örneklerde yargı organlarının meclise bağlı veya meclis tarafından şekillendirilmiş modelleri görülmüştür.`,
  },
  { type: 'h3', text: '4. Yürütmenin Üstünlüğü Sorunu' },
  {
    type: 'p',
    text: `Pratikte, meclise bağlı görünen yürütmenin zamanla fiilî üstünlük kurabildiği; bazı örneklerde sistemin otoriterleşme eğilimi gösterebildiği kabul edilmektedir.`,
  },
  { type: 'h3', text: 'II. Kuvvetler Ayrılığı Sistemleri' },
  {
    type: 'p',
    text: `Kuvvetler ayrılığı sistemlerinde yasama ve yürütme ayrı organlara verilir. Ayrılığın derecesine göre sert ayrılık (başkanlık) ve yumuşak ayrılık (parlâmenter sistem) ayrımı yapılır.`,
  },
  { type: 'h3', text: 'A. Sert Kuvvetler Ayrılığı: Başkanlık Sistemi' },
  { type: 'h3', text: '1. Aslî Özellikler' },
  {
    type: 'p',
    text: `Başkanlık sisteminin temel özellikleri: yürütmenin tek kişiden oluşması, başkanın halk tarafından seçilmesi ve başkanın yasamanın güvenine dayanmamasıdır. Başkan hem devlet başkanı hem hükûmet başkanıdır.`,
  },
  { type: 'h3', text: '2. Talî Özellikler' },
  {
    type: 'p',
    text: `Başkanın yasama organını feshedememesi ve yürütmenin yasama çalışmalarına doğrudan katılamaması başkanlık sisteminin tipik tamamlayıcı özelliklerindendir.`,
  },
  { type: 'h3', text: '3. Yasama-Yürütme Etkileşim Araçları' },
  {
    type: 'p',
    text: `Sert ayrılığa rağmen sistemin kilitlenmemesi için atamalar, milletlerarası antlaşmaların onayı, meclis araştırması, suçlama (impeachment), bütçe, veto ve mesaj gibi karşılıklı etkileşim mekanizmaları öngörülür.`,
  },
  { type: 'h3', text: '4. Başkanlık Sisteminin Güçlü ve Zayıf Yanları' },
  {
    type: 'p',
    text: `Başkanlık sistemi istikrar, güçlü yürütme ve doğrudan demokratik meşruiyet gibi avantajlar sağlayabilir. Buna karşılık rejim krizi riski, katılık, kutuplaşma ve iktidarın kişiselleşmesi gibi dezavantajlar da doğurabilir.`,
  },
  { type: 'h3', text: '5. Yarı-Başkanlık Sistemi' },
  {
    type: 'p',
    text: `Yarı-başkanlıkta iki başlı yürütme bulunur: halk tarafından seçilen cumhurbaşkanı ile yasamaya karşı sorumlu bakanlar kurulu birlikte yer alır.`,
  },
  { type: 'h3', text: 'B. Yumuşak Kuvvetler Ayrılığı: Parlâmenter Sistem' },
  { type: 'h3', text: '1. Aslî Özellikler' },
  {
    type: 'p',
    text: `Parlâmenter sistemde yürütme ikili yapıdadır; hükûmet yasama içinden çıkar ve yasamanın güvenine dayanır. Devlet başkanı sorumsuz, bakanlar kurulu ise yasamaya karşı sorumludur.`,
  },
  { type: 'h3', text: '2. Talî Özellikler' },
  {
    type: 'p',
    text: `Yürütmenin yasamayı feshedebilmesi, aynı kişinin hem yasamada hem yürütmede görev alabilmesi ve bakanlar kurulunun yasama çalışmalarına katılması talî özellikler arasındadır.`,
  },
  { type: 'h3', text: '3. Yasama-Yürütme Etkileşim Araçları' },
  {
    type: 'p',
    text: `Kanun yapımına yürütmenin katılması, bütçe süreci, uluslararası antlaşmalar ve denetim araçları parlâmenter sistemde kuvvetler arası işbirliğini şekillendirir.`,
  },
  { type: 'h3', text: '4. Değerlendirme: Parlâmenter Sistemin Güçlü ve Zayıf Yanları' },
  {
    type: 'p',
    text: `Parlâmenter sistem tıkanıklıkları çözme kapasitesi, esneklik ve uzlaştırıcı etki gibi avantajlar sunabilir; ancak hükûmet istikrarsızlığı ve zayıf icra riski taşıyabilir.`,
  },
  { type: 'h3', text: '6. Rasyonelleştirilmiş Parlâmentarizm' },
  {
    type: 'p',
    text: `Rasyonelleştirilmiş parlâmentarizm; güvensizlik oyunu zorlaştıran, hükûmete istikrar kazandıran ve yasama-yürütme dengesini işlevsel kılmayı amaçlayan usûl araçlarının bütünüdür. Yapıcı güvensizlik oyu, serinleme süreleri, nitelikli çoğunluklar ve fesih tehdidi altında güvenoyu gibi mekanizmalar bu çerçevede değerlendirilir.`,
  },
  { type: 'h2', text: 'Kaynakça' },
  { type: 'p', text: `Gözler, Kemal; Anayasa Hukukunun Genel Teorisi, Cilt I, Ekin Yayınları, Bursa, 2010.` },
  { type: 'p', text: `Gözler, Kemal; Anayasa Hukukuna Giriş, Ekin Kitabevi Yayınları, 11. Baskı, Bursa, 2019.` },
  { type: 'p', text: `Turhan, Mehmet; Hükümet Sistemleri, Dicle Üniversitesi Basımevi, 9. Baskı, Diyarbakır, 1989.` },
  { type: 'p', text: `Özbudun, Ergun; 1921 Anayasası, Atatürk Araştırma Merkezi, 1. Baskı, Ankara, 1992.` },
  { type: 'p', text: `Uluşahin, Nur; Başkanlık Sistemi, Yetkin Yayınları, 1. Baskı, Ankara, 1999.` },
  { type: 'p', text: `Arsel, İlhan; Anayasa Hukuku: Demokrasi, Güven Yayınları, 2. Baskı, Ankara, 1955.` },
];

export function getPostContent(slug: string): PostContent | null {
  switch (slug) {
    case 'hukumet-sistemleri-baskanlik-parlamenter':
      return { blocks: hukumetSistemleriBlocks };
    case 'ispat-hukukuna-dair-genel-degerlendirmeler':
      return { blocks: ispatBlocks };
    case 'ceza-hukukunda-savunma-hakki':
      return { blocks: cezaBlocks };
    case 'bosanma-davalarinda-dikkat-edilecekler':
      return { blocks: bosanmaBlocks };
    case 'ticari-sozlesmelerde-riskler':
      return { blocks: ticariBlocks };
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
