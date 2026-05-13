"use client";

import { motion } from "framer-motion";
import { imgSrc } from "@/lib/utils";

const achievements = [
  { value: "89.7%", label: "Wait-time alert reduction" },
  { value: "80%", label: "Queue duration improvement" },
  { value: "2000+", label: "Technical calls & escalations managed" },
  { value: "24h", label: "Leadership coverage implemented" },
];

const skills = [
  { category: "AI & Automation", items: "OpenAI · Claude AI · Gemini · Cursor · Prompt Engineering · AI Workflow Design · AI SOP Systems · AI Feedback Loops · Conversational AI · Sentiment Analysis" },
  { category: "Operations", items: "Airtable · Zapier · Make.com · Modal · Jira · Slack · Helpjuice · Notion · GHL · Hubstaff · Zoom · Google Workspace" },
  { category: "Technical", items: "HTML · CSS · JavaScript · TypeScript · SQL · API Integrations · Workflow Automation · System Architecture · Process Optimization" },
  { category: "Analytics", items: "KPI Tracking · SLA Monitoring · Workforce Forecasting · Queue Analytics · CSAT/NPS Analysis · Operational Reporting" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sticky top-24 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3"
          >
            {/* Profile photo — plain <img> with basePath-aware src */}
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc("/profile.jpg")}
                alt="Danial Shoaib"
                className="h-[420px] w-full rounded-2xl object-cover object-top opacity-95 transition hover:scale-[1.02] duration-500"
              />
            </div>

            <div className="mt-4 px-3 pb-3">
              <div className="text-lg font-semibold">Danial Shoaib</div>
              <div className="mt-1 text-sm text-neutral-400">
                Supervisor – Agency Support @ HL Pro Tools / Baam LLC
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-xs text-lime-300">
                  AI Operations
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-300">
                  Support Systems
                </span>
              </div>
            </div>
          </motion.div>

          {/* About text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              I build intelligent systems for support teams, operations, and customer experience.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-400">
              I am Danial Shoaib — Supervisor of Agency Support at HL Pro Tools / Baam LLC. I specialize in AI-assisted support operations, workflow automation, queue optimization, SLA improvement, and technical team leadership.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-400">
              I design AI-powered operational systems that improve support speed, quality, scalability, and customer experience. My Computer Science background helps me bridge technical systems, support operations, AI workflows, automation architecture, and business process optimization.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-300/20"
                >
                  <div className="text-3xl font-bold text-lime-300">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Tools & Skills
              </p>
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="mb-2 text-sm font-semibold text-cyan-300">
                    {skill.category}
                  </div>
                  <div className="text-sm leading-7 text-neutral-400">
                    {skill.items}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
