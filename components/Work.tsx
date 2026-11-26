"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/lib/projects";
import Reveal from "./Reveal";

const filters: ("All" | ProjectCategory)[] = ["All", "Web App", "Corporate", "Publishing"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function Work() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const safeIndex = visible.length > 0 ? Math.min(activeIndex, visible.length - 1) : 0;
  const activeProject = visible[safeIndex];

  const handleFilterChange = (category: "All" | ProjectCategory) => {
    setActive(category);
    setActiveIndex(0);
  };

  const goPrev = () => {
    if (visible.length <= 1) return;
    setActiveIndex((prev) => (prev <= 0 ? visible.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (visible.length <= 1) return;
    setActiveIndex((prev) => (prev >= visible.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

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
              Every project below is live and owned by the client. Explore desktop,
              tablet, and mobile views or open the full case study.
            </p>
          </Reveal>
        </div>

        {/* Command Bar */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => handleFilterChange(f)}
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

            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-xs text-ink-muted">
                {String(safeIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={visible.length <= 1}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={visible.length <= 1}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Carousel Stage */}
        {activeProject && (
          <div
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected portfolio projects"
            onKeyDown={handleKeyDown}
            className="mt-10 focus:outline-none"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
              >
                {/* Asymmetric 3-Device Bento Photo Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.82fr)_minmax(0,0.48fr)] lg:items-stretch">
                  {/* Child 1 — Widescreen / Desktop Frame */}
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream/40 sm:col-span-12 lg:col-span-1">
                    <div className="flex h-9 shrink-0 items-center justify-between border-b border-line bg-canvas/80 px-4">
                      <div className="flex items-center gap-1.5" aria-hidden>
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                      </div>
                      <span className="truncate px-3 font-mono text-[10px] text-ink-muted">
                        {activeProject.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                        DESKTOP · 1440px
                      </span>
                    </div>

                    <Link
                      href={`/work/${activeProject.slug}`}
                      aria-label={`View ${activeProject.title} desktop case study`}
                      className="group relative block aspect-[16/10] w-full flex-1 overflow-hidden bg-cream"
                    >
                      <Image
                        src={activeProject.screenshots.desktop}
                        alt={`${activeProject.title} desktop view`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-top transition-transform duration-700 ease-executive group-hover:scale-[1.02]"
                        priority
                      />
                    </Link>
                  </div>

                  {/* Child 2 — Tablet Frame */}
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream/40 sm:col-span-7 lg:col-span-1">
                    <div className="flex h-9 shrink-0 items-center justify-between border-b border-line bg-canvas/80 px-3">
                      <span className="h-2 w-2 rounded-full bg-line" aria-hidden />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                        TABLET
                      </span>
                    </div>

                    <Link
                      href={`/work/${activeProject.slug}`}
                      aria-label={`View ${activeProject.title} tablet case study`}
                      className="group relative block aspect-[3/4] w-full overflow-hidden bg-cream lg:aspect-auto lg:flex-1"
                    >
                      <Image
                        src={activeProject.screenshots.tablet}
                        alt={`${activeProject.title} tablet view`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 29vw"
                        className="object-cover object-top transition-transform duration-700 ease-executive group-hover:scale-[1.02]"
                      />
                    </Link>
                  </div>

                  {/* Child 3 — Mobile Frame */}
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream/40 sm:col-span-5 lg:col-span-1">
                    <div className="flex h-9 shrink-0 items-center justify-between border-b border-line bg-canvas/80 px-3">
                      <span className="h-1 w-6 rounded-full bg-line" aria-hidden />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                        MOBILE
                      </span>
                    </div>

                    <Link
                      href={`/work/${activeProject.slug}`}
                      aria-label={`View ${activeProject.title} mobile case study`}
                      className="group relative block aspect-[9/16] w-full overflow-hidden bg-cream sm:aspect-auto sm:flex-1 lg:flex-1"
                    >
                      <Image
                        src={activeProject.screenshots.mobile}
                        alt={`${activeProject.title} mobile view`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 17vw"
                        className="object-cover object-top transition-transform duration-700 ease-executive group-hover:scale-[1.02]"
                      />
                    </Link>
                  </div>
                </div>

                {/* Project Info & KPI Deck */}
                <div className="mt-8 grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-7">
                    <p className="font-mono text-[11px] uppercase tracking-wider2 text-ink-muted">
                      {activeProject.category} · {activeProject.industry} · {activeProject.year}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-light text-ink md:text-4xl">
                      {activeProject.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                      {activeProject.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.tech.slice(0, 5).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3">
                      {activeProject.metrics.slice(0, 2).map((metric) => (
                        <div
                          key={metric.label}
                          className="flex h-full flex-col justify-between rounded-xl border border-line bg-cream/40 p-4"
                        >
                          <div className="font-display text-2xl font-light text-ink">
                            {metric.value}
                          </div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link href={`/work/${activeProject.slug}`} className="btn-primary">
                        Read case study <span aria-hidden>→</span>
                      </Link>
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        Live site <span aria-hidden>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Bottom Project Selector Strip */}
            <div className="no-scrollbar mt-8 flex items-center gap-2 overflow-x-auto border-t border-line pt-6 pb-1">
              {visible.map((p, idx) => {
                const isCurrent = idx === safeIndex;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-current={isCurrent ? "true" : undefined}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-mono text-[11px] transition-all duration-300 ${
                      isCurrent
                        ? "border-ink bg-ink text-canvas"
                        : "border-line text-ink-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")} · {p.title}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
