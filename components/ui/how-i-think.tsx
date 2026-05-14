"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    text: "Build leverage, not complexity.",
    sub: "The best system does more with less moving parts.",
  },
  {
    number: "02",
    text: "Reduce friction before escalation happens.",
    sub: "Preventative design outperforms reactive fixes every time.",
  },
  {
    number: "03",
    text: "AI should improve workflows, not create noise.",
    sub: "Automation that confuses teams isn't automation — it's overhead.",
  },
  {
    number: "04",
    text: "Good systems reduce dependency on humans.",
    sub: "Scalability means the process works even when you're not watching.",
  },
  {
    number: "05",
    text: "Preventative systems scale better than reactive support.",
    sub: "Fix the upstream condition, not just the downstream symptom.",
  },
  {
    number: "06",
    text: "Product-thinking matters more than feature quantity.",
    sub: "One well-designed workflow beats ten half-built tools.",
  },
  {
    number: "07",
    text: "Operational clarity creates scalability.",
    sub: "Ambiguity is a tax on every person who touches the process.",
  },
  {
    number: "08",
    text: "Context quality matters more than token quantity.",
    sub: "Better prompts come from better operational understanding, not longer inputs.",
  },
];

export default function HowIThink() {
  return (
    <section id="how-i-think" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            How I Think
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Principles behind the systems I build.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            The mental models that shape how I approach AI, operations, workflow design,
            and support infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-px border border-white/5 rounded-3xl overflow-hidden bg-white/5">
          {principles.map((p, index) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              viewport={{ once: true }}
              className="group flex items-start gap-6 bg-black px-6 py-6 transition hover:bg-white/[0.03] md:px-8 md:py-7"
            >
              <span className="shrink-0 font-mono text-sm font-bold text-white/15 group-hover:text-lime-300/40 transition md:text-base">
                {p.number}
              </span>
              <div>
                <p className="text-base font-semibold leading-snug text-white md:text-lg">
                  {p.text}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-neutral-500">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
