import type { Localized } from "@/i18n/config";

/**
 * Kurumsal içerik.
 *
 * Olgular (kuruluş yılı, kurucu, departmanlar, konum) tankcon.com'daki
 * "History", "About us" ve "Our team" sayfalarından alınmıştır.
 */

export const founder = {
  name: "Cihangir Pekkan",
  role: {
    en: "Founder & CEO",
    tr: "Kurucu ve CEO",
    de: "Gründer & CEO",
    nl: "Oprichter & CEO",
  },
};

export const values: { key: string; title: Localized; text: Localized }[] = [
  {
    key: "safety",
    title: {
      en: "Safety first",
      tr: "Önce güvenlik",
      de: "Sicherheit zuerst",
      nl: "Veiligheid voorop",
    },
    text: {
      en: "Every unit leaves the depot cleaned and compliant with the standards its cargo requires. A tank that is cheap and not certified is not cheap.",
      tr: "Her ünite depodan temizlenmiş ve yükünün gerektirdiği standartlara uygun olarak çıkar. Ucuz ama sertifikasız bir tank, ucuz değildir.",
      de: "Jede Einheit verlässt das Depot gereinigt und konform mit den Normen, die ihre Ladung verlangt. Ein Tank, der billig und nicht zertifiziert ist, ist nicht billig.",
      nl: "Elke unit verlaat het depot gereinigd en conform de normen die de lading vraagt. Een tank die goedkoop is en niet gecertificeerd, is niet goedkoop.",
    },
  },
  {
    key: "objectivity",
    title: {
      en: "An objective look",
      tr: "Nesnel bir bakış",
      de: "Ein objektiver Blick",
      nl: "Een objectieve blik",
    },
    text: {
      en: "We would rather talk you out of a tank that does not fit than sell it. The specification follows the cargo, not the stock list.",
      tr: "Size uymayan bir tankı satmaktansa vazgeçirmeyi tercih ederiz. Spesifikasyon stok listesini değil, yükü izler.",
      de: "Lieber reden wir Ihnen einen unpassenden Tank aus, als ihn zu verkaufen. Die Spezifikation folgt der Ladung, nicht der Bestandsliste.",
      nl: "We praten u liever een tank uit het hoofd die niet past dan hem te verkopen. De specificatie volgt de lading, niet de voorraadlijst.",
    },
  },
  {
    key: "refurbishment",
    title: {
      en: "Properly refurbished",
      tr: "Gerçekten yenilenmiş",
      de: "Sauber aufgearbeitet",
      nl: "Goed gerefurbisht",
    },
    text: {
      en: "Used units are neutralised and reworked before they are offered again, so what you buy second-hand still behaves predictably in service.",
      tr: "İkinci el üniteler yeniden sunulmadan önce nötralize edilir ve elden geçirilir; böylece ikinci el aldığınız şey serviste öngörülebilir davranır.",
      de: "Gebrauchte Einheiten werden neutralisiert und überarbeitet, bevor sie erneut angeboten werden — was Sie gebraucht kaufen, verhält sich im Einsatz berechenbar.",
      nl: "Gebruikte units worden geneutraliseerd en opgeknapt voordat ze opnieuw worden aangeboden, zodat wat u tweedehands koopt zich in bedrijf voorspelbaar gedraagt.",
    },
  },
  {
    key: "relationships",
    title: {
      en: "Long-term relationships",
      tr: "Uzun vadeli ilişkiler",
      de: "Langfristige Beziehungen",
      nl: "Langdurige relaties",
    },
    text: {
      en: "Most of our work comes from customers who came back. That only happens if the second tank goes as smoothly as the first.",
      tr: "İşimizin çoğu geri dönen müşterilerden geliyor. Bu da ancak ikinci tank birincisi kadar sorunsuz giderse olur.",
      de: "Der Großteil unserer Aufträge kommt von wiederkehrenden Kunden. Das passiert nur, wenn der zweite Tank so reibungslos läuft wie der erste.",
      nl: "Het grootste deel van ons werk komt van klanten die terugkwamen. Dat gebeurt alleen als de tweede tank net zo soepel gaat als de eerste.",
    },
  },
];

