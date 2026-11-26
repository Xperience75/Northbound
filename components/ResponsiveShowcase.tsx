import Image from "next/image";

interface ResponsiveShowcaseProps {
  tablet: string;
  mobile: string;
  title: string;
  url: string;
}

export default function ResponsiveShowcase({
  tablet,
  mobile,
  title,
  url,
}: ResponsiveShowcaseProps) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-wider2 text-ink-muted">
          Responsive Across Devices
        </p>
        <p className="font-mono text-[11px] text-ink-muted">
          Tablet (768px) · Mobile (390px)
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,0.462fr)]">
        {/* Tablet Frame */}
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-canvas shadow-xl transition-all duration-500 hover:border-ink/20">
          <div className="flex h-10 items-center justify-between border-b border-line bg-cream/70 px-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-ink/25" aria-hidden />
              <span className="truncate font-mono text-[11px] text-ink-muted">
                {displayUrl}
              </span>
            </div>
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">
              Tablet · 768px
            </span>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream/30">
            <Image
              src={tablet}
              alt={`${title} — tablet interface preview`}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Mobile Frame */}
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-canvas shadow-xl transition-all duration-500 hover:border-ink/20">
          <div className="flex h-10 items-center justify-between border-b border-line bg-cream/70 px-4">
            <span className="h-1.5 w-9 rounded-full bg-ink/20" aria-hidden />
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider2 text-ink-muted">
              Mobile · 390px
            </span>
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden bg-cream/30 md:aspect-auto md:flex-1">
            <Image
              src={mobile}
              alt={`${title} — mobile interface preview`}
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
