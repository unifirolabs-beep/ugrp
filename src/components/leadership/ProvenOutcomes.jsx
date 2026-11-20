import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CASE_STUDIES = [
  {
    tags: ["#FINTECH", "#SCALE"],
    title: "FinTech Platform Modernization",
    description:
      "Accelerating transaction clearing speed by 340% for a Tier-1 cross-border payment provider with sub-second SLA verification.",
    metricValue: "+340%",
    metricLabel: "THROUGHPUT",
    href: "#fintech-modernization",
  },
  {
    tags: ["#LOGISTICS", "#AI"],
    title: "Global Supply Chain Intelligence",
    description:
      "Unified real-time fleet telematics and predictive inventory forecasting delivering $18M annual logistics savings.",
    metricValue: "$18M",
    metricLabel: "COST REDUCTION",
    href: "#supply-chain-intelligence",
  },
  {
    tags: ["#CLOUD", "#ENTERPRISE"],
    title: "Enterprise SaaS Transition",
    description:
      "Migrating monolithic legacy ERP architecture to multi-tenant distributed cloud with verified 99.99% uptime compliance.",
    metricValue: "99.99%",
    metricLabel: "AVAILABILITY",
    href: "#enterprise-saas-transition",
  },
];

export default function ProvenOutcomes({ cases = CASE_STUDIES }) {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#1C1C1C] font-liberation">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Top Header Area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#4A4742] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1C1917]" />
              <span>PROVEN OUTCOMES</span>
            </div>

            <h2 className="mt-4 text-3xl font-normal leading-[1.1] tracking-tight text-[#141414] sm:text-5xl lg:text-[50px]">
              Transforming Ambition into Market Leadership
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-relaxed text-[#57534E] sm:text-sm lg:pb-1">
            A snapshot of how our strategic interventions drive tangible revenue
            acceleration and operating leverage.
          </p>
        </div>

        {/* 3-Column Case Study Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-14 lg:gap-7">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col justify-between rounded-2xl border border-[#ECE8DF] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.05)] sm:p-8"
            >
              <div>
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#E6E2D8] bg-[#FAF9F5] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#57534E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-normal leading-snug tracking-tight text-[#1C1917] sm:text-[22px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-[1.7] text-[#57534E] sm:text-[13px]">
                  {item.description}
                </p>
              </div>

              {/* Bottom Divider & Metric Footer */}
              <div className="mt-8 border-t border-[#F0EDE6] pt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-2xl font-normal tracking-tight text-[#0C0A09] sm:text-[26px]">
                      {item.metricValue}
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#78716C]">
                      {item.metricLabel}
                    </div>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 pb-0.5 text-xs font-medium text-[#1C1917] transition-colors hover:text-[#A88446]"
                  >
                    <span>Read case</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}