"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Visual */}
      <Link
        href={`/work/${project.slug}`}
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Project name on visual */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-left md:p-7">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-white/70">
            {project.industry}
          </span>
          <h3 className="font-display text-2xl font-light leading-tight text-white md:text-3xl">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay cue */}
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-500 ease-executive group-hover:bg-accent group-hover:text-white">
          <span aria-hidden>↗</span>
        </div>
      </Link>

      {/* Meta row */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <Link
            href={`/work/${project.slug}`}
            className="link-underline font-display text-xl font-medium text-ink"
          >
            {project.title}
          </Link>
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
  );
}
