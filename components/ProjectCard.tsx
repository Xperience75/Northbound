"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease }}
        className="group"
      >
        {/* Visual */}
        <button
          onClick={() => setOpen(true)}
          className="relative block w-full overflow-hidden rounded-lg border border-line"
          aria-label={`View case study: ${project.title}`}
        >
          <div
            className="relative aspect-[16/10] w-full transition-all duration-700 ease-executive group-hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${project.accent} 0%, ${shade(project.accent, -28)} 100%)`,
            }}
          >
            {/* Compass motif */}
            <div className="absolute inset-0 flex items-center justify-center opacity-90">
              <svg viewBox="0 0 200 200" className="h-2/3 w-2/3" fill="none" aria-hidden>
                <circle cx="100" cy="100" r="68" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
                <circle cx="100" cy="100" r="92" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
                <path d="M100 32 L112 100 L100 168 L88 100 Z" fill="#ffffff" fillOpacity="0.9" />
                <circle cx="100" cy="100" r="4" fill="#ffffff" />
              </svg>
            </div>

            {/* Project name on visual */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-white/70">
                {project.industry}
              </span>
              <h3 className="mt-2 font-display text-2xl font-light text-white md:text-3xl">
                {project.title}
              </h3>
            </div>

            {/* Hover overlay cue */}
            <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-all duration-500 ease-executive group-hover:bg-white/25">
              <span className="text-white" aria-hidden>↗</span>
            </div>
          </div>
        </button>

        {/* Meta row */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <button
              onClick={() => setOpen(true)}
              className="link-underline font-display text-xl font-medium text-ink"
            >
              {project.title}
            </button>
            <p className="mt-1.5 text-sm text-ink-muted">{project.summary}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">
              {project.category}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">
              {project.year}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Modal case study */}
      <AnimatePresence>
        {open && <CaseStudyModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/40 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.45, ease }}
        className="relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl bg-canvas shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div
          className="relative px-7 py-10 md:px-10 md:py-14"
          style={{
            background: `linear-gradient(135deg, ${project.accent} 0%, ${shade(project.accent, -28)} 100%)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            aria-label="Close case study"
          >
            ✕
          </button>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-white/70">
            {project.category} · {project.industry}
          </span>
          <h3 className="mt-3 font-display text-3xl font-light text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
            {project.summary}
          </p>
        </div>

        {/* Body */}
        <div className="px-7 py-8 md:px-10 md:py-10">
          {/* Facts */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-line pb-7 md:grid-cols-4">
            <Fact label="Client" value={project.client} />
            <Fact label="Role" value={project.role} />
            <Fact label="Year" value={project.year} />
            <Fact label="Industry" value={project.industry} />
          </div>

          {/* Narrative */}
          <div className="mt-8 space-y-7">
            <Narrative label="The Challenge" text={project.challenge} />
            <Narrative label="Our Solution" text={project.solution} />
            <Narrative label="The Outcome" text={project.outcome} />
          </div>

          {/* Tech + services */}
          <div className="mt-9 grid gap-7 border-t border-line pt-7 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-cream/50 px-3 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">Services Delivered</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-cream/50 px-3 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-9 w-full"
          >
            Visit live site
            <span aria-hidden>↗</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">
        {label}
      </div>
      <div className="mt-1.5 text-sm text-ink">{value}</div>
    </div>
  );
}

function Narrative({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="eyebrow mb-2.5 flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-accent" />
        {label}
      </p>
      <p className="text-[15px] leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}

/** Lighten/darken a hex color by a percentage (-100..100) */
function shade(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (num >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
  const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
