const en = {
  nav: {
    stock: "Our Stock",
    services: "Additional Services",
    industries: "Industries",
    about: "About",
    contact: "Contact",
    quote: "Request a Quote",
    faq: "FAQ",
    tcodes: "T-Codes",
  },
  navGroups: {
    aboutItems: {
      story: "About Tankcon",
      history: "History",
      team: "Our team",
      tcodes: "T-Codes",
    },
  },
  common: {
    readMore: "Read more",
    viewAll: "View all",
    explore: "Explore",
    learnMore: "Learn more",
    details: "Details",
    backToList: "Back to stock",
    menu: "Menu",
    close: "Close",
    language: "Language",
    skipToContent: "Skip to content",
    allRightsReserved: "All rights reserved.",
    required: "Required field",
    buy: "Buy",
    rent: "Rent or lease",
    both: "Buy or rent",
  },
  hero: {
    eyebrow: "Tank container sales & rental",
    title: "The tank container you need, without the hassle",
    subtitle:
      "Buy, rent or lease new and used tank containers from our depot at the Port of Rotterdam — and ship them wherever you are in the world.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "Browse our stock",
  },
  usp: {
    title: "Why Tankcon",
    items: {
      flexible: {
        title: "Flexible solutions",
        text: "Short-term, long-term or permanent. Buy outright, rent for a campaign, or lease with an option to purchase.",
      },
      rapid: {
        title: "Rapid service",
        text: "Tanks ready in our depot and a maintenance & repair team on site, so units leave the yard fit for the next load.",
      },
      expert: {
        title: "Expert advice",
        text: "Over 20 years of advising on portable tank regulations, T-code selection and shell compatibility for your cargo.",
      },
    },
  },
  intro: {
    eyebrow: "About Tankcon",
    title: "Twenty years of matching cargo to the right tank",
    body: "Tankcon buys, sells, rents and leases ISO tank containers from its own depot in Spijkenisse, at the Port of Rotterdam. We hold a broad range in stock, custom-order units from leading manufacturers, and keep every tank in condition through our own maintenance and repair department.",
    cta: "More about us",
  },
  location: {
    eyebrow: "Where we are",
    title: "From the Port of Rotterdam, to wherever you are in the world",
    body: "Our depot and office sit in Spijkenisse, minutes from the deep-sea terminals of Rotterdam. That puts inspection, cleaning, repair and dispatch on one site — and puts your tank on a vessel, train or chassis without a detour.",
    cta: "Visit our office",
  },
  products: {
    eyebrow: "Our stock",
    title: "Tank containers in stock",
    subtitle:
      "A broad range of tank containers to buy or rent. If the unit you need is not listed, we regularly expand our inventory and can custom-order from leading manufacturers.",
    viewAll: "View all stock",
    detailCta: "View details",
    specsTitle: "Technical specifications",
    featuresTitle: "Key features",
    applicationsTitle: "Typical applications",
    availabilityTitle: "Availability",
    relatedTitle: "Other tank containers",
  },
  services: {
    eyebrow: "Additional services",
    title: "We keep your tanks in service",
    subtitle:
      "Inspection, repair and modification run in our own depot, so a tank can go from arrival to ready-to-load without leaving the site.",
    viewAll: "All services",
  },
  industries: {
    eyebrow: "Industries",
    title: "Industries we serve",
    subtitle:
      "Different cargoes place different demands on a tank — on the shell, the finish, the fittings and the paperwork. These are the sectors we equip most often.",
    cargoesTitle: "Typical cargoes",
    requirementsTitle: "What these cargoes ask of a tank",
  },
  about: {
    eyebrow: "About",
    title: "About Tankcon",
    storyTitle: "Who we are",
    historyTitle: "History",
    teamTitle: "Our team",
    valuesTitle: "How we work",
  },
  quote: {
    eyebrow: "Request a quote",
    title: "Find your tank container today",
    subtitle: "Tell us what you need to move and our team will come back to you with options and a price.",
    fields: {
      intent: "Buy or rent",
      product: "Tank type",
      quantity: "Quantity",
      cargo: "Cargo / product",
      period: "Rental period",
      date: "Needed from",
      company: "Company",
      name: "Full name",
      email: "E-mail",
      phone: "Phone",
      country: "Country",
      note: "Note",
    },
    placeholders: {
      cargo: "e.g. caustic soda, edible oil, LPG",
      quantity: "e.g. 4",
      period: "e.g. 6 months",
      note: "Anything else we should know about your requirement",
    },
    intents: {
      buy: "Buy",
      rent: "Rent",
      lease: "Lease with purchase option",
      service: "Service or repair only",
    },
    submit: "Request a quote",
    submitting: "Sending…",
    success: "Thank you — we have your request. Our team will be in touch shortly.",
    error: "Could not send. Please try again, or call us directly.",
    consent:
      "By submitting this form you agree that your details may be used to prepare and discuss a quotation.",
  },
  newsletter: {
    title: "Stock and market updates",
    subtitle: "Occasional notes on new arrivals in the depot, availability and tank container regulation.",
    placeholder: "Your e-mail address",
    submit: "Subscribe",
    success: "Thank you! Your subscription is confirmed.",
  },
  callback: {
    title: "Let us call you",
    subtitle: "Leave your number and we will call you back during office hours.",
    name: "Your name",
    phone: "Phone",
    submit: "Call me back",
    success: "Request received — we will call you shortly.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact us",
    subtitle:
      "Questions about buying, renting or servicing a tank container? Our team of experts is ready to help.",
    formTitle: "Send us a message",
    subject: "Subject",
    message: "Your message",
    send: "Send",
    officeTitle: "Visit our office",
    departmentsTitle: "Departments",
    departments: {
      sales: "Sales",
      lease: "Rental & lease",
      finance: "Finance",
    },
    hoursTitle: "Office hours",
    hours: "Monday to Friday, 08:30 – 17:00 CET",
  },
  footer: {
    contactTitle: "Contact",
    quickLinks: "Quick links",
    stock: "Our stock",
    services: "Additional services",
    followUs: "Follow us",
    legal: "Legal",
    policies: {
      terms: "Terms and conditions",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
    },
  },
  meta: {
    homeTitle: "Rent or buy tank containers",
    homeDescription:
      "Buy, rent or lease new and used ISO tank containers from Tankcon's depot at the Port of Rotterdam. Inspection, maintenance and modification on site.",
  },
} as const;

export default en;

/** Literal tipleri genişletir; diğer diller aynı şekli farklı metinlerle doldurabilsin diye. */
type Widen<T> = T extends string
  ? string
  : { -readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
