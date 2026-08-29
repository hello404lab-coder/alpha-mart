import Image from "next/image";
import { CRAFT } from "@/lib/copy";

export function Craft() {
  return (
    <section id="craft" className="bg-cream pb-24 md:pb-32">
      <div className="page-wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em]">
            <span className="block text-ink/40">{CRAFT.kicker}</span>
            <span className="block text-ink/90">{CRAFT.title}</span>
          </h2>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            {CRAFT.index}
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CRAFT.cards.map((card) => (
            <article key={card.title} className="group">
              <div className="overflow-hidden rounded-[1.25rem] bg-sand">
                <Image
                  src={card.src}
                  alt={card.title}
                  width={1600}
                  height={900}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-[1.03]"
                  style={{ objectPosition: card.position }}
                  sizes="(min-width: 768px) 30vw, 92vw"
                />
              </div>
              <h3 className="mt-5 font-display text-[1.65rem] tracking-[-0.03em] text-ink/90">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
