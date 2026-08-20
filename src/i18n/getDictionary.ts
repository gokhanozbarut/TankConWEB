import type { Locale } from "./config";
import en, { type Dictionary } from "./dictionaries/en";
import tr from "./dictionaries/tr";
import de from "./dictionaries/de";
import nl from "./dictionaries/nl";

const dictionaries: Record<Locale, Dictionary> = { en, tr, de, nl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
