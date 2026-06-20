"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-clay origin-left z-50"
    />
  );
}
