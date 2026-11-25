"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your typical engagement timeline?",
    answer:
      "A corporate web platform typically takes 4 to 8 weeks from discovery to production launch. Full-scale web applications (such as customer portals, tracking engines, and multi-author publishing platforms) generally require 8 to 14 weeks depending on custom backend requirements, APIs, and auth pipelines.",
  },
  {
    question: "Who owns the code, design assets, and intellectual property?",
    answer:
      "You own 100% of everything we build. There are no licensing fees, proprietary lock-ins, or ongoing developer hostage scenarios. Upon final deployment, all GitHub repositories, Figma source files, environment configurations, and database schemas are transferred to your organization.",
  },
  {
    question: "Do you handle hosting, CDN infrastructure, and domain setup?",
    answer:
      "Yes. We configure world-class hosting on global edge CDNs (such as Vercel, AWS, or Cloudflare), configure SSL certificates, set up automatic CI/CD deployment pipelines, and optimize caching for sub-second page loads worldwide.",
  },
  {
    question: "How do our internal teams manage and publish content after launch?",
    answer:
      "We architect intuitive headless CMS dashboards (e.g. Sanity, custom CMS, or database interfaces) tailored specifically to your content model. We provide personalized video walkthroughs and documentation so your non-technical team members can edit text, publish articles, and manage media without writing a single line of code.",
  },
  {
    question: "Do you offer ongoing support, updates, and maintenance?",
    answer:
      "Yes. While our platforms are built to run autonomously, we partner with clients on monthly SLA maintenance packages covering security updates, framework upgrades, feature additions, performance monitoring, and priority technical support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="border-b border-line py-24 md:py-36 bg-canvas">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">(Frequently Asked)</p>
              <h2 className="display text-4xl leading-[1.05] md:text-5xl">
                Clarity before we write a line of code.
              </h2>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-sm">
                Have a specific question about your technical requirements or stack? Reach out directly and we&apos;ll provide transparent answers.
              </p>
              <div className="mt-8">
                <Link href="/#contact" className="link-underline font-mono text-xs uppercase tracking-wider text-accent">
                  Ask a question →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="divide-y divide-line border-t border-b border-line">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <Reveal key={faq.question} delay={i * 0.05}>
                    <div className="py-6">
                      <button
                        onClick={() => toggle(i)}
                        className="flex w-full items-start justify-between gap-4 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-xl sm:text-2xl font-light text-ink group-hover:text-accent transition-colors">
                          {faq.question}
                        </span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft pr-6">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
