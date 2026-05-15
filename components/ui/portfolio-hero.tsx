"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { imgSrc } from "@/lib/utils";

/* ─── BlurText ───────────────────────────────────────────────────────────── */
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
}

function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
}: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const segments =
    animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <div
      ref={ref}
      // gap-x preserves word spacing in flex layouts (whitespace text nodes are ignored)
      className={`flex flex-wrap justify-center ${animateBy === "words" ? "gap-x-[0.25em]" : ""} ${className}`}
    >
      {segments.map((segment, i) => (
        <span
          key={`${segment}-${i}`}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.55s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
        </span>
      ))}
    </div>
  );
}

/* ─── PortfolioHero ──────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "AI SYSTEMS", href: "#ai-systems" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const BADGES = ["AI Operations", "Support Systems", "Automation"];

export default function PortfolioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black text-white"
    >
      {/* ── z-0 Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(132,204,22,0.12),transparent),radial-gradient(ellipse_40%_35%_at_85%_85%,rgba(34,211,238,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* ── z-50 Fixed Navbar ── */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-3 md:px-6 md:py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/75 px-4 py-2.5 backdrop-blur-xl md:px-5 md:py-3">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-neutral-400 transition hover:text-lime-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <span className="font-mono text-sm font-bold tracking-widest text-white md:text-base">
            DS
          </span>

          <a
            href="#contact"
            className="rounded-full border border-lime-300/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-300 transition hover:bg-lime-300 hover:text-black md:px-4 md:py-1.5 md:text-xs"
          >
            Contact
          </a>
        </nav>

        {/* Mobile / dropdown menu */}
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-black/95 p-3 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wider text-neutral-300 transition hover:bg-white/5 hover:text-lime-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ── Hero body — pt clears fixed navbar ── */}
      <main className="relative z-10 flex w-full flex-1 flex-col items-center px-4 pb-16 pt-24 text-center md:pt-28">

        {/* Badge pills — three separate tags, no wrapping issues */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:mb-10">
          {BADGES.map((b) => (
            <span
              key={b}
              className="rounded-full border border-lime-300/25 bg-lime-300/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300 md:text-xs"
            >
              {b}
            </span>
          ))}
        </div>

        {/* ── Name block: DANIAL / profile image / SHOAIB ── */}
        <div className="relative w-full max-w-5xl">

          {/* z-10 — DANIAL (behind image) */}
          <div className="relative z-10">
            <BlurText
              text="DANIAL"
              delay={55}
              animateBy="letters"
              className="w-full font-mono text-[22vw] font-black uppercase leading-none tracking-tighter text-lime-300 sm:text-[150px] md:text-[170px] lg:text-[200px] xl:text-[220px]"
            />
          </div>

          {/* z-30 — Profile image, absolutely centred over the two lines */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="h-20 w-[58px] overflow-hidden rounded-full border-2 border-lime-300/50 shadow-[0_0_50px_rgba(132,204,22,0.2),0_0_0_3px_rgba(0,0,0,0.7)] sm:h-28 sm:w-20 md:h-36 md:w-[104px] lg:h-44 lg:w-32 xl:h-52 xl:w-36">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc("/profile.jpg")}
                alt="Danial Shoaib"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* z-10 — SHOAIB (behind image) */}
          <div className="relative z-10">
            <BlurText
              text="SHOAIB"
              delay={55}
              animateBy="letters"
              className="w-full font-mono text-[22vw] font-black uppercase leading-none tracking-tighter text-lime-300 sm:text-[150px] md:text-[170px] lg:text-[200px] xl:text-[220px]"
            />
          </div>
        </div>

        {/* Tagline — fixed with gap-x so words don't merge */}
        <div className="mt-8 max-w-xl px-2 md:mt-10 md:max-w-2xl">
          <BlurText
            text="Designing AI-assisted operational systems that reduce friction, improve workflows, and scale support intelligently."
            delay={25}
            animateBy="words"
            direction="bottom"
            className="text-sm leading-relaxed text-neutral-400 md:text-base md:leading-8 lg:text-lg"
          />
        </div>

        {/* CTA buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-8">
          <a
            href="#projects"
            className="rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-200 active:scale-95 md:px-6 md:py-3"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95 md:px-6 md:py-3"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce text-neutral-600 transition hover:text-lime-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
