"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id="ai-systems"
      className={cn(
        "relative flex min-h-[720px] w-full flex-col items-center justify-center overflow-hidden bg-slate-950 text-white",
        className
      )}
    >
      <div className="relative isolate flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, rgb(34 211 238), transparent, transparent)",
          }}
          className="absolute right-1/2 h-56 w-[30rem] overflow-visible text-white"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, rgb(132 204 22))",
          }}
          className="absolute left-1/2 h-56 w-[30rem] text-white"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-30 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "18rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-72 -translate-y-[6rem] rounded-full bg-lime-400 opacity-40 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "34rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[34rem] -translate-y-[7rem] bg-cyan-300"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      <div className="relative z-50 -mt-80 flex flex-col items-center px-6 text-center">
        {children}
      </div>
    </section>
  );
}

export function AISystemsLamp() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="max-w-4xl"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          AI & Automation Systems
        </p>
        <h2 className="bg-gradient-to-br from-white to-slate-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-7xl">
          Building AI-powered operations systems that scale support quality.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          From GPT-powered SOP assistants to AI feedback loops, sentiment
          analysis, and workflow automation — I design systems that help teams
          resolve faster, improve quality, and operate with more intelligence.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Prompt Engineering", desc: "GPT, Claude, Gemini systems" },
            { label: "Workflow Automation", desc: "Zapier, Make, Airtable flows" },
            { label: "AI Feedback Loops", desc: "Human-in-the-loop systems" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur"
            >
              <div className="text-sm font-semibold text-cyan-300">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-slate-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </LampContainer>
  );
}
