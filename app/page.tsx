import { Suspense } from "react";
import { Atelier } from "@/components/atelier";
import { Collection } from "@/components/collection";
import { Craft } from "@/components/craft";
import { Manifesto } from "@/components/manifesto";
import { ChairStage } from "@/components/sequence/chair-stage";
import { SequenceStage } from "@/components/sequence/sequence-stage";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Specs } from "@/components/specs";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <SequenceStage />
        <Manifesto />
        <Craft />
        <Specs />
        <ChairStage />
        <Collection />
        <Suspense>
          <Atelier />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
