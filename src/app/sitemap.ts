import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { paths, type PathKey } from "@/lib/routes";
import { products } from "@/content/products";

const staticKeys: PathKey[] = [
  "home",
  "stock",
  "services",
  "industries",
  "about",
  "contact",
  "quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const key of staticKeys) {
      entries.push({
        url: `${site.domain}/${locale}${paths[key]}`,
        changeFrequency: key === "home" ? "weekly" : "monthly",
        priority: key === "home" ? 1 : 0.7,
      });
    }

    for (const product of products) {
      entries.push({
        url: `${site.domain}/${locale}${paths.stock}/${product.slug}`,
        priority: 0.8,
      });
    }
  }

  return entries;
}
