"use client";

import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/content";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="border-t border-hairline px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-clay">
            Selected work
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Three things I built and a newsletter I write between them.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-hairline">
          {work.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <a
                href={item.href}
                className="group flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:justify-between md:gap-10"
              >
                <div className="flex items-baseline gap-4 md:w-1/3">
                  <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-clay">
                    {item.name}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-stone opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="max-w-md font-body text-sm leading-relaxed text-stone md:w-1/3">
                  {item.description}
                </p>
                <span className="font-mono text-xs uppercase tracking-widest2 text-stone md:w-auto md:text-right">
                  {item.year}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
