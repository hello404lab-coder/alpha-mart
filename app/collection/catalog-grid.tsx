"use client";

import { useMemo, useState } from "react";
import { ProductTile } from "@/components/product-tile";
import {
  CATEGORIES,
  getProducts,
  type ProductCategory,
} from "@/lib/products";

export function CatalogGrid() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const products = useMemo(() => getProducts(category), [category]);

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-ink/10 pb-4">
        {CATEGORIES.map((item) => {
          const active = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`text-[13px] tracking-[0.06em] transition-colors ${
                active
                  ? "text-ink border-b border-ink pb-4 -mb-px"
                  : "text-ink/40 hover:text-ink/70 pb-4 -mb-px"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {products.length === 0 ? (
        <p className="mt-16 text-[15px] text-ink/50">
          Nothing in this room yet.
        </p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductTile key={product.slug} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
