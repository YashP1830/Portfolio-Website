"use client";

import { Building2, ArrowUpRight, Sparkles } from "lucide-react"; 
import { work } from "@/data/content";
import Reveal from "./Reveal";
import { componentRegistry } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-[#FAFCFA] to-white px-6 py-32 md:px-10">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-50/50 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Landscape container */}
      <div className="mx-auto max-w-[1600px]">
        
        {/* REDESIGNED HEADER */}
        <Reveal>
          <div className="text-center mb-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-emerald-700">
                Our Portfolio
              </span>
            </div>
            
            <h2 className="font-display text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              Companies <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">
                Founded
              </span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl font-medium text-slate-500 leading-relaxed text-balance">
              A structured approach ensuring high-quality execution from planning to delivery across infrastructure, consumer tech, and sustainable development.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-24 md:mt-32">
          
          {/* REDESIGNED TIMELINE: Beautiful fading gradient line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-1.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-300 to-transparent opacity-60 md:block" />

          {/* Card Gap Container */}
          <div className="flex flex-col gap-32 md:gap-40">
            {work.map((item, i) => {
              // Extract dynamic component
              const DynamicComponent = componentRegistry[item.name as keyof typeof componentRegistry];

              return (
                <Reveal key={item.name} delay={i * 0.1}>
                  
                  {/* Container width */}
                  <div className="relative mx-auto w-full max-w-[1400px]">
                    
                    {/* ENHANCED CENTER NODE: Stronger glow */}
                    <div className="absolute -top-6 left-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] md:flex ring-4 ring-white">
                      <Building2 size={24} strokeWidth={1.5} />
                    </div>

                    {/* REDESIGNED CARD: Softer shadows, cleaner borders */}
                    <div className="group relative z-10 block overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/80 backdrop-blur-sm shadow-2xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)]">
                      
                      {/* Content Area */}
                      <div className="p-8 md:p-12 lg:p-16">
                        
                        {/* CARD HEADER */}
                        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                          <div className="flex items-center gap-6">
                            
                            {/* Logo Box */}
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-inner">
                              {item.logo ? (
                                <img src={item.logo} alt={`${item.name} logo`} className="h-12 w-12 object-contain" />
                              ) : (
                                <Building2 className="text-slate-300" size={32} />
                              )}
                            </div>
                            
                            <div>
                              <h3 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                                {item.name}
                              </h3>
                              <div className="mt-2 flex items-center gap-3">
                                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-600 border border-emerald-100">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                  Est. {item.year}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Link Button */}
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${item.name} website`}
                            className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-600 transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-emerald-500/30"
                          >
                            <ArrowUpRight size={24} />
                          </a>
                        </div>

                        {/* INJECTED COMPONENT AREA */}
                        <div className="mt-12 border-t border-slate-100 pt-10">
                           {DynamicComponent ? (
                             <DynamicComponent />
                           ) : (
                             <div className="rounded-2xl bg-slate-50 p-8 text-center text-slate-400 text-sm font-medium border border-dashed border-slate-200">
                               Component configuration for "{item.name}" not found.
                             </div>
                           )}
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}