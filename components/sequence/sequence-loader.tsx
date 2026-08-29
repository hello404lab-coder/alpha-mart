"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "../brand-mark";
import { FRAME_COUNT } from "@/lib/frames";

type Props = {
  visible: boolean;
  loadedCount: number;
  showSkip: boolean;
  onSkip: () => void;
};

export function SequenceLoader({
  visible,
  loadedCount,
  showSkip,
  onSkip,
}: Props) {
  const ratio = Math.min(1, loadedCount / FRAME_COUNT);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-plaster"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandMark className="h-16 w-auto" />
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/40">
            Preparing the room
          </p>
          <div className="mt-6 h-px w-40 overflow-hidden bg-ink/10">
            <div
              className="h-full bg-river transition-[width] duration-300 ease-[var(--ease-out-quint)]"
              style={{ width: `${ratio * 100}%` }}
            />
          </div>
          {showSkip ? (
            <button
              type="button"
              onClick={onSkip}
              className="mt-10 text-[13px] tracking-[0.04em] text-ink/50 underline-offset-4 hover:text-river hover:underline"
            >
              Skip
            </button>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
