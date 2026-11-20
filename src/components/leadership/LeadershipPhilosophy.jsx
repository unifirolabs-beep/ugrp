import React from "react";
import { Compass, ShieldCheck, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Strategic Thinking.",
    description:
      "Synthesizing macroeconomic shifts and technological inflections into distinct competitive moats and durable multi-decade positioning.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Discipline.",
    description:
      "Prudent capital deployment, institutional governance, and rigorous balance sheet stewardship to maximize risk-adjusted returns.",
  },
  {
    icon: Zap,
    title: "Entrepreneurial Execution.",
    description:
      "High-conviction operational agility, empowering portfolio executives to navigate inflection points and scale with velocity.",
  },
];

export default function LeadershipPhilosophy({ pillars = PILLARS }) {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#1C1C1C] font-liberation">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Centered Header Area */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C89B4B] sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CEA44D]" />
            <span>LEADERSHIP PHILOSOPHY</span>
          </div>

          <h2 className="mt-4 text-3xl font-normal leading-[1.12] tracking-tight text-[#16181A] sm:text-5xl lg:text-[54px]">
            Leadership With Purpose. Execution With Commitment.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#16181A] sm:text-[15px]">
            We align long-range foresight with disciplined execution, ensuring
            our companies possess enduring resilience across economic cycles.
          </p>
        </div>

        {/* 3-Column Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-14 lg:gap-7">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="flex flex-col rounded-2xl bg-[#CEA44D] p-7 text-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-8 lg:p-9"
              >
                {/* White Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#CDA24D] shadow-xs">
                  <IconComponent className="h-5 w-5 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-normal tracking-tight text-white sm:text-[22px]">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-[1.7] text-white sm:text-[13px]">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}