"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Supervisor – Agency Support",
    company: "HL Pro Tools / Baam LLC",
    period: "Oct 2025 – Present",
    type: "Full-time",
    points: [
      "Leading Agency Support operations with focus on AI workflows, SLA control, quality systems, and operational scalability.",
      "Implemented queue optimization, 24-hour leadership coverage, and AI-assisted support initiatives.",
      "Overseeing team performance, operational metrics, escalation handling, and workforce planning.",
    ],
  },
  {
    role: "Team Lead – Agency Support | AI Strategist",
    company: "Baam",
    period: "Aug 2024 – Oct 2025",
    type: "Full-time",
    points: [
      "Managed technical support operations for GHL-related services and contributed to AI-led process improvements.",
      "Supported onboarding, coaching, escalation handling, and cross-functional operational execution.",
      "Designed and deployed AI-assisted workflow systems including GPT-powered SOP guidance and queue analytics.",
    ],
  },
  {
    role: "Team Lead – ZappyChat Support",
    company: "Baam",
    period: "May 2025 – Oct 2025",
    type: "Concurrent",
    points: [
      "Oversaw ZappyChat support after CloseBot acquisition and helped maintain SLA-safe operations during transition.",
      "Stabilized queue operations, agent workflows, and support continuity across a high-stakes product migration.",
    ],
  },
  {
    role: "Co-Founder & Head of Marketing",
    company: "Ryzr Studios",
    period: "Oct 2022 – Present",
    type: "Venture",
    points: [
      "Co-founded AR/VR solutions venture focused on immersive experiences, customer engagement, and innovation.",
      "Led marketing strategy, client acquisition, and product positioning for emerging tech services.",
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
          Leadership across AI operations, support systems, and technical workflows.
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
