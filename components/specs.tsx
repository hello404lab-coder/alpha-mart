import { SPECS } from "@/lib/copy";

export function Specs() {
  return (
    <section className="bg-sand">
      <div className="page-wrap border-t border-river/40 py-14 md:py-16">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {SPECS.map((spec) => (
            <div key={spec.label}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
                {spec.label}
              </dt>
              <dd className="mt-3 font-mono text-[13px] tracking-[0.04em] text-ink/80">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
