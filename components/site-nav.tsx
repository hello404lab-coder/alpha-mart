"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./brand-mark";
import { NAV } from "@/lib/copy";
import { BRAND } from "@/lib/brand";
import { useEnquireCount } from "@/lib/enquire";
import { ButtonLink } from "./ui/button";

export function SiteNav({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const count = useEnquireCount();
  const onInner = solid || pathname !== "/";

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav
        className={`flex items-center justify-between gap-6 px-5 py-4 md:px-8`}
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${BRAND.name}, home`}
        >
          <BrandMark className="h-9 w-auto md:h-10" priority />
        </Link>
        <ul className="hidden md:flex items-center gap-9 text-[13px] font-medium tracking-[0.04em] text-ink/55">
          {NAV.map((item) => {
            const active =
              item.href === "/collection"
                ? pathname.startsWith("/collection") ||
                  pathname.startsWith("/product")
                : false;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-300 hover:text-ink ${
                    active ? "text-ink" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ButtonLink href="/#atelier">
          Enquire
          {count > 0 ? (
            <span className="text-[11px] opacity-70">{count}</span>
          ) : null}
        </ButtonLink>
      </nav>
    </header>
  );
}
