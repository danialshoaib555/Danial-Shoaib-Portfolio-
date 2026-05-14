"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "Cursor", category: "AI" },
  { name: "Windsurf", category: "AI" },
  { name: "Replit", category: "AI" },
  { name: "Lovable", category: "AI" },
  { name: "Bolt", category: "AI" },
  { name: "Antigravity", category: "AI" },
  { name: "Airtable", category: "Ops" },
  { name: "Zapier", category: "Ops" },
  { name: "Modal", category: "Ops" },
  { name: "Slack", category: "Ops" },
  { name: "Jira", category: "Ops" },
  { name: "Helpjuice", category: "Ops" },
  { name: "Notion", category: "Ops" },
  { name: "Framer", category: "Build" },
  { name: "Next.js", category: "Build" },
  { name: "Tailwind", category: "Build" },
  { name: "TypeScript", category: "Build" },
];

const categoryStyle: Record<string, string> = {
  AI: "border-lime-300/25 bg-lime-300/[0.07] text-lime-300",
  Ops: "border-cyan-300/25 bg-cyan-300/[0.07] text-cyan-300",
  Build: "border-purple-300/25 bg-purple-300/[0.07] text-purple-300",
};

const categories = [
  { key: "AI", label: "AI & Models" },
  { key: "Ops", label: "Operations" },
  { key: "Build", label: "Build Tools" },
];

export default function AIStackSection() {
  return (
    <section id="ai-stack" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            AI Stack
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Tools I use to build, automate, and operate.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            The ecosystem of AI models, operational platforms, and build tools
            I use to design intelligent workflows and operational systems.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryStyle[cat.key]}`}
                >
                  {cat.label}
                </span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="flex flex-wrap gap-2">
                {stack
                  .filter((t) => t.category === cat.key)
                  .map((tool, i) => (
                    <motion.span
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIndex * 0.1 + i * 0.04, duration: 0.35 }}
                      viewport={{ once: true }}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition hover:brightness-125 ${categoryStyle[tool.category]}`}
                    >
                      {tool.name}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center"
        >
          <p className="text-sm leading-7 text-neutral-400">
            I don&apos;t collect tools for the sake of it.{" "}
            <span className="text-white">
              I use whatever removes friction, improves clarity, and makes the
              workflow scale faster.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
