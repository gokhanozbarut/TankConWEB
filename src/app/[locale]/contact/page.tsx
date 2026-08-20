import type { Metadata } from "next";
import Art from "@/components/Art";
import { ContactForm } from "@/components/forms";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/config/site";
import { departments } from "@/content/company";
import { pick } from "@/i18n/config";
import { resolvePage, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.contact.title, description: dict.contact.subtitle };
}

export default async function ContactPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolvePage(params);

  const mailboxes = [
    { label: dict.contact.departments.sales, email: site.contact.emailSales },
    { label: dict.contact.departments.lease, email: site.contact.emailLease },
    { label: dict.contact.departments.finance, email: site.contact.emailFinance },
  ];

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
        art={<Art art="road" photo="/media/310000-tankcon-site-1067x800.jpg" alt="" />}
      />

      <Section className="bg-sand-50">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
              {dict.contact.officeTitle}
            </h2>
            <address className="mt-5 space-y-1 text-base not-italic leading-relaxed text-ink-800">
              {site.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <div className="mt-7 space-y-2 text-base text-ink-800">
              <p>
                <a href={`tel:${site.contact.phoneHref}`} className="transition-colors hover:text-brand-600">
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <a href={`tel:${site.contact.mobileHref}`} className="transition-colors hover:text-brand-600">
                  {site.contact.mobile}
                </a>
              </p>
            </div>

            <h3 className="mt-10 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
              {dict.contact.departmentsTitle}
            </h3>
            <dl className="mt-4 divide-y divide-ink-900/10 border-t border-ink-900/10">
              {mailboxes.map((box) => (
                <div key={box.email} className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                  <dt className="text-sm text-ink-700/80">{box.label}</dt>
                  <dd>
                    <a
                      href={`mailto:${box.email}`}
                      className="text-sm font-semibold text-ink-900 transition-colors hover:text-brand-600"
                    >
                      {box.email}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t-2 border-brand-600 bg-sand-100 p-7">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                {dict.contact.hoursTitle}
              </h3>
              <p className="mt-3 text-base text-ink-900">{dict.contact.hours}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
              {dict.contact.formTitle}
            </h2>
            <div className="mt-8">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-100">
        <h2 className="font-display text-3xl text-ink-900 sm:text-4xl">{dict.about.teamTitle}</h2>
        <ul className="mt-10 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <li key={department.key} className="bg-sand-50 p-7">
              <h3 className="font-display text-lg text-ink-900">{pick(department.name, locale)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/85">
                {pick(department.text, locale)}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
