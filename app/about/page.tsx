import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LiveBadge from "@/components/LiveBadge";
import Link from "next/link";
import { stats } from "@/lib/studio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Northbound Studio — our operating principles, full-stack engineering capabilities, and methodology for ambitious businesses.",
  openGraph: {
    title: "About Northbound Studio",
    description:
      "A full-stack web studio building refined, high-performance digital platforms for ambitious businesses.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 md:pt-36 bg-canvas text-ink transition-colors duration-300">
        <section className="shell pb-16 border-b border-line">
          <Reveal>
            <div className="mb-6">
              <LiveBadge />
            </div>
            <h1 className="display text-4xl leading-[1.02] sm:text-6xl md:text-8xl max-w-5xl">
              Web platforms built to move businesses <span className="italic text-accent">forward.</span>
            </h1>
          </Reveal>
        </section>

        {/* Narrative / Focus */}
        <section className="py-20 md:py-28 border-b border-line">
          <div className="shell grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-light leading-tight text-ink md:text-3xl">
                  We don&apos;t build generic marketing brochures. We construct digital tools.
                </h2>
                <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-line pt-8">
                  {stats.map((s) => (
                    <div key={s.label} className="border-r border-line pr-2 sm:pr-4 last:border-r-0">
                      <div className="display text-3xl sm:text-4xl md:text-5xl">{s.value}</div>
                      <div className="mt-2 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-wider2 text-ink-muted">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="space-y-8 md:col-span-7 text-ink-soft leading-relaxed text-[16px]">
              <Reveal delay={0.06}>
                <p>
                  Northbound was founded in 2021 as a response to a simple observation: most corporate websites and web applications are either over-designed and slow, or functional but completely dry. Very few achieve the balance of executive-level design and engineering rigor required to win the trust of modern buyers.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  We operate at the intersection of business objective and product engineering. We serve energy engineering firms, cross-border logistics agencies, real estate developers, and media networks — businesses with real stakes, where site performance, security, and design credibility translate directly into customer trust and contract size.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  We keep our team small and focused. There are no account managers or layers of communication. You work directly with the designers and engineers building your platform.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values / Principles */}
        <section className="py-20 md:py-28 bg-cream/20 border-b border-line">
          <div className="shell">
            <Reveal>
              <p className="eyebrow mb-6">Our Operating Principles</p>
              <h2 className="display text-3xl leading-[1.1] md:text-5xl max-w-2xl mb-14">
                Three things we will never compromise on.
              </h2>
            </Reveal>

            <div className="grid gap-10 md:grid-cols-3">
              <Reveal delay={0.06}>
                <span className="font-mono text-xs text-accent">01</span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">Design for Respect</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  We design interfaces that respect the visitor&apos;s time, attention, and intelligence. That means clean typography, fast layouts, and interactive micro-animations that assist rather than distract.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <span className="font-mono text-xs text-accent">02</span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">High-Performance Code</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  We build with modern frameworks like Next.js, React, and TypeScript. We minimize unnecessary dependencies to deliver lightning-fast page speeds, robust SEO, and secure database interactions.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <span className="font-mono text-xs text-accent">03</span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">True Ownership</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  When we ship code, you own it entirely. No proprietary lock-ins, no licensing fees, and no gatekeeping. You receive clean source files, clear documentation, and standard deployment configurations.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Capabilities detailed */}
        <section className="py-20 md:py-28 border-b border-line">
          <div className="shell grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">Capabilities</p>
                <h2 className="display text-3xl leading-[1.1] md:text-5xl">
                  Our specialized toolkit.
                </h2>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                <Reveal>
                  <h3 className="font-display text-lg font-medium text-ink border-b border-line pb-3">Development</h3>
                  <ul className="mt-4 space-y-2 font-mono text-[11px] uppercase tracking-wider2 text-ink-soft">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js / Express</li>
                    <li>SQL / NoSQL Databases</li>
                    <li>REST & GraphQL APIs</li>
                  </ul>
                </Reveal>
                <Reveal delay={0.06}>
                  <h3 className="font-display text-lg font-medium text-ink border-b border-line pb-3">Design & UX</h3>
                  <ul className="mt-4 space-y-2 font-mono text-[11px] uppercase tracking-wider2 text-ink-soft">
                    <li>Interface Design (UI)</li>
                    <li>UX Architecture</li>
                    <li>Figma Design Systems</li>
                    <li>Interactive Prototyping</li>
                    <li>Design Tokens</li>
                    <li>Typography & Branding</li>
                  </ul>
                </Reveal>
                <Reveal delay={0.12}>
                  <h3 className="font-display text-lg font-medium text-ink border-b border-line pb-3">Architecture</h3>
                  <ul className="mt-4 space-y-2 font-mono text-[11px] uppercase tracking-wider2 text-ink-soft">
                    <li>Headless CMS setups</li>
                    <li>Database Schema Design</li>
                    <li>State Management</li>
                    <li>Serverless Functions</li>
                    <li>Auth0 & Custom Auth</li>
                    <li>E-Commerce pipelines</li>
                  </ul>
                </Reveal>
                <Reveal delay={0.18}>
                  <h3 className="font-display text-lg font-medium text-ink border-b border-line pb-3">DevOps & SEO</h3>
                  <ul className="mt-4 space-y-2 font-mono text-[11px] uppercase tracking-wider2 text-ink-soft">
                    <li>Vercel / Netlify</li>
                    <li>GitHub Workflows</li>
                    <li>CDN caching</li>
                    <li>Semantic SEO</li>
                    <li>Web Core Vitals</li>
                    <li>Analytics & Tracking</li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <section className="border-t border-line py-20 md:py-32 bg-cream/10">
          <div className="shell flex flex-col items-center justify-center text-center gap-6">
            <Reveal>
              <h2 className="display text-3xl leading-[1.1] md:text-5xl max-w-2xl">
                Ready to move your business forward?
              </h2>
              <p className="mt-4 text-ink-soft max-w-md mx-auto">
                Let&apos;s discuss your next project. We respond to all inquiries within two business days.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link href="/#contact" className="btn-primary">
                  Start a project <span aria-hidden>→</span>
                </Link>
                <Link href="/#work" className="btn-ghost">
                  View selected work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
