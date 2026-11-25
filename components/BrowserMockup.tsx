import Image from "next/image";

interface BrowserMockupProps {
  image: string;
  title: string;
  url: string;
}

export default function BrowserMockup({ image, title, url }: BrowserMockupProps) {
  // Format clean display domain from url
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative mx-auto w-full overflow-hidden rounded-xl border border-line bg-canvas shadow-2xl transition-all duration-500 hover:border-ink/20">
      {/* Browser chrome header */}
      <div className="flex h-11 items-center justify-between border-b border-line bg-cream/70 px-4">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
        </div>

        {/* Address bar */}
        <div className="flex max-w-[280px] sm:max-w-md flex-1 items-center justify-center mx-3">
          <div className="flex w-full items-center justify-center gap-2 rounded-md border border-line bg-canvas/80 px-3 py-1 font-mono text-[11px] text-ink-muted">
            <svg
              className="h-3 w-3 text-accent shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="truncate">{displayUrl}</span>
          </div>
        </div>

        {/* Live link action */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-accent transition-colors hover:text-accent-hover"
        >
          <span>Live Site</span>
          <span aria-hidden>↗</span>
        </a>
      </div>

      {/* Screenshot display */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream/30">
        <Image
          src={image}
          alt={`${title} — interface preview`}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