export const milestones: { year: string; text: Localized }[] = [
  {
    year: "2012",
    text: {
      en: "Cihangir Pekkan founds Tankcon as a one-man operation trading in used tank containers, bringing over a decade of tank container experience with him.",
      tr: "Cihangir Pekkan, on yılı aşkın tank konteyner deneyimiyle, ikinci el tank konteyner ticareti yapan tek kişilik bir işletme olarak Tankcon'u kurar.",
      de: "Cihangir Pekkan gründet Tankcon als Ein-Mann-Betrieb im Handel mit gebrauchten Tankcontainern — mit über einem Jahrzehnt Erfahrung im Gepäck.",
      nl: "Cihangir Pekkan richt Tankcon op als eenmansbedrijf in de handel in gebruikte tankcontainers, met ruim tien jaar ervaring op zak.",
    },
  },
  {
    year: "2014",
    text: {
      en: "Trading alone proves too narrow. Additional services are added around the tanks, starting with cleaning and inspection.",
      tr: "Yalnızca ticaret dar kalır. Tankların çevresine, temizlik ve muayeneden başlayarak ek hizmetler eklenir.",
      de: "Reiner Handel erweist sich als zu eng. Rund um die Tanks entstehen Zusatzleistungen, beginnend mit Reinigung und Prüfung.",
      nl: "Alleen handel blijkt te smal. Rond de tanks komen aanvullende diensten, te beginnen met reiniging en keuring.",
    },
  },
  {
    year: "2017",
    text: {
      en: "Rental and lease join outright sales, so a customer can take a tank for one campaign instead of buying for one job.",
      tr: "Doğrudan satışın yanına kiralama ve leasing eklenir; müşteri tek bir iş için satın almak yerine tek bir kampanya için tank alabilir.",
      de: "Neben den Direktverkauf treten Miete und Leasing: Kunden nehmen einen Tank für eine Kampagne, statt für einen Auftrag zu kaufen.",
      nl: "Naast directe verkoop komen huur en lease, zodat een klant een tank voor één campagne kan nemen in plaats van voor één klus te kopen.",
    },
  },
  {
    year: "2020",
    text: {
      en: "The maintenance and repair department takes shape as an in-house operation, covering refurbishment and modification alongside routine repair.",
      tr: "Bakım-onarım departmanı, rutin onarımın yanında yenileme ve modifikasyonu da kapsayan kendi bünyemizde bir operasyon hâline gelir.",
      de: "Die Wartungs- und Reparaturabteilung entsteht als eigener Bereich — neben der Routinereparatur auch Aufarbeitung und Umbau.",
      nl: "De onderhouds- en reparatieafdeling krijgt vorm als eigen operatie, met naast routinereparatie ook refurbishment en modificatie.",
    },
  },
  {
    year: "Today",
    text: {
      en: "A full range in stock at Spijkenisse, four in-house service lines and a team spanning sales, lease, finance, M&R and administration.",
      tr: "Spijkenisse'de tam bir stok yelpazesi, kendi bünyemizde dört hizmet hattı ve satıştan kiralamaya, finanstan bakım-onarıma ve idariye uzanan bir ekip.",
      de: "Ein vollständiges Sortiment am Standort Spijkenisse, vier eigene Servicebereiche und ein Team von Vertrieb über Miete, Finanzen und Instandhaltung bis Verwaltung.",
      nl: "Een volledig assortiment op voorraad in Spijkenisse, vier eigen dienstverleningslijnen en een team van verkoop, lease, finance, M&R tot administratie.",
    },
  },
];

/** Sitedeki "Our team" sayfasında listelenen departmanlar. */
export const departments: { key: string; name: Localized; text: Localized }[] = [
  {
    key: "sales",
    name: { en: "Sales", tr: "Satış", de: "Vertrieb", nl: "Verkoop" },
    text: {
      en: "Matches your cargo to a tank in stock, or sources one from a manufacturer if it is not.",
      tr: "Yükünüzü stoktaki bir tankla eşleştirir; yoksa üreticiden temin eder.",
      de: "Ordnet Ihrer Ladung einen Tank aus dem Bestand zu oder beschafft einen beim Hersteller.",
      nl: "Koppelt uw lading aan een tank uit voorraad, of haalt er een bij een fabrikant.",
    },
  },
  {
    key: "lease",
    name: { en: "Lease", tr: "Kiralama", de: "Miete", nl: "Lease" },
    text: {
      en: "Handles rental and lease terms, including leases with an option to purchase.",
      tr: "Kiralama ve leasing koşullarını yürütür; satın alma opsiyonlu leasing dahil.",
      de: "Regelt Miet- und Leasingkonditionen, einschließlich Leasing mit Kaufoption.",
      nl: "Regelt huur- en leasevoorwaarden, inclusief lease met koopoptie.",
    },
  },
  {
    key: "mr",
    name: {
      en: "M&R, inspection & transport",
      tr: "Bakım-onarım, muayene ve nakliye",
      de: "Instandhaltung, Prüfung & Transport",
      nl: "M&R, keuring & transport",
    },
    text: {
      en: "Keeps units certified and in condition, and arranges the move to and from the depot.",
      tr: "Üniteleri sertifikalı ve kullanıma hazır tutar, depoya gidiş-gelişi organize eder.",
      de: "Hält Einheiten zertifiziert und instand und organisiert den Transport zum und vom Depot.",
      nl: "Houdt units gecertificeerd en op orde en regelt het transport van en naar het depot.",
    },
  },
  {
    key: "accounting",
    name: { en: "Accounting", tr: "Muhasebe", de: "Buchhaltung", nl: "Boekhouding" },
    text: {
      en: "Invoicing and the paperwork that follows a unit through its contract.",
      tr: "Faturalama ve bir üniteyi sözleşmesi boyunca izleyen evrak.",
      de: "Rechnungsstellung und die Papiere, die eine Einheit durch ihren Vertrag begleiten.",
      nl: "Facturatie en de papieren die een unit door haar contract volgen.",
    },
  },
  {
    key: "finance",
    name: { en: "Finance", tr: "Finans", de: "Finanzen", nl: "Financiën" },
    text: {
      en: "Payment terms, financing questions and the commercial side of longer agreements.",
      tr: "Ödeme koşulları, finansman soruları ve uzun vadeli anlaşmaların ticari tarafı.",
      de: "Zahlungsbedingungen, Finanzierungsfragen und die kaufmännische Seite längerer Vereinbarungen.",
      nl: "Betalingsvoorwaarden, financieringsvragen en de commerciële kant van langere overeenkomsten.",
    },
  },
  {
    key: "administration",
    name: { en: "Administration", tr: "İdari işler", de: "Verwaltung", nl: "Administratie" },
    text: {
      en: "Keeps the depot, the documents and the schedule lined up behind everyone else.",
      tr: "Depoyu, belgeleri ve takvimi herkesin arkasında hizada tutar.",
      de: "Hält Depot, Dokumente und Terminplan im Hintergrund zusammen.",
      nl: "Houdt depot, documenten en planning op de achtergrond op één lijn.",
    },
  },
];
