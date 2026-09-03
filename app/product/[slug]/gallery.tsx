"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/products";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];

  return (
    <div>
      <div className="overflow-hidden rounded-[1.25rem] bg-[#F3F1ED]">
        <Image
          src={current.src}
          alt={current.alt}
          width={1600}
          height={900}
          priority
          className={`aspect-[4/5] w-full md:aspect-square ${
            current.contain ? "object-contain p-10" : "object-cover"
          }`}
          style={
            current.contain
              ? undefined
              : { objectPosition: current.position ?? "center" }
          }
          sizes="(min-width: 1024px) 50vw, 92vw"
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, i) => {
            const active = i === index;
            return (
              <li key={image.src + i} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative overflow-hidden rounded-[0.9rem] bg-[#F3F1ED] transition-shadow ${
                    active
                      ? "ring-1 ring-ink/80 ring-offset-2 ring-offset-cream"
                      : "hover:ring-1 hover:ring-ink/20"
                  }`}
                  aria-label={image.label ?? `View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    width={320}
                    height={180}
                    className={`h-20 w-24 object-cover md:h-[5.5rem] md:w-28 ${image.contain ? "object-contain p-2" : ""}`}
                    style={
                      image.contain
                        ? undefined
                        : { objectPosition: image.position }
                    }
                  />
                  {image.label ? (
                    <span className="absolute inset-x-0 bottom-1 text-center text-[9px] uppercase tracking-[0.14em] text-ink/50">
                      {image.label}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
