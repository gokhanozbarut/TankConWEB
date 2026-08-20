import type { Localized } from "@/i18n/config";

/** Depoda verilen ek hizmetler (tankcon.com "Additional Services" başlığı). */
export type Service = {
  slug: string;
  photo: string;
  art: string;
  icon: "customs" | "truck" | "project" | "container";
  title: Localized;
  summary: Localized;
  body: Localized<string[]>;
  points: Localized<string[]>;
};

export const services: Service[] = [
  {
    slug: "inspection-re-testing",
    photo: "/media/Tankcontainer-inspection-inspectie.webp",
    art: "customs",
    icon: "customs",
    title: {
      en: "Inspection & re-testing",
      tr: "Muayene ve yeniden test",
      de: "Prüfung & Wiederholungsprüfung",
      nl: "Keuring & herkeuring",
    },
    summary: {
      en: "Periodic inspection and re-testing so a unit stays certified and stays in service.",
      tr: "Ünitenin sertifikalı ve hizmette kalması için periyodik muayene ve yeniden test.",
      de: "Wiederkehrende Prüfung, damit eine Einheit zertifiziert und im Einsatz bleibt.",
      nl: "Periodieke keuring en herkeuring zodat een unit gecertificeerd en inzetbaar blijft.",
    },
    body: {
      en: [
        "A tank container carries a certification schedule, and missing a date takes the unit out of service just as surely as a mechanical failure would. We carry out periodic inspection and re-testing in our own depot and hand back the paperwork with the tank.",
        "Because inspection sits on the same site as repair, a finding does not mean a second move: a unit that fails on one point can go straight to the workshop and come back qualified.",
      ],
      tr: [
        "Bir tank konteyner sertifikasyon takvimiyle gezer; bir tarihi kaçırmak, mekanik bir arıza kadar kesin biçimde üniteyi hizmet dışı bırakır. Periyodik muayene ve yeniden testi kendi depomuzda yapıyor, evrakı tankla birlikte teslim ediyoruz.",
        "Muayene onarımla aynı sahada olduğu için bir bulgu ikinci bir sevkiyat anlamına gelmez: tek bir kalemden kalan ünite doğrudan atölyeye girer ve uygun hâle gelmiş olarak döner.",
      ],
      de: [
        "Ein Tankcontainer führt einen Prüfkalender mit sich; ein versäumter Termin nimmt die Einheit ebenso sicher aus dem Verkehr wie ein mechanischer Schaden. Wiederkehrende Prüfungen führen wir im eigenen Depot durch und geben die Papiere mit dem Tank zurück.",
        "Da Prüfung und Reparatur auf demselben Gelände liegen, bedeutet ein Befund keinen zweiten Transport: Eine in einem Punkt beanstandete Einheit geht direkt in die Werkstatt und kommt qualifiziert zurück.",
      ],
      nl: [
        "Een tankcontainer draagt een keuringsschema met zich mee; een gemiste datum haalt de unit net zo zeker uit bedrijf als een mechanisch defect. Periodieke keuring en herkeuring doen we in ons eigen depot en de papieren gaan met de tank mee terug.",
        "Omdat keuring op hetzelfde terrein ligt als reparatie, betekent een bevinding geen tweede transport: een unit die op één punt afkeurt gaat direct de werkplaats in en komt gekwalificeerd terug.",
      ],
    },
    points: {
      en: ["Periodic inspection", "Re-testing and certification", "Documentation supplied with the unit", "Findings repaired on the same site"],
      tr: ["Periyodik muayene", "Yeniden test ve sertifikasyon", "Üniteyle birlikte evrak", "Bulgular aynı sahada onarılır"],
      de: ["Wiederkehrende Prüfung", "Wiederholungsprüfung und Zertifizierung", "Dokumentation zur Einheit", "Befunde am selben Standort behoben"],
      nl: ["Periodieke keuring", "Herkeuring en certificering", "Documentatie bij de unit", "Bevindingen op dezelfde locatie hersteld"],
    },
  },
  {
    slug: "maintenance-repair",
    photo: "/media/Handail-tankcon.jpg",
    art: "warehouse",
    icon: "truck",
    title: {
      en: "Maintenance & repair",
      tr: "Bakım ve onarım",
      de: "Wartung & Reparatur",
      nl: "Onderhoud & reparatie",
    },
    summary: {
      en: "Our own M&R department keeps the fleet in condition and ready for the next load.",
      tr: "Kendi bakım-onarım departmanımız filoyu kullanıma hazır ve bir sonraki yüke uygun tutar.",
      de: "Unsere eigene Wartungs- und Reparaturabteilung hält die Flotte instand und ladebereit.",
      nl: "Onze eigen onderhouds- en reparatieafdeling houdt de vloot op orde en klaar voor de volgende lading.",
    },
    body: {
      en: [
        "Tanks come back from service with wear that is entirely predictable: valve seats, gaskets, walkways, ladders, frame damage from handling. Our maintenance and repair department works through it before a unit is offered again.",
        "The same team handles repairs on customer-owned units. If you run your own fleet and need work done at Rotterdam, the tank does not have to travel further than our gate.",
      ],
      tr: [
        "Tanklar servisten tamamen öngörülebilir aşınmalarla döner: vana yuvaları, contalar, yürüme yolları, merdivenler, elleçlemeden kaynaklı çerçeve hasarı. Bakım-onarım departmanımız, ünite yeniden sunulmadan önce bunları geçer.",
        "Aynı ekip müşteriye ait ünitelerin onarımını da üstlenir. Kendi filonuzu işletiyor ve Rotterdam'da iş yaptırmanız gerekiyorsa, tankın kapımızdan öteye gitmesine gerek yok.",
      ],
      de: [
        "Tanks kommen mit durchaus vorhersehbarem Verschleiß aus dem Einsatz zurück: Ventilsitze, Dichtungen, Laufstege, Leitern, Rahmenschäden vom Umschlag. Unsere Wartungs- und Reparaturabteilung arbeitet das ab, bevor eine Einheit wieder angeboten wird.",
        "Dasselbe Team repariert auch kundeneigene Einheiten. Wer eine eigene Flotte betreibt und Arbeiten in Rotterdam braucht: Weiter als bis zu unserem Tor muss der Tank nicht.",
      ],
      nl: [
        "Tanks komen terug uit dienst met volstrekt voorspelbare slijtage: klepzittingen, pakkingen, looppaden, ladders, frameschade door handling. Onze onderhouds- en reparatieafdeling werkt dat weg voordat een unit opnieuw wordt aangeboden.",
        "Hetzelfde team repareert ook units van klanten. Runt u een eigen vloot en moet er werk gebeuren in Rotterdam, dan hoeft de tank niet verder te reizen dan onze poort.",
      ],
    },
    points: {
      en: ["Valves, gaskets and fittings", "Walkways, ladders and handrails", "Frame and structural repair", "Work on customer-owned units"],
      tr: ["Vanalar, contalar ve armatürler", "Yürüme yolu, merdiven ve korkuluklar", "Çerçeve ve yapısal onarım", "Müşteriye ait üniteler için çalışma"],
      de: ["Ventile, Dichtungen und Armaturen", "Laufstege, Leitern und Handläufe", "Rahmen- und Strukturreparatur", "Arbeiten an kundeneigenen Einheiten"],
      nl: ["Kleppen, pakkingen en appendages", "Looppaden, ladders en leuningen", "Frame- en constructiereparatie", "Werk aan units van klanten"],
    },
  },
  {
    slug: "refurbishment-modification",
    photo: "/media/Cladding-Refurbishment-5.webp",
    art: "project",
    icon: "project",
    title: {
      en: "Refurbishment & modification",
      tr: "Yenileme ve modifikasyon",
      de: "Aufarbeitung & Umbau",
      nl: "Refurbishment & modificatie",
    },
    summary: {
      en: "Cladding, painting, heating systems, agitation — reworking a unit until it fits the cargo you actually have.",
      tr: "Kaplama, boya, ısıtma sistemleri, karıştırma — üniteyi elinizdeki yüke uyana kadar yeniden işlemek.",
      de: "Verkleidung, Lackierung, Heizsysteme, Rührtechnik — eine Einheit umarbeiten, bis sie zur tatsächlichen Ladung passt.",
      nl: "Bekleding, lakwerk, verwarmingssystemen, roerwerk — een unit ombouwen tot ze past bij de lading die u werkelijk heeft.",
    },
    body: {
      en: [
        "Buying a new tank for every specification change is rarely the cheapest route. A great deal can be changed on an existing unit: cladding replaced, the frame repainted, electrical or glycol heating fitted, stirring and mixing equipment added.",
        "Our experienced staff manage the modification from specification to handover, so what leaves the workshop is a unit that matches the paperwork it will travel with.",
      ],
      tr: [
        "Her spesifikasyon değişikliğinde yeni tank almak nadiren en ucuz yoldur. Mevcut bir ünitede epey şey değiştirilebilir: kaplama yenilenir, çerçeve yeniden boyanır, elektrikli veya glikol ısıtma takılır, karıştırma ve mikserleme donanımı eklenir.",
        "Deneyimli ekibimiz modifikasyonu spesifikasyondan teslime kadar yönetir; atölyeden çıkan ünite, birlikte seyahat edeceği evrakla örtüşür.",
      ],
      de: [
        "Für jede Spezifikationsänderung einen neuen Tank zu kaufen, ist selten der günstigste Weg. An einer bestehenden Einheit lässt sich viel ändern: Verkleidung erneuern, Rahmen neu lackieren, Elektro- oder Glykolheizung einbauen, Rühr- und Mischtechnik ergänzen.",
        "Unsere erfahrenen Mitarbeitenden begleiten den Umbau von der Spezifikation bis zur Übergabe — was die Werkstatt verlässt, entspricht den Papieren, mit denen es reisen wird.",
      ],
      nl: [
        "Voor elke specificatiewijziging een nieuwe tank kopen is zelden de goedkoopste route. Aan een bestaande unit valt veel te veranderen: bekleding vervangen, frame overspuiten, elektrische of glycolverwarming inbouwen, roer- en mengapparatuur toevoegen.",
        "Onze ervaren medewerkers begeleiden de modificatie van specificatie tot oplevering, zodat wat de werkplaats verlaat overeenkomt met de papieren waarmee het reist.",
      ],
    },
    points: {
      en: ["Cladding replacement and refurbishment", "Full repaint", "Electrical and glycol heating systems", "Stirring and mixing installations"],
      tr: ["Kaplama değişimi ve yenileme", "Komple boya", "Elektrikli ve glikol ısıtma sistemleri", "Karıştırma ve mikserleme tesisatı"],
      de: ["Verkleidung erneuern und aufarbeiten", "Komplettlackierung", "Elektro- und Glykolheizsysteme", "Rühr- und Mischanlagen"],
      nl: ["Bekleding vervangen en opknappen", "Volledig overspuiten", "Elektrische en glycolverwarmingssystemen", "Roer- en menginstallaties"],
    },
  },
  {
    slug: "package-deals",
    photo: "/media/Tankcon-renr-or-lease.jpeg",
    art: "rail",
    icon: "container",
    title: {
      en: "Package deals",
      tr: "Paket anlaşmalar",
      de: "Paketangebote",
      nl: "Pakketdeals",
    },
    summary: {
      en: "Tanks plus the servicing they will need, priced together over the term instead of job by job.",
      tr: "Tanklar ve ihtiyaç duyacakları servis, iş bazında değil dönem boyunca birlikte fiyatlanır.",
      de: "Tanks plus die nötige Instandhaltung, über die Laufzeit gemeinsam kalkuliert statt Auftrag für Auftrag.",
      nl: "Tanks plus het onderhoud dat ze nodig hebben, samen geprijsd over de looptijd in plaats van per klus.",
    },
    body: {
      en: [
        "A tank is a running cost, not a one-off purchase. Inspection falls due, gaskets go, a valve needs replacing — and each of those is a separate quotation unless you agree the terms up front.",
        "A package deal bundles the units with the inspection and maintenance they will need over the period, which makes the budget predictable and takes the negotiation out of routine work.",
      ],
      tr: [
        "Tank tek seferlik bir satın alma değil, işleyen bir maliyettir. Muayene tarihi gelir, contalar biter, bir vana değişmesi gerekir — koşulları baştan anlaşmadıysanız her biri ayrı bir teklif demektir.",
        "Paket anlaşma, üniteleri dönem boyunca ihtiyaç duyacakları muayene ve bakımla birlikte paketler; bütçe öngörülebilir hâle gelir ve rutin iş pazarlıktan çıkar.",
      ],
      de: [
        "Ein Tank ist eine laufende Kostenposition, kein einmaliger Kauf. Prüfungen werden fällig, Dichtungen geben nach, ein Ventil muss getauscht werden — und jede dieser Positionen ist ein eigenes Angebot, wenn die Konditionen nicht vorab vereinbart sind.",
        "Ein Paketangebot bündelt die Einheiten mit der Prüfung und Wartung, die sie über den Zeitraum brauchen. Das macht das Budget planbar und nimmt Routinearbeiten aus der Verhandlung.",
      ],
      nl: [
        "Een tank is een lopende kostenpost, geen eenmalige aankoop. Keuringen worden opeisbaar, pakkingen begeven het, een klep moet worden vervangen — en elk daarvan is een aparte offerte als de voorwaarden niet vooraf zijn afgesproken.",
        "Een pakketdeal bundelt de units met de keuring en het onderhoud die ze over de periode nodig hebben. Dat maakt het budget voorspelbaar en haalt routinewerk uit de onderhandeling.",
      ],
    },
    points: {
      en: ["Units and servicing in one agreement", "Predictable cost over the term", "Inspection dates managed for you", "Available for rental and purchase"],
      tr: ["Üniteler ve servis tek sözleşmede", "Dönem boyunca öngörülebilir maliyet", "Muayene tarihleri sizin adınıza takip edilir", "Kiralama ve satın almada geçerli"],
      de: ["Einheiten und Service in einer Vereinbarung", "Planbare Kosten über die Laufzeit", "Prüftermine werden für Sie verwaltet", "Für Miete und Kauf verfügbar"],
      nl: ["Units en onderhoud in één overeenkomst", "Voorspelbare kosten over de looptijd", "Keuringsdata voor u beheerd", "Beschikbaar bij huur en koop"],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
