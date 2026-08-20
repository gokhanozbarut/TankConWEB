import Hero from "@/components/Hero";
import {
  IndustriesSection,
  IntroSection,
  LocationSection,
  ProductsSection,
  QuoteBand,
  ServicesSection,
  StatsBand,
  UspSection,
} from "@/components/sections";
import { resolvePage, type LocaleParams } from "@/lib/page";

export default async function HomePage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <StatsBand locale={locale} />
      <UspSection dict={dict} />
      <ProductsSection locale={locale} dict={dict} />
      <IntroSection locale={locale} dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <IndustriesSection locale={locale} dict={dict} />
      <LocationSection locale={locale} dict={dict} />
      <QuoteBand locale={locale} dict={dict} />
    </>
  );
}
