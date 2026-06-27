"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { studio } from "@/lib/studio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-executive ${
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          className="group flex items-center gap-2"
          aria-label="Northbound — home"
        >
          <span className="flex h-7 w-7 items-center justify-center">
            {/* Compass mark */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1" className="text-ink" />
              <path d="M12 3 L14 12 L12 21 L10 12 Z" fill="currentColor" className="text-accent" />
              <circle cx="12" cy="12" r="1.2" fill="currentColor" className="text-ink" />
            </svg>
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            {studio.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline font-mono text-xs uppercase tracking-wider2 text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="#contact" className="btn-primary !py-2.5 !px-5 text-xs">
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="relative h-3 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-canvas transition-all duration-500 ease-executive md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-lineSoft py-4 font-display text-2xl font-light text-ink"
            >
              {l.label}
              <span aria-hidden className="text-ink-muted">→</span>
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
