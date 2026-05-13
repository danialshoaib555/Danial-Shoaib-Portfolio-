"use client";

import { Mail, ExternalLink, Link2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {"Let's build smarter support operations."}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            Open to AI operations, support systems, automation architecture, and
            technical leadership opportunities. Always interested in connecting
            with forward-thinking teams.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:danialshoaib555@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-200"
            >
              <Mail size={18} />
              danialshoaib555@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/danialshoaib"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Link2 size={18} />
              LinkedIn
              <ExternalLink size={14} className="text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <div className="font-mono text-sm font-bold text-neutral-500">DS</div>
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Danial Shoaib. All rights reserved.
          </div>
          <div className="text-xs text-neutral-700 uppercase tracking-widest">
            AI Operations Leader
          </div>
        </div>
      </motion.div>
    </section>
  );
}
