import type { ComponentPropsWithoutRef } from "react";

const variants = {
  solid:
    "bg-ink text-paper hover:bg-ink/85 focus-visible:ring-offset-paper",
  inverse:
    "bg-paper text-ink hover:bg-well focus-visible:ring-offset-void",
  ghost:
    "bg-transparent text-ink/70 hover:text-ink px-0 py-0 rounded-none",
  outline:
    "border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper focus-visible:ring-offset-paper",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-medium tracking-[0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2";

export function Button({
  variant = "solid",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}

export function ButtonLink({
  variant = "solid",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
