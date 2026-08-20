"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { href, swapLocale } from "@/lib/routes";
import { site } from "@/config/site";
import { ChevronDown } from "./Icons";

type NavItem = {
  label: string;
  url: string;
  children?: { label: string; url: string }[];
};

export default function Header({
  locale,
  dict,
  products,
}: {
  locale: Locale;
  dict: Dictionary;
  products: { slug: string; title: string }[];
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nav: NavItem[] = [
    {
      label: dict.nav.stock,
      url: href(locale, "stock"),
      children: products.map((p) => ({
        label: p.title,
        url: href(locale, "stock", p.slug),
      })),
    },
    { label: dict.nav.services, url: href(locale, "services") },
    { label: dict.nav.industries, url: href(locale, "industries") },
    {
      label: dict.nav.about,
      url: href(locale, "about"),
      children: [
        { label: dict.navGroups.aboutItems.story, url: `${href(locale, "about")}#story` },
        { label: dict.navGroups.aboutItems.history, url: `${href(locale, "about")}#history` },
        { label: dict.navGroups.aboutItems.team, url: `${href(locale, "about")}#team` },
      ],
    },
    { label: dict.nav.contact, url: href(locale, "contact") },
  ];

  const isActive = (url: string) => pathname === url || pathname.startsWith(`${url}/`);

  /** Bir bağlantıya tıklandığında açık menüleri kapat. */
  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  const solid = scrolled || mobileOpen;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-sand-50"
      >
        {dict.common.skipToContent}
      </a>

      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-ink-950/95 backdrop-blur-md shadow-[0_1px_0_rgb(255_255_255/0.08)]"
            : "bg-gradient-to-b from-ink-950/70 to-transparent",
        ].join(" ")}
      >
        <div className="container-page">
          <div className={`flex items-center justify-between gap-6 transition-all duration-500 ${solid ? "h-16" : "h-20 lg:h-24"}`}>
            <Link href={href(locale, "home")} onClick={closeMenus} className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold tracking-tight text-sand-50 sm:text-2xl">
                {site.brand}
              </span>
            </Link>

            <nav aria-label={dict.common.menu} className="hidden items-center gap-1 xl:flex">
              {nav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openWithDelay(item.label)}
                  onMouseLeave={closeWithDelay}
                >
                  <Link
                    href={item.url}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={item.children ? openDropdown === item.label : undefined}
                    className={[
                      "flex items-center gap-1.5 px-3 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors",
                      isActive(item.url) ? "text-brand-400" : "text-sand-100 hover:text-brand-400",
                    ].join(" ")}
                    onFocus={() => item.children && openWithDelay(item.label)}
                    onClick={closeMenus}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-3.5 w-3.5 opacity-70" /> : null}
                  </Link>

                  {item.children && openDropdown === item.label ? (
                    <div className="absolute left-0 top-full min-w-64 border-t-2 border-brand-500 bg-ink-950/98 py-2 shadow-lift backdrop-blur-md">
                      {item.children.map((child) => (
                        <Link
                          key={child.url}
                          href={child.url}
                          onClick={closeMenus}
                          className="block px-5 py-2.5 text-sm text-sand-200 transition-colors hover:bg-ink-800 hover:text-sand-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden items-center gap-1 sm:flex" role="group" aria-label={dict.common.language}>
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={swapLocale(pathname, l)}
                    hrefLang={l}
                    onClick={closeMenus}
                    aria-current={l === locale ? "true" : undefined}
                    className={[
                      "px-1.5 py-1 text-[0.6875rem] font-semibold tracking-widest transition-colors",
                      l === locale ? "text-brand-400" : "text-sand-300/70 hover:text-sand-50",
                    ].join(" ")}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>

              <Link
                href={href(locale, "quote")}
                onClick={closeMenus}
                className="hidden bg-brand-600 px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wide text-sand-50 transition-colors hover:bg-brand-500 lg:inline-flex"
              >
                {dict.nav.quote}
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? dict.common.close : dict.common.menu}
                className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-sand-50 xl:hidden"
              >
                <span className={`h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`h-px w-6 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {mobileOpen ? (
          <div
            id="mobile-nav"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-sand-50/10 bg-ink-950 xl:hidden"
          >
            <div className="container-page py-6">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.label} className="border-b border-sand-50/10">
                    <Link
                      href={item.url}
                      onClick={closeMenus}
                      className="block py-4 font-display text-lg text-sand-50"
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <ul className="-mt-1 pb-4 pl-4">
                        {item.children.map((child) => (
                          <li key={child.url}>
                            <Link
                              href={child.url}
                              onClick={closeMenus}
                              className="block py-2 text-sm text-sand-300"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>

              <Link
                href={href(locale, "quote")}
                onClick={closeMenus}
                className="mt-6 flex items-center justify-center bg-brand-600 px-6 py-3.5 text-sm font-semibold text-sand-50"
              >
                {dict.nav.quote}
              </Link>

              <div className="mt-6 flex items-center gap-3" role="group" aria-label={dict.common.language}>
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={swapLocale(pathname, l)}
                    hrefLang={l}
                    onClick={closeMenus}
                    className={[
                      "px-2 py-1 text-xs font-semibold tracking-widest",
                      l === locale ? "text-brand-400" : "text-sand-300/70",
                    ].join(" ")}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
