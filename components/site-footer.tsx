import { NAV } from "@/lib/copy";

export function SiteFooter() {
  return (
    <footer className="bg-sand">
      <div className="page-wrap flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl tracking-[-0.04em] text-ink/90">
            α
          </p>
          <p className="mt-3 text-[13px] tracking-[0.04em] text-ink/50">
            Alpha Furniture Mart
          </p>
          <p className="mt-1 text-[13px] text-ink/40">Handcrafted interiors.</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] tracking-[0.04em] text-ink/55">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-river">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
