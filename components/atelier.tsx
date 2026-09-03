"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ATELIER } from "@/lib/copy";
import { BRAND } from "@/lib/brand";
import { getEnquireList } from "@/lib/enquire";
import { getProduct } from "@/lib/products";
import { Button } from "./ui/button";

const field =
  "w-full rounded-none border-0 border-b border-ink/15 bg-transparent px-0 py-3 text-[15px] text-ink placeholder:text-ink/30 outline-none focus:border-ink";

export function Atelier() {
  const [sent, setSent] = useState(false);
  const params = useSearchParams();
  const product = getProduct(params.get("product") ?? "");
  const finish = params.get("finish");
  const defaultMessage = product
    ? `I would like to enquire about the ${product.name}${finish ? ` in ${finish}` : ""}.`
    : "";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const city = String(data.get("city") ?? "");
    const message = String(data.get("message") ?? "");
    const list = getEnquireList()
      .map((slug) => getProduct(slug)?.name)
      .filter(Boolean);
    const listLine =
      list.length > 0 ? `\n\nOn my list: ${list.join(", ")}` : "";
    const subject = encodeURIComponent(
      product ? `Enquire — ${product.name}` : `Enquire — ${BRAND.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCity: ${city}\n\n${message}${listLine}`,
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="atelier" className="bg-paper py-20 md:py-28">
      <div className="page-wrap grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
            {ATELIER.index}
          </p>
          <h2 className="mt-8 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em]">
            <span className="block text-ink/40">{ATELIER.kicker}</span>
            <span className="block text-ink/90">{ATELIER.title}</span>
          </h2>
          <p className="mt-8 max-w-[32em] text-[16px] leading-[1.7] text-ink/60">
            {ATELIER.body}
          </p>
          <p className="mt-6 max-w-[22em] text-[13px] leading-relaxed text-ink/45">
            {BRAND.address}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink/50">
            <a href={BRAND.maps} target="_blank" rel="noreferrer" className="hover:text-ink">
              Maps →
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="hover:text-ink">
              {BRAND.instagramHandle}
            </a>
            <a href={`mailto:${BRAND.email}`} className="hover:text-ink">
              {BRAND.email}
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <p className="font-display text-3xl tracking-[-0.03em] text-ink/90">
              A note is on its way. We will write back.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Name"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="sr-only">City</span>
                <input
                  name="city"
                  autoComplete="address-level2"
                  placeholder="City"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="The room, the length, the light"
                  defaultValue={defaultMessage}
                  className={`${field} resize-none`}
                />
              </label>
              <div>
                <Button type="submit">Send an enquiry</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
