import { Suspense } from "react";
import { Atelier } from "@/components/atelier";
import { HomeAbout } from "@/components/home-about";
import { HomeCollection } from "@/components/home-collection";
import { HomeHero } from "@/components/home-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeCollection />
        <Suspense>
          <Atelier />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
