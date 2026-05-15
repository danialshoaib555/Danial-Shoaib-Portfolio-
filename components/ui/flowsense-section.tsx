"use client";

import { motion } from "framer-motion";
import { ExternalLink, Link2, FileText, FlaskConical, CheckCircle2 } from "lucide-react";

const whyItMatters = [
  "Support teams often lack real-time visibility into agent performance gaps before they become SLA risks.",
  "Supervisors spend reactive hours manually tracking queue trends that an AI-assisted system could surface automatically.",
  "FlowSense explores what that feedback loop could look like — built around operational signals, not vanity dashboards.",
];

const validationItems = [
  {
    label: "Does the AI surface genuinely actionable signals?",
    sub: "Or does it just add noise that supervisors have to filter manually?",
  },
  {
    label: "What's the minimum useful data layer?",
    sub: "Testing whether Airtable + lightweight GPT calls can replace a full analytics stack.",
  },
  {
    label: "How do agents respond to live AI coaching prompts?",
    sub: "Adoption behavior in real support environments is often the real constraint.",
  },
  {
    label: "Where does the AI call create overhead instead of reducing it?",
    sub: "Finding the failure modes before scaling the architecture.",
  },
];

export default function FlowSenseSection() {
  return (
    <section id="flowsense" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Featured Prototype
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            FlowSense AI
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            An AI-assisted operational intelligence prototype — built to explore
            what real-time support workflow monitoring could look like before
            committing to a full production system.
          </p>
        </motion.div>

        {/* Mock-data disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/[0.07] px-4 py-2"
        >
          <FlaskConical size={14} className="text-amber-300 shrink-0" />
          <span className="text-xs font-semibold text-amber-300 tracking-wide">
            Prototype · Mock data + simulated AI outputs · Not production
          </span>
        </motion.div>

        {/* Main prototype card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://flowsense-ai-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-200 active:scale-95"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
            <a
              href="https://github.com/danialshoaib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95"
            >
              <Link2 size={15} />
              GitHub Repo
            </a>
            <a
              href="#flowsense"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] px-5 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-300/15 active:scale-95"
            >
              <FileText size={15} />
              Case Study ↓
            </a>
          </div>

          {/* Why it matters */}
          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Why it matters
            </p>
            <ul className="space-y-3">
              {whyItMatters.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-400">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300/60" />
                  <span className="text-sm leading-7 md:text-base md:leading-8">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="mb-8 border-t border-white/5" />

          {/* What I Would Validate */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              What I Would Validate Before Building Further
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {validationItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <div className="mb-2 flex items-start gap-2">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-lime-300/70" />
                    <p className="text-sm font-semibold leading-snug text-white">
                      {item.label}
                    </p>
                  </div>
                  <p className="pl-5 text-xs leading-6 text-neutral-500">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
