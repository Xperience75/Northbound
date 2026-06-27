"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const filters: ("All" | ProjectCategory)[] = ["All", "Web App", "Corporate", "Publishing"];

export default function Work() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="border-b border-line py-24 md:py-36">
      <div className="shell">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow mb-6">(Selected Work)</p>
              <h2 className="display max-w-2xl text-4xl leading-[1.05] md:text-6xl">
                Seven platforms. One standard.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-soft">
              Every project below is live and owned by the client. Tap any one
              for the full case study.
            </p>
          </Reveal>
        </div>

        {/* Filter */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-line pb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider2 transition-all duration-300 ${
                  active === f
                    ? "border-ink bg-ink text-canvas"
                    : "border-line bg-transparent text-ink-muted hover:border-ink hover:text-ink"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className="ml-1.5 opacity-60">
                    ({projects.filter((p) => p.category === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
