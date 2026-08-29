import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyColumn } from "./buy-column";
import { ProductGallery } from "./gallery";
import { ProductTile } from "@/components/product-tile";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ButtonLink } from "@/components/ui/button";
import {
  PRODUCTS,
  getProduct,
  getSimilar,
} from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const similar = getSimilar(product.slug);

  return (
    <>
      <SiteNav solid />
      <main className="bg-[#FAFAF8]">
        <div className="page-wrap grid gap-12 pt-28 pb-20 lg:grid-cols-12 lg:gap-16 lg:pt-32 lg:pb-28">
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} />
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <BuyColumn product={product} />
          </div>
        </div>
        <section className="border-t border-ink/8 bg-cream py-20 md:py-28">
          <div className="page-wrap">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.03em] text-ink/90">
                Similar pieces
              </h2>
              <ButtonLink href="/collection" variant="ghost">
                See all →
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((item) => (
                <ProductTile key={item.slug} product={item} />
              ))}
            </div>
            <p className="mt-16 text-[13px] text-ink/40">
              <Link href="/collection" className="hover:text-river">
                Catalog
              </Link>
              <span className="mx-2">/</span>
              {product.name}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
