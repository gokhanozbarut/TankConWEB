import type { Localized } from "@/i18n/config";

/** Hizmet verilen sektörler (tankcon.com "Industries" başlığı). */
export type Industry = {
  slug: string;
  photo: string;
  art: string;
  title: Localized;
  summary: Localized;
  body: Localized<string[]>;
  cargoes: Localized<string[]>;
  requirements: Localized<string[]>;
  /** Bu sektöre uygun ürünlerin slug'ları. */
  products: string[];
};

export const industries: Industry[] = [
  {
    slug: "chemical",
    photo: "/media/chemical-industrie.jpg",
    art: "tank",
    title: {
      en: "Chemical industry",
      tr: "Kimya sektörü",
      de: "Chemische Industrie",
      nl: "Chemische industrie",
    },
    summary: {
      en: "Aggressive and regulated cargoes, where shell compatibility and the right T-code decide what you may load.",
      tr: "Agresif ve düzenlemeye tabi yükler; ne yükleyebileceğinizi gövde uyumluluğu ve doğru T-kodu belirler.",
      de: "Aggressive und regulierte Ladungen, bei denen Werkstoffverträglichkeit und der richtige T-Code entscheiden, was verladen werden darf.",
      nl: "Agressieve en gereguleerde ladingen, waarbij materiaalcompatibiliteit en de juiste T-code bepalen wat u mag laden.",
    },
    body: {
      en: [
        "Chemical cargoes set the hardest constraints. The substance decides the portable tank code, the code decides the shell thickness and the fittings, and the fittings decide which terminals can handle the unit at all.",
        "We work through that chain with you before the tank is allocated — compatibility of the shell with the product, the T-code the substance requires, and whether a standard unit will do or the job calls for a special alloy.",
      ],
      tr: [
        "Kimyasal yükler en zor kısıtları koyar. Madde portatif tank kodunu, kod gövde kalınlığını ve armatürleri, armatürler de üniteyi hangi terminallerin elleçleyebileceğini belirler.",
        "Bu zinciri tank tahsis edilmeden önce sizinle birlikte geçiyoruz: gövdenin ürünle uyumluluğu, maddenin gerektirdiği T-kodu ve standart bir ünitenin yetip yetmeyeceği ya da işin özel alaşım isteyip istemediği.",
      ],
      de: [
        "Chemieladungen setzen die härtesten Randbedingungen. Der Stoff bestimmt den Tankcode, der Code bestimmt Wandstärke und Armaturen, und die Armaturen bestimmen, welche Terminals die Einheit überhaupt abfertigen können.",
        "Diese Kette gehen wir mit Ihnen durch, bevor der Tank zugeteilt wird — Verträglichkeit des Behälters mit dem Produkt, der vom Stoff geforderte T-Code und die Frage, ob eine Standardeinheit genügt oder eine Sonderlegierung nötig ist.",
      ],
      nl: [
        "Chemische ladingen stellen de zwaarste randvoorwaarden. De stof bepaalt de tankcode, de code bepaalt de wanddikte en de appendages, en de appendages bepalen welke terminals de unit überhaupt kunnen afhandelen.",
        "Die keten lopen we met u door voordat de tank wordt toegewezen — verenigbaarheid van de mantel met het product, de T-code die de stof vraagt, en of een standaardunit volstaat of dat het werk een speciale legering vraagt.",
      ],
    },
    cargoes: {
      en: ["Caustic soda and acids", "Solvents", "Isocyanates (TDI / MDI)", "Polymer feedstocks"],
      tr: ["Kostik soda ve asitler", "Solventler", "İzosiyanatlar (TDI / MDI)", "Polimer hammaddeleri"],
      de: ["Natronlauge und Säuren", "Lösemittel", "Isocyanate (TDI / MDI)", "Polymer-Vorprodukte"],
      nl: ["Natronloog en zuren", "Oplosmiddelen", "Isocyanaten (TDI / MDI)", "Polymeergrondstoffen"],
    },
    requirements: {
      en: [
        "Shell material compatible with the product",
        "Correct portable tank code (T11, T14 or higher)",
        "Fittings the receiving terminal can work with",
        "Traceable cleaning history between products",
      ],
      tr: [
        "Ürünle uyumlu gövde malzemesi",
        "Doğru portatif tank kodu (T11, T14 veya üzeri)",
        "Teslim terminalinin çalışabileceği armatürler",
        "Ürünler arasında izlenebilir temizlik geçmişi",
      ],
      de: [
        "Zum Produkt passender Behälterwerkstoff",
        "Korrekter Tankcode (T11, T14 oder höher)",
        "Armaturen, mit denen das Empfangsterminal arbeiten kann",
        "Nachvollziehbare Reinigungshistorie zwischen Produkten",
      ],
      nl: [
        "Mantelmateriaal dat past bij het product",
        "Juiste tankcode (T11, T14 of hoger)",
        "Appendages waarmee de ontvangstterminal kan werken",
        "Traceerbare reinigingshistorie tussen producten",
      ],
    },
    products: ["standard-iso-tank-container", "tdi-mdi-tank-container", "special-tank-container"],
  },
  {
    slug: "food-feed-grade",
    photo: "/media/Tankcon-food-grade-tank-container.jpg",
    art: "warehouse",
    title: {
      en: "Food & feed grade",
      tr: "Gıda ve yem sınıfı",
      de: "Lebens- & Futtermittel",
      nl: "Food & feed grade",
    },
    summary: {
      en: "Polished interiors, validated cleaning and a documented history — because here the paperwork is part of the product.",
      tr: "Parlatılmış iç yüzey, doğrulanmış temizlik ve belgelenmiş geçmiş — çünkü burada evrak ürünün parçasıdır.",
      de: "Polierte Innenflächen, validierte Reinigung und dokumentierte Historie — hier gehören die Papiere zum Produkt.",
      nl: "Gepolijste binnenzijden, gevalideerde reiniging en een gedocumenteerde historie — hier horen de papieren bij het product.",
    },
    body: {
      en: [
        "Food-grade duty asks less of the shell's chemistry and more of its surface and its history. A polished interior finish gives residue nowhere to sit, and clean-in-place coverage has to be demonstrated rather than assumed.",
        "Just as important is what the tank carried before. A food-grade unit needs a cleaning record that can be produced on demand — for the receiving plant, and for the auditor who will ask about it later.",
      ],
      tr: [
        "Gıda sınıfı hizmet, gövdenin kimyasından çok yüzeyinden ve geçmişinden şey ister. Parlatılmış iç yüzey kalıntıya tutunacak yer bırakmaz; yerinde temizlik (CIP) kapsamının varsayılması değil, gösterilmesi gerekir.",
        "Bir o kadar önemlisi tankın daha önce ne taşıdığıdır. Gıda sınıfı bir ünite, talep edildiğinde sunulabilecek bir temizlik kaydına ihtiyaç duyar — teslim alan tesis için ve sonradan soracak denetçi için.",
      ],
      de: [
        "Lebensmitteltauglicher Einsatz fordert weniger von der Chemie des Behälters als von seiner Oberfläche und seiner Historie. Eine polierte Innenfläche bietet Rückständen keinen Halt, und die CIP-Abdeckung muss nachgewiesen und nicht unterstellt werden.",
        "Ebenso wichtig ist, was der Tank zuvor geladen hatte. Eine lebensmitteltaugliche Einheit braucht einen Reinigungsnachweis, der auf Verlangen vorgelegt werden kann — für das Empfangswerk und für die Auditierung danach.",
      ],
      nl: [
        "Food-grade inzet vraagt minder van de chemie van de mantel en meer van het oppervlak en de historie. Een gepolijste binnenafwerking geeft residu nergens houvast, en CIP-dekking moet worden aangetoond in plaats van aangenomen.",
        "Even belangrijk is wat de tank eerder vervoerde. Een food-grade unit heeft een reinigingsdossier nodig dat op verzoek kan worden overlegd — voor de ontvangende fabriek en voor de auditor die er later naar vraagt.",
      ],
    },
    cargoes: {
      en: ["Edible oils and fats", "Juices and concentrates", "Liquid sweeteners", "Liquid feed ingredients"],
      tr: ["Yemeklik yağlar", "Meyve suları ve konsantreler", "Sıvı tatlandırıcılar", "Sıvı yem bileşenleri"],
      de: ["Speiseöle und Fette", "Säfte und Konzentrate", "Flüssige Süßungsmittel", "Flüssige Futtermittelkomponenten"],
      nl: ["Spijsoliën en vetten", "Sappen en concentraten", "Vloeibare zoetstoffen", "Vloeibare voedergrondstoffen"],
    },
    requirements: {
      en: [
        "Polished interior finish",
        "Validated clean-in-place coverage",
        "Documented record of previous cargoes",
        "Heating where the product must stay pumpable",
      ],
      tr: [
        "Parlatılmış iç yüzey",
        "Doğrulanmış CIP kapsamı",
        "Önceki yüklerin belgelenmiş kaydı",
        "Ürünün pompalanabilir kalması gerekiyorsa ısıtma",
      ],
      de: [
        "Polierte Innenoberfläche",
        "Validierte CIP-Abdeckung",
        "Dokumentierter Nachweis der Vorladungen",
        "Beheizung, wo das Produkt pumpfähig bleiben muss",
      ],
      nl: [
        "Gepolijste binnenafwerking",
        "Gevalideerde CIP-dekking",
        "Gedocumenteerd overzicht van eerdere ladingen",
        "Verwarming waar het product pompbaar moet blijven",
      ],
    },
    products: ["standard-iso-tank-container", "reefer-tank-container", "silo-bulk-container"],
  },
  {
    slug: "gases",
    photo: "/media/what-are-the-uses-of-gas-containers.jpg",
    art: "rail",
    title: {
      en: "Gases",
      tr: "Gazlar",
      de: "Gase",
      nl: "Gassen",
    },
    summary: {
      en: "Liquefied gases, specified around working pressure and the way the product will be discharged.",
      tr: "Sıvılaştırılmış gazlar; çalışma basıncına ve ürünün nasıl boşaltılacağına göre belirlenir.",
      de: "Flüssiggase, ausgelegt nach Betriebsdruck und der Art der Entladung.",
      nl: "Vloeibaar gemaakte gassen, gespecificeerd op werkdruk en de manier van lossen.",
    },
    body: {
      en: [
        "With gases the pressure class comes first. It determines the shell, the valves and the certification, and it is not something that can be adjusted later without going back to the workshop.",
        "The discharge method is the second decision and the one most often left too late. Vapour line, pump and pressure-differential discharge each need their own fittings, and the receiving terminal's equipment usually settles the question.",
      ],
      tr: [
        "Gazlarda önce basınç sınıfı gelir. Gövdeyi, vanaları ve sertifikasyonu belirler; atölyeye geri dönmeden sonradan ayarlanabilecek bir şey değildir.",
        "Boşaltma yöntemi ikinci karardır ve en sık geç bırakılanıdır. Buhar hattı, pompa ve basınç farkıyla boşaltmanın her biri kendi armatürünü ister; soruyu genelde teslim terminalinin ekipmanı çözer.",
      ],
      de: [
        "Bei Gasen steht die Druckklasse an erster Stelle. Sie bestimmt Behälter, Armaturen und Zertifizierung — und lässt sich später nicht ohne Werkstattaufenthalt ändern.",
        "Die Entladeart ist die zweite Entscheidung und die, die am häufigsten zu spät fällt. Gasphasenleitung, Pumpe und Druckdifferenz verlangen jeweils eigene Armaturen; meist entscheidet die Ausrüstung des Empfangsterminals.",
      ],
      nl: [
        "Bij gassen komt de drukklasse eerst. Die bepaalt de mantel, de afsluiters en de certificering, en is later niet aan te passen zonder terug naar de werkplaats.",
        "De losmethode is de tweede beslissing en degene die het vaakst te laat valt. Dampleiding, pomp en drukverschil vragen elk eigen appendages; meestal beslist de uitrusting van de ontvangstterminal.",
      ],
    },
    cargoes: {
      en: ["LPG", "Industrial gases", "Speciality gases", "Refrigerants"],
      tr: ["LPG", "Endüstriyel gazlar", "Özel gazlar", "Soğutucu akışkanlar"],
      de: ["LPG", "Industriegase", "Spezialgase", "Kältemittel"],
      nl: ["LPG", "Industriële gassen", "Speciale gassen", "Koudemiddelen"],
    },
    requirements: {
      en: [
        "Correct working pressure group",
        "Discharge method agreed before allocation",
        "Valid pressure certification travelling with the unit",
        "Fittings matched to the receiving terminal",
      ],
      tr: [
        "Doğru çalışma basıncı grubu",
        "Tahsisten önce mutabık kalınan boşaltma yöntemi",
        "Üniteyle birlikte gezen geçerli basınç sertifikası",
        "Teslim terminaline uygun armatürler",
      ],
      de: [
        "Korrekte Betriebsdruckgruppe",
        "Vor der Zuteilung abgestimmte Entladeart",
        "Gültige Druckzertifizierung, die mit der Einheit reist",
        "Auf das Empfangsterminal abgestimmte Armaturen",
      ],
      nl: [
        "Juiste werkdrukgroep",
        "Losmethode afgestemd vóór toewijzing",
        "Geldige drukcertificering die met de unit meereist",
        "Appendages afgestemd op de ontvangstterminal",
      ],
    },
    products: ["gas-tank-container", "special-tank-container"],
  },
  {
    slug: "silo-bulk",
    photo: "/media/tankcon-silo-blulk.jpg",
    art: "warehouse",
    title: {
      en: "Silo & bulk",
      tr: "Silo ve dökme yük",
      de: "Silo & Schüttgut",
      nl: "Silo & bulk",
    },
    summary: {
      en: "Dry bulk in powders, granulates and pellets, where the real question is how the product comes out again.",
      tr: "Toz, granül ve pelet hâlinde kuru dökme yük; asıl soru ürünün yeniden nasıl çıkacağıdır.",
      de: "Schüttgut als Pulver, Granulat und Pellets — die eigentliche Frage ist, wie das Produkt wieder herauskommt.",
      nl: "Droge bulk in poeders, granulaten en pellets, waarbij de echte vraag is hoe het product er weer uitkomt.",
    },
    body: {
      en: [
        "Loading dry bulk is the easy half. The difficulty is at the far end, where a compacted or bridged product has to be persuaded out of the container and into the receiving silo.",
        "That is why the discharge method — tipping or fluidisation — is chosen against the destination's equipment rather than the material alone. Get it wrong and a full container becomes a stationary one.",
      ],
      tr: [
        "Kuru dökme yükü yüklemek kolay yarısıdır. Zorluk diğer uçtadır: sıkışmış veya köprüleşmiş bir ürünün konteynerden çıkıp teslim silosuna girmeye ikna edilmesi gerekir.",
        "Bu yüzden boşaltma yöntemi — devirme ya da akışkanlaştırma — yalnızca malzemeye göre değil, varış noktasının ekipmanına göre seçilir. Yanlış seçilirse dolu bir konteyner sabit bir konteynere dönüşür.",
      ],
      de: [
        "Schüttgut zu beladen ist die leichte Hälfte. Die Schwierigkeit liegt am anderen Ende, wo ein verdichtetes oder brückenbildendes Produkt aus dem Container in das Empfangssilo bewegt werden muss.",
        "Deshalb wird die Entladeart — Kippen oder Fluidisieren — an der Ausrüstung des Ziels gewählt und nicht am Material allein. Falsch entschieden, wird aus einem vollen Container ein stehender.",
      ],
      nl: [
        "Droge bulk laden is de makkelijke helft. De moeilijkheid zit aan de andere kant, waar een verdicht of bruggend product uit de container de ontvangstsilo in moet.",
        "Daarom wordt de losmethode — kiepen of fluïdiseren — gekozen op de uitrusting van de bestemming en niet op het materiaal alleen. Verkeerd gekozen en een volle container wordt een stilstaande.",
      ],
    },
    cargoes: {
      en: ["Plastic granulates and pellets", "Powdered minerals", "Cement and fillers", "Food-grade powders"],
      tr: ["Plastik granül ve peletler", "Toz mineraller", "Çimento ve dolgu maddeleri", "Gıda sınıfı tozlar"],
      de: ["Kunststoffgranulate und Pellets", "Pulverförmige Mineralien", "Zement und Füllstoffe", "Lebensmitteltaugliche Pulver"],
      nl: ["Kunststofgranulaten en pellets", "Poedervormige mineralen", "Cement en vulstoffen", "Food-grade poeders"],
    },
    requirements: {
      en: [
        "Discharge method matched to the destination",
        "Hatch layout suited to the loading point",
        "Dry interior with no residual moisture",
        "Segregation where food-grade powders are involved",
      ],
      tr: [
        "Varış noktasına uygun boşaltma yöntemi",
        "Yükleme noktasına uygun kapak düzeni",
        "Kalıntı nem içermeyen kuru iç yüzey",
        "Gıda sınıfı tozlarda ayrıştırma",
      ],
      de: [
        "Auf das Ziel abgestimmte Entladeart",
        "Zum Ladeort passende Domdeckelanordnung",
        "Trockener Innenraum ohne Restfeuchte",
        "Trennung, wo lebensmitteltaugliche Pulver im Spiel sind",
      ],
      nl: [
        "Losmethode afgestemd op de bestemming",
        "Luikindeling passend bij het laadpunt",
        "Droge binnenzijde zonder restvocht",
        "Scheiding waar food-grade poeders in het spel zijn",
      ],
    },
    products: ["silo-bulk-container", "standard-iso-tank-container"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
