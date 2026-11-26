import Reveal from "./Reveal";
import { studio, stats } from "@/lib/studio";

export default function Studio() {
  return (
    <section id="studio" className="border-b border-line py-24 md:py-36">
      <div className="shell grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">(The Studio)</p>
            <h2 className="display text-4xl leading-[1.05] md:text-5xl">
              A studio built for serious work.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <p className="lead mb-10">
              We&apos;re Northbound — a full-stack web studio that builds for
              businesses with real stakes. Not startups chasing virality, but
              power engineers, construction firms, logistics operators, and media
              companies whose platforms have to perform under pressure and win
              trust from sophisticated buyers.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mb-12 text-ink-soft">
              Our work spans eight live platforms across six industries. What
              ties them together is a single standard: design that respects the
              visitor, engineering that holds up under load, and a partnership
              that doesn&apos;t end at launch.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.24}>
            <div className="grid grid-cols-3 border-t border-line">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-r border-line py-6 pr-2 sm:pr-4 pl-1 sm:pl-0 last:border-r-0"
                >
                  <div className="display text-3xl sm:text-4xl md:text-5xl">{s.value}</div>
                  <div className="mt-2 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-wider2 text-ink-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Capabilities row */}
      <div className="shell mt-20">
        <Reveal>
          <p className="eyebrow mb-6">Capabilities</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
            {studio.capabilities.map((c) => (
              <span
                key={c}
                className="font-display text-xl font-light text-ink-soft md:text-2xl"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
