"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile, stats } from "@/data/content";
import CountUp from "./CountUp";

const headline = "I build quiet tools for loud problems.";
const words = headline.split(" ");

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-28 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-widest2 text-clay"
        >
          {profile.role} — {profile.location}
        </motion.p>

        <h1 className="max-w-4xl font-display text-4xl font-light leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + words.length * 0.12 }}
            className="inline-block h-[0.85em] w-[2px] translate-y-1 animate-blink bg-clay align-middle"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-balance font-body text-base leading-relaxed text-stone md:text-lg"
        >
          I&rsquo;m {profile.name}, founder of Lighthouse Studio. I spend most of
          my time making unglamorous software feel inevitable, and the rest
          writing about why that&rsquo;s harder than it sounds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-clay"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:border-clay hover:text-clay"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-hairline pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl text-ink md:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-stone">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
