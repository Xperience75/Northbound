"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { studio } from "@/lib/studio";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Studio", href: "/#studio" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showSolidHeader = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-executive ${
        showSolidHeader
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
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

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-cream/40"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[18px] w-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[18px] w-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.97-8.97h-2.25m-13.5 0H3m16.122-6.122l-1.591 1.591m-10.457 0l-1.591-1.591M18.364 18.364l-1.591-1.591m-10.457 0l-1.591 1.591M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
              </svg>
            )}
          </button>
          <Link href="/#contact" className="btn-primary !py-2.5 !px-5 text-xs">
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-cream/40"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[18px] w-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[18px] w-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.97-8.97h-2.25m-13.5 0H3m16.122-6.122l-1.591 1.591m-10.457 0l-1.591-1.591M18.364 18.364l-1.591-1.591m-10.457 0l-1.591 1.591M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center"
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
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto border-t border-line bg-canvas/95 backdrop-blur-lg transition-all duration-500 ease-executive md:hidden ${
          open ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 overflow-hidden border-t-transparent"
        }`}
      >
        <div className="shell flex flex-col gap-1 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-lineSoft py-3.5 font-display text-2xl font-light text-ink transition-colors hover:text-accent"
            >
              {l.label}
              <span aria-hidden className="text-ink-muted">→</span>
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full py-4 text-center"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
