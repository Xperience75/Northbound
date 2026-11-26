export type ProjectCategory = "Web App" | "Corporate" | "Publishing";

export interface ProjectScreenshots {
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  industry: string;
  year: string;
  role: string;
  liveUrl: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  tech: string[];
  services: string[];
  accent: string; // hex used for fallback / overlay tint
  image: string; // local screenshot path in /public
  screenshots: ProjectScreenshots;
  metrics: ProjectMetric[];
  testimonial?: ProjectTestimonial;
}

export const projects: Project[] = [
  {
    slug: "vintage-powercare",
    title: "Vintage Powercare",
    client: "Vintage Powercare Limited",
    category: "Corporate",
    industry: "Power Engineering & Energy",
    year: "2024",
    role: "Full-stack build · Design system · CMS",
    liveUrl: "https://vintagepowercaregroup.com",
    summary:
      "A turnkey digital presence for an ISO 9001:2015 power engineering firm operating across Nigeria and West Africa.",
    challenge:
      "Vintage Powercare had deep engineering credibility but a digital presence that didn't match. They needed to communicate six distinct service divisions — from gas and hydro generation to SCADA automation and panel assembly — to two very different audiences: technical procurement teams and C-suite buyers evaluating large infrastructure partners. The site also had to convey ISO certification and a local Nigerian assembly capability that sets them apart from import-only competitors.",
    solution:
      "We structured the site around their real operational model — Evaluate, Engineer, Assemble, Commission — so the site itself reads like their process. Each of the six service divisions got a dedicated, technical page with clear capability statements. We added an industries matrix showing exactly which sectors they serve, and surfaced their ISO 9001:2015 certification as a first-class trust signal rather than a footer afterthought. A refined, engineering-grade visual language replaced the previous generic look.",
    outcome:
      "The result is a B2B platform that lets a procurement officer find precise capability specs in two clicks, while giving a CEO a fast read on credibility and scale. The site now reflects the firm's actual stature in West African power infrastructure.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel"],
    services: ["Strategy", "Design System", "Frontend Engineering", "CMS"],
    accent: "#1E3A5F",
    image: "/projects/vintage-powercare.jpg",
    screenshots: {
      desktop: "/projects/vintage-powercare-desktop.jpg",
      tablet: "/projects/vintage-powercare-tablet.jpg",
      mobile: "/projects/vintage-powercare-mobile.jpg",
    },
    metrics: [
      { label: "Engineering Divisions Unified", value: "6" },
      { label: "ISO 9001:2015", value: "Verified" },
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Procurement Conversion", value: "+140%" },
    ],
    testimonial: {
      quote:
        "Northbound gave us an engineering-grade digital platform that immediately commands the trust of enterprise clients across West Africa.",
      author: "Engr. V. Kalu",
      role: "Managing Director, Vintage Powercare",
    },
  },
  {
    slug: "technovative-solutions",
    title: "Technovative Solutions",
    client: "Technovative Solutions",
    category: "Corporate",
    industry: "IT Services & Infrastructure",
    year: "2024",
    role: "Full-stack build · Content architecture",
    liveUrl: "https://technosolutions.ng",
    summary:
      "A digital home for an IT services firm with nine distinct service lines, built around transparency and education.",
    challenge:
      "Most IT services sites drown visitors in jargon. Technovative Solutions wanted the opposite — a site that educates clients enough to make confident buying decisions across nine services spanning networks, CCTV, VoIP, smart-home, firewalls, software, and broadband. The challenge was organizing that much range without overwhelming the visitor, while keeping their three founding principles front and centre: technical proficiency, price transparency, and empowering education.",
    solution:
      "We treated the nine services as a clean, scannable catalogue with each one getting equal billing and a plain-language explainer. A principles section anchors the page and explains how the firm actually thinks. Rather than hiding pricing behind forms, the architecture invites inquiry with clear service definitions so clients arrive informed. The whole experience is built around clarity over cleverness.",
    outcome:
      "A site that turns complexity into confidence. Prospects now arrive at sales conversations already understanding the landscape, which shortens the sales cycle and positions Technovative as the trusted guide rather than just a vendor.",
    tech: ["Next.js", "React", "Tailwind CSS", "Responsive", "SEO"],
    services: ["UX Architecture", "Frontend Engineering", "Copywriting", "SEO"],
    accent: "#0F5132",
    image: "/projects/technovative-solutions.jpg",
    screenshots: {
      desktop: "/projects/technovative-solutions-desktop.jpg",
      tablet: "/projects/technovative-solutions-tablet.jpg",
      mobile: "/projects/technovative-solutions-mobile.jpg",
    },
    metrics: [
      { label: "Service Lines Catalogued", value: "9" },
      { label: "Sales Cycle Acceleration", value: "-35%" },
      { label: "Mobile Engagement", value: "+85%" },
      { label: "Organic Search Discovery", value: "Top 3" },
    ],
    testimonial: {
      quote:
        "Our clients now understand our full capability stack before we even hop on a discovery call. It transformed our sales pipeline.",
      author: "T. Adebayo",
      role: "Lead Architect, Technovative Solutions",
    },
  },
  {
    slug: "hayapass-global-logistics",
    title: "Hayapass Global Logistics",
    client: "Hayapass Global Logistics",
    category: "Web App",
    industry: "Logistics & Freight",
    year: "2023",
    role: "Full-stack web app · Tracking system · UX",
    liveUrl: "https://hayapasslogistics.com",
    summary:
      "A full logistics platform for a UK–Nigeria shipping company, complete with live tracking, quoting, and customer accounts.",
    challenge:
      "Hayapass runs a complex operation: UK-to-Nigeria shipping across air, sea, and road, plus a 'Shop For Me' proxy service, warehousing, and customs clearance. They needed far more than a brochure site — they needed a functioning product where customers can get quotes, track shipments in real time, manage their own accounts, and trust the platform with their goods. Trust is the entire game in cross-border logistics.",
    solution:
      "We built a real web application, not a website. Customers register, get instant quotes via a calculator, book shipments, and track them live on a dashboard. A 'Shop For Me' flow lets customers request items from UK retailers. The account system centralizes shipment history, status, and documents. Every trust signal — tracking visibility, transparent pricing, testimonials, location proof — was designed to remove the anxiety that comes with shipping goods internationally.",
    outcome:
      "Hayapass moved from manual WhatsApp-based coordination to a self-serve platform that operates 24/7. The tracking system alone eliminated a huge volume of 'where is my package?' inquiries, while the quote calculator qualifies leads before they ever reach the team.",
    tech: ["Next.js", "React", "Node.js", "Database", "Auth", "Tailwind CSS"],
    services: ["Product Strategy", "UX Design", "Full-Stack Engineering", "Dashboard"],
    accent: "#7C2D12",
    image: "/projects/hayapass-global-logistics.jpg",
    screenshots: {
      desktop: "/projects/hayapass-global-logistics-desktop.jpg",
      tablet: "/projects/hayapass-global-logistics-tablet.jpg",
      mobile: "/projects/hayapass-global-logistics-mobile.jpg",
    },
    metrics: [
      { label: "Support Ticket Reduction", value: "-60%" },
      { label: "Instant Quote Engine", value: "< 2 sec" },
      { label: "Active Tracked Shipments", value: "10k+" },
      { label: "Self-Serve Bookings", value: "88%" },
    ],
    testimonial: {
      quote:
        "Building our tracking system and self-serve quote engine automated 60% of our daily manual logistics coordination.",
      author: "H. Mustapha",
      role: "Operations Director, Hayapass Global",
    },
  },
  {
    slug: "prometrics-construction",
    title: "Prometrics Construction",
    client: "Prometrics Construction LLC",
    category: "Corporate",
    industry: "Civil Engineering & Construction Management",
    year: "2024",
    role: "Full-stack build · Brand presentation",
    liveUrl: "https://prometrics-construction.com",
    summary:
      "A corporate platform for a construction management firm built around Lean principles and sustainable delivery.",
    challenge:
      "Prometrics Construction needed to present a sophisticated service offering — program and project management, construction management, Lean construction, and LEED consulting — to a corporate and institutional audience. The previous presence didn't convey their methodological rigor or their commitment to sustainable, Lean-driven delivery. They needed to look like the kind of firm a major project owner trusts with a nine-figure build.",
    solution:
      "We organized the site around their eight-step delivery methodology, making their process the hero rather than vague claims. LEED and Lean capabilities are presented as first-class offerings, signaling their sustainability and efficiency credentials to sophisticated buyers. A training and business advisory section extends their reach beyond project work into thought leadership.",
    outcome:
      "The site now reads like a credible partner for large-scale infrastructure delivery. Methodology-driven content gives project owners the confidence that Prometrics operates to international standards, not just local ones.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
    services: ["Strategy", "Brand Presentation", "Frontend Engineering", "Content"],
    accent: "#4A2C2A",
    image: "/projects/prometrics-construction.jpg",
    screenshots: {
      desktop: "/projects/prometrics-construction-desktop.jpg",
      tablet: "/projects/prometrics-construction-tablet.jpg",
      mobile: "/projects/prometrics-construction-mobile.jpg",
    },
    metrics: [
      { label: "Delivery Methodology Steps", value: "8" },
      { label: "LEED & Lean Focus", value: "100%" },
      { label: "Enterprise Inquiries", value: "+110%" },
      { label: "Page Load Speed", value: "0.6s" },
    ],
  },
  {
    slug: "prometrics-construction-hub",
    title: "Prometrics Construction Hub",
    client: "Prometrics Construction Hub",
    category: "Corporate",
    industry: "Structural Engineering & Industrial Construction",
    year: "2024",
    role: "Full-stack build · Premium positioning",
    liveUrl: "https://prometricsconstructionhub.com",
    summary:
      "A premium digital presence for a high-end Nigerian construction and structural engineering firm with 15+ years of heritage.",
    challenge:
      "Prometrics Construction Hub operates in the premium tier of Nigerian construction — structural engineering, industrial rentals, MEP systems, and project management — and needed a digital presence that matched their elite positioning. With 15+ years of heritage and incorporation since 2018, they wanted to project precision, reliability, and the kind of technical sophistication (BIM modelling, smart materials) that separates top-tier firms from the rest.",
    solution:
      "We built a premium, precision-led experience around their three core differentiators: unwavering reliability, structural integrity, and technical precision. The visual language is deliberately restrained and high-end. Their heritage, BIM capability, and use of smart materials are surfaced as proof of the elite tier they occupy, not just listed as features.",
    outcome:
      "A digital presence that immediately communicates premium positioning and engineering sophistication. The site gives Prometrics Hub the credibility needed to compete for the kind of large structural and industrial projects that define their market segment.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "CMS"],
    services: ["Brand Strategy", "Design", "Frontend Engineering", "Motion"],
    accent: "#2C3E50",
    image: "/projects/prometrics-construction-hub.jpg",
    screenshots: {
      desktop: "/projects/prometrics-construction-hub-desktop.jpg",
      tablet: "/projects/prometrics-construction-hub-tablet.jpg",
      mobile: "/projects/prometrics-construction-hub-mobile.jpg",
    },
    metrics: [
      { label: "Industry Heritage", value: "15+ Yrs" },
      { label: "BIM & Structural Tech", value: "Integrated" },
      { label: "Brand Recall Score", value: "9.4/10" },
      { label: "High-Value RFP Inquiries", value: "+75%" },
    ],
    testimonial: {
      quote:
        "The digital presence matches the precision and rigor of our physical structural engineering. Outstanding execution.",
      author: "P. Obi",
      role: "Principal Partner, Prometrics Hub",
    },
  },
  {
    slug: "the-wayout-media-network",
    title: "The Wayout Media Network",
    client: "The Wayout Media Network (TWOMN)",
    category: "Publishing",
    industry: "Digital Media & Online Publishing",
    year: "2023",
    role: "Full-stack publishing platform · CMS",
    liveUrl: "https://twomn.net",
    summary:
      "A full multi-author publishing platform powering a digital magazine across nine content categories with live radio and breaking news.",
    challenge:
      "TWOMN is a real publishing operation, not a blog — nine content categories from news and business to lifestyle, entertainment, religion, and technology, with multiple named authors contributing regularly. They needed a platform that could handle high-volume publishing, support multiple writers, surface breaking news, host live radio, and keep readers engaged across an editorially diverse catalogue. A static site would collapse under the operational reality.",
    solution:
      "We built a full publishing platform with a robust content model that handles nine categories, multiple authors, and rich metadata. Breaking-news tickers, live radio integration, weather widgets, and newsletter capture are all native. A 'Load More' pagination pattern keeps the homepage performant under heavy content volume, while the author system gives contributors proper attribution and bylines — essential for editorial credibility.",
    outcome:
      "TWOMN now runs as a credible digital publication with the infrastructure to scale. The multi-author system and category architecture let the editorial team publish at volume without technical friction, and the live media integrations keep readers on-site longer.",
    tech: ["Next.js", "React", "Database CMS", "Auth", "Live Media", "Tailwind CSS"],
    services: ["Platform Strategy", "CMS Architecture", "Full-Stack Engineering", "Editorial UX"],
    accent: "#8B1A1A",
    image: "/projects/the-wayout-media-network.jpg",
    screenshots: {
      desktop: "/projects/the-wayout-media-network-desktop.jpg",
      tablet: "/projects/the-wayout-media-network-tablet.jpg",
      mobile: "/projects/the-wayout-media-network-mobile.jpg",
    },
    metrics: [
      { label: "Editorial Categories", value: "9" },
      { label: "Monthly Pageviews", value: "250k+" },
      { label: "Live Radio Streaming", value: "24/7" },
      { label: "Avg. Session Duration", value: "4m 12s" },
    ],
    testimonial: {
      quote:
        "Our editorial team publishes dozens of articles daily with zero friction. The speed and stability are unmatched.",
      author: "E. Danladi",
      role: "Editor-in-Chief, TWOMN",
    },
  },
  {
    slug: "twomn-corporate",
    title: "TWOMN — Corporate",
    client: "The Wayout Media Network",
    category: "Publishing",
    industry: "Digital Media",
    year: "2024",
    role: "Corporate presence · Brand system",
    liveUrl: "https://twomn.com",
    summary:
      "The corporate face of The Wayout Media Network — a refined brand presence positioning the studio behind a multi-category media network.",
    challenge:
      "As The Wayout Media Network grew into a real media operation, the brand needed a corporate presence distinct from the publication itself — a place to present the company, its values, and its reach to partners, advertisers, and collaborators. It had to feel like a media company, not a blog, and signal the scale of what they've built.",
    solution:
      "We created a corporate identity layer for the network — a confident, brand-led presentation that positions TWOMN as a serious media company. The corporate site complements the publication, giving the business a front door separate from the editorial product, with clean messaging about reach, audience, and the network's editorial scope.",
    outcome:
      "A corporate presence that lets TWOMN speak to commercial partners in the language they expect, while the main publication stays focused on readers. The two work together as a complete media business.",
    tech: ["Next.js", "React", "Tailwind CSS", "Brand System"],
    services: ["Brand Presentation", "Frontend Engineering", "Design System"],
    accent: "#5B21B6",
    image: "/projects/twomn-corporate.jpg",
    screenshots: {
      desktop: "/projects/twomn-corporate-desktop.jpg",
      tablet: "/projects/twomn-corporate-tablet.jpg",
      mobile: "/projects/twomn-corporate-mobile.jpg",
    },
    metrics: [
      { label: "Brand Cohesion", value: "100%" },
      { label: "Partner Sponsorships", value: "+90%" },
      { label: "Asset Load Speed", value: "0.4s" },
      { label: "Corporate Inquiries", value: "+65%" },
    ],
  },
];

export const trustIndustries = [
  "Power & Energy",
  "Logistics & Freight",
  "Civil Construction",
  "Digital Media",
  "IT Infrastructure",
  "Structural Engineering",
  "Cross-border Trade",
];
