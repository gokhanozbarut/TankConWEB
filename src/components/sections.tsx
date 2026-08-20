import Link from "next/link";
import { site } from "@/config/site";
import { pick, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { href } from "@/lib/routes";
import { products, type Availability } from "@/content/products";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import Art from "./Art";
import { ServiceIcon } from "./Icons";
import { QuoteForm } from "./forms";
import { ArrowLink, ButtonLink, Section, SectionHeading } from "./ui";

/* -------------------- Rakam şeridi -------------------- */

export function StatsBand({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-ink-900/10 bg-sand-100">
      <div className="container-page">
        <dl className="grid grid-cols-2 divide-ink-900/10 lg:grid-cols-4 lg:divide-x">
          {site.stats.map((stat) => (
            <div key={stat.value + pick(stat.label, locale)} className="px-2 py-8 text-center lg:px-6 lg:py-10">
              <dt className="sr-only">{pick(stat.label, locale)}</dt>
              <dd>
                <span className="block font-display text-3xl text-ink-900 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mx-auto mt-2 block max-w-[14rem] text-xs uppercase tracking-[0.14em] text-ink-700/70">
                  {pick(stat.label, locale)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* -------------------- Üç satış argümanı -------------------- */

export function UspSection({ dict }: { dict: Dictionary }) {
  const items = [
    { key: "flexible", ...dict.usp.items.flexible, icon: "container" },
    { key: "rapid", ...dict.usp.items.rapid, icon: "truck" },
    { key: "expert", ...dict.usp.items.expert, icon: "customs" },
  ];

  return (
    <Section className="bg-sand-50">
      <ul className="grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.key} className="bg-sand-50 p-8 lg:p-10">
            <span className="block h-9 w-9 text-brand-600">
              <ServiceIcon name={item.icon} />
            </span>
            <h2 className="mt-6 font-display text-2xl text-ink-900">{item.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700/90">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* -------------------- Kurumsal özet -------------------- */

export function IntroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="bg-sand-100">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow eyebrow-rule text-brand-600">{dict.intro.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
            {dict.intro.title}
          </h2>
          <div className="mt-8">
            <ArrowLink href={href(locale, "about")}>{dict.intro.cta}</ArrowLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden shadow-soft">
            <Art art="warehouse" photo="/media/Tankcon-depot-tanks-2-web.jpg" alt="" />
          </div>
          <p className="mt-8 text-lg leading-relaxed text-ink-800/90">{dict.intro.body}</p>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- Stok grid -------------------- */

function AvailabilityLabel({
  availability,
  dict,
}: {
  availability: Availability;
  dict: Dictionary;
}) {
  const label =
    availability === "buy"
      ? dict.common.buy
      : availability === "rent"
        ? dict.common.rent
        : dict.common.both;

  return (
    <span className="absolute left-4 top-4 bg-ink-950/85 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-sand-100">
      {label}
    </span>
  );
}

export function ProductsGrid({
  locale,
  dict,
  limit,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
}) {
  const items = limit ? products.slice(0, limit) : products;

  return (
    <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <li key={product.slug}>
          <Link href={href(locale, "stock", product.slug)} className="group block h-full">
            <article className="card-hover flex h-full flex-col bg-sand-50 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                <Art
                  art={product.art}
                  photo={product.photo}
                  alt=""
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <AvailabilityLabel availability={product.availability} dict={dict} />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl leading-snug text-ink-900 transition-colors group-hover:text-brand-600">
                  {pick(product.title, locale)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/85">
                  {pick(product.summary, locale)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  {dict.products.detailCta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ProductsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="bg-sand-50">
      <SectionHeading
        eyebrow={dict.products.eyebrow}
        title={dict.products.title}
        subtitle={dict.products.subtitle}
        action={<ArrowLink href={href(locale, "stock")}>{dict.products.viewAll}</ArrowLink>}
      />
      <div className="mt-14">
        <ProductsGrid locale={locale} dict={dict} limit={6} />
      </div>
    </Section>
  );
}

/* -------------------- Ek hizmetler -------------------- */

export function ServicesSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 opacity-30">
        <Art art="warehouse" photo="/media/full-refurbishment-tankcon.jpeg" alt="" />
        <div className="absolute inset-0 scrim" />
      </div>

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
          tone="light"
          action={
            <ButtonLink href={href(locale, "services")} tone="light">
              {dict.services.viewAll}
            </ButtonLink>
          }
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-sand-50/15 bg-sand-50/15 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug} className="bg-ink-950/85 p-8 backdrop-blur-sm lg:p-10">
              <span className="block h-8 w-8 text-brand-400">
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="mt-6 font-display text-xl text-sand-50">
                {pick(service.title, locale)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-200/85">
                {pick(service.summary, locale)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------- Sektörler -------------------- */

export function IndustriesSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="bg-sand-100">
      <SectionHeading
        eyebrow={dict.industries.eyebrow}
        title={dict.industries.title}
        subtitle={dict.industries.subtitle}
        action={<ArrowLink href={href(locale, "industries")}>{dict.common.viewAll}</ArrowLink>}
      />

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <li key={industry.slug}>
            <Link href={`${href(locale, "industries")}#${industry.slug}`} className="group block h-full">
              <article className="card-hover relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden bg-ink-900 shadow-soft">
                <div className="absolute inset-0">
                  <Art
                    art={industry.art}
                    photo={industry.photo}
                    alt=""
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Sektör fotoğrafları parlak ve hareketli; yazının okunması
                      için standart scrim'e ek bir koyu katman gerekiyor. */}
                  <div className="absolute inset-0 bg-ink-950/45" />
                  <div className="absolute inset-0 scrim" />
                </div>
                <div className="relative p-7">
                  <h3 className="font-display text-xl text-sand-50">
                    {pick(industry.title, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-100/95">
                    {pick(industry.summary, locale)}
                  </p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* -------------------- Konum -------------------- */

export function LocationSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="bg-sand-50">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden shadow-soft lg:col-span-6">
          <Art art="road" photo="/media/310000-tankcon-site-1067x800.jpg" alt="" />
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow eyebrow-rule text-brand-600">{dict.location.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
            {dict.location.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-800/90">{dict.location.body}</p>

          <address className="mt-8 space-y-1 text-base not-italic leading-relaxed text-ink-700">
            {site.contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>

          <div className="mt-8">
            <ArrowLink href={href(locale, "contact")}>{dict.location.cta}</ArrowLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- Hızlı teklif bandı -------------------- */

export function QuoteBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="absolute inset-0 opacity-[0.12]">
        <Art art="rail" photo="/media/tank-coontainer-aanhanger.jpeg" alt="" />
      </div>
      <div className="container-page relative py-16 lg:py-20">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow eyebrow-rule text-brand-400">{dict.quote.eyebrow}</p>
            <h2 className="mt-4 font-display text-2xl text-sand-50 sm:text-3xl">
              {dict.quote.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-sand-300/85">{dict.quote.subtitle}</p>
        </div>

        <div className="mt-10">
          <QuoteForm dict={dict} locale={locale} variant="band" />
        </div>
      </div>
    </section>
  );
}
