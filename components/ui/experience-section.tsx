"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Supervisor – Agency Support",
    company: "HL Pro Tools / Baam LLC",
    period: "Oct 2025 – Present",
    type: "Full-time",
    points: [
      "Designing and deploying AI-assisted operational systems including prompt-engineered SOP copilots, quality auditing workflows, and real-time support intelligence tools.",
      "Leading queue optimization initiatives and AI workflow experiments that reduced wait-time alerts by ~89.7% and improved queue duration by ~80%.",
      "Driving operational scalability through AI-first process redesign, workforce forecasting systems, and structured quality frameworks across a 24-hour support operation.",
    ],
  },
  {
    role: "Team Lead – Agency Support | AI Strategist",
    company: "Baam",
    period: "Aug 2024 – Oct 2025",
    type: "Full-time",
    points: [
      "Built and experimented with AI copilot systems for SOP guidance, agent communication improvement, and operational workflow automation.",
      "Developed operational intelligence frameworks including the HUSK quality system, AI feedback loops, and sentiment analysis workflows for support call analysis.",
      "Led cross-functional support operations while driving AI-first process redesign across escalation handling, onboarding workflows, and queue management systems.",
    ],
  },
  {
    role: "Team Lead – ZappyChat Support",
    company: "Baam",
    period: "May 2025 – Oct 2025",
    type: "Concurrent",
    points: [
      "Maintained SLA-safe operational continuity and queue performance through a high-stakes post-acquisition product migration.",
      "Stabilized agent workflows, escalation systems, and support infrastructure during the ZappyChat to CloseBot platform transition.",
    ],
  },
  {
    role: "Co-Founder & Head of Marketing",
    company: "Ryzr Studios",
    period: "Oct 2022 – Present",
    type: "Venture",
    points: [
      "Co-founded an AR/VR solutions venture focused on immersive experience design, operational product marketing, and emerging technology services.",
      "Led go-to-market strategy, client acquisition systems, and product positioning across immersive tech and digital experience verticals.",
    ],
  },
];

const typeColor: Record<string, string> = {
  "Full-time": "text-lime-300 bg-lime-300/10 border-lime-300/20",
  "Concurrent": "text-cyan-300 bg-cyan-300/10 border-cyan-300/20",
  "Venture": "text-purple-300 bg-purple-300/10 border-purple-300/20",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
          Experience
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Building AI systems and operational intelligence inside real support environments.
        </h2>

        <div className="mt-12 space-y-5">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-1 text-neutral-400">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${typeColor[exp.type] ?? "text-neutral-300 bg-white/5 border-white/10"}`}
                  >
                    {exp.type}
                  </span>
                  <span className="text-sm font-semibold text-cyan-300 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-3 border-t border-white/5 pt-5">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-neutral-400">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300/60" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
