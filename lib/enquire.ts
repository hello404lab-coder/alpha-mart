"use client";

import { useEffect, useState } from "react";

const KEY = "alpha-enquire";
const EVENT = "alpha-enquire-change";

export function getEnquireList(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function isInEnquire(slug: string) {
  return getEnquireList().includes(slug);
}

export function addToEnquire(slug: string) {
  const next = Array.from(new Set([...getEnquireList(), slug]));
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function useEnquireCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(getEnquireList().length);
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return count;
}

export function useInEnquire(slug: string) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const sync = () => setOn(isInEnquire(slug));
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [slug]);

  return on;
}
