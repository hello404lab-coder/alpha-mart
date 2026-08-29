"use client";

import { useMotionValue } from "framer-motion";
import { useCallback } from "react";
import { CHAIR_BEATS } from "@/lib/copy";
import {
  CHAIR_ASSET,
  CHAIR_FRAME_COUNT,
  CHAIR_VH,
  chairFrameSrc,
} from "@/lib/frames";
import { useLiteExperience } from "@/lib/use-lite-experience";
import { useSequenceLoader } from "@/lib/use-sequence-loader";
import { SequenceCanvas } from "./sequence-canvas";
import { SequenceCopy } from "./sequence-copy";

export function ChairStage() {
  const lite = useLiteExperience();
  const { framesRef, loadedCount } = useSequenceLoader(CHAIR_ASSET, !lite);
  const scrollYProgress = useMotionValue(0);

  const onProgress = useCallback(
    (progress: number) => {
      scrollYProgress.set(progress);
    },
    [scrollYProgress],
  );

  if (lite) {
    return (
      <section
        id="chair"
        className="relative h-dvh overflow-hidden bg-[#F3F1ED]"
        aria-label="The Alpha lounge chair"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={chairFrameSrc(1)}
          alt="Walnut cane lounge chair, fully assembled"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute left-6 top-[22%] max-w-[26rem] shadow-type md:left-[6%]">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">
            The Lounge
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-ink/90">
            Built to be sat in, not explained.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      id="chair"
      className="relative bg-[#F3F1ED]"
      style={{ height: `${CHAIR_VH}vh` }}
      aria-label="Scroll to assemble the lounge chair"
    >
      <p className="sr-only">
        Scroll to watch the walnut cane lounge chair reassemble from its parts:
        arms, through-bolts, cane seat and back, until it is whole.
      </p>
      <div className="sticky top-0 h-dvh overflow-hidden bg-[#F3F1ED]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={chairFrameSrc(CHAIR_FRAME_COUNT)}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${loadedCount > 0 ? "opacity-0" : "opacity-100"}`}
          aria-hidden
        />
        <SequenceCanvas
          framesRef={framesRef}
          loadedCount={loadedCount}
          frameCount={CHAIR_FRAME_COUNT}
          sectionId="chair"
          reverse
          onProgress={onProgress}
        />
        <SequenceCopy progress={scrollYProgress} beats={CHAIR_BEATS} />
      </div>
    </section>
  );
}
