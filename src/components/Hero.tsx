"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile, stats } from "@/data/content";
import CountUp from "./CountUp";

const headline = "Scaling infrastructure. Sustaining the planet. Shipping software.";
const words = headline.split(" ");

export default function Hero() {
  return (
    // Reduced horizontal padding here: changed px-6 to px-4, and md:px-10 to md:px-6
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-1 pt-32 pb-32 md:px- lg:pb-40">
      
      {/* Optional: Extremely subtle background gradient bloom for elegance */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-50/50 via-transparent to-transparent"></div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-12">
          
          {/* LEFT COLUMN: Text content */}
          <div className="w-full flex-1 max-w-3xl z-10">
            
            {/* Refined Kicker: Bolder, non-mono font, highly eye-catching */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-stone-200/80 bg-white px-6 py-2.5 font-sans text-sm font-extrabold uppercase tracking-widest text-[#9B5B3A] shadow-md backdrop-blur-sm"
            >
              {/* Eye-catching pulsing dot indicator */}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C68A69] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C68A69]"></span>
              </span>
              
              <span>{profile.role} — {profile.location}</span>
            </motion.div>

            <h1 className="font-display text-5xl font-light leading-[1.15] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
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
                transition={{ delay: 0.2 + words.length * 0.1 }}
                className="inline-block h-[0.85em] w-[3px] translate-y-1 animate-blink bg-clay align-middle"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 max-w-2xl text-balance font-body text-lg leading-relaxed text-stone md:text-xl"
            >
              I&rsquo;m <span className="font-semibold text-ink">{profile.name}</span>. As the founder of GranoInfra, GreenWorld, and Moyo International, my work spans heavy infrastructure, sustainability, and consumer software. I spend my days turning massive, unglamorous problems into simple, inevitable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-body text-sm font-semibold text-paper shadow-lg shadow-ink/10 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                See the work 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-hairline bg-transparent px-8 py-4 font-body text-sm font-semibold text-ink transition-all hover:border-clay hover:text-clay hover:bg-stone-50"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image with premium glow effect */}
          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full flex-1 max-w-md lg:w-1/2 lg:max-w-none"
          >
            {/* Elegant decorative background glow behind the image */}
            <div className="absolute -inset-4 z-0 rounded-[2rem] bg-gradient-to-tr from-[#C68A69]/20 to-emerald-100/30 opacity-70 blur-3xl filter transition-all duration-700 group-hover:opacity-100"></div>
            
            {/* The actual image wrapper */}
            <div className="relative z-10 overflow-hidden rounded-3xl border border-stone-100 bg-white p-2 shadow-2xl shadow-stone-200/50">
              <img
                src="/founder_photo.png"
                alt="Founder Portrait"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-hairline pt-12 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <div className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-widest2 text-stone/80">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOUNCING SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone/50 hover:text-ink transition-colors"
      >
        <motion.a
          href="#work"
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  );
}