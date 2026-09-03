import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/copy";

function Frame({
  src,
  alt,
  position,
  contain,
  className,
}: {
  src: string;
  alt: string;
  position?: string;
  contain?: boolean;
  className: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[22px] bg-well ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={1400}
        className={`h-full w-full ${contain ? "object-contain p-8" : "object-cover"}`}
        style={contain ? undefined : { objectPosition: position ?? "center" }}
        sizes="(min-width: 768px) 50vw, 92vw"
        quality={70}
      />
    </div>
  );
}

export function HomePortfolio() {
  const [hero, tall, weave, dresser, joinery] = PORTFOLIO.items;

  return (
    <section id="portfolio" className="bg-void py-16 md:py-20">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.55rem)] leading-[1.12] tracking-[-0.03em] text-paper">
            <span className="block text-paper/40">{PORTFOLIO.kicker}</span>
            <span className="block">{PORTFOLIO.title}</span>
          </h2>
          <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
            <p className="text-[14px] text-paper/40">{PORTFOLIO.index}</p>
            <Link
              href={PORTFOLIO.cta.href}
              className="inline-flex w-fit items-center rounded-full bg-paper px-5 py-2.5 text-[13px] font-medium text-ink"
            >
              {PORTFOLIO.cta.label}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-12 md:gap-5">
          <Frame
            src={hero.src}
            alt={hero.alt}
            position={hero.position}
            className="aspect-[4/5] md:col-span-7 md:aspect-auto md:min-h-[640px]"
          />
          <div className="grid gap-4 md:col-span-5 md:grid-rows-2 md:gap-5 md:min-h-[640px]">
            <Frame
              src={tall.src}
              alt={tall.alt}
              position={tall.position}
              className="aspect-[4/3] h-full md:aspect-auto"
            />
            <Frame
              src={weave.src}
              alt={weave.alt}
              position={weave.position}
              className="aspect-[16/10] h-full md:aspect-auto"
            />
          </div>
          <Frame
            src={dresser.src}
            alt={dresser.alt}
            position={dresser.position}
            className="aspect-[4/3] md:col-span-6"
          />
          <Frame
            src={joinery.src}
            alt={joinery.alt}
            position={joinery.position}
            contain
            className="aspect-[4/3] md:col-span-6"
          />
        </div>
      </div>
    </section>
  );
}
