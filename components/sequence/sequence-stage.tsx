"use client";

import { useMotionValue } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  FRAME_COUNT,
  ROOM_ASSET,
  SEQUENCE_VH,
  frameSrc,
} from "@/lib/frames";
import { useLiteExperience } from "@/lib/use-lite-experience";
import { useSequenceLoader } from "@/lib/use-sequence-loader";
import { SequenceCanvas } from "./sequence-canvas";
import { SequenceCopy } from "./sequence-copy";
import { SequenceLoader } from "./sequence-loader";
import { ButtonLink } from "../ui/button";

export function SequenceStage() {
  const lite = useLiteExperience();
  const { framesRef, loadedCount, ready, skip } = useSequenceLoader(
    ROOM_ASSET,
    !lite,
  );
  const scrollYProgress = useMotionValue(0);
  const [showSkip, setShowSkip] = useState(false);

  const onProgress = useCallback(
    (progress: number) => {
      scrollYProgress.set(progress);
    },
    [scrollYProgress],
  );

  useEffect(() => {
    if (ready) return;
    const t = window.setTimeout(() => setShowSkip(true), 4000);
    return () => window.clearTimeout(t);
  }, [ready]);

  const onSkip = () => {
    skip();
    document.getElementById("the-room")?.scrollIntoView({ behavior: "auto" });
  };

  if (lite) {
    return (
      <section
        id="top"
        className="relative h-dvh overflow-hidden bg-plaster"
        aria-label="The Alpha Room"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frameSrc(FRAME_COUNT)}
          alt="A sunlit oak bedroom fully assembled, with an Alpha throw on the bed"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute left-6 top-[22%] max-w-[26rem] shadow-type md:left-[6%]">
          <p className="font-display text-[clamp(4.5rem,12vw,9.25rem)] leading-[0.82] tracking-[-0.05em] text-ink/90">
            Alpha
          </p>
          <p className="mt-2 text-right text-[11px] font-medium uppercase tracking-[0.22em] text-ink/40">
            curated by alpha
          </p>
          <p className="mt-8 max-w-[16rem] text-[15px] leading-relaxed text-ink/60">
            One box. Oak, linen, and late morning light.
          </p>
          <ButtonLink href="#atelier" className="mt-8">
            Enquire about this room
          </ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <>
      <SequenceLoader
        visible={!ready}
        loadedCount={loadedCount}
        showSkip={showSkip}
        onSkip={onSkip}
      />
      <section
        id="top"
        className="relative bg-plaster"
        style={{ height: `${SEQUENCE_VH}vh` }}
        aria-label="Scroll to assemble the Alpha room"
      >
        <p className="sr-only">
          Scroll to watch an Alpha box open in an empty bedroom. Furniture
          flies out, a bed assembles, and the room dresses itself until it is
          lived in.
        </p>
        <div className="sticky top-0 h-dvh overflow-hidden bg-plaster">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frameSrc(1)}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${loadedCount > 0 ? "opacity-0" : "opacity-100"}`}
            aria-hidden
            fetchPriority="high"
          />
          <SequenceCanvas
            framesRef={framesRef}
            loadedCount={loadedCount}
            frameCount={FRAME_COUNT}
            sectionId="top"
            onProgress={onProgress}
          />
          <SequenceCopy progress={scrollYProgress} />
        </div>
      </section>
    </>
  );
}
