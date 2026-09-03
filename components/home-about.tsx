import Image from "next/image";
import Link from "next/link";
import { ABOUT } from "@/lib/copy";

export function HomeAbout() {
  return (
    <section id="about" className="bg-paper pb-20 pt-6 md:pb-28 md:pt-10">
      <div className="page-wrap">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.55rem)] leading-[1.12] tracking-[-0.03em]">
            <span className="block text-sage">{ABOUT.kicker}</span>
            <span className="block text-ink">{ABOUT.title}</span>
          </h2>
          <p className="hidden pb-1 text-[14px] text-ink/40 sm:block">
            {ABOUT.index}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6 lg:gap-8">
          <div className="overflow-hidden rounded-[22px]">
            <Image
              src={ABOUT.left.src}
              alt={ABOUT.left.alt}
              width={1200}
              height={1400}
              className="aspect-[4/5] h-full w-full object-cover md:min-h-[520px]"
              style={{ objectPosition: ABOUT.left.position }}
              sizes="(min-width: 768px) 48vw, 92vw"
            />
          </div>
          <div className="flex flex-col">
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src={ABOUT.right.src}
                alt={ABOUT.right.alt}
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover md:h-[300px] md:aspect-auto"
                sizes="(min-width: 768px) 48vw, 92vw"
              />
            </div>
            <div className="mt-8 max-w-[36em] space-y-4 text-[14px] leading-[1.7] text-ink/60 md:mt-10 md:text-[15px]">
              {ABOUT.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={ABOUT.more.href}
              className="mt-6 text-[14px] text-ink/70 hover:text-ink"
            >
              {ABOUT.more.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
