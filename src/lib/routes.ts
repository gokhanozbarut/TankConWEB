import type { Locale } from "@/i18n/config";

/**
 * Rota anahtarları dilden bağımsızdır; yalnızca ön ek olarak dil kodu eklenir.
 * Dile göre farklı URL segmentleri istenirse burada bir eşleme tablosu kurulabilir.
 */
export const paths = {
  home: "",
  stock: "/stock",
  services: "/services",
  industries: "/industries",
  about: "/about",
  contact: "/contact",
  quote: "/quote",
} as const;

export type PathKey = keyof typeof paths;

export function href(locale: Locale, key: PathKey, slug?: string): string {
  const base = `/${locale}${paths[key]}`;
  return slug ? `${base}/${slug}` : base;
}

/** Mevcut yolun dil ön ekini değiştirir (dil değiştirici için). */
export function swapLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${next}`;
  segments[0] = next;
  return `/${segments.join("/")}`;
}

export function formatDate(iso: string, locale: Locale): string {
  const localeTag = { en: "en-GB", tr: "tr-TR", de: "de-DE", nl: "nl-NL" }[locale];
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(localeTag, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
