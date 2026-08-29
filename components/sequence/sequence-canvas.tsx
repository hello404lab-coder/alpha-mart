"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import { drawCover, fitCanvas } from "@/lib/draw-cover";
import { nearestFrame } from "@/lib/frames";
import { readSequenceProgress } from "@/lib/sequence-progress";

type Props = {
  framesRef: RefObject<Array<HTMLImageElement | null>>;
  loadedCount: number;
  frameCount: number;
  sectionId: string;
  reverse?: boolean;
  onProgress: (progress: number) => void;
};

export function SequenceCanvas({
  framesRef,
  loadedCount,
  frameCount,
  sectionId,
  reverse = false,
  onProgress,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const lastDrawn = useRef(-1);
  const onProgressRef = useRef(onProgress);

  useLayoutEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);

  useLayoutEffect(() => {
    lastDrawn.current = -1;
  }, [loadedCount]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });
    ctxRef.current = ctx;
    fitCanvas(canvas);

    const paint = (index: number) => {
      if (!ctx) return;
      const frame = nearestFrame(framesRef.current, index);
      if (!frame) return;
      canvas.dataset.frame = String(index + 1);
      if (lastDrawn.current === index) return;
      drawCover(ctx, frame, canvas);
      lastDrawn.current = index;
    };

    let running = true;
    let raf = 0;
    let current = reverse ? 1 : 0;
    let lastTime = performance.now();

    const loop = (now: number) => {
      if (!running) return;
      const section = document.getElementById(sectionId);
      if (!section) {
        raf = 0;
        return;
      }

      const dt = Math.min(0.048, (now - lastTime) / 1000);
      lastTime = now;
      const scroll = readSequenceProgress(section);
      const target = reverse ? 1 - scroll : scroll;
      const easing = 1 - Math.exp(-dt * 14);
      current += (target - current) * easing;
      if (Math.abs(target - current) < 0.00012) current = target;

      const index = Math.round(current * (frameCount - 1));
      paint(index);
      onProgressRef.current(scroll);

      const rect = section.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      const catching = Math.abs(target - current) > 0.00012;
      raf = visible || catching ? requestAnimationFrame(loop) : 0;
    };

    const kick = () => {
      if (!running || raf) return;
      lastTime = performance.now();
      raf = requestAnimationFrame(loop);
    };

    lastDrawn.current = -1;
    kick();

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    document.addEventListener("scroll", kick, {
      passive: true,
      capture: true,
    });

    const ro = new ResizeObserver(() => {
      fitCanvas(canvas);
      lastDrawn.current = -1;
      kick();
    });
    ro.observe(canvas);

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      document.removeEventListener("scroll", kick, { capture: true });
      ro.disconnect();
    };
  }, [framesRef, frameCount, sectionId, reverse]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
