import Link from "next/link";
import { site } from "@/config/site";
import { pick, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { href } from "@/lib/routes";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { SocialIcon } from "./Icons";
import { CallbackForm, NewsletterForm } from "./forms";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: dict.nav.industries, url: href(locale, "industries") },
    { label: dict.nav.about, url: href(locale, "about") },
    { label: dict.nav.quote, url: href(locale, "quote") },
    { label: dict.nav.contact, url: href(locale, "contact") },
  ];

  const policies = Object.values(dict.footer.policies);

  return (
    <footer className="bg-ink-950 text-sand-200">
      {/* Bülten + geri arama bandı */}
      <div className="border-b border-sand-50/10">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
          <div>
            <h2 className="font-display text-2xl leading-tight text-sand-50 sm:text-3xl">
              {dict.newsletter.title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-sand-300/85">
              {dict.newsletter.subtitle}
            </p>
            <div className="mt-7 max-w-lg">
              <NewsletterForm dict={dict} />
            </div>
          </div>

          <div className="lg:border-l lg:border-sand-50/10 lg:pl-20">
            <h2 className="font-display text-2xl leading-tight text-sand-50 sm:text-3xl">
              {dict.callback.title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-sand-300/85">
              {dict.callback.subtitle}
            </p>
            <div className="mt-7 max-w-lg">
              <CallbackForm dict={dict} />
            </div>
          </div>
        </div>
      </div>

      {/* Site haritası */}
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-display text-xl text-sand-50">{site.brand}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand-300/80">
            {pick(site.tagline, locale)}
          </p>

          <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-400">
            {pick(site.contact.officeLabel, locale)}
          </p>
          <address className="mt-3 space-y-2 text-sm not-italic leading-relaxed text-sand-300/85">
            {site.contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-2">
              <a href={`tel:${site.contact.phoneHref}`} className="transition-colors hover:text-sand-50">
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a href={`tel:${site.contact.mobileHref}`} className="transition-colors hover:text-sand-50">
                {site.contact.mobile}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.contact.emailSales}`} className="transition-colors hover:text-sand-50">
                {site.contact.emailSales}
              </a>
            </p>
          </address>
        </div>

        <nav aria-labelledby="footer-stock">
          <p id="footer-stock" className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-400">
            {dict.footer.stock}
          </p>
          <ul className="mt-5 space-y-3">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={href(locale, "stock", product.slug)}
                  className="text-sm text-sand-300/85 transition-colors hover:text-sand-50"
                >
                  {pick(product.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <p id="footer-services" className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-400">
            {dict.footer.services}
          </p>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`${href(locale, "services")}#${service.slug}`}
                  className="text-sm text-sand-300/85 transition-colors hover:text-sand-50"
                >
                  {pick(service.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <nav aria-labelledby="footer-quick">
            <p id="footer-quick" className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-400">
              {dict.footer.quickLinks}
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="text-sm text-sand-300/85 transition-colors hover:text-sand-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-400">
            {dict.footer.followUs}
          </p>
          <ul className="mt-4 flex items-center gap-3">
            {site.social.map((channel) => (
              <li key={channel.name}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={channel.name}
                  className="flex h-10 w-10 items-center justify-center border border-sand-50/15 p-2.5 text-sand-300 transition-colors hover:border-brand-400 hover:text-brand-400"
                >
                  <SocialIcon name={channel.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Alt şerit */}
      <div className="border-t border-sand-50/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-sand-300/65 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {site.brand}. {dict.common.allRightsReserved}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {policies.map((policy) => (
              <li key={policy}>
                <span className="transition-colors hover:text-sand-50">{policy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
