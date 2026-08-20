import type { Localized } from "@/i18n/config";

/**
 * Stoktaki tank konteyner tipleri.
 *
 * Teknik değerler (T-kodları, hacimler, ISO çerçeve ölçüleri, basınç sınıfları)
 * tankcon.com'daki ürün sayfalarından alınmıştır. Fiyat ve anlık stok adedi
 * kasıtlı olarak taşınmadı — bunlar sık değişiyor, ERP/stok sisteminden
 * beslenmesi gerekir.
 */

export type Availability = "buy" | "rent" | "both";

export type Product = {
  slug: string;
  photo: string;
  art: string;
  availability: Availability;
  featured?: boolean;
  title: Localized;
  summary: Localized;
  body: Localized<string[]>;
  features: Localized<string[]>;
  applications: Localized<string[]>;
  specs: Localized<{ label: string; value: string }[]>;
};

export const products: Product[] = [
  {
    slug: "standard-iso-tank-container",
    photo: "/media/what-different-tank-container-types-are-available-scaled.jpg",
    art: "tank",
    availability: "both",
    featured: true,
    title: {
      en: "Standard ISO tank container",
      tr: "Standart ISO tank konteyner",
      de: "Standard-ISO-Tankcontainer",
      nl: "Standaard ISO-tankcontainer",
    },
    summary: {
      en: "The 20-ft workhorse: a T11 or T14 shell in an ISO frame that slots straight into road, rail and sea networks.",
      tr: "20 ayaklık iş atı: ISO çerçeve içinde T11 veya T14 gövde; karayolu, demiryolu ve deniz ağlarına doğrudan oturur.",
      de: "Das 20-Fuß-Arbeitstier: T11- oder T14-Behälter im ISO-Rahmen, direkt einsetzbar auf Straße, Schiene und See.",
      nl: "Het 20-voets werkpaard: een T11- of T14-mantel in een ISO-frame die direct past in weg, spoor en zeevaart.",
    },
    body: {
      en: [
        "The standard ISO tank container is the unit most cargoes start with. A stainless steel shell sits inside a 20-ft ISO frame with corner castings to ISO 1496, so the same tank moves by chassis, wagon and vessel without the load ever being repacked.",
        "Nominal capacity between 24,000 and 26,000 litres keeps the loaded unit within road weight limits on common lanes while still filling a full container slot. Choose a T11 code for the majority of chemical and food cargoes, or T14 where the substance calls for a heavier shell and stricter fittings.",
      ],
      tr: [
        "Standart ISO tank konteyner, çoğu yükün başladığı üründür. Paslanmaz çelik gövde, ISO 1496'ya uygun köşe takozlarıyla 20 ayaklık ISO çerçeve içine oturur; böylece aynı tank şasi, vagon ve gemi arasında yük hiç aktarılmadan hareket eder.",
        "24.000–26.000 litre arası nominal hacim, dolu üniteyi yaygın hatlardaki karayolu ağırlık sınırları içinde tutarken tam bir konteyner slotunu da doldurur. Kimyasal ve gıda yüklerinin çoğu için T11, daha ağır gövde ve daha sıkı armatür gerektiren maddeler için T14 kodunu seçin.",
      ],
      de: [
        "Der Standard-ISO-Tankcontainer ist die Einheit, mit der die meisten Ladungen beginnen. Ein Edelstahlbehälter sitzt in einem 20-Fuß-ISO-Rahmen mit Eckbeschlägen nach ISO 1496 — derselbe Tank fährt auf Chassis, Waggon und Schiff, ohne dass die Ladung je umgepackt wird.",
        "Ein Nennvolumen zwischen 24.000 und 26.000 Litern hält die beladene Einheit auf gängigen Relationen innerhalb der Straßengewichtsgrenzen und füllt zugleich einen vollen Containerstellplatz. Für die meisten Chemie- und Lebensmittelladungen wählen Sie T11, für Stoffe mit Bedarf an schwererem Behälter und strengeren Armaturen T14.",
      ],
      nl: [
        "De standaard ISO-tankcontainer is de unit waarmee de meeste ladingen beginnen. Een roestvaststalen mantel zit in een 20-voets ISO-frame met hoekkasten volgens ISO 1496, zodat dezelfde tank via chassis, wagon en schip beweegt zonder dat de lading wordt overgepakt.",
        "Een nominale inhoud tussen 24.000 en 26.000 liter houdt de beladen unit binnen de weggewichtsgrenzen op gangbare trajecten en vult tegelijk een volledige containerplek. Kies T11 voor het merendeel van de chemische en voedingsladingen, of T14 waar de stof een zwaardere mantel en strengere appendages vraagt.",
      ],
    },
    features: {
      en: [
        "T11 and T14 codes available from stock",
        "20-ft ISO frame, corner castings to ISO 1496",
        "Polyurethane insulation 50–100 mm as an option",
        "Steam, electric or hot-water heating as an option",
      ],
      tr: [
        "Stoktan T11 ve T14 kodları",
        "20 ayak ISO çerçeve, ISO 1496 köşe takozları",
        "Opsiyonel 50–100 mm poliüretan izolasyon",
        "Opsiyonel buhar, elektrik veya sıcak su ısıtma",
      ],
      de: [
        "T11 und T14 ab Lager verfügbar",
        "20-Fuß-ISO-Rahmen, Eckbeschläge nach ISO 1496",
        "Polyurethandämmung 50–100 mm als Option",
        "Dampf-, Elektro- oder Warmwasserheizung als Option",
      ],
      nl: [
        "T11 en T14 uit voorraad leverbaar",
        "20-voets ISO-frame, hoekkasten volgens ISO 1496",
        "Polyurethaanisolatie 50–100 mm als optie",
        "Stoom-, elektrische of warmwaterverwarming als optie",
      ],
    },
    applications: {
      en: ["Bulk chemicals", "Edible oils and food-grade liquids", "Intermodal door-to-door lanes"],
      tr: ["Dökme kimyasallar", "Yemeklik yağ ve gıda sınıfı sıvılar", "Kapıdan kapıya intermodal hatlar"],
      de: ["Chemikalien als Massengut", "Speiseöle und lebensmitteltaugliche Flüssigkeiten", "Intermodale Haus-zu-Haus-Relationen"],
      nl: ["Bulkchemicaliën", "Spijsoliën en food-grade vloeistoffen", "Intermodale deur-tot-deurtrajecten"],
    },
    specs: {
      en: [
        { label: "Nominal capacity", value: "24,000 – 26,000 L" },
        { label: "Portable tank codes", value: "T11 / T14" },
        { label: "Frame length", value: "≈ 6,058 mm (20 ft)" },
        { label: "Frame width / height", value: "2,438 / 2,591 mm" },
        { label: "Frame standard", value: "ISO 1496 corner castings" },
      ],
      tr: [
        { label: "Nominal hacim", value: "24.000 – 26.000 L" },
        { label: "Portatif tank kodları", value: "T11 / T14" },
        { label: "Çerçeve uzunluğu", value: "≈ 6.058 mm (20 ft)" },
        { label: "Çerçeve genişlik / yükseklik", value: "2.438 / 2.591 mm" },
        { label: "Çerçeve standardı", value: "ISO 1496 köşe takozları" },
      ],
      de: [
        { label: "Nennvolumen", value: "24.000 – 26.000 L" },
        { label: "Tankcodes", value: "T11 / T14" },
        { label: "Rahmenlänge", value: "≈ 6.058 mm (20 ft)" },
        { label: "Rahmenbreite / -höhe", value: "2.438 / 2.591 mm" },
        { label: "Rahmennorm", value: "Eckbeschläge nach ISO 1496" },
      ],
      nl: [
        { label: "Nominale inhoud", value: "24.000 – 26.000 L" },
        { label: "Tankcodes", value: "T11 / T14" },
        { label: "Framelengte", value: "≈ 6.058 mm (20 ft)" },
        { label: "Framebreedte / -hoogte", value: "2.438 / 2.591 mm" },
        { label: "Framenorm", value: "ISO 1496 hoekkasten" },
      ],
    },
  },
  {
    slug: "baffled-tank-container",
    photo: "/media/TCSU-101791-1-Website-1.png",
    art: "tank",
    availability: "both",
    featured: true,
    title: {
      en: "Tank container with baffles",
      tr: "Baffle'lı tank konteyner",
      de: "Tankcontainer mit Schwallwänden",
      nl: "Tankcontainer met schotten",
    },
    summary: {
      en: "Internal baffle plates damp the surge of a part-filled tank, steadying the vehicle and improving pump suction.",
      tr: "İç baffle plakaları, kısmi dolu tankın çalkantısını söndürür; aracı dengeler ve pompa emişini iyileştirir.",
      de: "Innenliegende Schwallwände dämpfen das Schwappen bei Teilbefüllung, stabilisieren das Fahrzeug und verbessern die Pumpenansaugung.",
      nl: "Interne schotten dempen het klotsen bij gedeeltelijke vulling, stabiliseren het voertuig en verbeteren de pompaanzuiging.",
    },
    body: {
      en: [
        "A full tank does not slosh and neither does an empty one. The problem lives in between — and that is where most urban delivery rounds and multi-drop schedules operate.",
        "Baffle plates with radiused apertures sit inside the shell and break up the moving mass of liquid. The result is a calmer unit under braking and cornering, and a suction line that stays covered as the level drops.",
      ],
      tr: [
        "Dolu tank çalkalanmaz, boş tank da. Sorun ikisinin arasında yaşar — ki şehir içi dağıtım turları ve çok duraklı programlar tam orada çalışır.",
        "Yuvarlatılmış açıklıklara sahip baffle plakaları gövdenin içine yerleşir ve hareket eden sıvı kütlesini böler. Sonuç: frenlemede ve virajda daha sakin bir ünite ve seviye düşerken örtülü kalan bir emiş hattı.",
      ],
      de: [
        "Ein voller Tank schwappt nicht, ein leerer auch nicht. Das Problem liegt dazwischen — und genau dort bewegen sich Verteilerfahrten und Mehrstopp-Touren.",
        "Schwallwände mit ausgerundeten Durchbrüchen sitzen im Behälter und zerlegen die bewegte Flüssigkeitsmasse. Ergebnis: eine ruhigere Einheit beim Bremsen und in Kurven und eine Saugleitung, die auch bei sinkendem Füllstand bedeckt bleibt.",
      ],
      nl: [
        "Een volle tank klotst niet en een lege evenmin. Het probleem zit ertussenin — precies waar distributieritten en multi-drop schema's zich afspelen.",
        "Schotten met afgeronde openingen zitten in de mantel en breken de bewegende vloeistofmassa. Het resultaat: een rustiger unit bij remmen en bochten, en een zuigleiding die bedekt blijft terwijl het niveau daalt.",
      ],
    },
    features: {
      en: [
        "Baffle plates with radiused apertures",
        "Steadier handling on part loads",
        "Improved pump suction as the level drops",
        "Available on the standard 20-ft ISO frame",
      ],
      tr: [
        "Yuvarlatılmış açıklıklı baffle plakaları",
        "Kısmi yükte daha dengeli sürüş",
        "Seviye düşerken iyileşen pompa emişi",
        "Standart 20 ayak ISO çerçevede mevcut",
      ],
      de: [
        "Schwallwände mit ausgerundeten Durchbrüchen",
        "Ruhigeres Fahrverhalten bei Teilladung",
        "Bessere Pumpenansaugung bei sinkendem Füllstand",
        "Auf dem 20-Fuß-ISO-Standardrahmen verfügbar",
      ],
      nl: [
        "Schotten met afgeronde openingen",
        "Rustiger weggedrag bij deelladingen",
        "Betere pompaanzuiging bij dalend niveau",
        "Beschikbaar op het standaard 20-voets ISO-frame",
      ],
    },
    applications: {
      en: ["Multi-drop delivery rounds", "Part loads and stop-start urban legs", "Cargoes discharged in stages"],
      tr: ["Çok duraklı dağıtım turları", "Kısmi yükler ve dur-kalk şehir içi etaplar", "Kademeli boşaltılan yükler"],
      de: ["Mehrstopp-Verteilertouren", "Teilladungen und Stop-and-Go im Stadtverkehr", "Stufenweise entladene Ladungen"],
      nl: ["Multi-drop distributieritten", "Deelladingen en stop-start stadsritten", "Ladingen die in fasen worden gelost"],
    },
    specs: {
      en: [
        { label: "Nominal capacity", value: "24,000 – 26,000 L" },
        { label: "Portable tank codes", value: "T11 / T14" },
        { label: "Internal fittings", value: "Baffle plates, radiused apertures" },
        { label: "Frame", value: "20-ft ISO or swap body" },
      ],
      tr: [
        { label: "Nominal hacim", value: "24.000 – 26.000 L" },
        { label: "Portatif tank kodları", value: "T11 / T14" },
        { label: "İç donanım", value: "Baffle plakaları, yuvarlatılmış açıklıklar" },
        { label: "Çerçeve", value: "20 ayak ISO veya swap body" },
      ],
      de: [
        { label: "Nennvolumen", value: "24.000 – 26.000 L" },
        { label: "Tankcodes", value: "T11 / T14" },
        { label: "Innenausrüstung", value: "Schwallwände, ausgerundete Durchbrüche" },
        { label: "Rahmen", value: "20-Fuß-ISO oder Wechselbrücke" },
      ],
      nl: [
        { label: "Nominale inhoud", value: "24.000 – 26.000 L" },
        { label: "Tankcodes", value: "T11 / T14" },
        { label: "Inwendige uitrusting", value: "Schotten, afgeronde openingen" },
        { label: "Frame", value: "20-voets ISO of wissellaadbak" },
      ],
    },
  },
  {
    slug: "swap-body-tank-container",
    photo: "/media/TCSU-101825-0-Website-1.png",
    art: "tank",
    availability: "both",
    title: {
      en: "Swap body tank container",
      tr: "Swap body tank konteyner",
      de: "Wechselbrücken-Tankcontainer",
      nl: "Wissellaadbak-tankcontainer",
    },
    summary: {
      en: "A longer shell on a swap body frame — more litres per trip where the route stays on road and rail within Europe.",
      tr: "Swap body çerçeve üzerinde daha uzun gövde — güzergâh Avrupa içinde karayolu ve demiryolunda kalıyorsa sefer başına daha fazla litre.",
      de: "Längerer Behälter auf Wechselbrückenrahmen — mehr Liter je Fahrt, wenn die Route innerhalb Europas auf Straße und Schiene bleibt.",
      nl: "Een langere mantel op een wissellaadbakframe — meer liters per rit als de route binnen Europa op weg en spoor blijft.",
    },
    body: {
      en: [
        "Where a route stays inside Europe and never needs a deep-sea slot, the ISO frame stops being a requirement and starts being a limit. A swap body frame lets the shell run longer and carry more.",
        "The trade-off is reach: swap bodies are built for European road and rail combinations rather than global container flows. On the right lane, the extra volume per trip pays for itself quickly.",
      ],
      tr: [
        "Güzergâh Avrupa içinde kalıyor ve okyanus slotu gerekmiyorsa, ISO çerçeve bir gereklilik olmaktan çıkıp bir sınıra dönüşür. Swap body çerçeve, gövdenin daha uzun olmasına ve daha fazla taşımasına izin verir.",
        "Bunun bedeli erişim: swap body'ler küresel konteyner akışları yerine Avrupa karayolu-demiryolu kombinasyonları için üretilir. Doğru hatta, sefer başına kazanılan hacim kendini hızla amorti eder.",
      ],
      de: [
        "Bleibt eine Relation innerhalb Europas und braucht nie einen Seeschiff-Stellplatz, ist der ISO-Rahmen keine Anforderung mehr, sondern eine Begrenzung. Ein Wechselbrückenrahmen lässt den Behälter länger ausfallen und mehr aufnehmen.",
        "Der Preis dafür ist die Reichweite: Wechselbrücken sind für europäische Straßen-Schiene-Kombinationen gebaut, nicht für globale Containerströme. Auf der passenden Relation rechnet sich das Mehrvolumen je Fahrt schnell.",
      ],
      nl: [
        "Blijft een route binnen Europa en is een zeecontainerplek nooit nodig, dan is het ISO-frame geen eis meer maar een beperking. Een wissellaadbakframe laat de mantel langer uitvallen en meer meenemen.",
        "De prijs is bereik: wissellaadbakken zijn gebouwd voor Europese weg-spoorcombinaties, niet voor mondiale containerstromen. Op het juiste traject verdient het extra volume per rit zich snel terug.",
      ],
    },
    features: {
      en: [
        "Greater volume than a 20-ft ISO unit",
        "Built for European road and rail combinations",
        "Available with or without baffles",
        "Buy or rent from stock",
      ],
      tr: [
        "20 ayak ISO üniteden daha büyük hacim",
        "Avrupa karayolu-demiryolu kombinasyonları için",
        "Baffle'lı veya baffle'sız",
        "Stoktan satın alma veya kiralama",
      ],
      de: [
        "Größeres Volumen als eine 20-Fuß-ISO-Einheit",
        "Für europäische Straßen-Schiene-Kombinationen gebaut",
        "Mit oder ohne Schwallwände erhältlich",
        "Kauf oder Miete ab Lager",
      ],
      nl: [
        "Groter volume dan een 20-voets ISO-unit",
        "Gebouwd voor Europese weg-spoorcombinaties",
        "Met of zonder schotten leverbaar",
        "Kopen of huren uit voorraad",
      ],
    },
    applications: {
      en: ["Intra-European road and rail lanes", "High-volume shuttle runs", "Domestic distribution"],
      tr: ["Avrupa içi karayolu ve demiryolu hatları", "Yüksek hacimli mekik seferleri", "Yurt içi dağıtım"],
      de: ["Innereuropäische Straßen- und Schienenrelationen", "Volumenstarke Shuttleverkehre", "Inlandsdistribution"],
      nl: ["Intra-Europese weg- en spoortrajecten", "Volumerijke pendelritten", "Binnenlandse distributie"],
    },
    specs: {
      en: [
        { label: "Frame type", value: "Swap body" },
        { label: "Coverage", value: "European road and rail" },
        { label: "Baffles", value: "Optional" },
        { label: "Availability", value: "Buy or rent" },
      ],
      tr: [
        { label: "Çerçeve tipi", value: "Swap body" },
        { label: "Kapsam", value: "Avrupa karayolu ve demiryolu" },
        { label: "Baffle", value: "Opsiyonel" },
        { label: "Durum", value: "Satın alma veya kiralama" },
      ],
      de: [
        { label: "Rahmentyp", value: "Wechselbrücke" },
        { label: "Einsatzgebiet", value: "Europäische Straße und Schiene" },
        { label: "Schwallwände", value: "Optional" },
        { label: "Verfügbarkeit", value: "Kauf oder Miete" },
      ],
      nl: [
        { label: "Frametype", value: "Wissellaadbak" },
        { label: "Bereik", value: "Europese weg en spoor" },
        { label: "Schotten", value: "Optioneel" },
        { label: "Beschikbaarheid", value: "Kopen of huren" },
      ],
    },
  },
  {
    slug: "gas-tank-container",
    photo: "/media/gas-tank-container-2-2-scaled-scaled.webp",
    art: "tank",
    availability: "both",
    featured: true,
    title: {
      en: "Gas tank container",
      tr: "Gaz tank konteyner",
      de: "Gastankcontainer",
      nl: "Gastankcontainer",
    },
    summary: {
      en: "Pressure-rated units for liquefied gases, grouped by working pressure and specified around the discharge method.",
      tr: "Sıvılaştırılmış gazlar için basınç sınıflı üniteler; çalışma basıncına göre gruplanır ve boşaltma yöntemine göre belirlenir.",
      de: "Druckgeprüfte Einheiten für Flüssiggase, nach Betriebsdruck gruppiert und auf die Entladeart ausgelegt.",
      nl: "Drukvaste units voor vloeibaar gemaakte gassen, gegroepeerd op werkdruk en gespecificeerd rond de losmethode.",
    },
    body: {
      en: [
        "Gas tanks are specified differently from liquid tanks. The starting point is not volume but working pressure: the group your product falls into decides the shell, the valves and the certification that travels with the unit.",
        "The second question is how the cargo leaves the tank. Discharge by vapour line, by pump or by pressure differential each calls for different fittings, and getting that decision right early avoids a unit that is technically compliant but operationally awkward at the receiving terminal.",
      ],
      tr: [
        "Gaz tankları sıvı tanklarından farklı belirlenir. Başlangıç noktası hacim değil, çalışma basıncıdır: ürününüzün girdiği grup gövdeyi, vanaları ve üniteyle birlikte seyahat eden sertifikayı belirler.",
        "İkinci soru, yükün tanktan nasıl çıkacağıdır. Buhar hattıyla, pompayla veya basınç farkıyla boşaltmanın her biri farklı armatür ister; bu kararı erken vermek, teknik olarak uygun ama teslim terminalinde operasyonel olarak zahmetli bir üniteyle kalmayı önler.",
      ],
      de: [
        "Gastanks werden anders spezifiziert als Flüssigkeitstanks. Ausgangspunkt ist nicht das Volumen, sondern der Betriebsdruck: Die Gruppe, in die Ihr Produkt fällt, bestimmt Behälter, Armaturen und die Zertifizierung, die mit der Einheit reist.",
        "Die zweite Frage ist, wie die Ladung den Tank verlässt. Entladung über Gasphasenleitung, Pumpe oder Druckdifferenz verlangt jeweils andere Armaturen — diese Entscheidung früh richtig zu treffen, verhindert eine Einheit, die zwar konform, am Empfangsterminal aber unpraktisch ist.",
      ],
      nl: [
        "Gastanks worden anders gespecificeerd dan vloeistoftanks. Het startpunt is niet het volume maar de werkdruk: de groep waarin uw product valt bepaalt de mantel, de afsluiters en de certificering die met de unit meereist.",
        "De tweede vraag is hoe de lading de tank verlaat. Lossen via dampleiding, pomp of drukverschil vraagt telkens andere appendages; die keuze vroeg goed maken voorkomt een unit die technisch voldoet maar op de ontvangstterminal lastig werkt.",
      ],
    },
    features: {
      en: [
        "Grouped by working pressure class",
        "Vapour line, pump or pressure-differential discharge",
        "Certification supplied with every unit",
        "New and used units available",
      ],
      tr: [
        "Çalışma basıncı sınıfına göre gruplanır",
        "Buhar hattı, pompa veya basınç farkıyla boşaltma",
        "Her üniteyle birlikte sertifika",
        "Sıfır ve ikinci el üniteler",
      ],
      de: [
        "Nach Betriebsdruckklasse gruppiert",
        "Entladung über Gasphasenleitung, Pumpe oder Druckdifferenz",
        "Zertifizierung zu jeder Einheit",
        "Neue und gebrauchte Einheiten verfügbar",
      ],
      nl: [
        "Gegroepeerd op werkdrukklasse",
        "Lossen via dampleiding, pomp of drukverschil",
        "Certificering bij elke unit geleverd",
        "Nieuwe en gebruikte units beschikbaar",
      ],
    },
    applications: {
      en: ["LPG and liquefied petroleum gases", "Industrial and speciality gases", "Refrigerant gases"],
      tr: ["LPG ve sıvılaştırılmış petrol gazları", "Endüstriyel ve özel gazlar", "Soğutucu gazlar"],
      de: ["LPG und Flüssiggase", "Industrie- und Spezialgase", "Kältemittelgase"],
      nl: ["LPG en vloeibaar petroleumgas", "Industriële en speciale gassen", "Koudemiddelgassen"],
    },
    specs: {
      en: [
        { label: "Specified by", value: "Working pressure group" },
        { label: "Discharge", value: "Vapour line / pump / pressure differential" },
        { label: "Frame", value: "20-ft ISO" },
        { label: "Availability", value: "Buy or rent" },
      ],
      tr: [
        { label: "Belirleyici", value: "Çalışma basıncı grubu" },
        { label: "Boşaltma", value: "Buhar hattı / pompa / basınç farkı" },
        { label: "Çerçeve", value: "20 ayak ISO" },
        { label: "Durum", value: "Satın alma veya kiralama" },
      ],
      de: [
        { label: "Spezifiziert nach", value: "Betriebsdruckgruppe" },
        { label: "Entladung", value: "Gasphasenleitung / Pumpe / Druckdifferenz" },
        { label: "Rahmen", value: "20-Fuß-ISO" },
        { label: "Verfügbarkeit", value: "Kauf oder Miete" },
      ],
      nl: [
        { label: "Gespecificeerd op", value: "Werkdrukgroep" },
        { label: "Lossen", value: "Dampleiding / pomp / drukverschil" },
        { label: "Frame", value: "20-voets ISO" },
        { label: "Beschikbaarheid", value: "Kopen of huren" },
      ],
    },
  },
  {
    slug: "reefer-tank-container",
    photo: "/media/Reefer-tank-container-1.jpg",
    art: "rail",
    availability: "both",
    title: {
      en: "Reefer / cool tank container",
      tr: "Reefer / soğutmalı tank konteyner",
      de: "Reefer- / Kühltankcontainer",
      nl: "Reefer- / koeltankcontainer",
    },
    summary: {
      en: "Actively cooled units for cargoes that have a temperature ceiling rather than just a pumping temperature.",
      tr: "Yalnızca pompalama sıcaklığı değil, bir sıcaklık tavanı olan yükler için aktif soğutmalı üniteler.",
      de: "Aktiv gekühlte Einheiten für Ladungen mit einer Temperaturobergrenze, nicht bloß einer Pumptemperatur.",
      nl: "Actief gekoelde units voor ladingen met een temperatuurplafond, niet alleen een pomptemperatuur.",
    },
    body: {
      en: [
        "Insulation slows a temperature change; it does not reverse one. For cargoes that degrade above a threshold — or that must arrive within a stated band — the tank needs an active cooling unit rather than a heavier jacket.",
        "Reefer tanks combine insulation with a refrigeration set, so the product is held within range across a long transit rather than merely leaving the loading point at the right temperature.",
      ],
      tr: [
        "İzolasyon sıcaklık değişimini yavaşlatır; geri çevirmez. Bir eşiğin üzerinde bozulan ya da belirtilen bir bant içinde varması gereken yükler için tankın daha kalın bir ceket değil, aktif bir soğutma ünitesi gerekir.",
        "Reefer tanklar izolasyonu bir soğutma setiyle birleştirir; böylece ürün yalnızca yükleme noktasından doğru sıcaklıkta çıkmakla kalmaz, uzun transit boyunca aralıkta tutulur.",
      ],
      de: [
        "Dämmung verlangsamt eine Temperaturänderung, sie kehrt sie nicht um. Für Ladungen, die oberhalb einer Schwelle verderben — oder in einem festgelegten Band ankommen müssen — braucht der Tank ein aktives Kühlaggregat statt eines dickeren Mantels.",
        "Reefer-Tanks verbinden Dämmung mit einem Kälteaggregat, sodass das Produkt über eine lange Laufzeit im Bereich gehalten wird und nicht nur mit der richtigen Temperatur den Ladeort verlässt.",
      ],
      nl: [
        "Isolatie vertraagt een temperatuurverandering; ze draait die niet om. Voor ladingen die boven een drempel bederven — of binnen een opgegeven band moeten aankomen — heeft de tank een actieve koelunit nodig in plaats van een dikkere jas.",
        "Reefertanks combineren isolatie met een koelaggregaat, zodat het product over een lange transit binnen bereik blijft en niet alleen op de juiste temperatuur het laadpunt verlaat.",
      ],
    },
    features: {
      en: [
        "Active refrigeration unit with insulation",
        "Temperature held across long transits",
        "Suitable for temperature-sensitive food and chemical cargoes",
        "Buy or rent from stock",
      ],
      tr: [
        "İzolasyonla birlikte aktif soğutma ünitesi",
        "Uzun transitlerde korunan sıcaklık",
        "Sıcaklığa duyarlı gıda ve kimyasal yükler için uygun",
        "Stoktan satın alma veya kiralama",
      ],
      de: [
        "Aktives Kälteaggregat mit Dämmung",
        "Temperatur über lange Laufzeiten gehalten",
        "Für temperaturempfindliche Lebensmittel- und Chemieladungen",
        "Kauf oder Miete ab Lager",
      ],
      nl: [
        "Actieve koelunit met isolatie",
        "Temperatuur behouden over lange transits",
        "Geschikt voor temperatuurgevoelige voedings- en chemieladingen",
        "Kopen of huren uit voorraad",
      ],
    },
    applications: {
      en: ["Temperature-sensitive food liquids", "Latex and emulsions", "Cargoes with a stated arrival band"],
      tr: ["Sıcaklığa duyarlı gıda sıvıları", "Lateks ve emülsiyonlar", "Varışta sıcaklık bandı istenen yükler"],
      de: ["Temperaturempfindliche Lebensmittelflüssigkeiten", "Latex und Emulsionen", "Ladungen mit vorgegebenem Ankunftsband"],
      nl: ["Temperatuurgevoelige voedingsvloeistoffen", "Latex en emulsies", "Ladingen met opgegeven aankomstband"],
    },
    specs: {
      en: [
        { label: "Temperature control", value: "Active refrigeration" },
        { label: "Insulation", value: "Included" },
        { label: "Frame", value: "20-ft ISO" },
        { label: "Availability", value: "Buy or rent" },
      ],
      tr: [
        { label: "Sıcaklık kontrolü", value: "Aktif soğutma" },
        { label: "İzolasyon", value: "Dahil" },
        { label: "Çerçeve", value: "20 ayak ISO" },
        { label: "Durum", value: "Satın alma veya kiralama" },
      ],
      de: [
        { label: "Temperaturführung", value: "Aktive Kühlung" },
        { label: "Dämmung", value: "Enthalten" },
        { label: "Rahmen", value: "20-Fuß-ISO" },
        { label: "Verfügbarkeit", value: "Kauf oder Miete" },
      ],
      nl: [
        { label: "Temperatuurregeling", value: "Actieve koeling" },
        { label: "Isolatie", value: "Inbegrepen" },
        { label: "Frame", value: "20-voets ISO" },
        { label: "Beschikbaarheid", value: "Kopen of huren" },
      ],
    },
  },
  {
    slug: "silo-bulk-container",
    photo: "/media/Silo-bulk-Container.webp",
    art: "warehouse",
    availability: "both",
    title: {
      en: "Silo & bulk container",
      tr: "Silo ve dökme yük konteyneri",
      de: "Silo- & Schüttgutcontainer",
      nl: "Silo- & bulkcontainer",
    },
    summary: {
      en: "For dry bulk — powders, granulates and pellets — loaded through hatches and discharged by tipping or fluidisation.",
      tr: "Kuru dökme yük için — tozlar, granüller ve peletler; kapaklardan yüklenir, devirme veya akışkanlaştırma ile boşaltılır.",
      de: "Für Schüttgut — Pulver, Granulate und Pellets — über Domdeckel beladen und durch Kippen oder Fluidisierung entladen.",
      nl: "Voor droge bulk — poeders, granulaten en pellets — geladen via luiken en gelost door kiepen of fluïdisatie.",
    },
    body: {
      en: [
        "Dry bulk behaves nothing like a liquid. It bridges, it compacts, it holds air, and it needs a container built around getting the product moving again at the destination.",
        "Silo containers load through top hatches and discharge either by tipping the unit or by fluidising the product with air. Which of the two suits you depends less on the material than on what the receiving site is equipped to do.",
      ],
      tr: [
        "Kuru dökme yük, sıvıya hiç benzemez. Köprüleşir, sıkışır, hava tutar; varışta ürünü yeniden hareket ettirmek üzere kurgulanmış bir konteyner ister.",
        "Silo konteynerler üst kapaklardan yüklenir ve ya ünite devrilerek ya da ürün havayla akışkanlaştırılarak boşaltılır. Hangisinin size uyduğu, malzemeden çok teslim sahasının neye donanımlı olduğuna bağlıdır.",
      ],
      de: [
        "Schüttgut verhält sich völlig anders als eine Flüssigkeit. Es brückt, es verdichtet sich, es hält Luft — und es braucht einen Behälter, der darauf ausgelegt ist, das Produkt am Ziel wieder in Bewegung zu bringen.",
        "Silocontainer werden über Domdeckel beladen und entweder durch Kippen der Einheit oder durch Fluidisieren mit Luft entladen. Was passt, hängt weniger vom Material ab als davon, wofür die Empfangsstelle ausgerüstet ist.",
      ],
      nl: [
        "Droge bulk gedraagt zich totaal anders dan een vloeistof. Het brugt, het verdicht, het houdt lucht vast en het vraagt een container die is ontworpen om het product op de bestemming weer in beweging te krijgen.",
        "Silocontainers laden via bovenluiken en lossen door de unit te kiepen of door het product met lucht te fluïdiseren. Wat past, hangt minder af van het materiaal dan van waarvoor de ontvangstlocatie is uitgerust.",
      ],
    },
    features: {
      en: [
        "Top hatch loading",
        "Tipping or fluidised discharge",
        "Suited to powders, granulates and pellets",
        "Buy or rent from stock",
      ],
      tr: [
        "Üst kapaktan yükleme",
        "Devirmeli veya akışkanlaştırmalı boşaltma",
        "Toz, granül ve pelet için uygun",
        "Stoktan satın alma veya kiralama",
      ],
      de: [
        "Beladung über Domdeckel",
        "Entladung durch Kippen oder Fluidisierung",
        "Für Pulver, Granulate und Pellets",
        "Kauf oder Miete ab Lager",
      ],
      nl: [
        "Laden via bovenluik",
        "Lossen door kiepen of fluïdiseren",
        "Geschikt voor poeders, granulaten en pellets",
        "Kopen of huren uit voorraad",
      ],
    },
    applications: {
      en: ["Plastic granulates and pellets", "Powdered minerals", "Food-grade dry bulk"],
      tr: ["Plastik granül ve peletler", "Toz mineraller", "Gıda sınıfı kuru dökme yük"],
      de: ["Kunststoffgranulate und Pellets", "Pulverförmige Mineralien", "Lebensmitteltaugliches Schüttgut"],
      nl: ["Kunststofgranulaten en pellets", "Poedervormige mineralen", "Food-grade droge bulk"],
    },
    specs: {
      en: [
        { label: "Cargo type", value: "Dry bulk" },
        { label: "Loading", value: "Top hatches" },
        { label: "Discharge", value: "Tipping or fluidisation" },
        { label: "Availability", value: "Buy or rent" },
      ],
      tr: [
        { label: "Yük tipi", value: "Kuru dökme" },
        { label: "Yükleme", value: "Üst kapaklar" },
        { label: "Boşaltma", value: "Devirme veya akışkanlaştırma" },
        { label: "Durum", value: "Satın alma veya kiralama" },
      ],
      de: [
        { label: "Ladungsart", value: "Schüttgut" },
        { label: "Beladung", value: "Domdeckel" },
        { label: "Entladung", value: "Kippen oder Fluidisierung" },
        { label: "Verfügbarkeit", value: "Kauf oder Miete" },
      ],
      nl: [
        { label: "Ladingtype", value: "Droge bulk" },
        { label: "Laden", value: "Bovenluiken" },
        { label: "Lossen", value: "Kiepen of fluïdiseren" },
        { label: "Beschikbaarheid", value: "Kopen of huren" },
      ],
    },
  },
  {
    slug: "tdi-mdi-tank-container",
    photo: "/media/MDI-tank-container-3.jpg",
    art: "tank",
    availability: "both",
    title: {
      en: "TDI / MDI tank container",
      tr: "TDI / MDI tank konteyner",
      de: "TDI-/MDI-Tankcontainer",
      nl: "TDI-/MDI-tankcontainer",
    },
    summary: {
      en: "Dedicated units for isocyanates, where moisture ingress and temperature drift are the two things that ruin a load.",
      tr: "İzosiyanatlar için ayrılmış üniteler; bir yükü mahveden iki şey nem girişi ve sıcaklık kaymasıdır.",
      de: "Dedizierte Einheiten für Isocyanate — Feuchtigkeitseintrag und Temperaturabweichung sind die beiden Dinge, die eine Ladung verderben.",
      nl: "Toegewijde units voor isocyanaten, waar vochtintrede en temperatuurdrift de twee dingen zijn die een lading verpesten.",
    },
    body: {
      en: [
        "TDI and MDI react with water. A trace of moisture left in a shell after cleaning is enough to start forming solids, and once that begins the cargo is compromised before it ever reaches the customer.",
        "These units are kept in dedicated service with controlled heating and a documented cleaning history, so the tank arriving at your loading point has a traceable record rather than an assumption behind it.",
      ],
      tr: [
        "TDI ve MDI suyla tepkimeye girer. Temizlik sonrası gövdede kalan eser miktarda nem bile katı oluşumunu başlatmaya yeter; bu başladığında yük müşteriye ulaşmadan bozulmuştur.",
        "Bu üniteler kontrollü ısıtma ve belgelenmiş temizlik geçmişiyle ayrılmış hizmette tutulur; yükleme noktanıza gelen tankın arkasında bir varsayım değil, izlenebilir bir kayıt bulunur.",
      ],
      de: [
        "TDI und MDI reagieren mit Wasser. Eine Spur Restfeuchte im Behälter nach der Reinigung genügt, um Feststoffbildung auszulösen — und ist das einmal angelaufen, ist die Ladung verdorben, bevor sie den Kunden erreicht.",
        "Diese Einheiten laufen im dedizierten Einsatz mit geregelter Beheizung und dokumentierter Reinigungshistorie: Hinter dem Tank an Ihrem Ladeort steht ein nachvollziehbarer Nachweis statt einer Annahme.",
      ],
      nl: [
        "TDI en MDI reageren met water. Een spoor restvocht in de mantel na reiniging is genoeg om vaste stof te vormen, en zodra dat begint is de lading bedorven voordat ze de klant bereikt.",
        "Deze units draaien in toegewijde dienst met geregelde verwarming en een gedocumenteerde reinigingshistorie, zodat achter de tank op uw laadpunt een traceerbaar dossier staat in plaats van een aanname.",
      ],
    },
    features: {
      en: [
        "Dedicated isocyanate service",
        "Controlled heating",
        "Documented cleaning history",
        "New and used units available",
      ],
      tr: [
        "İzosiyanat için ayrılmış hizmet",
        "Kontrollü ısıtma",
        "Belgelenmiş temizlik geçmişi",
        "Sıfır ve ikinci el üniteler",
      ],
      de: [
        "Dedizierter Isocyanat-Einsatz",
        "Geregelte Beheizung",
        "Dokumentierte Reinigungshistorie",
        "Neue und gebrauchte Einheiten verfügbar",
      ],
      nl: [
        "Toegewijde isocyanaatdienst",
        "Geregelde verwarming",
        "Gedocumenteerde reinigingshistorie",
        "Nieuwe en gebruikte units beschikbaar",
      ],
    },
    applications: {
      en: ["TDI (toluene diisocyanate)", "MDI (methylene diphenyl diisocyanate)", "Polyurethane feedstocks"],
      tr: ["TDI (toluen diizosiyanat)", "MDI (metilen difenil diizosiyanat)", "Poliüretan hammaddeleri"],
      de: ["TDI (Toluoldiisocyanat)", "MDI (Methylendiphenyldiisocyanat)", "Polyurethan-Vorprodukte"],
      nl: ["TDI (tolueendiisocyanaat)", "MDI (methyleendifenyldiisocyanaat)", "Polyurethaan-grondstoffen"],
    },
    specs: {
      en: [
        { label: "Service", value: "Dedicated" },
        { label: "Heating", value: "Controlled" },
        { label: "Cleaning record", value: "Documented" },
        { label: "Frame", value: "20-ft ISO" },
      ],
      tr: [
        { label: "Hizmet", value: "Ayrılmış" },
        { label: "Isıtma", value: "Kontrollü" },
        { label: "Temizlik kaydı", value: "Belgelenmiş" },
        { label: "Çerçeve", value: "20 ayak ISO" },
      ],
      de: [
        { label: "Einsatz", value: "Dediziert" },
        { label: "Beheizung", value: "Geregelt" },
        { label: "Reinigungsnachweis", value: "Dokumentiert" },
        { label: "Rahmen", value: "20-Fuß-ISO" },
      ],
      nl: [
        { label: "Dienst", value: "Toegewijd" },
        { label: "Verwarming", value: "Geregeld" },
        { label: "Reinigingsdossier", value: "Gedocumenteerd" },
        { label: "Frame", value: "20-voets ISO" },
      ],
    },
  },
  {
    slug: "spill-tray-leakage-container",
    photo: "/media/Leaking-Containers-Tankcon.jpeg",
    art: "customs",
    availability: "both",
    title: {
      en: "Spill tray / leakage container",
      tr: "Sızıntı tavası / kaçak konteyneri",
      de: "Auffangwanne / Leckagecontainer",
      nl: "Lekbak / lekkagecontainer",
    },
    summary: {
      en: "Containment for a tank that has started to leak — so the problem stays inside a frame instead of on the yard.",
      tr: "Sızdırmaya başlamış bir tank için muhafaza — sorun sahaya değil, bir çerçevenin içinde kalır.",
      de: "Auffangbehälter für einen undicht gewordenen Tank — das Problem bleibt im Rahmen statt auf dem Hof.",
      nl: "Opvang voor een tank die is gaan lekken — het probleem blijft binnen een frame in plaats van op het terrein.",
    },
    body: {
      en: [
        "A leaking tank is a problem with a clock on it. Until the unit can be emptied and repaired, the cargo has to be held somewhere that will not let it reach the ground, the drain or the next container in the stack.",
        "A spill tray or leakage container takes the damaged unit and contains what escapes, which turns an incident into a controlled operation rather than a clean-up.",
      ],
      tr: [
        "Sızdıran tank, üzerinde saat işleyen bir sorundur. Ünite boşaltılıp onarılana kadar yükün, yere, dreneje veya istifteki bir sonraki konteynere ulaşmasına izin vermeyecek bir yerde tutulması gerekir.",
        "Sızıntı tavası veya kaçak konteyneri hasarlı üniteyi alır ve dışarı çıkanı hapseder; böylece olay bir temizlik operasyonu değil, kontrollü bir işlem hâline gelir.",
      ],
      de: [
        "Ein undichter Tank ist ein Problem mit laufender Uhr. Bis die Einheit entleert und repariert werden kann, muss die Ladung dort gehalten werden, wo sie weder Boden noch Kanalisation noch den nächsten Container im Stapel erreicht.",
        "Eine Auffangwanne oder ein Leckagecontainer nimmt die beschädigte Einheit auf und hält zurück, was austritt — aus einem Zwischenfall wird ein kontrollierter Vorgang statt einer Sanierung.",
      ],
      nl: [
        "Een lekkende tank is een probleem met een klok erop. Tot de unit kan worden geleegd en gerepareerd, moet de lading ergens worden gehouden waar ze de grond, het riool of de volgende container in de stapel niet bereikt.",
        "Een lekbak of lekkagecontainer neemt de beschadigde unit op en vangt op wat ontsnapt; zo wordt een incident een beheerste handeling in plaats van een sanering.",
      ],
    },
    features: {
      en: [
        "Containment for damaged or leaking units",
        "Keeps spills off the yard and out of drains",
        "Available at short notice",
        "Buy or rent",
      ],
      tr: [
        "Hasarlı veya sızdıran üniteler için muhafaza",
        "Dökülmeyi sahadan ve drenajdan uzak tutar",
        "Kısa sürede temin",
        "Satın alma veya kiralama",
      ],
      de: [
        "Auffangbehälter für beschädigte oder undichte Einheiten",
        "Hält Austritte von Hof und Kanalisation fern",
        "Kurzfristig verfügbar",
        "Kauf oder Miete",
      ],
      nl: [
        "Opvang voor beschadigde of lekkende units",
        "Houdt lekkage van terrein en riool",
        "Op korte termijn beschikbaar",
        "Kopen of huren",
      ],
    },
    applications: {
      en: ["Emergency containment", "Damaged units awaiting repair", "Yard and terminal safety stock"],
      tr: ["Acil durum muhafazası", "Onarım bekleyen hasarlı üniteler", "Saha ve terminal emniyet stoğu"],
      de: ["Notfall-Rückhaltung", "Beschädigte Einheiten in Reparaturwartestellung", "Sicherheitsbestand für Hof und Terminal"],
      nl: ["Noodopvang", "Beschadigde units die op reparatie wachten", "Veiligheidsvoorraad voor terrein en terminal"],
    },
    specs: {
      en: [
        { label: "Purpose", value: "Containment" },
        { label: "Use case", value: "Damaged or leaking tanks" },
        { label: "Lead time", value: "Short notice" },
        { label: "Availability", value: "Buy or rent" },
      ],
      tr: [
        { label: "Amaç", value: "Muhafaza" },
        { label: "Kullanım", value: "Hasarlı veya sızdıran tanklar" },
        { label: "Temin süresi", value: "Kısa sürede" },
        { label: "Durum", value: "Satın alma veya kiralama" },
      ],
      de: [
        { label: "Zweck", value: "Rückhaltung" },
        { label: "Anwendungsfall", value: "Beschädigte oder undichte Tanks" },
        { label: "Vorlaufzeit", value: "Kurzfristig" },
        { label: "Verfügbarkeit", value: "Kauf oder Miete" },
      ],
      nl: [
        { label: "Doel", value: "Opvang" },
        { label: "Toepassing", value: "Beschadigde of lekkende tanks" },
        { label: "Levertijd", value: "Korte termijn" },
        { label: "Beschikbaarheid", value: "Kopen of huren" },
      ],
    },
  },
  {
    slug: "special-tank-container",
    photo: "/media/customization-1.webp",
    art: "project",
    availability: "both",
    title: {
      en: "Special tank container",
      tr: "Özel tank konteyner",
      de: "Spezial-Tankcontainer",
      nl: "Speciale tankcontainer",
    },
    summary: {
      en: "When the standard families do not fit: heavier pressure ratings, special alloys, electrical or glycol heating, stirring and mixing.",
      tr: "Standart aileler yetmediğinde: daha yüksek basınç sınıfları, özel alaşımlar, elektrikli veya glikol ısıtma, karıştırma ve mikserleme.",
      de: "Wenn die Standardfamilien nicht passen: höhere Druckstufen, Sonderlegierungen, Elektro- oder Glykolheizung, Rühr- und Mischtechnik.",
      nl: "Als de standaardfamilies niet passen: hogere drukklassen, speciale legeringen, elektrische of glycolverwarming, roeren en mengen.",
    },
    body: {
      en: [
        "Some cargoes sit outside the standard families. They need a higher pressure rating, a shell in 316Ti or duplex stainless, heating that holds a precise band, or agitation to keep a suspension from separating in transit.",
        "We source and modify units for these cases in our own workshop, so the specification is built around the product rather than the product being forced into an available tank.",
      ],
      tr: [
        "Bazı yükler standart ailelerin dışında kalır. Daha yüksek bir basınç sınıfı, 316Ti veya dubleks paslanmaz gövde, dar bir bandı koruyan ısıtma ya da bir süspansiyonun yolda ayrışmasını önleyecek karıştırma isterler.",
        "Bu durumlar için üniteleri kendi atölyemizde temin edip modifiye ediyoruz; spesifikasyon ürünün etrafında kuruluyor, ürün mevcut bir tanka zorlanmıyor.",
      ],
      de: [
        "Manche Ladungen liegen außerhalb der Standardfamilien. Sie brauchen eine höhere Druckstufe, einen Behälter aus 316Ti oder Duplexstahl, eine Beheizung, die ein enges Band hält, oder Rührtechnik, damit sich eine Suspension unterwegs nicht entmischt.",
        "Für solche Fälle beschaffen und modifizieren wir Einheiten in der eigenen Werkstatt — die Spezifikation entsteht um das Produkt herum, statt das Produkt in einen verfügbaren Tank zu zwingen.",
      ],
      nl: [
        "Sommige ladingen vallen buiten de standaardfamilies. Ze vragen een hogere drukklasse, een mantel in 316Ti of duplex, verwarming die een nauwe band vasthoudt, of roerwerk zodat een suspensie onderweg niet ontmengt.",
        "Voor deze gevallen kopen en modificeren we units in onze eigen werkplaats, zodat de specificatie om het product heen wordt gebouwd in plaats van het product in een beschikbare tank te persen.",
      ],
    },
    features: {
      en: [
        "Higher pressure ratings on request",
        "Special alloys such as 316Ti or duplex",
        "Electrical and glycol heating",
        "Stirring and mixing equipment",
      ],
      tr: [
        "Talep üzerine daha yüksek basınç sınıfları",
        "316Ti veya dubleks gibi özel alaşımlar",
        "Elektrikli ve glikol ısıtma",
        "Karıştırma ve mikserleme donanımı",
      ],
      de: [
        "Höhere Druckstufen auf Anfrage",
        "Sonderlegierungen wie 316Ti oder Duplex",
        "Elektro- und Glykolheizung",
        "Rühr- und Mischtechnik",
      ],
      nl: [
        "Hogere drukklassen op aanvraag",
        "Speciale legeringen zoals 316Ti of duplex",
        "Elektrische en glycolverwarming",
        "Roer- en mengapparatuur",
      ],
    },
    applications: {
      en: ["Aggressive chemical cargoes", "Products needing a narrow temperature band", "Suspensions that separate in transit"],
      tr: ["Agresif kimyasal yükler", "Dar sıcaklık bandı gerektiren ürünler", "Yolda ayrışan süspansiyonlar"],
      de: ["Aggressive Chemieladungen", "Produkte mit engem Temperaturband", "Suspensionen, die sich unterwegs entmischen"],
      nl: ["Agressieve chemieladingen", "Producten met een nauwe temperatuurband", "Suspensies die onderweg ontmengen"],
    },
    specs: {
      en: [
        { label: "Shell materials", value: "316Ti, duplex and others" },
        { label: "Heating", value: "Electrical / glycol" },
        { label: "Agitation", value: "Stirring and mixing available" },
        { label: "Build", value: "Modified in our own workshop" },
      ],
      tr: [
        { label: "Gövde malzemeleri", value: "316Ti, dubleks ve diğerleri" },
        { label: "Isıtma", value: "Elektrikli / glikol" },
        { label: "Karıştırma", value: "Karıştırma ve mikserleme mevcut" },
        { label: "Üretim", value: "Kendi atölyemizde modifiye" },
      ],
      de: [
        { label: "Behälterwerkstoffe", value: "316Ti, Duplex und weitere" },
        { label: "Beheizung", value: "Elektrisch / Glykol" },
        { label: "Rührtechnik", value: "Rühren und Mischen möglich" },
        { label: "Ausführung", value: "In eigener Werkstatt umgebaut" },
      ],
      nl: [
        { label: "Mantelmaterialen", value: "316Ti, duplex en andere" },
        { label: "Verwarming", value: "Elektrisch / glycol" },
        { label: "Roerwerk", value: "Roeren en mengen mogelijk" },
        { label: "Uitvoering", value: "Gemodificeerd in eigen werkplaats" },
      ],
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
