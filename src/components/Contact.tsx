"use client";

import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-hairline px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest2 text-clay">
            Get in touch
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-light leading-tight text-ink md:text-5xl">
            Building something boring and important? I&rsquo;d like to hear about
            it.
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-display text-2xl text-ink transition-colors hover:text-clay md:text-3xl"
          >
            {profile.email}
            <ArrowUpRight
              size={24}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
