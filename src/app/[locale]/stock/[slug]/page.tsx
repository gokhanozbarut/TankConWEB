import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Art from "@/components/Art";
import { QuoteBand } from "@/components/sections";
import { ArrowLink, ButtonLink, PageHeader, Section } from "@/components/ui";
import { getProduct, products } from "@/content/products";
import { isLocale, pick, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { href } from "@/lib/routes";
import { localeSlugParams, type SlugParams } from "@/lib/page";

export function generateStaticParams() {
  return localeSlugParams(products.map((product) => product.slug));
}

export async function generateMetadata({ params }: { params: SlugParams }): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product || !isLocale(locale)) return {};
  return {
    title: pick(product.title, locale),
    description: pick(product.summary, locale),
  };
}

export default async function ProductPage({ params }: { params: SlugParams }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const product = getProduct(slug);
  if (!product) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  const availabilityLabel =
    product.availability === "buy"
      ? dict.common.buy
      : product.availability === "rent"
        ? dict.common.rent
        : dict.common.both;

  return (
    <>
      <PageHeader
        eyebrow={dict.products.eyebrow}
        title={pick(product.title, typedLocale)}
        subtitle={pick(product.summary, typedLocale)}
        art={<Art art={product.art} photo={product.photo} alt="" />}
      />

      <Section className="bg-sand-50">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-900 shadow-soft">
              <Art art={product.art} photo={product.photo} alt={pick(product.title, typedLocale)} />
            </div>

            <div className="mt-10 space-y-6">
              {pick(product.body, typedLocale).map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-ink-800/90">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-12 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
              {dict.products.applicationsTitle}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {pick(product.applications, typedLocale).map((item) => (
                <li
                  key={item}
                  className="border border-ink-900/15 px-3 py-1.5 text-xs tracking-wide text-ink-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonLink href={`${href(typedLocale, "quote")}?product=${product.slug}`}>
                {dict.quote.submit}
              </ButtonLink>
              <ButtonLink href={href(typedLocale, "contact")} tone="outline">
                {dict.nav.contact}
              </ButtonLink>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border-t-2 border-brand-600 bg-sand-100 p-8">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                {dict.products.availabilityTitle}
              </h2>
              <p className="mt-2 font-display text-xl text-ink-900">{availabilityLabel}</p>

              <h2 className="mt-9 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                {dict.products.specsTitle}
              </h2>
              <dl className="mt-4 divide-y divide-ink-900/10 border-t border-ink-900/10">
                {pick(product.specs, typedLocale).map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-6 py-3">
                    <dt className="text-sm text-ink-700/80">{spec.label}</dt>
                    <dd className="text-right text-sm font-semibold text-ink-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-9 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                {dict.products.featuresTitle}
              </h2>
              <ul className="mt-5 space-y-4">
                {pick(product.features, typedLocale).map((item) => (
                  <li key={item} className="flex gap-4 text-sm leading-relaxed text-ink-800">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-sand-100">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
            {dict.products.relatedTitle}
          </h2>
          <ArrowLink href={href(typedLocale, "stock")}>{dict.products.viewAll}</ArrowLink>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={href(typedLocale, "stock", item.slug)} className="group block h-full">
                <article className="card-hover flex h-full flex-col bg-sand-50 shadow-soft">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
                    <Art
                      art={item.art}
                      photo={item.photo}
                      alt=""
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl text-ink-900 transition-colors group-hover:text-brand-600">
                      {pick(item.title, typedLocale)}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/85">
                      {pick(item.summary, typedLocale)}
                    </p>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <QuoteBand locale={typedLocale} dict={dict} />
    </>
  );
}
