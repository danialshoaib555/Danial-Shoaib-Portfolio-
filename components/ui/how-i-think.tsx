"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "Understand the bottleneck first.",
    body: "Before designing any system, I map where work actually stalls — not where people assume it does. Most operational friction lives upstream of the visible symptom. Fix the cause, not the complaint.",
    accent: "text-lime-300",
    border: "border-lime-300/20",
    bg: "bg-lime-300/[0.04]",
    numColor: "text-lime-300/20 group-hover:text-lime-300/50",
  },
  {
    number: "02",
    title: "AI as leverage, not novelty.",
    body: "AI tools earn their place when they reduce decision-making overhead, not when they look impressive in a demo. I only deploy AI where it removes a real bottleneck — and I don't automate things that aren't broken.",
    accent: "text-cyan-300",
    border: "border-cyan-300/20",
    bg: "bg-cyan-300/[0.04]",
    numColor: "text-cyan-300/20 group-hover:text-cyan-300/50",
  },
  {
    number: "03",
    title: "Build only what creates leverage.",
    body: "One well-designed workflow beats ten half-built tools. I bias toward systems that compound — where solving one friction point unlocks capacity elsewhere in the operation. Breadth without depth is overhead.",
    accent: "text-purple-300",
    border: "border-purple-300/20",
    bg: "bg-purple-300/[0.04]",
    numColor: "text-purple-300/20 group-hover:text-purple-300/50",
  },
  {
    number: "04",
    title: "Systems over isolated features.",
    body: "Isolated improvements don't scale. I design for how components interact — queue logic, escalation flows, quality signals, and AI outputs — so the whole operation moves together, not just individual parts of it.",
    accent: "text-lime-300",
    border: "border-lime-300/20",
    bg: "bg-lime-300/[0.04]",
    numColor: "text-lime-300/20 group-hover:text-lime-300/50",
  },
];

export default function HowIThink() {
  return (
    <section id="how-i-think" className="bg-black px-6 py-28 text-white">
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

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl border ${card.border} ${card.bg} p-7 transition hover:border-opacity-50 hover:bg-white/[0.06]`}
            >
              {/* Large background number */}
              <span
                className={`absolute right-6 top-5 font-mono text-6xl font-black leading-none transition duration-300 ${card.numColor}`}
              >
                {card.number}
              </span>

              <div className="relative z-10">
                <p className={`mb-4 text-xl font-semibold leading-snug ${card.accent} md:text-2xl`}>
                  {card.title}
                </p>
                <p className="text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
