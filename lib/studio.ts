export const siteUrl = (
  globalThis.process?.env?.NEXT_PUBLIC_SITE_URL || "https://northbound.studio"
).replace(/\/$/, "");

export interface StudioSocial {
  label: string;
  handle: string;
  url: string;
  enabled?: boolean;
}

export const studio = {
  name: "Northbound",
  tagline: "Web platforms that move businesses forward.",
  positioning:
    "Northbound is a full-stack web studio. We design and build refined, high-performance platforms for ambitious businesses — from corporate sites that win enterprise trust to web applications that run daily operations.",
  founded: "2021",
  location: "Nigeria · Working worldwide",
  email: "hello@northbound.studio",
  // Flip `enabled: true` once the corresponding social profile is live
  socials: [
    { label: "Email", handle: "hello@northbound.studio", url: "mailto:hello@northbound.studio", enabled: true },
    { label: "LinkedIn", handle: "Northbound Studio", url: "https://linkedin.com/company/northbound-studio", enabled: false },
    { label: "GitHub", handle: "@northbound-studio", url: "https://github.com/northbound-studio", enabled: false },
    { label: "X", handle: "@northbound_dev", url: "https://x.com/northbound_dev", enabled: false },
  ] as StudioSocial[],
  capabilities: [
    "Full-Stack Development",
    "Frontend Engineering",
    "UX & Interface Design",
    "Design Systems",
    "CMS Architecture",
    "DevOps & Deployment",
  ],
};

export const services = [
  {
    no: "01",
    title: "Web Applications",
    desc: "Custom platforms that do real work — dashboards, tracking systems, customer portals, and internal tools built on modern, scalable architecture.",
    points: ["Custom web apps", "Dashboards & portals", "APIs & integrations", "Auth & accounts"],
  },
  {
    no: "02",
    title: "Corporate Websites",
    desc: "Refined B2B sites engineered to win trust from sophisticated buyers — procurement teams, boards, and enterprise decision-makers.",
    points: ["Brand presentation", "Capability pages", "Lead generation", "SEO foundations"],
  },
  {
    no: "03",
    title: "Publishing Platforms",
    desc: "Multi-author, high-volume publishing systems with robust CMS architecture, editorial workflows, and the performance to scale.",
    points: ["CMS architecture", "Multi-author systems", "Live media", "Editorial UX"],
  },
  {
    no: "04",
    title: "Design Systems",
    desc: "Scalable design foundations — tokens, components, and documentation that keep your product consistent as it grows.",
    points: ["Component libraries", "Token systems", "Documentation", "Brand systems"],
  },
];

export const process = [
  {
    no: "01",
    title: "Discover",
    desc: "We start with your business. What you sell, who you're selling to, and what success actually looks like — not what looks good in a proposal.",
  },
  {
    no: "02",
    title: "Design",
    desc: "We translate strategy into a refined interface. Architecture first, then visual language, then interaction — every decision serving the visitor.",
  },
  {
    no: "03",
    title: "Build",
    desc: "We engineer it on a modern stack — Next.js, TypeScript, a real CMS, and deployment built for speed, security, and scale.",
  },
  {
    no: "04",
    title: "Launch",
    desc: "We ship to a global CDN, configure SEO and analytics, and hand over documentation. You own everything we build.",
  },
  {
    no: "05",
    title: "Support",
    desc: "We stay on after launch — updates, improvements, and the kind of ongoing partnership that keeps your platform moving forward.",
  },
];

export const stats = [
  { value: "8", label: "Platforms shipped" },
  { value: "5+", label: "Industries served" },
  { value: "100%", label: "Client-owned code" },
];
