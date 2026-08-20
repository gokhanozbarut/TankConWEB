"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/getDictionary";
import { products } from "@/content/products";
import { pick, type Locale } from "@/i18n/config";

type Status = "idle" | "sending" | "success" | "error";

async function submitInquiry(kind: string, form: HTMLFormElement): Promise<boolean> {
  const data: Record<string, string> = { kind };
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") data[key] = value;
  });

  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/** Formların ortak gövdesi: durum yönetimi ve bot tuzağı alanı. */
function useInquiry(kind: string) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    const ok = await submitInquiry(kind, form);
    setStatus(ok ? "success" : "error");
    if (ok) form.reset();
  }

  return { status, onSubmit };
}

function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

const fieldBase =
  "w-full border-b border-ink-900/20 bg-transparent px-0 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-700/40 focus:border-brand-600";

const fieldOnDark =
  "w-full border-b border-sand-50/25 bg-transparent px-0 py-3 text-sm text-sand-50 outline-none transition-colors placeholder:text-sand-300/50 focus:border-brand-400";

function Field({
  label,
  children,
  tone = "dark",
  className = "",
}: {
  label: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span
        className={[
          "block text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
          tone === "light" ? "text-sand-300" : "text-ink-700/70",
        ].join(" ")}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

function StatusNote({ status, dict }: { status: Status; dict: Dictionary }) {
  if (status === "success") {
    return (
      <p role="status" className="text-sm font-medium text-brand-600">
        {dict.quote.success}
      </p>
    );
  }
  if (status === "error") {
    return (
      <p role="alert" className="text-sm font-medium text-gold-600">
        {dict.quote.error}
      </p>
    );
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Teklif formu — sitedeki "Request a Quote" akışının karşılığı.       */
/* ------------------------------------------------------------------ */

export function QuoteForm({
  dict,
  locale,
  variant = "band",
  defaultProduct,
}: {
  dict: Dictionary;
  locale: Locale;
  variant?: "band" | "page";
  defaultProduct?: string;
}) {
  const { status, onSubmit } = useInquiry("quote");
  const id = useId();
  const compact = variant === "band";
  const inputClass = compact ? fieldOnDark : fieldBase;
  const tone = compact ? "light" : "dark";
  const optionClass = compact ? "bg-ink-900 text-sand-50" : "";

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Honeypot />
      <div
        className={
          compact
            ? "grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4"
            : "grid gap-x-8 gap-y-6 sm:grid-cols-2"
        }
      >
        <Field label={dict.quote.fields.intent} tone={tone}>
          <select name="intent" required defaultValue="buy" className={`${inputClass} appearance-none`}>
            {Object.entries(dict.quote.intents).map(([key, label]) => (
              <option key={key} value={key} className={optionClass}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        <Field label={dict.quote.fields.product} tone={tone}>
          <select
            name="product"
            required
            defaultValue={defaultProduct ?? products[0].slug}
            className={`${inputClass} appearance-none`}
          >
            {products.map((product) => (
              <option key={product.slug} value={product.slug} className={optionClass}>
                {pick(product.title, locale)}
              </option>
            ))}
          </select>
        </Field>

        <Field label={dict.quote.fields.cargo} tone={tone}>
          <input
            type="text"
            name="cargo"
            placeholder={dict.quote.placeholders.cargo}
            className={inputClass}
          />
        </Field>

        <Field label={dict.quote.fields.quantity} tone={tone}>
          <input
            type="number"
            min="1"
            name="quantity"
            placeholder={dict.quote.placeholders.quantity}
            className={inputClass}
          />
        </Field>

        {!compact ? (
          <>
            <Field label={dict.quote.fields.period} tone={tone}>
              <input
                type="text"
                name="period"
                placeholder={dict.quote.placeholders.period}
                className={inputClass}
              />
            </Field>
            <Field label={dict.quote.fields.date} tone={tone}>
              <input type="date" name="date" className={inputClass} />
            </Field>
            <Field label={dict.quote.fields.company} tone={tone}>
              <input type="text" name="company" className={inputClass} />
            </Field>
            <Field label={dict.quote.fields.country} tone={tone}>
              <input type="text" name="country" className={inputClass} />
            </Field>
            <Field label={dict.quote.fields.phone} tone={tone}>
              <input type="tel" name="phone" className={inputClass} />
            </Field>
          </>
        ) : null}

        <Field label={dict.quote.fields.name} tone={tone}>
          <input type="text" name="name" required className={inputClass} />
        </Field>

        <Field label={dict.quote.fields.email} tone={tone}>
          <input type="email" name="email" required className={inputClass} />
        </Field>

        {!compact ? (
          <Field label={dict.quote.fields.note} tone={tone} className="sm:col-span-2">
            <textarea
              name="note"
              rows={4}
              placeholder={dict.quote.placeholders.note}
              className={`${inputClass} resize-y`}
            />
          </Field>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          id={`${id}-consent`}
          className={`max-w-md text-xs leading-relaxed ${compact ? "text-sand-300/80" : "text-ink-700/70"}`}
        >
          {dict.quote.consent}
        </p>
        <div className="flex items-center gap-4">
          <StatusNote status={status} dict={dict} />
          <button
            type="submit"
            disabled={status === "sending"}
            aria-describedby={`${id}-consent`}
            className={[
              "inline-flex shrink-0 items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors disabled:opacity-60",
              compact
                ? "bg-brand-500 text-ink-950 hover:bg-brand-400"
                : "bg-brand-600 text-sand-50 hover:bg-brand-500",
            ].join(" ")}
          >
            {status === "sending" ? dict.quote.submitting : dict.quote.submit}
          </button>
        </div>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */

export function NewsletterForm({ dict }: { dict: Dictionary }) {
  const { status, onSubmit } = useInquiry("newsletter");

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Honeypot />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{dict.newsletter.placeholder}</span>
          <input
            type="email"
            name="email"
            required
            placeholder={dict.newsletter.placeholder}
            className={fieldOnDark}
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 bg-sand-50 px-7 py-3 text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:bg-brand-400 disabled:opacity-60"
        >
          {status === "sending" ? dict.quote.submitting : dict.newsletter.submit}
        </button>
      </div>
      {status === "success" ? (
        <p role="status" className="mt-3 text-sm text-brand-400">
          {dict.newsletter.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-3 text-sm text-gold-300">
          {dict.quote.error}
        </p>
      ) : null}
    </form>
  );
}

/* ------------------------------------------------------------------ */

export function CallbackForm({ dict }: { dict: Dictionary }) {
  const { status, onSubmit } = useInquiry("callback");

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={dict.callback.name} tone="light">
          <input type="text" name="name" required className={fieldOnDark} />
        </Field>
        <Field label={dict.callback.phone} tone="light">
          <input type="tel" name="phone" required className={fieldOnDark} />
        </Field>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-500 px-7 py-3 text-sm font-semibold tracking-wide text-ink-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
        >
          {status === "sending" ? dict.quote.submitting : dict.callback.submit}
        </button>
        {status === "success" ? (
          <p role="status" className="text-sm text-brand-400">
            {dict.callback.success}
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="text-sm text-gold-300">
            {dict.quote.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */

export function ContactForm({ dict }: { dict: Dictionary }) {
  const { status, onSubmit } = useInquiry("contact");

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Honeypot />
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <Field label={dict.quote.fields.name}>
          <input type="text" name="name" required className={fieldBase} />
        </Field>
        <Field label={dict.quote.fields.company}>
          <input type="text" name="company" className={fieldBase} />
        </Field>
        <Field label={dict.quote.fields.email}>
          <input type="email" name="email" required className={fieldBase} />
        </Field>
        <Field label={dict.quote.fields.phone}>
          <input type="tel" name="phone" className={fieldBase} />
        </Field>
        <Field label={dict.contact.subject} className="sm:col-span-2">
          <input type="text" name="subject" className={fieldBase} />
        </Field>
        <Field label={dict.contact.message} className="sm:col-span-2">
          <textarea name="message" rows={5} required className={`${fieldBase} resize-y`} />
        </Field>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-sand-50 transition-colors hover:bg-brand-500 disabled:opacity-60"
        >
          {status === "sending" ? dict.quote.submitting : dict.contact.send}
        </button>
        <StatusNote status={status} dict={dict} />
      </div>
      <p className="mt-5 text-xs leading-relaxed text-ink-700/70">{dict.quote.consent}</p>
    </form>
  );
}
