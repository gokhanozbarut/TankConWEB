import type { Metadata } from "next";
import Art from "@/components/Art";
import { QuoteBand } from "@/components/sections";
import { PageHeader, Section } from "@/components/ui";
import { ServiceIcon } from "@/components/Icons";
import { services } from "@/content/services";
import { pick } from "@/i18n/config";
import { resolvePage, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.services.title, description: dict.services.subtitle };
}

export default async function ServicesPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <PageHeader
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
        art={<Art art="warehouse" photo="/media/Tankcontainer-inspection-inspectie.webp" alt="" />}
      />

      <Section className="bg-sand-50">
        <ul className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <li key={service.slug} id={service.slug} className="scroll-mt-28">
              <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div
                  className={[
                    "relative aspect-[4/3] overflow-hidden bg-ink-900 shadow-soft",
                    index % 2 === 1 ? "lg:order-2" : "",
                  ].join(" ")}
                >
                  <Art art={service.art} photo={service.photo} alt="" />
                </div>

                <div>
                  <span className="block h-9 w-9 text-brand-600">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h2 className="mt-6 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
                    {pick(service.title, locale)}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-ink-800/90">
                    {pick(service.summary, locale)}
                  </p>

                  <div className="mt-6 space-y-4">
                    {pick(service.body, locale).map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-ink-700/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {pick(service.points, locale).map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-800">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-600" />
                        {point}
                      </li>
                    ))}
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
