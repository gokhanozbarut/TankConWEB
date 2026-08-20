import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/getDictionary";

export type LocaleParams = Promise<{ locale: string }>;
export type SlugParams = Promise<{ locale: string; slug: string }>;

/** Her sayfada tekrar eden dil doğrulaması + sözlük yükleme adımı. */
export async function resolvePage(params: LocaleParams): Promise<{
  locale: Locale;
  dict: Dictionary;
}> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, dict: getDictionary(locale) };
}

/** Dil × slug kombinasyonlarını statik üretim için açar. */
export function localeSlugParams(slugs: string[]) {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}
