"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

function readSaveData() {
  if (typeof navigator === "undefined") return false;
  const connection = (
    navigator as Navigator & { connection?: NetworkInformation }
  ).connection;
  return Boolean(
    connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g",
  );
}

export function useLiteExperience() {
  const reduced = useReducedMotion();
  const [lite] = useState(readSaveData);
  return Boolean(reduced) || lite;
}
