/**
 * Tek dokunuş noktası: markaya ait her şey burada.
 *
 * Veriler tankcon.com üzerindeki mevcut siteden alınmıştır. Doğrulanması
 * gerekenler yorumla işaretlendi.
 */

export const site = {
  brand: "Tankcon",
  brandShort: "Tankcon",
  tagline: {
    en: "The tank container you need",
    tr: "İhtiyacınız olan tank konteyner",
    de: "Der Tankcontainer, den Sie brauchen",
    nl: "De tankcontainer die u nodig heeft",
  },
  domain: "https://tankcon.com",
  /** Kuruluş yılı sitede açıkça yazmıyor; "20+ yıl deneyim" ifadesinden türetildi. */
  yearsOfExperience: "20+",

  contact: {
    officeLabel: {
      en: "Head office",
      tr: "Genel merkez",
      de: "Hauptsitz",
      nl: "Hoofdkantoor",
    },
    addressLines: ["Edisonweg 7-19", "3208 KB Spijkenisse", "the Netherlands"],
    city: "Spijkenisse",
    country: {
      en: "the Netherlands",
      tr: "Hollanda",
      de: "Niederlande",
      nl: "Nederland",
    },
    phone: "+31 181 769148",
    phoneHref: "+31181769148",
    mobile: "+31 65 263 63 70",
    mobileHref: "+31652636370",
    emailSales: "sales@tankcon.com",
    emailLease: "lease@tankcon.com",
    emailFinance: "finance@tankcon.com",
    /** Genel kutu sitede görünmüyor; satış adresi varsayılan olarak kullanılıyor. */
    emailGeneral: "sales@tankcon.com",
  },

  /** Sosyal medya adresleri sitede doğrulanmadı — yayına almadan önce güncelleyin. */
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { name: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ] as const,

  /** Ana sayfadaki rakam şeridi — hepsi sitedeki doğrulanabilir bilgilerden. */
  stats: [
    {
      value: "20+",
      label: {
        en: "Years of experience",
        tr: "Yıllık deneyim",
        de: "Jahre Erfahrung",
        nl: "Jaar ervaring",
      },
    },
    {
      value: "9",
      label: {
        en: "Tank container types",
        tr: "Tank konteyner tipi",
        de: "Tankcontainer-Typen",
        nl: "Types tankcontainers",
      },
    },
    {
      value: "4",
      label: {
        en: "In-house services",
        tr: "Kendi bünyemizde hizmet",
        de: "Eigene Serviceleistungen",
        nl: "Eigen diensten",
      },
    },
    {
      value: "1",
      label: {
        en: "Depot at the Port of Rotterdam",
        tr: "Rotterdam Limanı'nda depo",
        de: "Depot im Hafen von Rotterdam",
        nl: "Depot in de haven van Rotterdam",
      },
    },
  ],
} as const;

export type Site = typeof site;
