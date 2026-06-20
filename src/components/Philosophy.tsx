"use client";

import { philosophy } from "@/data/content";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="border-t border-hairline px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-clay">
            Know more About me
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Three things I keep relearning.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="border-t border-clay pt-6">
                <h3 className="font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
