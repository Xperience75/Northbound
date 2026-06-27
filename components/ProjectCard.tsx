"use client";

import { useState } from "react";
import Image from "next/image";
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
          className="relative block aspect-[16/11] w-full overflow-hidden rounded-xl border border-line bg-cream"
          aria-label={`View case study: ${project.title}`}
        >
          <Image
            src={project.image}
            alt={`${project.title} — live website`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-[1.1s] ease-executive group-hover:scale-[1.04]"
            priority={false}
          />
          {/* Executive gradient overlay for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

          {/* Project name on visual */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-left md:p-7">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-canvas/70">
              {project.industry}
            </span>
            <h3 className="font-display text-2xl font-light leading-tight text-canvas md:text-3xl">
              {project.title}
            </h3>
          </div>

          {/* Hover overlay cue */}
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-canvas/15 text-canvas backdrop-blur-md transition-all duration-500 ease-executive group-hover:bg-accent group-hover:text-canvas">
            <span aria-hidden>↗</span>
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
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm md:p-8"
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
        {/* Header banner with real image */}
        <div className="relative h-56 w-full overflow-hidden md:h-72">
          <Image
            src={project.image}
            alt={`${project.title} — live website`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 text-canvas backdrop-blur-md transition-colors hover:bg-canvas/30"
            aria-label="Close case study"
          >
            ✕
          </button>

          <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-canvas/70">
              {project.category} · {project.industry}
            </span>
            <h3 className="mt-2.5 font-display text-3xl font-light leading-tight text-canvas md:text-4xl">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-8 md:px-10 md:py-10">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            {project.summary}
          </p>

          {/* Facts */}
          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-7 md:grid-cols-4">
            <Fact label="Client" value={project.client} />
            <Fact label="Role" value={project.role} />
            <Fact label="Year" value={project.year} />
            <Fact label="Industry" value={project.industry} />
          </div>

          {/* Narrative */}
          <div className="mt-7 space-y-7">
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
