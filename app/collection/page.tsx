import type { Metadata } from "next";
import { CatalogGrid } from "./catalog-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Seating, sleep, storage — oak and walnut pieces made to the room.",
};

export default function CollectionPage() {
  return (
    <>
      <SiteNav solid />
      <main className="bg-cream pt-28 pb-24 md:pt-32 md:pb-32">
        <div className="page-wrap">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            Catalog
          </p>
          <h1 className="mt-5 max-w-xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-ink/90">
            The collection
          </h1>
          <p className="mt-6 max-w-[32em] text-[16px] leading-[1.7] text-ink/55">
            Seven pieces from the Alpha room. Isolated here so you can see them.
            Made to the wall, the light, and the length you give us.
          </p>
          <CatalogGrid />
          <div className="mt-24 flex flex-col gap-4 border-t border-ink/10 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-2xl tracking-[-0.03em] text-ink/80">
              Made to the room.
            </p>
            <ButtonLink href="/#atelier">Enquire</ButtonLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
