"use client";

import { type MotionValue, motion, useTransform } from "framer-motion";
import { SEQUENCE_BEATS, type SequenceBeat } from "@/lib/copy";
import { beatOpacity } from "@/lib/frames";
import { ButtonLink } from "../ui/button";

function Beat({
  progress,
  start,
  end,
  align,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  align: "left" | "right";
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, (v) => beatOpacity(v, start, end));
  const y = useTransform(opacity, [0, 1], [16, 0]);
  const pointerEvents = useTransform(opacity, (o) =>
    o > 0.45 ? "auto" : "none",
  );

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className={[
        "absolute z-10 max-w-[20.5rem] md:max-w-[26rem]",
        "max-md:inset-x-4 max-md:bottom-16 max-md:top-auto",
        align === "right"
          ? "md:right-[6%] md:left-auto md:top-[26%]"
          : "md:left-[6%] md:top-[22%]",
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}

export function SequenceCopy({
  progress,
  beats = SEQUENCE_BEATS,
}: {
  progress: MotionValue<number>;
  beats?: readonly SequenceBeat[];
}) {
  return (
    <>
      {beats.map((beat) => (
        <Beat
          key={beat.eyebrow}
          progress={progress}
          start={beat.start}
          end={beat.end}
          align={beat.align}
        >
          {beat.wordmark ? (
            <div className="shadow-type">
              <p className="font-display text-[clamp(4.5rem,12vw,9.25rem)] leading-[0.82] tracking-[-0.05em] text-ink/90">
                Alpha
              </p>
              <p className="mt-2 text-right text-[11px] font-medium uppercase tracking-[0.22em] text-ink/40">
                curated by alpha
              </p>
              <p className="mt-8 max-w-[16rem] text-[15px] leading-relaxed text-ink/60">
                {beat.body}
              </p>
            </div>
          ) : (
            <div className="shadow-type rounded-2xl bg-plaster/25 p-1 backdrop-blur-[2px] md:bg-transparent md:p-0 md:backdrop-blur-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">
                {beat.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-ink/90">
                {beat.title}
              </h2>
              {beat.body ? (
                <p className="mt-4 max-w-[22rem] text-[15px] leading-relaxed text-ink/60">
                  {beat.body}
                </p>
              ) : null}
              {beat.cta ? (
                <ButtonLink href={beat.cta.href} className="mt-6 max-md:hidden">
                  {beat.cta.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </Beat>
      ))}
    </>
  );
}
