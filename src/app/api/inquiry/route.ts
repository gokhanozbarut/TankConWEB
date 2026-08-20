import { NextResponse } from "next/server";

/**
 * Form uç noktası.
 *
 * Şu an gelen talebi doğrular ve sunucu günlüğüne yazar. Canlıya alırken
 * `deliver()` fonksiyonunun içini müşterinin tercih ettiği kanala bağlayın:
 * SMTP/SendGrid ile e-posta, CRM web hook'u veya veritabanı kaydı.
 */

const KINDS = ["quote", "contact", "callback", "newsletter"] as const;
type Kind = (typeof KINDS)[number];

type Payload = Record<string, unknown> & { kind?: string };

const REQUIRED: Record<Kind, string[]> = {
  quote: ["mode", "origin", "destination", "name", "email"],
  contact: ["name", "email", "message"],
  callback: ["name", "phone"],
  newsletter: ["email"],
};

function isEmail(value: unknown): boolean {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

async function deliver(kind: Kind, data: Payload) {
  // TODO: e-posta / CRM entegrasyonu buraya bağlanacak.
  console.info(`[inquiry:${kind}]`, JSON.stringify(data));
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const kind = body.kind;
  if (typeof kind !== "string" || !(KINDS as readonly string[]).includes(kind)) {
    return NextResponse.json({ ok: false, error: "unknown_kind" }, { status: 400 });
  }

  // Bot tuzağı: gizli alan doluysa isteği sessizce başarılı sayıp yok say.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED[kind as Kind].filter((field) => {
    const value = body[field];
    return typeof value !== "string" || value.trim() === "";
  });

  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: "missing_fields", fields: missing }, { status: 422 });
  }

  if ("email" in body && body.email !== undefined && !isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email", fields: ["email"] }, { status: 422 });
  }

  await deliver(kind as Kind, body);

  return NextResponse.json({ ok: true });
}
