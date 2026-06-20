"use client";

import { ArrowUpRight } from "lucide-react";
import { writing } from "@/data/content";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <section
      id="writing"
      className="border-t border-hairline bg-paper-dim px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-clay">
            Field Notes
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Blogs Written by Me
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-hairline">
          {writing.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <a
                href="#"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <h3 className="font-display text-lg text-ink transition-colors group-hover:text-clay md:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-stone">
                    {post.date} · {post.readTime} read
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-stone opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
