"use client";

import { timeline } from "@/data/content";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="border-t border-hairline bg-paper-dim px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-clay">
            How I got here
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            A fairly straight line, in hindsight.
          </h2>
        </Reveal>

        <div className="mt-16 border-l border-hairline">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1}>
              <div className="relative pb-14 pl-10 last:pb-0">
                <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-clay" />
                <span className="font-mono text-xs uppercase tracking-widest2 text-stone">
                  {item.year}
                </span>
                <h3 className="mt-2 font-display text-xl text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest2 text-clay">
                  {item.role}
                </p>
                <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-stone">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
