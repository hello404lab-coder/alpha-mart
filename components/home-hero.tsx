import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/lib/copy";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="page-wrap relative pb-10 pt-2 md:min-h-[720px] md:pb-14 md:pt-1 lg:min-h-[760px]">
        <div className="relative z-0">
          <h1 className="font-display text-[4.5rem] font-light leading-[0.76] tracking-[-0.05em] text-ink sm:text-[6.5rem] md:text-[clamp(10rem,22vw,16rem)] text-center">
            {HERO.wordmark}
            <span className="font-bold text-[0.5rem]">by</span>
            <span className="font-bold"> alpha</span>
          </h1>
          <p className="relative z-20 mt-3 font-semibold text-[15px] tracking-[-0.03em] text-ink md:absolute md:right-0 md:bottom-[-2.12em] md:mt-0 md:text-[20px]">
            {HERO.tagline}
          </p>
        </div>

        <div className="pointer-events-none relative z-[15] mx-auto mt-2 w-[min(88%,300px)] md:absolute md:left-[24%] md:top-[4%] md:mx-0 md:mt-0 md:w-[min(54%,600px)] lg:left-[26%] lg:w-[560px]">
          <Image
            src="/stills/hero-chair.webp"
            alt="Cane lounge in solid walnut"
            width={1082}
            height={1200}
            priority
            quality={80}
            className="h-auto w-full max-w-full"
            sizes="(min-width: 1024px) 580px, 80vw"
          />
        </div>

        <div className="relative z-20 mt-6 grid items-end gap-8 md:mt-[min(20vw,210px)] md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="max-w-[30ch] text-[13px] leading-[1.65] text-ink/70 md:text-[14px]">
              {HERO.manifesto}
            </p>
            <Link
              href={HERO.cta.href}
              className="mt-6 inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-[13px] font-medium text-paper"
            >
              {HERO.cta.label}
            </Link>
          </div>
          <div className="hidden md:col-span-5 md:block" />
          <div className="flex items-end justify-start gap-3 md:col-span-4 md:justify-end">
            {HERO.tiles.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="relative block h-[124px] w-[118px] overflow-hidden rounded-[18px] bg-ink px-[5px] pt-[5px] pb-[11px] lg:h-[140px] lg:w-[132px]"
              >
                <span className="relative block h-full w-full overflow-hidden rounded-[13px]">
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="132px"
                    quality={70}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <span className="absolute inset-x-2.5 bottom-2.5 text-[12px] leading-tight text-paper">
                    {tile.label}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
