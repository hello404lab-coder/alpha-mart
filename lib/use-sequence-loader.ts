"use client";

import { useEffect, useRef, useState } from "react";
import type { SequenceAsset } from "./frames";

const CONCURRENCY = 6;

type Cache = {
  frames: Array<HTMLImageElement | null>;
  loaded: number;
  ready: boolean;
  started: boolean;
  listeners: Set<(loaded: number, ready: boolean) => void>;
};

const caches = new Map<string, Cache>();

function ensureCache(asset: SequenceAsset): Cache {
  let cache = caches.get(asset.id);
  if (!cache || cache.frames.length !== asset.count) {
    cache = {
      frames: Array.from({ length: asset.count }, () => null),
      loaded: 0,
      ready: false,
      started: false,
      listeners: new Set(),
    };
    caches.set(asset.id, cache);
  }
  return cache;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function notify(cache: Cache) {
  for (const listener of cache.listeners) listener(cache.loaded, cache.ready);
}

function startLoad(asset: SequenceAsset, cache: Cache) {
  if (cache.started) return;
  cache.started = true;

  let next = 0;
  let completed = 0;

  const worker = async () => {
    while (true) {
      const i = next;
      next += 1;
      if (i >= asset.count) return;
      if (!cache.frames[i]) {
        try {
          cache.frames[i] = await loadImage(asset.src(i + 1));
        } catch {
          /* nearest-frame draw covers holes */
        }
      }
      completed += 1;
      cache.loaded = completed;
      if (!cache.ready && completed >= asset.readyAt) cache.ready = true;
      notify(cache);
    }
  };

  void Promise.all(Array.from({ length: CONCURRENCY }, () => worker())).then(
    () => {
      cache.ready = true;
      cache.loaded = asset.count;
      notify(cache);
    },
  );
}

export function useSequenceLoader(asset: SequenceAsset, enabled: boolean) {
  const cache = ensureCache(asset);
  const framesRef = useRef(cache.frames);
  const [loadedCount, setLoadedCount] = useState(cache.loaded);
  const [ready, setReady] = useState(!enabled || cache.ready);

  useEffect(() => {
    const next = ensureCache(asset);
    framesRef.current = next.frames;
    if (!enabled || next.ready) return;

    const listener = (loaded: number, isReady: boolean) => {
      setLoadedCount(loaded);
      if (isReady) setReady(true);
    };
    next.listeners.add(listener);
    startLoad(asset, next);

    return () => {
      next.listeners.delete(listener);
    };
  }, [asset, enabled]);

  const skip = () => {
    const next = ensureCache(asset);
    next.ready = true;
    setReady(true);
    notify(next);
  };

  return { framesRef, loadedCount, ready, skip };
}
