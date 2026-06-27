import Reveal from "./Reveal";
import { services } from "@/lib/studio";

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal>
            <div className="md:col-span-7">
              <p className="eyebrow mb-6">(What We Do)</p>
              <h2 className="display text-4xl leading-[1.05] md:text-6xl">
                Four ways we build.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-soft md:col-span-5">
              We keep our offering tight. Each service below is one we&apos;ve
              delivered end-to-end, repeatedly, for real businesses.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.06}>
              <div className="group grid gap-6 border-b border-line py-9 transition-colors duration-500 ease-executive hover:bg-cream/40 md:grid-cols-12 md:items-start md:gap-8 md:px-4">
                <div className="flex items-center gap-5 md:col-span-5">
                  <span className="font-mono text-sm text-accent">{s.no}</span>
                  <h3 className="font-display text-2xl font-light text-ink md:text-3xl">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-soft md:col-span-4">
                  {s.desc}
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-1.5 md:col-span-3">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="font-mono text-[11px] uppercase tracking-wider2 text-ink-muted"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
