import Image from "next/image";
import { MANIFESTO } from "@/lib/copy";
import { ButtonLink } from "./ui/button";

export function Manifesto() {
  return (
    <section id="the-room" className="bg-cream py-24 md:py-32">
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Image
            src="/sequence/river-table/ezgif-frame-300.jpg"
            alt="A sunlit oak bedroom assembled from an Alpha box, with a yellow throw on the bed"
            width={1600}
            height={900}
            className="h-auto w-full rounded-[1.25rem] object-cover"
            sizes="(min-width: 1024px) 55vw, 92vw"
          />
        </div>
        <div className="lg:col-span-5">
          <div className="flex items-start justify-between gap-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
              {MANIFESTO.index}
            </p>
          </div>
          <h2 className="mt-8 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em]">
            <span className="block text-ink/40">{MANIFESTO.kicker}</span>
            <span className="block text-ink/90">{MANIFESTO.title}</span>
          </h2>
          <p className="mt-8 max-w-[36em] text-[16px] leading-[1.7] text-ink/60 md:text-[17px]">
            {MANIFESTO.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px] tracking-[0.02em]">
            <ButtonLink href="/collection" variant="ghost">
              Ready to buy →
            </ButtonLink>
            <ButtonLink href="/#atelier" variant="ghost">
              Custom order →
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
