import React from "react";
import Link from "next/link";

const HIGHLIGHTS = [
  "Institutional Rigor",
  "Decades of Global Experience",
  "Enduring Value Creation",
];

export default function ExecutiveInvitation({
  badge = "EXECUTIVE INVITATION",
  title = "Strong Leadership. Greater Possibilities.",
  subtitle = "Building stronger businesses and creating opportunities for the future.",
  primaryCta = { label: "EXPLORE OUR VENTURES", href: "/ventures" },
  secondaryCta = { label: "SCHEDULE CONSULTATION", href: "/contact" },
  highlights = HIGHLIGHTS,
}) {
  return (
    <section className="w-full bg-[#F8F6F0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 font-libration">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-[#CEA44D] px-6 py-12 text-center text-white shadow-[0_14px_34px_rgba(205,162,77,0.22)] sm:rounded-[28px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/95 sm:text-[11px]">
            {badge}
          </div>

          {/* Main Headline */}
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            {title}
          </h2>

          {/* Supporting Subtitle */}
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-white/90 sm:mt-5 sm:max-w-lg sm:text-sm">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:mt-9 sm:flex-row sm:gap-4">
            <Link
              href={primaryCta.href}
              className="w-full rounded-md bg-white px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1C1917] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAF8F3] sm:w-auto sm:px-7 sm:text-[11px]"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="w-full rounded-md border border-white/45 bg-transparent px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:w-auto sm:px-7 sm:text-[11px]"
            >
              {secondaryCta.label}
            </Link>
          </div>

          {/* Bottom Divider & Highlights */}
          <div className="mx-auto mt-10 max-w-2xl border-t border-white/25 pt-6 sm:mt-12 sm:pt-7">
            <ul className="flex flex-col items-center justify-center gap-2 text-[11px] text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:text-xs">
              {highlights.map((item, idx) => (
                <React.Fragment key={item}>
                  <li>{item}</li>
                  {idx < highlights.length - 1 && (
                    <li
                      aria-hidden="true"
                      className="hidden text-white/50 sm:inline"
                    >
                      •
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}