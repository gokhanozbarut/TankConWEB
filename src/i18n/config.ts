export const locales = ["en", "tr", "de", "nl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  nl: "Nederlands",
};

/** Dil değiştiricide gösterilen kısa kod. */
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  de: "DE",
  nl: "NL",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en-GB",
  tr: "tr-TR",
  de: "de-DE",
  nl: "nl-NL",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Çok dilli içerik alanları bu şekilde tutulur. */
export type Localized<T = string> = Record<Locale, T>;

export function pick<T>(field: Localized<T>, locale: Locale): T {
  return field[locale] ?? field[defaultLocale];
}
