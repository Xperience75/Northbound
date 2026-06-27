"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { studio } from "@/lib/studio";

const ease = [0.22, 1, 0.36, 1] as const;
const budgets = ["< $2k", "$2k – $8k", "$8k – $20k", "$20k +", "Not sure yet"];
const services = ["Web App", "Corporate Site", "Publishing Platform", "Design System", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet — open a pre-filled mailto so the lead reaches you.
    const subject = encodeURIComponent(`New project inquiry — ${form.name || "Unknown"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ink py-24 text-canvas md:py-36">
      <div className="shell grid gap-16 md:grid-cols-12 md:gap-12">
        {/* Left — invitation */}
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest2 text-canvas/50">
              (Start a Project)
            </p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] md:text-6xl">
              Let&apos;s build something
              <span className="italic text-accent"> forward.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-canvas/70">
              Tell us what you&apos;re building. We reply to every serious
              inquiry within two business days.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 space-y-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider2 text-canvas/40">
                  Email
                </p>
                <a
                  href={`mailto:${studio.email}`}
                  className="link-underline mt-1 inline-block text-lg text-canvas"
                >
                  {studio.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider2 text-canvas/40">
                  Based in
                </p>
                <p className="mt-1 text-lg text-canvas">{studio.location}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <div className="md:col-span-7">
          <Reveal delay={0.12}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="flex h-full min-h-[300px] flex-col items-start justify-center rounded-2xl border border-canvas/15 bg-canvas/5 p-10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-canvas">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-light">
                  Your email is ready.
                </h3>
                <p className="mt-3 max-w-md text-canvas/70">
                  We&apos;ve opened your mail app with the details filled in. Hit
                  send and we&apos;ll take it from there — or write to us directly
                  at{" "}
                  <a href={`mailto:${studio.email}`} className="link-underline text-accent">
                    {studio.email}
                  </a>
                  .
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid gap-6 rounded-2xl border border-canvas/15 bg-canvas/[0.03] p-7 md:p-9"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    name="name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    required
                  />
                </div>
                <Field
                  label="Company (optional)"
                  name="company"
                  value={form.company}
                  onChange={(v) => update("company", v)}
                />

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider2 text-canvas/40">
                    Service needed
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        active={form.service === s}
                        onClick={() => update("service", s)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider2 text-canvas/40">
                    Budget range
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip
                        key={b}
                        label={b}
                        active={form.budget === b}
                        onClick={() => update("budget", b)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-wider2 text-canvas/40"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="What are you building, and what does success look like?"
                    className="mt-3 w-full resize-none rounded-lg border border-canvas/15 bg-transparent px-4 py-3 text-canvas placeholder:text-canvas/30 transition-colors focus:border-accent focus:outline-none"
                  />
                </div>

                <button type="submit" className="btn-primary mt-2 w-full">
                  Send inquiry <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-wider2 text-canvas/40"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full rounded-lg border border-canvas/15 bg-transparent px-4 py-3 text-canvas placeholder:text-canvas/30 transition-colors focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider2 transition-all duration-300 ${
        active
          ? "border-accent bg-accent text-canvas"
          : "border-canvas/20 text-canvas/60 hover:border-canvas/50 hover:text-canvas"
      }`}
    >
      {label}
    </button>
  );
}
