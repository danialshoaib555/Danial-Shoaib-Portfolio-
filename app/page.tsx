import PortfolioHero from "@/components/ui/portfolio-hero";
import AboutSection from "@/components/ui/about-section";
import AISystemsLab from "@/components/ui/ai-systems-lab";
import PortfolioDashboardCards from "@/components/ui/portfolio-dashboard-cards";
import { AISystemsLamp } from "@/components/ui/lamp";
import ExperienceSection from "@/components/ui/experience-section";
import AIStackSection from "@/components/ui/ai-stack-section";
import HowIThink from "@/components/ui/how-i-think";
import ContactSection from "@/components/ui/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* 1 — Hero */}
      <PortfolioHero />

      {/* 2 — About + operational metrics */}
      <AboutSection />

      {/* 3 — AI Systems Lab (after metrics, before projects) */}
      <AISystemsLab />

      {/* 4 — Operational Systems (projects) */}
      <PortfolioDashboardCards />

      {/* 5 — AI Systems spotlight lamp */}
      <AISystemsLamp />

      {/* 6 — Experience */}
      <ExperienceSection />

      {/* 7 — Education */}
      <section id="education" className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
            Education
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Computer Science foundation for systems-thinking operations.
          </h2>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Bachelor of Science
                </div>
                <h3 className="text-3xl font-semibold md:text-4xl">
                  Computer Science
                </h3>
                <p className="mt-3 text-lg text-neutral-400">
                  University of Engineering and Technology, Taxila
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center">
                <div className="text-2xl font-bold text-lime-300">2015</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest">to</div>
                <div className="text-2xl font-bold text-lime-300">2019</div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-8">
              <p className="text-lg leading-8 text-neutral-400">
                A Computer Science foundation gives me the systems-thinking lens I apply to
                every operational challenge — bridging AI workflows, automation architecture,
                API integrations, and support infrastructure design with technical precision.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Systems Thinking", desc: "Architecture & process design" },
                { label: "Technical Depth", desc: "APIs, SQL, automation logic" },
                { label: "AI Integration", desc: "Bridging ops & AI workflows" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-sm font-semibold text-lime-300">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — AI Stack */}
      <AIStackSection />

      {/* 9 — How I Think (before contact) */}
      <HowIThink />

      {/* 10 — Contact */}
      <ContactSection />
    </main>
  );
}
