"use client";

import { useScroll, useSpring } from "framer-motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return smoothed;
}
