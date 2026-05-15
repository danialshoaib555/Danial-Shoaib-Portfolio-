"use client";

import { motion } from "framer-motion";

const focusItems = [
  { label: "AI-assisted operational systems", desc: "Designing systems where AI handles operational overhead at scale" },
  { label: "Workflow intelligence", desc: "Building feedback loops that surface actionable signals in real-time" },
  { label: "Support deflection tooling", desc: "Reducing inbound volume through upstream resolution design" },
  { label: "GPT-based internal copilots", desc: "Prompt-engineered tools embedded directly into agent workflows" },
  { label: "Product-thinking for operations", desc: "Applying product design principles to operational systems problems" },
  { label: "Operational analytics & escalation intelligence", desc: "Turning support data into leadership-level decision signals" },
];

export default function CurrentFocus() {
  return (
    <section id="current-focus" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Current Focus
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Where I&apos;m spending my thinking right now.
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focusItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition hover:border-lime-300/20 hover:bg-white/[0.04]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300/70 shrink-0" />
                <p className="text-sm font-semibold text-white leading-snug">{item.label}</p>
              </div>
              <p className="pl-[18px] text-xs leading-6 text-neutral-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
