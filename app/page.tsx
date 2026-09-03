import { Suspense } from "react";
import { Atelier } from "@/components/atelier";
import { HomeAbout } from "@/components/home-about";
import { HomeCollection } from "@/components/home-collection";
import { HomeHero } from "@/components/home-hero";
import { HomeMaterials } from "@/components/home-materials";
import { HomePortfolio } from "@/components/home-portfolio";
import { HomeProcess } from "@/components/home-process";
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
        <HomeProcess />
        <HomePortfolio />
        <HomeMaterials />
        <Suspense>
          <Atelier />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
