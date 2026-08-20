import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={[
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
      ].join(" ")}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p
            className={[
              "eyebrow eyebrow-rule",
              tone === "light" ? "text-brand-400" : "text-brand-600",
            ].join(" ")}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={[
            "mt-4 font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
            tone === "light" ? "text-sand-50" : "text-ink-900",
          ].join(" ")}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={[
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-sand-200" : "text-ink-700/85",
            ].join(" ")}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

type ButtonTone = "primary" | "outline" | "ghost" | "light";

const toneClasses: Record<ButtonTone, string> = {
  primary: "bg-brand-600 text-sand-50 hover:bg-brand-500",
  outline: "border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-sand-50",
  ghost: "text-ink-900 hover:text-brand-600",
  light: "border border-sand-50/40 text-sand-50 hover:bg-sand-50 hover:text-ink-900",
};

export function ButtonLink({
  href,
  children,
  tone = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300",
        toneClasses[tone],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={[
        "group inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors",
        tone === "light" ? "text-sand-100 hover:text-brand-400" : "text-ink-900 hover:text-brand-600",
      ].join(" ")}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  art,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  art?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-ink-900 pt-32 pb-16 sm:pt-40 sm:pb-20">
      {art ? (
        <div className="absolute inset-0 opacity-40">
          {art}
          <div className="absolute inset-0 scrim" />
        </div>
      ) : null}
      <div className="container-page relative">
        <p className="eyebrow eyebrow-rule text-brand-400">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight text-sand-50 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand-200 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
