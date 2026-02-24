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

export function getPostContent(slug: string): PostContent | null {
  switch (slug) {
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
