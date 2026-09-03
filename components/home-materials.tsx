import Image from "next/image";
import Link from "next/link";
import { MATERIALS } from "@/lib/copy";
import { BRAND } from "@/lib/brand";

export function HomeMaterials() {
  return (
    <section id="materials" className="bg-paper py-20 md:py-28">
      <div className="page-wrap">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.55rem)] leading-[1.12] tracking-[-0.03em]">
            <span className="block text-sage">{MATERIALS.kicker}</span>
            <span className="block text-ink">{MATERIALS.title}</span>
          </h2>
          <p className="hidden pb-1 text-[14px] text-ink/40 sm:block">
            {MATERIALS.index}
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {MATERIALS.items.map((item) => (
            <article key={item.name}>
              <div className="overflow-hidden rounded-[22px] bg-well">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={900}
                  className={`aspect-square w-full ${
                    "contain" in item && item.contain === true
                      ? "object-contain p-8"
                      : "object-cover"
                  }`}
                  style={
                    "contain" in item && item.contain === true
                      ? undefined
                      : { objectPosition: "position" in item ? item.position : "center" }
                  }
                  sizes="(min-width: 768px) 30vw, 92vw"
                />
              </div>
              <h3 className="mt-5 font-display text-[1.5rem] tracking-[-0.03em] text-ink">
                {item.name}
              </h3>
              <p className="mt-2 max-w-[28em] text-[14px] leading-[1.7] text-ink/55">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-ink/10 pt-10 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[34em] text-[15px] leading-[1.7] text-ink/60">
            {MATERIALS.visit}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={BRAND.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper"
            >
              Google Maps →
            </a>
            <Link
              href="/#atelier"
              className="inline-flex items-center rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-medium text-ink"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
