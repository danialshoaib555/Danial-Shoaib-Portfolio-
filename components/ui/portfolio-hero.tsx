"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

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
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
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
          {animateBy === "words" && i < segments.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
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
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_40%)]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-6 py-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral-400 transition hover:text-lime-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className="font-mono text-lg font-bold tracking-tight text-white">
            DS
          </div>

          <a
            href="#contact"
            className="rounded-full border border-lime-300/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-lime-300 transition hover:bg-lime-300 hover:text-black"
          >
            Contact
          </a>
        </nav>

        {isMenuOpen && (
          <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl">
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
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

      {/* Hero Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
          AI Operations • Support Systems • Automation
        </div>

        <div className="relative">
          <BlurText
            text="DANIAL"
            delay={80}
            animateBy="letters"
            className="justify-center font-mono text-[72px] font-black uppercase leading-[0.85] tracking-tighter text-lime-300 sm:text-[110px] md:text-[150px] lg:text-[190px]"
          />
          <BlurText
            text="SHOAIB"
            delay={80}
            animateBy="letters"
            className="justify-center font-mono text-[72px] font-black uppercase leading-[0.85] tracking-tighter text-lime-300 sm:text-[110px] md:text-[150px] lg:text-[190px]"
          />

          {/* Profile image centered between the two name lines */}
          <div className="absolute left-1/2 top-1/2 z-20 h-28 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-lime-300/30 shadow-2xl shadow-lime-300/10 sm:h-40 sm:w-28 md:h-52 md:w-36">
            <img
              src="/profile.jpg"
              alt="Danial Shoaib"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3";
              }}
            />
          </div>
        </div>

        <BlurText
          text="AI Operations Leader designing scalable support systems, automation workflows, and intelligent customer experience infrastructure."
          delay={80}
          animateBy="words"
          className="mt-10 max-w-3xl justify-center text-base leading-8 text-neutral-400 sm:text-lg md:text-xl"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-neutral-500 transition hover:text-lime-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
