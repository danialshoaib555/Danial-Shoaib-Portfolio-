"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, MessageSquareMore, Calendar, CreditCard } from "lucide-react";

const systems = [
  {
    icon: Bot,
    name: "SOP Guardian",
    type: "AI Copilot",
    description:
      "A prompt-engineered GPT copilot that delivers real-time SOP guidance, escalation instructions, and workflow clarity to agents on-demand — without manual documentation lookup.",
    impact: [
      "Reduced SOP-related escalations by surfacing context-aware answers instantly",
      "Lowered new agent ramp time by embedding operational knowledge directly into the workflow",
    ],
    tools: "OpenAI · Prompt Engineering · Helpjuice",
    accentColor: "text-lime-300",
    borderColor: "border-lime-300/20",
    badgeStyle: "bg-lime-300/10 text-lime-300 border-lime-300/20",
  },
  {
    icon: ShieldCheck,
    name: "HLPT Quality Auditor",
    type: "QA Intelligence",
    description:
      "An AI-assisted quality evaluation system based on the HUSK framework — Hospitality, Understanding, Speed, Knowledge — enabling structured, consistent interaction scoring and coaching at scale.",
    impact: [
      "Created a repeatable quality signal across 24h support operations",
      "Enabled data-backed coaching conversations instead of subjective feedback",
    ],
    tools: "Claude · QA Frameworks · Operational Analytics",
    accentColor: "text-cyan-300",
    borderColor: "border-cyan-300/20",
    badgeStyle: "bg-cyan-300/10 text-cyan-300 border-cyan-300/20",
  },
  {
    icon: MessageSquareMore,
    name: "Reply Improver",
    type: "Communication AI",
    description:
      "A GPT-powered tool that rewrites agent support responses for clarity, tone, and professionalism — preserving meaning while elevating quality without adding review overhead.",
    impact: [
      "Improved response quality consistency across agents of varying communication levels",
      "Reduced review cycles on customer-facing replies",
    ],
    tools: "OpenAI · Prompt Engineering · Slack",
    accentColor: "text-purple-300",
    borderColor: "border-purple-300/20",
    badgeStyle: "bg-purple-300/10 text-purple-300 border-purple-300/20",
  },
  {
    icon: Calendar,
    name: "GHL Summit Concierge",
    type: "Event Intelligence",
    description:
      "A context-aware AI assistant designed for the GHL Summit release — handling attendee questions, release notes navigation, and feature guidance with structured operational knowledge.",
    impact: [
      "Deflected a high volume of inbound release-related tickets during peak summit traffic",
      "Kept support team focused on complex escalations while AI handled information queries",
    ],
    tools: "Claude · Knowledge Base · Prompt Systems",
    accentColor: "text-lime-300",
    borderColor: "border-lime-300/20",
    badgeStyle: "bg-lime-300/10 text-lime-300 border-lime-300/20",
  },
  {
    icon: CreditCard,
    name: "Elite X Credits Guide",
    type: "Onboarding AI",
    description:
      "An AI-powered onboarding guide for Elite X credits and GHL platform entitlements — giving new users structured, accurate answers during a high-confusion post-acquisition period.",
    impact: [
      "Reduced repetitive credit-related tickets by providing consistent, contextually accurate guidance",
      "Improved onboarding clarity during a complex product transition period",
    ],
    tools: "OpenAI · GHL · Onboarding Systems",
    accentColor: "text-cyan-300",
    borderColor: "border-cyan-300/20",
    badgeStyle: "bg-cyan-300/10 text-cyan-300 border-cyan-300/20",
  },
];

export default function AIWorkflowSystems() {
  return (
    <section id="ai-systems" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            AI Workflow Systems
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Operational AI tools built inside real support environments.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            These aren&apos;t experiments. These are prompt-engineered AI systems I
            designed and deployed to solve specific operational problems — each
            one built around a friction point that mattered.
          </p>
        </motion.div>

        <div className="space-y-5">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.article
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-3xl border ${system.borderColor} bg-white/[0.03] p-7 transition hover:border-opacity-50 hover:bg-white/[0.05] md:p-8`}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-7">
                  {/* Icon */}
                  <div className={`shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3.5 ${system.accentColor} self-start`}>
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold md:text-2xl">{system.name}</h3>
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${system.badgeStyle}`}>
                        {system.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
                      {system.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-5 space-y-2">
                      {system.impact.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${system.accentColor} opacity-60`} />
                          <span className="text-sm leading-7 text-neutral-400">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-600 uppercase tracking-widest shrink-0">Stack</span>
                      <span className="text-xs text-neutral-500">{system.tools}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
