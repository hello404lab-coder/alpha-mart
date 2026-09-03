import Image from "next/image";
import { PROCESS } from "@/lib/copy";

export function HomeProcess() {
  return (
    <section id="process" className="bg-paper py-20 md:py-28">
      <div className="page-wrap">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.55rem)] leading-[1.12] tracking-[-0.03em]">
            <span className="block text-sage">{PROCESS.kicker}</span>
            <span className="block text-ink">{PROCESS.title}</span>
          </h2>
          <p className="hidden pb-1 text-[14px] text-ink/40 sm:block">
            {PROCESS.index}
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {PROCESS.steps.map((step) => (
            <article key={step.n}>
              <div className="overflow-hidden rounded-[22px] bg-well">
                <Image
                  src={step.src}
                  alt={step.alt}
                  width={900}
                  height={1100}
                  className={`aspect-[4/5] w-full ${
                    "contain" in step && step.contain === true
                      ? "object-contain p-6"
                      : "object-cover"
                  }`}
                  style={
                    "contain" in step && step.contain === true
                      ? undefined
                      : { objectPosition: step.position }
                  }
                  sizes="(min-width: 768px) 30vw, 92vw"
                />
              </div>
              <p className="mt-5 text-[12px] tracking-[0.08em] text-ink/35">
                {step.n}
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] tracking-[-0.03em] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[32em] text-[14px] leading-[1.7] text-ink/55">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
