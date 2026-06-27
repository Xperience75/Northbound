import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Northbound — Web platforms that move businesses forward.",
  description:
    "Northbound is a full-stack web studio building refined, high-performance platforms for ambitious businesses across energy, logistics, construction, media, and technology.",
  keywords: [
    "web development studio",
    "full-stack development",
    "Next.js agency",
    "Nigeria web studio",
    "corporate website design",
    "web app development",
  ],
  authors: [{ name: "Northbound" }],
  openGraph: {
    title: "Northbound — Web platforms that move businesses forward.",
    description:
      "A full-stack web studio building refined, high-performance platforms for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
