"use client";

import { trustIndustries } from "@/lib/projects";

export default function TrustStrip() {
  // duplicate for seamless marquee
  const row = [...trustIndustries, ...trustIndustries];

  return (
    <section
      aria-label="Industries we serve"
      className="border-b border-line bg-cream/60 py-6"
    >
      <div className="shell flex items-center gap-6 overflow-hidden">
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
          Sectors shipped
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10">
            {row.map((industry, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="font-display text-lg font-light text-ink-soft">
                  {industry}
                </span>
                <span className="text-accent" aria-hidden>
                  ◆
                </span>
              </div>
            ))}
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
