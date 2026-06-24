"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, profile } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200/50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 md:px-10">
        
        {/* LOGO - Increased font size and weight */}
        <a
          href="#"
          className="font-display text-2xl font-extrabold tracking-tight text-slate-900 transition-transform hover:scale-105"
        >
          {profile.name}
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 group"
            >
              {link.label}
              {/* Subtle underline hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full rounded-full"></span>
            </a>
          ))}
          
          {/* NEW DESKTOP CTA BUTTON */}
          <a 
            href="#footer" 
            className="ml-4 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-slate-600 hover:bg-slate-100 md:hidden transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-2 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
              
              {/* NEW MOBILE CTA BUTTON */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <a 
                  href="#footer"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-slate-800"
                >
                  Get in Touch <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}