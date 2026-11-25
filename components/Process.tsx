import Reveal from "./Reveal";
import { process } from "@/lib/studio";

export default function Process() {
  return (
    <section id="process" className="border-b border-line bg-cream/50 py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <div>
              <p className="eyebrow mb-6">(How We Work)</p>
              <h2 className="display text-4xl leading-[1.05] md:text-6xl">
                From brief to launch.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-sm text-ink-soft">
              A clear, five-step engagement. You always know what stage
              we&apos;re in and what comes next.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-canvas p-6 lg:p-7">
                <span className="font-mono text-xs text-accent">{step.no}</span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
