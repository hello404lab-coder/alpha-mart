"use client";

import Image from "next/image";
import Link from "next/link";
import { addToEnquire, useInEnquire } from "@/lib/enquire";
import { formatPrice, type Product } from "@/lib/products";

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M7 1v12M1 7h12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProductTile({ product }: { product: Product }) {
  const hero = product.images[0];
  const listed = useInEnquire(product.slug);

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[1.25rem] bg-[#F3F1ED]">
        <Link href={`/product/${product.slug}`} className="block">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={1600}
            height={900}
            className={`aspect-square w-full ${
              hero.contain ? "object-contain p-8" : "object-cover"
            }`}
            style={
              hero.contain
                ? undefined
                : { objectPosition: hero.position ?? "center" }
            }
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          />
        </Link>
        <button
          type="button"
          onClick={() => addToEnquire(product.slug)}
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-cream/90 text-ink/70 backdrop-blur-sm transition-colors hover:border-ink hover:text-ink"
          aria-label={listed ? `${product.name} is on your list` : `Add ${product.name} to enquire list`}
        >
          {listed ? (
            <span className="text-[11px] tracking-[0.04em]">✓</span>
          ) : (
            <PlusIcon />
          )}
        </button>
      </div>
      <Link href={`/product/${product.slug}`} className="mt-5 block">
        <h3 className="font-display text-[1.35rem] tracking-[-0.03em] text-ink/90">
          {product.name}
        </h3>
        <p className="mt-1 text-[12px] leading-relaxed text-ink/45">
          {product.spec}
        </p>
        <p className="mt-3 text-[15px] tracking-[-0.01em] text-ink/80">
          from {formatPrice(product.price)}
        </p>
      </Link>
    </article>
  );
}
