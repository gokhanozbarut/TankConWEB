import type { Metadata } from "next";
import Art from "@/components/Art";
import { QuoteForm } from "@/components/forms";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/config/site";
import { getProduct } from "@/content/products";
import { pick } from "@/i18n/config";
import { resolvePage, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.quote.title, description: dict.quote.subtitle };
}

export default async function QuotePage({
  params,
  searchParams,
}: {
  params: LocaleParams;
  searchParams: Promise<{ product?: string }>;
}) {
  const { locale, dict } = await resolvePage(params);
  const { product } = await searchParams;

  // Ürün sayfasından gelindiyse tank tipi hazır seçili gelsin.
  const preselected = product && getProduct(product) ? product : undefined;

  const mailboxes = [
    { label: dict.contact.departments.sales, email: site.contact.emailSales },
    { label: dict.contact.departments.lease, email: site.contact.emailLease },
  ];

  return (
    <>
      <PageHeader
        eyebrow={dict.quote.eyebrow}
        title={dict.quote.title}
        subtitle={dict.quote.subtitle}
        art={<Art art="tank" photo="/media/Tankcon-renr-or-lease.jpeg" alt="" />}
      />

      <Section className="bg-sand-50">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <QuoteForm dict={dict} locale={locale} variant="page" defaultProduct={preselected} />
          </div>

          <aside className="lg:col-span-4">
            <div className="border-t-2 border-brand-600 bg-sand-100 p-8">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                {dict.contact.officeTitle}
              </h2>
              <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-ink-800">
                {site.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>

              <p className="mt-5 text-sm text-ink-800">
                <a href={`tel:${site.contact.phoneHref}`} className="transition-colors hover:text-brand-600">
                  {site.contact.phone}
                </a>
              </p>

              <div className="mt-8 border-t border-ink-900/10 pt-6">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-700/70">
                  {dict.contact.departmentsTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  {mailboxes.map((box) => (
                    <li key={box.email} className="text-sm">
                      <span className="block text-ink-700/70">{box.label}</span>
                      <a
                        href={`mailto:${box.email}`}
                        className="font-semibold text-ink-900 transition-colors hover:text-brand-600"
                      >
                        {box.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 border-t border-ink-900/10 pt-6 text-sm leading-relaxed text-ink-700/85">
                {pick(site.tagline, locale)}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
