import { studio } from "@/lib/studio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0c10] transition-colors duration-300">
      <div className="shell py-14">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                <path d="M12 3 L14 12 L12 21 L10 12 Z" fill="#B85C38" />
              </svg>
              <span className="font-display text-xl font-medium">
                {studio.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {studio.tagline}
            </p>
          </div>

          {/* Socials */}
          <div className="md:col-span-7 md:justify-self-end">
            <p className="font-mono text-[11px] uppercase tracking-wider2 text-white/40">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {studio.socials
                .filter((s) => s.enabled !== false)
                .map((s) => {
                  const isExternal = s.url.startsWith("http");
                  return (
                    <li key={s.label}>
                      <a
                        href={s.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="link-underline inline-flex items-baseline gap-3 text-white/80 hover:text-white"
                      >
                        <span className="inline-block w-24 font-mono text-[11px] uppercase tracking-wider2 text-white/40">
                          {s.label}
                        </span>
                        <span>{s.handle}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-wider2 text-white/40">
            © {year} {studio.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider2 text-white/40">
            Built in-house · {studio.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
