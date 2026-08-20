import type { Metadata } from "next";
import Art from "@/components/Art";
import { LocationSection, QuoteBand } from "@/components/sections";
import { PageHeader, Section } from "@/components/ui";
import { departments, founder, milestones, values } from "@/content/company";
import { site } from "@/config/site";
import { pick } from "@/i18n/config";
import { resolvePage, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.about.title, description: dict.intro.body };
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <PageHeader
        eyebrow={dict.about.eyebrow}
        title={dict.intro.title}
        art={<Art art="warehouse" photo="/media/Tankcon-depot-tanks-2.webp" alt="" />}
      />

      <Section id="story" className="bg-sand-50">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl text-ink-900 sm:text-4xl">
              {dict.about.storyTitle}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-ink-800/90">{dict.intro.body}</p>

            <h3 className="mt-14 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
              {dict.about.valuesTitle}
            </h3>
            <ul className="mt-6 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
              {values.map((value) => (
                <li key={value.key} className="bg-sand-50 p-7">
                  <h4 className="font-display text-xl text-ink-900">{pick(value.title, locale)}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/90">
                    {pick(value.text, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="history" className="bg-sand-100">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl text-ink-900 sm:text-4xl">
              {dict.about.historyTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-700/85">
              {founder.name} — {pick(founder.role, locale)}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="border-l border-ink-900/15">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-600"
                  />
                  <span className="font-display text-xl text-brand-600">{milestone.year}</span>
                  <p className="mt-2 text-base leading-relaxed text-ink-700/90">
                    {pick(milestone.text, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="team" className="bg-sand-50">
        <h2 className="font-display text-3xl text-ink-900 sm:text-4xl">{dict.about.teamTitle}</h2>
        <ul className="mt-12 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <li key={department.key} className="bg-sand-50 p-8">
              <h3 className="font-display text-xl text-ink-900">{pick(department.name, locale)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/90">
                {pick(department.text, locale)}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink-700/75">
          {site.contact.emailSales} · {site.contact.phone}
        </p>
      </Section>

      <LocationSection locale={locale} dict={dict} />
      <QuoteBand locale={locale} dict={dict} />
    </>
  );
}
