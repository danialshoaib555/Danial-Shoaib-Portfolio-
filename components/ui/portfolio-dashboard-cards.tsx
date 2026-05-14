"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  GitBranch,
  Headphones,
  LineChart,
  ShieldCheck,
  Zap,
  RefreshCw,
} from "lucide-react";

const cards = [
  {
    title: "Queue Optimization & SLA Recovery",
    desc: "Redesigned queue coverage, escalation logic, and staffing alignment to reduce wait-time alerts and restore operational responsiveness across support workflows.",
    metric: "~89.7%",
    result: "Wait-time alert reduction",
    tools: "Modal · Slack · Airtable · KPI Dashboards",
    icon: Activity,
  },
  {
    title: "GPT-Powered SOP Guardian",
    desc: "Designed a prompt-engineered AI copilot delivering real-time SOP guidance, escalation instructions, and workflow support to agents without manual lookup.",
    metric: "AI",
    result: "Operational AI copilot deployed",
    tools: "OpenAI · Claude · Prompt Engineering · Helpjuice",
    icon: Bot,
  },
  {
    title: "Modal Migration & Operationalization",
    desc: "Led end-to-end operational transition from Jira to Modal — designing governance structures, escalation flows, SOP alignment, and team onboarding systems.",
    metric: "Jira → Modal",
    result: "Full operational migration",
    tools: "Modal · Jira · Slack · Airtable · SOP Systems",
    icon: GitBranch,
  },
  {
    title: "HUSK Quality Framework",
    desc: "Designed a structured support quality evaluation system — Hospitality, Understanding, Speed, Knowledge — enabling consistent coaching and interaction scoring.",
    metric: "HUSK",
    result: "Quality intelligence framework",
    tools: "QA Frameworks · Coaching Systems · Support Analytics",
    icon: ShieldCheck,
  },
  {
    title: "Zoom Sentiment Analysis System",
    desc: "Designed AI prompting workflows for real-time sentiment analysis across support calls — detecting churn signals, quality risks, and coaching opportunities.",
    metric: "Early Risk",
    result: "Churn & quality intelligence",
    tools: "AI Sentiment Analysis · Zoom · GPT Systems",
    icon: Headphones,
  },
  {
    title: "ShiftGlow — Workforce Intelligence Platform",
    desc: "AI-assisted workforce forecasting and operational visibility platform designed to improve staffing intelligence, scheduling optimization, queue balancing, and operational planning.",
    metric: "24h",
    result: "Leadership coverage model",
    tools: "Airtable · Dashboards · Workforce Planning",
    icon: LineChart,
  },
  {
    title: "AI Feedback Loop System",
    desc: "Designed a human-in-the-loop framework for continuous AI quality improvement — using agent-tagged resolutions and operational signals to refine AI response accuracy.",
    metric: "Continuous",
    result: "AI response improvement loop",
    tools: "OpenAI · Airtable · Modal AI · Prompt Engineering",
    icon: RefreshCw,
  },
  {
    title: "ZappyChat → CloseBot Transition",
    desc: "Managed SLA-safe operational continuity and queue stabilization across a post-acquisition product transition — maintaining support performance during platform migration.",
    metric: "SLA Safe",
    result: "Continuity during migration",
    tools: "ZappyChat · CloseBot · Queue Operations",
    icon: Zap,
  },
];

export default function PortfolioDashboardCards() {
  return (
    <section id="projects" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Operational Systems
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Systems designed for operational intelligence and scale.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-400">
            A portfolio of AI-assisted operational systems, workflow automation
            initiatives, and support infrastructure built inside real production environments.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-lime-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="max-w-[180px] truncate rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-300" title={card.tools}>
                    {card.tools.split(" · ")[0]}
                    {card.tools.split(" · ").length > 1 && (
                      <span className="text-cyan-300/60">
                        {" "}+{card.tools.split(" · ").length - 1}
                      </span>
                    )}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {card.desc}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="text-3xl font-bold text-lime-300">
                    {card.metric}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">
                    {card.result}
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
