import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { href } from "@/lib/routes";
import Art from "./Art";
import { ButtonLink } from "./ui";

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink-950 pt-28">
      <div className="absolute inset-0 -z-10">
        <Art
          art="tank"
          photo="/media/Tankcon-depot-tanks-3.webp"
          priority
          className="scale-105"
          alt=""
        />
        <div className="absolute inset-0 scrim" />
      </div>

      <div className="container-page w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl rise-in">
          <p className="eyebrow eyebrow-rule text-brand-400">{dict.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-sand-50 sm:text-5xl lg:text-[4rem]">
            {dict.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-sand-200 sm:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href={href(locale, "quote")}>{dict.hero.ctaPrimary}</ButtonLink>
            <ButtonLink href={href(locale, "stock")} tone="light">
              {dict.hero.ctaSecondary}
            </ButtonLink>
          </div>

          <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-sand-300/60">
            <span>{site.contact.city}</span>
            <span aria-hidden>·</span>
            <span>Port of Rotterdam</span>
            <span aria-hidden>·</span>
            <span>{site.yearsOfExperience} years</span>
          </p>
        </div>
      </div>
    </section>
  );
}
