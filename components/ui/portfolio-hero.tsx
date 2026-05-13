"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { imgSrc } from "@/lib/utils";

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

  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy]
  );

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
      {segments.map((segment, i) => (
        <span
          key={`${segment}-${i}`}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(12px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.55s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
}

export default function PortfolioHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "AI SYSTEMS", href: "#ai-systems" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* z-0 — Background layer */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(132,204,22,0.13),transparent),radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(34,211,238,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* z-50 — Fixed Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6 md:py-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl md:px-5">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral-400 transition hover:text-lime-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="font-mono text-base font-bold tracking-tight text-white md:text-lg">
            DS
          </div>

          <a
            href="#contact"
            className="rounded-full border border-lime-300/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300 transition hover:bg-lime-300 hover:text-black md:px-4 md:py-2"
          >
            Contact
          </a>
        </nav>

        {isMenuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl">
            <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/5 hover:text-lime-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero content — pt-28 clears the fixed navbar */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28 text-center">

        {/* Badge */}
        <div className="mb-10 rounded-full border border-lime-300/25 bg-lime-300/[0.08] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
          AI Operations&nbsp;&nbsp;•&nbsp;&nbsp;Support Systems&nbsp;&nbsp;•&nbsp;&nbsp;Automation
        </div>

        {/* ── Name block with profile image overlaid in center ── */}
        <div className="relative w-full max-w-7xl">

          {/* z-10 — "DANIAL" behind image */}
          <div className="relative z-10 leading-none">
            <BlurText
              text="DANIAL"
              delay={55}
              animateBy="letters"
              className="font-mono text-[18vw] font-black uppercase tracking-tighter text-lime-300 sm:text-[160px] md:text-[180px] lg:text-[210px] xl:text-[240px]"
            />
          </div>

          {/* z-30 — Profile image, absolutely centered over both text lines */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="h-28 w-20 overflow-hidden rounded-full border-2 border-lime-300/50 shadow-[0_0_60px_rgba(132,204,22,0.25),0_0_0_4px_rgba(0,0,0,0.6)] sm:h-36 sm:w-28 md:h-48 md:w-36 lg:h-56 lg:w-40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc("/profile.jpg")}
                alt="Danial Shoaib"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* z-10 — "SHOAIB" behind image */}
          <div className="relative z-10 leading-none">
            <BlurText
              text="SHOAIB"
              delay={55}
              animateBy="letters"
              className="font-mono text-[18vw] font-black uppercase tracking-tighter text-lime-300 sm:text-[160px] md:text-[180px] lg:text-[210px] xl:text-[240px]"
            />
          </div>
        </div>

        {/* Tagline */}
        <BlurText
          text="AI Operations Leader designing scalable support systems, automation workflows, and intelligent customer experience infrastructure."
          delay={35}
          animateBy="words"
          direction="bottom"
          className="mt-10 max-w-2xl text-sm leading-8 text-neutral-400 sm:text-base md:text-lg"
        />

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-200 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-neutral-600 transition hover:text-lime-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
