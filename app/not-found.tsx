import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[80vh] flex-col items-center justify-center pt-24 pb-16 text-center">
        <div className="shell flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-cream/40 text-accent mb-8">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.2" className="text-ink opacity-40" />
              <path d="M12 3 L14 12 L12 21 L10 12 Z" fill="currentColor" className="text-accent" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-ink" />
            </svg>
          </div>

          <p className="eyebrow mb-4">(404 Error)</p>
          <h1 className="display text-4xl leading-[1.05] sm:text-6xl md:text-7xl max-w-2xl">
            This page has moved off the radar.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            The route you navigated to doesn&apos;t exist or has been restructured. Explore our live platforms or head back home.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              Return home <span aria-hidden>→</span>
            </Link>
            <Link href="/#work" className="btn-ghost">
              View selected work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
