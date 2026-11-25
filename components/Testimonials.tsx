"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const item = testimonials[current];

  return (
    <section className="border-b border-line py-24 md:py-36 bg-cream/30">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-6">
            <p className="eyebrow mb-6">(Client Endorsements)</p>
            <h2 className="display text-4xl leading-[1.05] md:text-6xl">
              Trusted by leaders with real stakes.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:justify-self-end">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-muted">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-canvas text-ink transition-all hover:border-ink hover:bg-ink hover:text-canvas"
                  aria-label="Previous endorsement"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-canvas text-ink transition-all hover:border-ink hover:bg-ink hover:text-canvas"
                  aria-label="Next endorsement"
                >
                  →
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-canvas p-8 md:p-14 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between gap-10"
            >
              <div>
                <span className="font-display text-4xl text-accent sm:text-5xl">“</span>
                <blockquote className="mt-3 font-display text-2xl font-light leading-snug text-ink sm:text-3xl md:text-4xl">
                  {item.quote}
                </blockquote>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                <div>
                  <h4 className="font-display text-lg font-medium text-ink">
                    {item.author}
                  </h4>
                  <p className="mt-0.5 font-mono text-xs text-ink-muted">
                    {item.role}, <span className="text-ink-soft">{item.company}</span>
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {item.industry}
                  </p>
                </div>

                {item.metric && (
                  <div className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 font-mono text-xs text-accent">
                    {item.metric}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
