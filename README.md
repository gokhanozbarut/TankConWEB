# Tankcon — kurumsal web sitesi (demo)

Tankcon'un mevcut sitesindeki içerik ve görsellerin, Barut Hotels'ten uyarlanan
kurumsal site mimarisine taşındığı dört dilli bir Next.js demosu.

## Teknoloji

| | |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Stil | Tailwind CSS 4 |
| Dil | TypeScript |
| Diller | EN (varsayılan), TR, DE, NL |
| Render | Statik (SSG) — 70 sayfa; yalnızca `/quote` dinamik |

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000 → tarayıcı diline göre /en, /tr, /de, /nl
npm run build
npm run start
npm run lint
```

## Sayfa yapısı (çekirdek set)

```
/[dil]                     Ana sayfa
/[dil]/stock               Stok listesi + /stock/[slug] ürün detayı (9 tank tipi)
/[dil]/services            Ek hizmetler (muayene, bakım-onarım, modifikasyon, paket)
/[dil]/industries          Sektörler (kimya, gıda/yem, gazlar, silo/dökme)
/[dil]/about               Kurumsal: kimiz, tarihçe, ekip
/[dil]/contact             İletişim + form
/[dil]/quote               Teklif formu (ürün sayfasından ön seçimli gelir)
/api/inquiry               Form uç noktası (POST)
```

## İçeriğin kaynağı ve doğrulanması gerekenler

Olgusal veriler tankcon.com'daki mevcut sayfalardan alındı:

- **İletişim**: Edisonweg 7-19, 3208 KB Spijkenisse; +31 181 769148 / +31 65 263 63 70;
  sales@ / lease@ / finance@tankcon.com
- **Kurumsal**: 2012'de Cihangir Pekkan tarafından kuruldu; ikinci el tank
  ticaretiyle başladı; departmanlar: satış, kiralama, muhasebe, finans,
  bakım-onarım/muayene/nakliye, idari işler
- **Teknik**: T11/T14 kodları, 24.000–26.000 L, 20 ft ISO çerçeve
  (≈6.058 × 2.438 × 2.591 mm, ISO 1496), 50–100 mm poliüretan izolasyon
- **Görseller**: `public/media/` altındaki 23 fotoğraf doğrudan mevcut siteden

Yayına almadan önce doğrulayın (`src/config/site.ts` içinde yorumla işaretli):

- Sosyal medya adresleri — mevcut sitede doğrulanamadı, placeholder
- `domain` alanı — canonical ve sitemap bu değerden türüyor
- Tarihçedeki 2014 / 2017 / 2020 kilometre taşları — sitede yalnızca 2012 ve
  "birkaç yıl içinde" ifadeleri geçiyor; ara tarihler yaklaşıktır
- Fiyat ve anlık stok adedi kasıtlı olarak taşınmadı; bunlar ERP/stok
  sisteminden beslenmelidir

## Uyarlama noktaları

| Ne | Nerede |
|---|---|
| Marka, adres, telefon, e-posta, rakam şeridi | `src/config/site.ts` |
| Renk paleti ve tipografi | `src/app/globals.css` (`@theme` bloğu) |
| Ürünler (stok) | `src/content/products.ts` |
| Ek hizmetler | `src/content/services.ts` |
| Sektörler | `src/content/industries.ts` |
| Değerler, tarihçe, departmanlar | `src/content/company.ts` |
| Arayüz metinleri | `src/i18n/dictionaries/{en,tr,de,nl}.ts` |

Her içerik alanı `{ en, tr, de, nl }` biçimindedir. `en.ts` referans sözlüktür
ve tipi belirler; bir anahtar eklenince diğer üç dil derlemede hata verir, yani
eksik çeviri gözden kaçmaz.

Görseller: içerik kaydındaki `photo` alanı doldurulduğunda fotoğraf, boş
bırakıldığında `src/components/Art.tsx` içindeki SVG yer tutucu basılır.

## Formlar

Dört form da (teklif, iletişim, geri arama, bülten) `POST /api/inquiry`
adresine gider. Uç nokta alanları doğrular, gizli `website` alanıyla basit bot
koruması yapar ve talebi sunucu günlüğüne yazar.

**Canlıya almadan önce** `src/app/api/inquiry/route.ts` içindeki `deliver()`
fonksiyonunu gerçek kanala bağlayın (SMTP/SendGrid, CRM web hook'u veya
veritabanı). Şu hâliyle hiç kimseye e-posta gitmez.

## SEO

Dil başına `hreflang` ve canonical, içerikten üretilen `sitemap.xml` ve
`robots.txt`, Open Graph etiketleri, `Accept-Language` ile dil algılama
(`src/proxy.ts`).
