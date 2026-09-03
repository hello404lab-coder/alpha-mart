import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";

export function FreshCard({ product }: { product: Product }) {
  const hero = product.images[0];

  return (
    <article className="flex h-full flex-col rounded-[22px] bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-[1.35rem] tracking-[-0.03em] text-ink">
          {product.name}
        </h3>
        {product.badge ? (
          <span className="mt-1 shrink-0 rounded-full border border-ink/15 px-2.5 py-0.5 text-[10px] tracking-[0.04em] text-ink/45">
            {product.badge}
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-[11px] leading-relaxed text-ink/40">
        {product.spec.toLowerCase().replace(" · ", " · ")}
      </p>
      <p className="mt-3 min-h-[2.8em] text-[13px] leading-[1.5] text-ink/55">
        {product.blurb}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[22px] tracking-[-0.03em] text-ink">
          {formatPrice(product.price)}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-paper"
        >
          Buy now
        </Link>
      </div>
      <Link
        href={`/product/${product.slug}`}
        className="mt-4 block overflow-hidden rounded-[16px] bg-well"
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          width={900}
          height={900}
          className={`aspect-[5/4] w-full ${
            hero.contain ? "object-contain p-3" : "object-cover"
          }`}
          style={hero.contain ? undefined : { objectPosition: hero.position }}
          sizes="(min-width: 1024px) 30vw, 90vw"
        />
      </Link>
      <div className="mt-4 flex items-center justify-between gap-3">
        {product.rating != null ? (
          <p className="flex items-center gap-1 text-[12px] text-ink/55">
            <span>{product.rating === 5 ? "5" : product.rating}</span>
            <span aria-hidden>★</span>
          </p>
        ) : (
          <span />
        )}
        <ul className="flex flex-wrap justify-end gap-1.5">
          {product.chips.slice(0, 2).map((chip) => (
            <li
              key={chip}
              className="rounded-full bg-well px-2.5 py-1 text-[11px] text-ink/50"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
