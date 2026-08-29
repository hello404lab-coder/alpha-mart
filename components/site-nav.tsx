import { NAV } from "@/lib/copy";
import { ButtonLink } from "./ui/button";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="flex items-center justify-between gap-6 px-5 py-4 md:px-8 ">
        <a
          href="#top"
          className="font-display text-[28px] leading-none tracking-[-0.04em] text-ink/90"
          aria-label="Alpha Furniture Mart, home"
        >
          α
        </a>
        <ul className="hidden md:flex items-center gap-9 text-[13px] font-medium tracking-[0.04em] text-ink/55">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink href="#atelier">Enquire</ButtonLink>
      </nav>
    </header>
  );
}
