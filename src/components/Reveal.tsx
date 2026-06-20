"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "fade" | "rise";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "rise",
}: RevealProps) {
  const initial =
    as === "rise" ? { opacity: 0, y: 22 } : { opacity: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
