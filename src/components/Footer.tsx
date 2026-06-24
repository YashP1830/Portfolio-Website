"use client";

import { profile } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-6 pt-20 pb-12 md:px-10">
      
      <div  className="mx-auto max-w-[1400px]">
        
        {/* TOP SECTION: Call to Action */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Ready to build something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">
                extraordinary?
              </span>
            </h2>
          </div>
          
          <a
            href="mailto:contact@example.com"
            className="group inline-flex flex-shrink-0 items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
          >
            Start a conversation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent"></div>

        {/* BOTTOM SECTION: Copyright & Socials */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          
          {/* Copyright */}
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          
          {/* Social Media Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.1419 2.00098H21.5709L14.0739 10.5703L22.9059 22.001H15.9869L10.5669 14.9304L4.36892 22.001H0.938922L8.94892 12.8465L0.449921 2.00098H7.55092L12.4579 8.44199L18.1419 2.00098ZM16.9369 20.0005H18.8359L6.50592 3.86498H4.46992L16.9369 20.0005Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Gmail / Email */}
            <a
              href="mailto:contact@example.com"
              aria-label="Send Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-500 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            {/* Field Notes (Blog/Journal) */}
            <a
              href="#"
              aria-label="Field Notes"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </a>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
}