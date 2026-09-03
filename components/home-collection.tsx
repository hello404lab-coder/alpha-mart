import Link from "next/link";
import { FreshCard } from "./fresh-card";
import { FRESH } from "@/lib/copy";
import { getFeatured } from "@/lib/products";

export function HomeCollection() {
  const featured = getFeatured();

  return (
    <section id="collection" className="bg-void py-16 md:py-20">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-[clamp(2rem,3.6vw,2.6rem)] tracking-[-0.03em] text-paper">
            {FRESH.title}
          </h2>
          <Link
            href={FRESH.cta.href}
            className="inline-flex w-fit items-center rounded-full bg-paper px-5 py-2.5 text-[13px] font-medium text-ink"
          >
            {FRESH.cta.label}
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {featured.map((product) => (
            <FreshCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-1.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
        </div>
      </div>
    </section>
  );
}
