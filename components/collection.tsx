import Link from "next/link";
import { ProductTile } from "./product-tile";
import { ButtonLink } from "./ui/button";
import { getFeatured } from "@/lib/products";

export function Collection() {
  const featured = getFeatured();

  return (
    <section id="collection" className="bg-void py-24 md:py-32">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-cream">
            The collection
          </h2>
          <ButtonLink href="/collection" variant="inverse">
            View catalog →
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((product) => (
            <div
              key={product.slug}
              className="rounded-[1.5rem] bg-paper p-6"
            >
              <ProductTile product={product} />
            </div>
          ))}
        </div>
        <p className="mt-10 text-[13px] text-cream/40">
          <Link href="/collection" className="hover:text-cream">
            All seven pieces →
          </Link>
        </p>
      </div>
    </section>
  );
}
