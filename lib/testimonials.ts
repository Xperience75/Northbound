export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metric?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Northbound delivered an engineering-grade digital platform that accurately communicates our six divisions and ISO certification. It immediately won the trust of enterprise procurement teams.",
    author: "Engr. Victor Kalu",
    role: "Managing Director",
    company: "Vintage Powercare",
    industry: "Power Engineering & Energy",
    metric: "+140% enterprise procurement leads",
  },
  {
    quote:
      "Our shipping platform moved from manual WhatsApp coordination to a fully automated tracking and quote engine. It cut customer support inquiries by over 60%.",
    author: "Hassan Mustapha",
    role: "Operations Director",
    company: "Hayapass Global Logistics",
    industry: "Cross-Border Logistics",
    metric: "-60% support ticket volume",
  },
  {
    quote:
      "We publish dozens of stories daily across nine editorial categories with live radio integration. The platform speed, uptime, and CMS architecture are rock-solid.",
    author: "Emmanuel Danladi",
    role: "Editor-in-Chief",
    company: "The Wayout Media Network",
    industry: "Digital Media Publishing",
    metric: "250k+ monthly readers",
  },
  {
    quote:
      "The precision and visual discipline of our new site reflects the exact standard we bring to structural and civil builds. An exceptional engineering partner.",
    author: "Patrick Obi",
    role: "Principal Partner",
    company: "Prometrics Construction Hub",
    industry: "Civil & Structural Engineering",
    metric: "High-value RFP increase",
  },
];
