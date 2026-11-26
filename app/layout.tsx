import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl, studio } from "@/lib/studio";

const activeSocialUrls = studio.socials
  .filter((s) => s.enabled !== false && s.url.startsWith("http"))
  .map((s) => s.url);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Northbound — Web platforms that move businesses forward.",
    template: "%s | Northbound Studio",
  },
  description:
    "Northbound is a full-stack web studio building refined, high-performance platforms for ambitious businesses across energy, logistics, construction, media, and technology.",
  keywords: [
    "web development studio",
    "full-stack development",
    "Next.js agency",
    "Nigeria web studio",
    "corporate website design",
    "web app development",
    "enterprise web platforms",
  ],
  authors: [{ name: "Northbound Studio", url: siteUrl }],
  creator: "Northbound Studio",
  openGraph: {
    title: "Northbound — Web platforms that move businesses forward.",
    description:
      "A full-stack web studio building refined, high-performance platforms for ambitious businesses across energy, logistics, construction, and media.",
    url: siteUrl,
    siteName: "Northbound Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbound — Web platforms that move businesses forward.",
    description:
      "A full-stack web studio building refined, high-performance platforms for ambitious businesses.",
    creator: "@northbound_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Northbound Studio",
              "url": siteUrl,
              "description": "Full-stack web studio building refined, high-performance web applications and corporate platforms.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NG"
              },
              "priceRange": "$$$$",
              ...(activeSocialUrls.length > 0 ? { sameAs: activeSocialUrls } : {}),
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-canvas text-ink transition-colors duration-300">{children}</body>
    </html>
  );
}
