import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrowserMockup from "@/components/BrowserMockup";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.category} Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Northbound Case Study`,
      description: project.summary,
      images: [
        {
          url: project.image,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Northbound Case Study`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-20 md:pt-24 bg-canvas text-ink transition-colors duration-300">
        {/* Banner with image */}
        <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden md:h-[55vh]">
          <Image
            src={project.image}
            alt={`${project.title} — case study`}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 py-10 md:py-16">
            <div className="shell">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest2 text-white/80">
                    {project.category}
                  </span>
                  <span className="text-white/50" aria-hidden>·</span>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-white/80">
                    {project.industry}
                  </span>
                </div>
                <h1 className="display mt-4 text-4xl leading-[1.02] text-white sm:text-5xl md:text-7xl">
                  {project.title}
                </h1>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Project details & live verification strip */}
        <section className="border-b border-line py-8 bg-cream/30">
          <div className="shell grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 items-center">
            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">Client</span>
              <p className="mt-1.5 text-sm font-medium text-ink">{project.client}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">Role</span>
              <p className="mt-1.5 text-sm font-medium text-ink">{project.role}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">Timeline / Year</span>
              <p className="mt-1.5 text-sm font-medium text-ink">{project.year}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">Live Verification</span>
              <p className="mt-1.5 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-hover link-underline"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Visit live platform ↗
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Browser Showcase Mockup */}
        <section className="py-16 md:py-24 border-b border-line bg-canvas">
          <div className="shell">
            <Reveal>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="eyebrow mb-2">Live Interface Showcase</p>
                  <h2 className="display text-2xl md:text-3xl">Engineered for production</h2>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost hidden sm:inline-flex !py-2 !px-4 text-xs"
                >
                  Launch live site ↗
                </a>
              </div>
              <BrowserMockup
                image={project.image}
                title={project.title}
                url={project.liveUrl}
              />
            </Reveal>
          </div>
        </section>

        {/* Quantitative Results & Impact Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="border-b border-line py-16 bg-cream/20">
            <div className="shell">
              <Reveal>
                <p className="eyebrow mb-4">Key Outcomes & Impact</p>
                <h2 className="display text-2xl md:text-3xl mb-10">Measured performance.</h2>
              </Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
                {project.metrics.map((m, idx) => (
                  <Reveal key={m.label} delay={idx * 0.06}>
                    <div className="flex h-full flex-col justify-between bg-canvas p-6 md:p-8">
                      <div className="display text-3xl sm:text-4xl text-ink font-light">
                        {m.value}
                      </div>
                      <div className="mt-3 font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">
                        {m.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Narrative / Context */}
        <section className="py-20 md:py-28">
          <div className="shell grid gap-16 md:grid-cols-12 md:gap-12">
            {/* Left side — Brief overview & specs */}
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-light leading-tight text-ink md:text-3xl">
                  Platform Architecture
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
                <div className="mt-10 flex flex-col gap-6">
                  <div>
                    <span className="eyebrow block mb-3">Tech Stack</span>
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
                    <span className="eyebrow block mb-3">Scope & Services</span>
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

                {/* Client testimonial if present */}
                {project.testimonial && (
                  <div className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-7">
                    <span className="text-2xl text-accent font-display">“</span>
                    <p className="mt-1 text-sm italic leading-relaxed text-ink-soft">
                      {project.testimonial.quote}
                    </p>
                    <div className="mt-4 border-t border-accent/10 pt-3">
                      <p className="font-display text-sm font-medium text-ink">
                        {project.testimonial.author}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                )}
              </Reveal>
            </div>

            {/* Right side — Narrative sections */}
            <div className="space-y-12 md:col-span-7">
              <Reveal delay={0.08} className="border-b border-line pb-8 last:border-b-0">
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-accent flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  The Challenge
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {project.challenge}
                </p>
              </Reveal>

              <Reveal delay={0.14} className="border-b border-line pb-8 last:border-b-0">
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-accent flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Our Solution
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {project.solution}
                </p>
              </Reveal>

              <Reveal delay={0.2} className="last:border-b-0">
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-accent flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  The Outcome
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {project.outcome}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Previous & Next Project Navigation */}
        <section className="border-t border-line bg-cream/40 py-16">
          <div className="shell">
            <div className="flex items-center justify-between border-b border-line pb-6 mb-8">
              <span className="eyebrow">Explore More Projects</span>
              <Link href="/#work" className="link-underline font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink">
                View all ({projects.length})
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-line bg-canvas p-6 transition-all duration-300 hover:border-ink/40"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    ← Previous Case Study
                  </span>
                  <h4 className="font-display text-2xl font-light text-ink mt-2 group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </h4>
                  <p className="mt-1 text-xs text-ink-muted font-mono uppercase tracking-wider">
                    {prevProject.industry}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent">
                  <span>Read case study</span>
                  <span aria-hidden>→</span>
                </div>
              </Link>

              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-line bg-canvas p-6 transition-all duration-300 hover:border-ink/40"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Next Case Study →
                  </span>
                  <h4 className="font-display text-2xl font-light text-ink mt-2 group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="mt-1 text-xs text-ink-muted font-mono uppercase tracking-wider">
                    {nextProject.industry}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent">
                  <span>Read case study</span>
                  <span aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Direct CTA invitation */}
        <section className="border-t border-line py-20 bg-canvas text-center">
          <div className="shell flex flex-col items-center">
            <Reveal>
              <p className="eyebrow mb-4">Start a Project</p>
              <h2 className="display text-3xl md:text-5xl max-w-xl">
                Ready to build something with real impact?
              </h2>
              <p className="mt-4 text-ink-soft max-w-md mx-auto">
                Let&apos;s evaluate your requirements and scope your platform together.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/#contact" className="btn-primary">
                  Start your project <span aria-hidden>→</span>
                </Link>
                <Link href="/#work" className="btn-ghost">
                  Browse all work
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
