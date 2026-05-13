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
    desc: "Redesigned queue coverage, escalation handling, and staffing alignment to reduce wait-time alerts and improve operational responsiveness.",
    metric: "~89.7%",
    result: "Wait-time alert reduction",
    tools: "Modal · Slack · Airtable · KPI Dashboards",
    icon: Activity,
  },
  {
    title: "GPT-Powered SOP Guardian",
    desc: "Designed AI-powered SOP support systems to help agents access operational guidance faster and improve resolution consistency.",
    metric: "AI",
    result: "Support automation enablement",
    tools: "OpenAI · Claude · Prompt Engineering · Helpjuice",
    icon: Bot,
  },
  {
    title: "Modal Migration & Operationalization",
    desc: "Led operational transition from Jira to Modal, creating scalable governance, escalation flows, and sustainable support workflows.",
    metric: "Jira → Modal",
    result: "Full operational migration",
    tools: "Modal · Jira · Slack · Airtable · SOP Systems",
    icon: GitBranch,
  },
  {
    title: "HUSK Quality Framework",
    desc: "Created a structured support quality framework based on Hospitality, Understanding, Speed, and Knowledge for better coaching.",
    metric: "HUSK",
    result: "Quality evaluation framework",
    tools: "QA Frameworks · Coaching Systems · Support Analytics",
    icon: ShieldCheck,
  },
  {
    title: "Zoom Sentiment Analysis System",
    desc: "Designed prompting and workflow logic for AI-based sentiment analysis across support calls to detect churn risk and quality issues.",
    metric: "Early Risk",
    result: "Churn & quality intelligence",
    tools: "AI Sentiment Analysis · Zoom · GPT Systems",
    icon: Headphones,
  },
  {
    title: "Shift-Glow Forecasting Dashboard",
    desc: "Built workforce forecasting and scheduling visibility systems for peak-hour planning, overtime control, and queue balancing.",
    metric: "24h",
    result: "Leadership coverage model",
    tools: "Airtable · Dashboards · Workforce Planning",
    icon: LineChart,
  },
  {
    title: "AI Feedback Loop System",
    desc: "Built a human-in-the-loop concept for improving AI support quality using agent-tagged resolutions and operational feedback.",
    metric: "Continuous",
    result: "AI response improvement",
    tools: "OpenAI · Airtable · Modal AI · Prompt Engineering",
    icon: RefreshCw,
  },
  {
    title: "ZappyChat → CloseBot Transition",
    desc: "Supported SLA-safe operational transition and queue stabilization during post-acquisition support changes.",
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
            Featured Systems
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Operational systems built for scale, speed, and quality.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-400">
            A selection of AI, automation, support operations, and workflow
            systems created to improve team performance and customer experience.
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
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-lime-300 shrink-0">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-300 text-right leading-snug">
                    {card.tools}
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
