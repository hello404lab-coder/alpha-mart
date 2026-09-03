"use client";

import { useState } from "react";
import { addToEnquire, useInEnquire } from "@/lib/enquire";
import {
  categoryLabel,
  formatPrice,
  type Product,
} from "@/lib/products";
import { Button, ButtonLink } from "@/components/ui/button";

export function BuyColumn({ product }: { product: Product }) {
  const listed = useInEnquire(product.slug);
  const [finish, setFinish] = useState(product.finishes?.[0]?.id);

  const enquireHref = `/?product=${product.slug}${finish ? `&finish=${finish}` : ""}#atelier`;

  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
        {categoryLabel(product.category)}
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.04em] text-ink/90">
        {product.name}
      </h1>
      <p className="mt-2 font-mono text-[12px] tracking-[0.08em] text-ink/35">
        {product.sku}
      </p>
      <p className="mt-8 text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.03em] text-ink/90">
        {formatPrice(product.price)}
      </p>
      {product.finishes ? (
        <div className="mt-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
            Finish
          </p>
          <ul className="mt-3 flex gap-2">
            {product.finishes.map((item) => {
              const active = finish === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setFinish(item.id)}
                    className={`h-7 w-7 rounded-[6px] border transition-shadow ${
                      active
                        ? "ring-1 ring-ink ring-offset-2 ring-offset-[#FAFAF8]"
                        : "border-ink/10 hover:border-ink/30"
                    }`}
                    style={{ background: item.hex }}
                    aria-label={item.label}
                    title={item.label}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      <p className="mt-8 max-w-[34em] text-[15px] leading-[1.7] text-ink/55">
        {product.description}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={enquireHref}>Enquire about this piece</ButtonLink>
        <Button
          type="button"
          variant="outline"
          onClick={() => addToEnquire(product.slug)}
        >
          {listed ? "On your list" : "Add to list"}
        </Button>
      </div>
      <dl className="mt-12 border-t border-ink/10">
        {[
          ["Dimensions", product.dimensions],
          ["Timber", product.timber],
          ["Finish", product.finish],
          ["Origin", product.origin],
        ].map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-2 gap-4 border-b border-ink/10 py-3.5 text-[13px]"
          >
            <dt className="text-ink/40">{label}</dt>
            <dd className="text-right text-ink/80">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
