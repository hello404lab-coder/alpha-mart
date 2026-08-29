import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { NAV } from "@/lib/copy";
import { BRAND, MAILTO, TEL } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="bg-sand">
      <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandMark className="h-12 w-auto" />
            <span className="font-display text-[1.35rem] tracking-[-0.03em] text-ink/90">
              {BRAND.name}
            </span>
          </Link>
          <p className="mt-3 text-[13px] tracking-[0.04em] text-ink/45">
            {BRAND.tagline}
          </p>
          <a
            href={BRAND.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block max-w-[22em] text-[13px] leading-relaxed text-ink/55 hover:text-river"
          >
            {BRAND.address}
          </a>
          <p className="mt-4 font-mono text-[11px] tracking-[0.04em] text-ink/35">
            GSTIN {BRAND.gstin}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            Visit
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-[13px] tracking-[0.02em] text-ink/55">
            <li>
              <a href={MAILTO} className="hover:text-river">
                {BRAND.email}
              </a>
            </li>
            <li>
              <a href={TEL} className="hover:text-river">
                {BRAND.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-river"
              >
                {BRAND.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={BRAND.maps}
                target="_blank"
                rel="noreferrer"
                className="hover:text-river"
              >
                Google Maps →
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 md:text-right">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            The house
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-[13px] tracking-[0.02em] text-ink/55 md:items-end">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-river">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
