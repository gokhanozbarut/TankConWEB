import type { CSSProperties } from "react";

/**
 * Yer tutucu görsel katmanı.
 *
 * Müşteriden gerçek fotoğraflar geldiğinde tek yapılacak şey, içerik
 * dosyalarındaki `photo` alanını doldurmak: bu bileşen otomatik olarak
 * SVG yer tutucu yerine fotoğrafı basar. Böylece hiçbir sayfayı
 * yeniden düzenlemek gerekmez.
 */

export type ArtKey = "road" | "rail" | "tank" | "warehouse" | "customs" | "project";

type Palette = { sky: [string, string]; mid: string; near: string; accent: string };

const palettes: Record<ArtKey, Palette> = {
  road: { sky: ["#123449", "#2a5f79"], mid: "#0b2434", near: "#061821", accent: "#c08a3e" },
  rail: { sky: ["#12707f", "#1b475f"], mid: "#0b2434", near: "#061821", accent: "#35a8b6" },
  tank: { sky: ["#1b475f", "#12707f"], mid: "#0e2f42", near: "#061821", accent: "#e0bb7d" },
  warehouse: { sky: ["#2a5f79", "#123449"], mid: "#0b2434", near: "#061821", accent: "#d6c9b4" },
  customs: { sky: ["#0b2434", "#1a8b9b"], mid: "#0e2f42", near: "#061821", accent: "#c08a3e" },
  project: { sky: ["#1b475f", "#a9752f"], mid: "#0b2434", near: "#061821", accent: "#e0bb7d" },
};

/** Anahtardan sabit bir sayı üretir; aynı bölüm her zaman aynı kompozisyonu alsın diye. */
function seedOf(key: string): number {
  let h = 0;
  for (let i = 0; i < key.length; i += 1) h = (h * 31 + key.charCodeAt(i)) % 9973;
  return h;
}

function horizonShapes(art: ArtKey, seed: number) {
  const p = palettes[art];
  const jitter = (n: number, span: number) => ((seed * (n + 3)) % span) - span / 2;

  switch (art) {
    case "rail":
      return (
        <>
          <path d={`M0 148 L${300 + jitter(1, 40)} 96 L${520 + jitter(2, 60)} 132 L800 104 L800 200 L0 200 Z`} fill={p.mid} />
          <g fill={p.near}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={i} x={40 + i * 128} y={150} width={104} height={30} rx={3} />
            ))}
          </g>
          <rect x={0} y={186} width={800} height={3} fill={p.accent} opacity={0.55} />
        </>
      );
    case "tank":
      return (
        <>
          <path d={`M0 160 L${240 + jitter(1, 50)} 118 L560 150 L800 122 L800 200 L0 200 Z`} fill={p.mid} />
          <g fill={p.near}>
            <rect x={90} y={128} width={210} height={54} rx={27} />
            <rect x={330} y={140} width={168} height={42} rx={21} />
            <rect x={528} y={122} width={196} height={60} rx={30} />
          </g>
          <g stroke={p.accent} strokeWidth={2} opacity={0.6}>
            <line x1={195} y1={128} x2={195} y2={182} />
            <line x1={414} y1={140} x2={414} y2={182} />
            <line x1={626} y1={122} x2={626} y2={182} />
          </g>
        </>
      );
    case "warehouse":
      return (
        <>
          <path d={`M0 150 L800 ${126 + jitter(1, 24)} L800 200 L0 200 Z`} fill={p.mid} />
          <g fill={p.near}>
            <path d="M60 176 L60 120 L250 100 L440 120 L440 176 Z" />
            <path d="M470 176 L470 132 L640 116 L800 132 L800 176 Z" />
          </g>
          <g fill={p.accent} opacity={0.75}>
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={92 + i * 84} y={146} width={44} height={30} rx={2} />
            ))}
          </g>
        </>
      );
    case "customs":
      return (
        <>
          <path d={`M0 156 L${400 + jitter(1, 60)} 112 L800 148 L800 200 L0 200 Z`} fill={p.mid} />
          <g fill={p.near}>
            <rect x={120} y={72} width={16} height={110} />
            <rect x={664} y={72} width={16} height={110} />
            <rect x={120} y={72} width={560} height={16} />
          </g>
          <rect x={340} y={104} width={120} height={10} rx={5} fill={p.accent} opacity={0.85} />
        </>
      );
    case "project":
      return (
        <>
          <path d={`M0 164 L${300 + jitter(1, 70)} 104 L800 152 L800 200 L0 200 Z`} fill={p.mid} />
          <g fill={p.near}>
            <rect x={96} y={60} width={12} height={122} />
            <rect x={96} y={60} width={230} height={12} />
            <rect x={318} y={60} width={10} height={54} />
            <rect x={520} y={134} width={220} height={48} rx={4} />
          </g>
          <circle cx={323} cy={124} r={11} fill={p.accent} />
        </>
      );
    case "road":
    default:
      return (
        <>
          <path d={`M0 154 L${360 + jitter(1, 60)} 108 L800 140 L800 200 L0 200 Z`} fill={p.mid} />
          <path d="M0 200 L318 148 L482 148 L800 200 Z" fill={p.near} />
          <g stroke={p.accent} strokeWidth={4} strokeLinecap="round" opacity={0.8}>
            <line x1={400} y1={156} x2={400} y2={166} />
            <line x1={400} y1={174} x2={400} y2={188} />
          </g>
        </>
      );
  }
}

export default function Art({
  art,
  photo,
  alt = "",
  className = "",
  priority = false,
  style,
}: {
  art: ArtKey | string;
  photo?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
}) {
  if (photo) {
    return (
      // Gerçek fotoğraflar CDN/klasör fark etmeksizin çalışsın diye <img> kullanılıyor.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={style}
      />
    );
  }

  const key = (art in palettes ? art : "road") as ArtKey;
  const p = palettes[key];
  const seed = seedOf(art);
  const gradientId = `sky-${key}-${seed}`;
  const glowId = `glow-${key}-${seed}`;

  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={`h-full w-full ${className}`}
      style={style}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
        <radialGradient id={glowId} cx="0.72" cy="0.28" r="0.6">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.42" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="200" fill={`url(#${gradientId})`} />
      <rect width="800" height="200" fill={`url(#${glowId})`} />
      <circle cx={576 + (seed % 60)} cy={56} r={26} fill={p.accent} opacity={0.28} />
      {horizonShapes(key, seed)}
    </svg>
  );
}
