import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { href } from "@/lib/routes";

/**
 * Bu sayfa dil segmentinin altında olduğu için `params` almaz.
 * Bu yüzden metni iki dilde birden gösterip varsayılan dile yönlendiriyoruz.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] items-center bg-ink-950">
      <div className="container-page py-32 text-center">
        <p className="font-display text-6xl text-brand-400 sm:text-7xl">404</p>
        <h1 className="mt-6 font-display text-2xl text-sand-50 sm:text-3xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-3 text-sm text-sand-300/80">The page you are looking for was not found.</p>
        <Link
          href={href(defaultLocale, "home")}
          className="mt-10 inline-flex bg-brand-600 px-7 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-brand-500"
        >
          Ana sayfa / Home
        </Link>
      </div>
    </div>
  );
}
