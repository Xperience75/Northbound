"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { studio } from "@/lib/studio";
import LiveBadge from "./LiveBadge";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* Faint compass grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-8"
        >
          <LiveBadge />
        </motion.div>

        <h1 className="display max-w-5xl text-[2.5rem] leading-[1.03] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="block"
          >
            Web platforms
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="block"
          >
            that move
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.19 }}
            className="block italic text-accent"
          >
            businesses forward.
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="lead md:col-span-7 max-w-prose"
          >
            {studio.positioning}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="md:col-span-5 flex flex-wrap gap-3 md:justify-end"
          >
            <Link href="#work" className="btn-primary">
              View our work
              <span aria-hidden>↓</span>
            </Link>
            <Link href="#contact" className="btn-ghost">
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="shell mt-20 flex items-center justify-between border-t border-line py-5 md:mt-28"
      >
        <span className="eyebrow">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-ink-muted"
          aria-hidden
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
