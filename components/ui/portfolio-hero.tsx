"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

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
    <p ref={ref} className={`inline-flex flex-wrap ${className}`}>
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

function ProfileImage() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative h-full w-full">
      {errored ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
          alt="Danial Shoaib"
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <Image
          src="/profile.jpg"
          alt="Danial Shoaib"
          fill
          priority
          className="object-cover object-top"
          onError={() => setErrored(true)}
        />
      )}
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
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_45%)]" />
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Fixed Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6 md:py-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl md:px-5">
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
          <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl">
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

      {/* Hero Content — pt-28 clears the fixed navbar */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
          AI Operations&nbsp;&nbsp;•&nbsp;&nbsp;Support Systems&nbsp;&nbsp;•&nbsp;&nbsp;Automation
        </div>

        {/* Name block with profile image sandwiched between the two words */}
        <div className="relative flex flex-col items-center">
          <BlurText
            text="DANIAL"
            delay={60}
            animateBy="letters"
            className="justify-center font-mono text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-lime-300 sm:text-[110px] md:text-[140px] lg:text-[175px]"
          />

          {/* Profile image — sits between DANIAL and SHOAIB */}
          <div className="relative z-20 my-3 h-24 w-16 overflow-hidden rounded-full border-2 border-lime-300/40 shadow-[0_0_40px_rgba(132,204,22,0.2)] sm:my-4 sm:h-32 sm:w-24 md:h-44 md:w-32 lg:h-52 lg:w-36">
            <ProfileImage />
          </div>

          <BlurText
            text="SHOAIB"
            delay={60}
            animateBy="letters"
            className="justify-center font-mono text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-lime-300 sm:text-[110px] md:text-[140px] lg:text-[175px]"
          />
        </div>

        {/* Tagline */}
        <BlurText
          text="AI Operations Leader designing scalable support systems, automation workflows, and intelligent customer experience infrastructure."
          delay={40}
          animateBy="words"
          direction="bottom"
          className="mt-10 max-w-2xl justify-center text-sm leading-8 text-neutral-400 sm:text-base md:text-lg"
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
