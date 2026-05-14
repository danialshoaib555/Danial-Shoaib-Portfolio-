"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, FileText, MessageSquare, UserCheck } from "lucide-react";

const labCards = [
  {
    title: "HLPT Quality Auditor",
    category: "AI Quality Intelligence System",
    desc: "AI-powered auditing assistant designed to analyze conversations, identify SOP deviations, detect communication risks, and generate operational coaching insights automatically.",
    metric: "QA AI",
    result: "Audit intelligence system",
    tools: "OpenAI · GPT Systems · Prompt Engineering",
    icon: ClipboardCheck,
    impact: ["Improved QA consistency", "Reduced manual audit effort", "Faster coaching workflows"],
  },
  {
    title: "SOP Guardian — AO Support Assistant",
    category: "Operational AI Copilot",
    desc: "AI-powered SOP and workflow guidance system providing approved responses, escalation guidance, and operational support instructions to agents in real time.",
    metric: "< 5s",
    result: "SOP lookup time",
    tools: "GPT Systems · Helpjuice · OpenAI",
    icon: BookOpen,
    impact: ["Improved SOP compliance", "Reduced lookup time", "Improved workflow consistency"],
  },
  {
    title: "HLPT Reply Improver — Agent Assist",
    category: "AI Communication Optimization System",
    desc: "AI-assisted communication refinement tool helping support teams improve clarity, tone, hospitality, and customer experience quality across every interaction.",
    metric: "AI Assist",
    result: "Communication optimization",
    tools: "Claude · OpenAI · Prompt Engineering",
    icon: MessageSquare,
    impact: ["Improved response quality", "Reduced escalation risk", "Faster drafting workflows"],
  },
  {
    title: "GHL Summit Release Notes Concierge",
    category: "AI Release Intelligence System",
    desc: "AI assistant designed to summarize product updates and transform raw release notes into operationally usable support guidance for frontline teams.",
    metric: "Instant",
    result: "Release-to-readiness pipeline",
    tools: "GPT Systems · AI Knowledge Processing",
    icon: FileText,
    impact: ["Faster operational readiness", "Reduced misinformation", "Improved launch support"],
  },
  {
    title: "Elite X Onboarding Credits Guide",
    category: "AI Onboarding Intelligence System",
    desc: "AI onboarding assistant trained on edge-case onboarding scenarios, customized plan logic, and customer guidance workflows to reduce support dependency.",
    metric: "Edge-case",
    result: "Onboarding clarity system",
    tools: "OpenAI · Prompt Engineering",
    icon: UserCheck,
    impact: ["Reduced onboarding confusion", "Improved support consistency", "Reduced escalation dependency"],
  },
];

export default function AISystemsLab() {
  return (
    <section id="ai-systems-lab" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            AI Systems Lab
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            AI-powered operational systems built inside real workflows.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-400">
            AI-powered operational systems designed to improve workflow intelligence,
            communication quality, support scalability, and organizational efficiency —
            built and deployed inside active support operations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {labCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <span
                    className="max-w-[180px] truncate rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-xs font-medium text-lime-300"
                    title={card.tools}
                  >
                    {card.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">{card.desc}</p>

                <ul className="mt-4 space-y-1.5">
                  {card.impact.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-300/50" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="text-3xl font-bold text-cyan-300">{card.metric}</div>
                  <div className="mt-1 text-sm text-neutral-400">{card.result}</div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
