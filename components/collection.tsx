import Image from "next/image";
import { COLLECTION } from "@/lib/copy";
import { ButtonLink } from "./ui/button";

export function Collection() {
  return (
    <section id="collection" className="bg-void py-24 md:py-32">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-cream">
            {COLLECTION.index}
          </h2>
          <ButtonLink href="#atelier" variant="inverse">
            Visit the atelier
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {COLLECTION.items.map((item) => (
            <article
              key={item.name}
              className="group rounded-[1.5rem] bg-paper p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[1.55rem] tracking-[-0.03em] text-ink/90">
                  {item.name}
                </h3>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/50">
                {item.spec}
              </p>
              <div className="mt-5 overflow-hidden rounded-[1.1rem] bg-sand">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={1280}
                  height={720}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-[1.04]"
                  style={{ objectPosition: item.position }}
                  sizes="(min-width: 768px) 30vw, 92vw"
                />
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-sand px-2.5 py-1 text-[11px] tracking-[0.04em] text-ink/50"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
