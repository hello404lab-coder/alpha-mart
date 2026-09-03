"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "./brand-mark";
import { NAV } from "@/lib/copy";
import { BRAND } from "@/lib/brand";
import { useEnquireCount } from "@/lib/enquire";

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h11l-.7 11.2a1.5 1.5 0 0 1-1.5 1.4H8.7a1.5 1.5 0 0 1-1.5-1.4L6.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 8.5V7a3 3 0 0 1 6 0v1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartLink({ count }: { count: number }) {
  return (
    <Link
      href="/#atelier"
      className="relative flex h-10 w-10 items-center justify-center rounded-[12px] bg-ink text-paper"
      aria-label={
        count > 0
          ? `Enquire list, ${count} ${count === 1 ? "piece" : "pieces"}`
          : "Enquire list"
      }
    >
      <BagIcon />
      {count > 0 ? (
        <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-paper px-1 text-[9px] font-medium text-ink">
          {count}
        </span>
      ) : null}
    </Link>
  );
}

export function SiteNav({ solid = false }: { solid?: boolean }) {
  void solid;
  const pathname = usePathname();
  const count = useEnquireCount();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-paper">
      <nav className="page-wrap flex items-center gap-4 py-5 md:py-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={`${BRAND.name}, home`}
        >
          <BrandMark className="h-8 w-auto md:h-9" priority />
        </Link>
        <ul className="hidden flex-1 items-center justify-center gap-10 text-[13px] tracking-[0.01em] text-ink/50 md:flex">
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
                  className={`hover:text-ink ${active ? "text-ink" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[12px] text-ink md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </button>
          <CartLink count={count} />
        </div>
      </nav>
      {open ? (
        <ul className="page-wrap flex flex-col gap-4 pb-6 text-[15px] text-ink/70 md:hidden">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
