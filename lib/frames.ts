export const FRAME_COUNT = 300;
export const READY_AT = 64;
export const FRAME_WIDTH = 1600;
export const FRAME_HEIGHT = 900;
export const OBJECT_POS = { x: 0.5, y: 0.5 } as const;
export const SEQUENCE_VH = 1100;
export const CHAIR_FRAME_COUNT = 210;
export const CHAIR_VH = 760;

export type SequenceAsset = {
  id: string;
  count: number;
  readyAt: number;
  src: (index1: number) => string;
};

export function padFrame(index1: number) {
  return String(index1).padStart(3, "0");
}

export function frameSrc(index1: number) {
  return `/sequence/river-table/ezgif-frame-${padFrame(index1)}.jpg`;
}

export function chairFrameSrc(index1: number) {
  return `/sequence/chair/ezgif-frame-${padFrame(index1)}.jpg`;
}

export const ROOM_ASSET: SequenceAsset = {
  id: "room",
  count: FRAME_COUNT,
  readyAt: READY_AT,
  src: frameSrc,
};

export const CHAIR_ASSET: SequenceAsset = {
  id: "chair",
  count: CHAIR_FRAME_COUNT,
  readyAt: 48,
  src: chairFrameSrc,
};

export function nearestFrame<T>(
  frames: Array<T | null>,
  index: number,
): T | null {
  if (frames[index]) return frames[index];
  for (let d = 1; d < frames.length; d++) {
    const before = frames[index - d];
    if (before) return before;
    const after = frames[index + d];
    if (after) return after;
  }
  return null;
}

export function beatOpacity(
  progress: number,
  start: number,
  end: number,
  fade = 0.035,
) {
  if (Number.isNaN(progress)) return 0;
  if (progress < start || progress > end) return 0;
  const fadeIn = start <= 0 ? 0 : fade;
  const fadeOut = end >= 1 ? 0 : fade;
  if (fadeIn && progress < start + fadeIn) return (progress - start) / fadeIn;
  if (fadeOut && progress > end - fadeOut) return (end - progress) / fadeOut;
  return 1;
}
