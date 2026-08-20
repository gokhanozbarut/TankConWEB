import type { Metadata } from "next";
import Art from "@/components/Art";
import { ProductsGrid, QuoteBand } from "@/components/sections";
import { PageHeader, Section } from "@/components/ui";
import { resolvePage, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.products.title, description: dict.products.subtitle };
}

export default async function StockPage({ params }: { params: LocaleParams }) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <PageHeader
        eyebrow={dict.products.eyebrow}
        title={dict.products.title}
        subtitle={dict.products.subtitle}
        art={<Art art="tank" photo="/media/Tankcon-depot-tanks-2.webp" alt="" />}
      />
      <Section className="bg-sand-50">
        <ProductsGrid locale={locale} dict={dict} />
      </Section>
      <QuoteBand locale={locale} dict={dict} />
    </>
  );
}
