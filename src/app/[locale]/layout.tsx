import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/config/site";
import { products } from "@/content/products";
import { isLocale, locales, localeHtmlLang, pick, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.domain),
    title: {
      default: `${site.brand} — ${dict.meta.homeTitle}`,
      template: `%s — ${site.brand}`,
    },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      siteName: site.brand,
      title: `${site.brand} — ${dict.meta.homeTitle}`,
      description: dict.meta.homeDescription,
      locale: localeHtmlLang[locale],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const productLinks = products.map((product) => ({
    slug: product.slug,
    title: pick(product.title, typedLocale),
  }));

  return (
    <html lang={localeHtmlLang[typedLocale]} className={`${body.variable} ${display.variable}`}>
      <body className="antialiased">
        <Header locale={typedLocale} dict={dict} products={productLinks} />
        <main id="main">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
      </body>
    </html>
  );
}
