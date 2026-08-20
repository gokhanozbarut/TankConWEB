import type { Metadata } from "next";
import Link from "next/link";
import Art from "@/components/Art";
import { QuoteBand } from "@/components/sections";
import { PageHeader, Section } from "@/components/ui";
import { industries } from "@/content/industries";
import { getProduct } from "@/content/products";
import { pick } from "@/i18n/config";
import { href } from "@/lib/routes";
import { resolvePage, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.industries.title, description: dict.industries.subtitle };
}

export default async function IndustriesPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <PageHeader
        eyebrow={dict.industries.eyebrow}
        title={dict.industries.title}
        subtitle={dict.industries.subtitle}
        art={<Art art="tank" photo="/media/chemical-industrie.jpg" alt="" />}
      />

      <Section className="bg-sand-50">
        <ul className="space-y-16 lg:space-y-24">
          {industries.map((industry, index) => (
            <li key={industry.slug} id={industry.slug} className="scroll-mt-28">
              <article className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div
                  className={[
                    "relative aspect-[4/3] overflow-hidden bg-ink-900 shadow-soft lg:col-span-5",
                    index % 2 === 1 ? "lg:order-2" : "",
                  ].join(" ")}
                >
                  <Art art={industry.art} photo={industry.photo} alt="" />
                </div>

                <div className="lg:col-span-7">
                  <h2 className="font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
                    {pick(industry.title, locale)}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-ink-800/90">
                    {pick(industry.summary, locale)}
                  </p>

                  <div className="mt-6 space-y-4">
                    {pick(industry.body, locale).map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-ink-700/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                        {dict.industries.cargoesTitle}
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {pick(industry.cargoes, locale).map((cargo) => (
                          <li
                            key={cargo}
                            className="border border-ink-900/15 px-2.5 py-1 text-[0.6875rem] tracking-wide text-ink-700"
                          >
                            {cargo}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                        {dict.industries.requirementsTitle}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {pick(industry.requirements, locale).map((req) => (
                          <li key={req} className="flex gap-3 text-sm leading-relaxed text-ink-800">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-600" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <ul className="mt-8 flex flex-wrap gap-3">
                    {industry.products.map((slug) => {
                      const product = getProduct(slug);
                      if (!product) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={href(locale, "stock", slug)}
                            className="inline-flex items-center gap-2 border border-ink-900/20 px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-brand-600 hover:text-brand-600"
                          >
                            {pick(product.title, locale)}
                            <span aria-hidden>→</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <QuoteBand locale={locale} dict={dict} />
    </>
  );
}
