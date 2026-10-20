"use client";

import { useState } from "react";
import {
  Building2,
  ChartNoAxesCombined,
  Network,
  Landmark,
} from "lucide-react";
import Image from "next/image";

const SECTIONS = [
  {
    id: "capitalization",
    title: "Capitalization",
    description:
      "Strategic capital that fuels growth and enables execution.",
    icon: Building2,
    color: "#17191d",
  },
  {
    id: "sales",
    title: "Sales Expansion",
    description:
      "Strategic market development that opens new opportunities and accelerates revenue.",
    icon: ChartNoAxesCombined,
    color: "#CEA44D",
  },
  {
    id: "growth",
    title: "Growth Strategy",
    description:
      "Focused strategies that turn potential into sustainable, long-term value.",
    icon: Network,
    color: "#17191d",
  },
  {
    id: "infrastructure",
    title: "Business Infrastructure",
    description:
      "The systems, people, and processes required to build a scalable business.",
    icon: Landmark,
    color: "#9d9997",
  },
];

export default function Mantra() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full overflow-hidden bg-[#f6f4f0] px-4 sm:px-6 py-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        {/* =========================
            HEADING
        ========================== */}
        <div className="text-center">
          <h2 className="font-liberation text-3xl sm:text-4xl font-bold leading-none text-[#CEA44D]">
            The 1 + 1 = 11 Mantra
          </h2>

          <p className="font-liberation mt-3 text-lg sm:text-xl font-bold leading-[28px] sm:leading-[34px] text-[#17191d]">
            Creating Something That’s More <br />Than the Sum of Its Parts.
          </p>
        </div>

        {/* =========================
            DESKTOP INTERACTIVE AREA (≥ 901px)
        ========================== */}
        <div
          className="relative mx-auto mt-6 hidden aspect-[1.8/1] w-full max-w-[1100px] min-[901px]:block"
        >
          {/* =========================
              CAPITALIZATION TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute right-[76%] top-[27.3%] z-10 w-[24%] origin-right -translate-y-1/2 pr-3 text-left transition-all duration-300 ${
              active === "capitalization" ? "opacity-100 scale-[1.02]" : "opacity-90"
            }`}
          >
            <h3 className="font-liberation text-md font-bold leading-[22px] text-[#17191d]">
              Capitalization
            </h3>

            <p className="font-liberation mt-1 text-sm font-normal leading-[21px] text-[#17191d]">
              Strategic capital that fuels growth and enables execution.
            </p>
          </div>

          {/* Connector: Capitalization → Icon */}
          <div
            className={`pointer-events-none absolute right-[63.5%] top-[27.3%] z-10 h-px w-[12.5%] -translate-y-1/2 transition-all duration-300 ${
              active === "capitalization" ? "bg-[#17191d] h-[2px]" : "bg-[#9d9997]"
            }`}
          >
            <span
              className={`absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${
                active === "capitalization" ? "bg-[#17191d]" : "bg-[#9d9997]"
              }`}
            />
          </div>

          {/* =========================
              SALES EXPANSION TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute left-[76%] top-[27.3%] z-10 w-[28%] origin-left -translate-y-1/2 pl-3 transition-all duration-300 ${
              active === "sales" ? "opacity-100 scale-[1.02]" : "opacity-90"
            }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Sales Expansion
            </h3>

            <p className="font-liberation mt-1 text-sm font-normal leading-[21px] text-[#17191d]">
              Strategic market development that opens new opportunities and
              accelerates revenue.
            </p>
          </div>

          {/* Connector: Sales → Icon */}
          <div
            className={`pointer-events-none absolute left-[63.5%] top-[27.3%] z-10 h-px w-[12.5%] -translate-y-1/2 transition-all duration-300 ${
              active === "sales" ? "bg-[#CEA44D] h-[2px]" : "bg-[#c49227]"
            }`}
          >
            <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#CEA44D]" />
          </div>

          {/* =========================
              BUSINESS INFRASTRUCTURE TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute right-[76%] top-[72.7%] z-10 w-[25%] origin-right -translate-y-1/2 pr-3 text-left transition-all duration-300 ${
              active === "infrastructure" ? "opacity-100 scale-[1.02]" : "opacity-90"
            }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Business Infrastructure
            </h3>

            <p className="font-liberation mt-1 text-sm font-normal leading-[21px] text-[#17191d]">
              The systems, people, and processes required to build a scalable
              business.
            </p>
          </div>

          {/* Connector: Infrastructure → Icon */}
          <div
            className={`pointer-events-none absolute right-[63.5%] top-[72.7%] z-10 h-px w-[12.5%] -translate-y-1/2 transition-all duration-300 ${
              active === "infrastructure" ? "bg-[#17191d] h-[2px]" : "bg-[#9d9997]"
            }`}
          >
            <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#9d9997]" />
          </div>

          {/* =========================
              GROWTH STRATEGY TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute left-[76%] top-[72.7%] z-10 w-[27%] origin-left -translate-y-1/2 pl-3 transition-all duration-300 ${
              active === "growth" ? "opacity-100 scale-[1.02]" : "opacity-90"
            }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Growth Strategy
            </h3>

            <p className="font-liberation mt-1 text-sm font-normal leading-[21px] text-[#17191d]">
              Focused strategies that turn potential into sustainable,
              long-term value.
            </p>
          </div>

          {/* Connector: Growth → Icon */}
          <div
            className={`pointer-events-none absolute left-[63.5%] top-[72.7%] z-10 h-px w-[12.5%] -translate-y-1/2 transition-all duration-300 ${
              active === "growth" ? "bg-[#17191d] h-[2px]" : "bg-[#17191d]"
            }`}
          >
            <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#17191d]" />
          </div>

          {/* =========================
              CIRCLE + HOVER ARCS (SVG)
          ========================== */}
          <svg
            viewBox="0 0 800 560"
            className="absolute inset-0 z-10 h-full w-full"
          >
            {/* Capitalization hover arc */}
            <path
              d="M220 280 A180 180 0 0 1 400 100"
              fill="none"
              stroke="#000000"
              strokeOpacity="0"
              strokeWidth="55"
              pointerEvents="stroke"
              className="cursor-pointer"
              onMouseEnter={() => setActive("capitalization")}
              onMouseLeave={() => setActive(null)}
            />

            {/* Sales hover arc */}
            <path
              d="M400 100 A180 180 0 0 1 580 280"
              fill="none"
              stroke="#000000"
              strokeOpacity="0"
              strokeWidth="55"
              pointerEvents="stroke"
              className="cursor-pointer"
              onMouseEnter={() => setActive("sales")}
              onMouseLeave={() => setActive(null)}
            />

            {/* Growth hover arc */}
            <path
              d="M580 280 A180 180 0 0 1 400 460"
              fill="none"
              stroke="#000000"
              strokeOpacity="0"
              strokeWidth="55"
              pointerEvents="stroke"
              className="cursor-pointer"
              onMouseEnter={() => setActive("growth")}
              onMouseLeave={() => setActive(null)}
            />

            {/* Infrastructure hover arc */}
            <path
              d="M400 460 A180 180 0 0 1 220 280"
              fill="none"
              stroke="#000000"
              strokeOpacity="0"
              strokeWidth="55"
              pointerEvents="stroke"
              className="cursor-pointer"
              onMouseEnter={() => setActive("infrastructure")}
              onMouseLeave={() => setActive(null)}
            />

            {/* =========================
                VISIBLE CIRCLE ARCS
            ========================== */}

            {/* Sales Expansion */}
            <path
              d="M400 100 A180 180 0 0 1 580 280"
              fill="none"
              stroke="#CEA44D"
              strokeWidth={active === "sales" ? "12" : "9"}
              className="transition-all duration-300"
            />

            {/* Growth Strategy */}
            <path
              d="M580 280 A180 180 0 0 1 400 460"
              fill="none"
              stroke="#17191d"
              strokeWidth={active === "growth" ? "12" : "9"}
              className="transition-all duration-300"
            />

            {/* Business Infrastructure */}
            <path
              d="M400 460 A180 180 0 0 1 220 280"
              fill="none"
              stroke="#9d9997"
              strokeWidth={active === "infrastructure" ? "12" : "9"}
              className="transition-all duration-300"
            />

            {/* Capitalization */}
            <path
              d="M220 280 A180 180 0 0 1 400 100"
              fill="none"
              stroke="#17191d"
              strokeWidth={active === "capitalization" ? "12" : "9"}
              className="transition-all duration-300"
            />
          </svg>

          {/* =========================
              CENTER UG LOGO (HTML)
          ========================== */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Image
              src="/images/navbar/logo.png"
              alt="UG"
              priority
              className="object-contain w-[180px] h-[102px]"
              width={102}
              height={68}
            />
          </div>

          {/* =========================
              ICONS (DESKTOP)
          ========================== */}

          {/* Capitalization */}
          <button
            type="button"
            aria-label="Capitalization"
            onMouseEnter={() => setActive("capitalization")}
            onMouseLeave={() => setActive(null)}
            className={`absolute left-[34.1%] top-[27.3%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${
              active === "capitalization"
                ? "scale-110 border-[#17191d] shadow-md"
                : "border-[#9d9997]"
            }`}
          >
            <Building2
              size={24}
              strokeWidth={1.7}
              className={
                active === "capitalization"
                  ? "text-[#17191d]"
                  : "text-[#777370]"
              }
            />
          </button>

          {/* Sales Expansion */}
          <button
            type="button"
            aria-label="Sales Expansion"
            onMouseEnter={() => setActive("sales")}
            onMouseLeave={() => setActive(null)}
            className={`absolute left-[65.9%] top-[27.3%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${
              active === "sales"
                ? "scale-110 border-[#c49227] shadow-md"
                : "border-[#c49227]"
            }`}
          >
            <ChartNoAxesCombined
              size={24}
              strokeWidth={1.7}
              className="text-[#c49227]"
            />
          </button>

          {/* Growth Strategy */}
          <button
            type="button"
            aria-label="Growth Strategy"
            onMouseEnter={() => setActive("growth")}
            onMouseLeave={() => setActive(null)}
            className={`absolute left-[65.9%] top-[72.7%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${
              active === "growth"
                ? "scale-110 border-[#17191d] shadow-md"
                : "border-[#9d9997]"
            }`}
          >
            <Network
              size={24}
              strokeWidth={1.7}
              className={
                active === "growth" ? "text-[#17191d]" : "text-[#777370]"
              }
            />
          </button>

          {/* Business Infrastructure */}
          <button
            type="button"
            aria-label="Business Infrastructure"
            onMouseEnter={() => setActive("infrastructure")}
            onMouseLeave={() => setActive(null)}
            className={`absolute left-[34.1%] top-[72.7%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${
              active === "infrastructure"
                ? "scale-110 border-[#9d9997] shadow-md"
                : "border-[#9d9997]"
            }`}
          >
            <Landmark
              size={24}
              strokeWidth={1.7}
              className="text-[#777370]"
            />
          </button>
        </div>

        {/* =========================
            MOBILE & TABLET VIEW (< 901px)
        ========================== */}
        <div className="mt-8 block min-[901px]:hidden">
          {/* Circular Wheel */}
          <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
            <svg
              viewBox="0 0 300 300"
              className="absolute inset-0 h-full w-full"
            >
              {/* Sales Expansion Arc (Top-Right) */}
              <path
                d="M 150 60 A 90 90 0 0 1 240 150"
                fill="none"
                stroke="#CEA44D"
                strokeWidth={active === "sales" ? "9" : "6"}
                className="transition-all duration-300"
              />

              {/* Growth Strategy Arc (Bottom-Right) */}
              <path
                d="M 240 150 A 90 90 0 0 1 150 240"
                fill="none"
                stroke="#17191d"
                strokeWidth={active === "growth" ? "9" : "6"}
                className="transition-all duration-300"
              />

              {/* Business Infrastructure Arc (Bottom-Left) */}
              <path
                d="M 150 240 A 90 90 0 0 1 60 150"
                fill="none"
                stroke="#9d9997"
                strokeWidth={active === "infrastructure" ? "9" : "6"}
                className="transition-all duration-300"
              />

              {/* Capitalization Arc (Top-Left) */}
              <path
                d="M 60 150 A 90 90 0 0 1 150 60"
                fill="none"
                stroke="#17191d"
                strokeWidth={active === "capitalization" ? "9" : "6"}
                className="transition-all duration-300"
              />
            </svg>

            {/* Center Logo */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <Image
                src="/images/navbar/logo.png"
                alt="UG"
                priority
                className="object-contain w-[72px] h-[48px]"
                width={72}
                height={48}
              />
            </div>

            {/* 4 Interactive Buttons */}
            {/* Capitalization (Top-Left) */}
            <button
              type="button"
              aria-label="Capitalization"
              onClick={() => setActive(active === "capitalization" ? null : "capitalization")}
              className={`absolute left-[28.8%] top-[28.8%] z-20 flex h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 ${
                active === "capitalization"
                  ? "scale-110 border-[#17191d] shadow-md bg-white"
                  : "border-[#9d9997]"
              }`}
            >
              <Building2
                size={20}
                strokeWidth={1.8}
                className={active === "capitalization" ? "text-[#17191d]" : "text-[#777370]"}
              />
            </button>

            {/* Sales Expansion (Top-Right) */}
            <button
              type="button"
              aria-label="Sales Expansion"
              onClick={() => setActive(active === "sales" ? null : "sales")}
              className={`absolute left-[71.2%] top-[28.8%] z-20 flex h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 ${
                active === "sales"
                  ? "scale-110 border-[#CEA44D] shadow-md bg-white"
                  : "border-[#CEA44D]"
              }`}
            >
              <ChartNoAxesCombined
                size={20}
                strokeWidth={1.8}
                className="text-[#CEA44D]"
              />
            </button>

            {/* Growth Strategy (Bottom-Right) */}
            <button
              type="button"
              aria-label="Growth Strategy"
              onClick={() => setActive(active === "growth" ? null : "growth")}
              className={`absolute left-[71.2%] top-[71.2%] z-20 flex h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 ${
                active === "growth"
                  ? "scale-110 border-[#17191d] shadow-md bg-white"
                  : "border-[#9d9997]"
              }`}
            >
              <Network
                size={20}
                strokeWidth={1.8}
                className={active === "growth" ? "text-[#17191d]" : "text-[#777370]"}
              />
            </button>

            {/* Business Infrastructure (Bottom-Left) */}
            <button
              type="button"
              aria-label="Business Infrastructure"
              onClick={() => setActive(active === "infrastructure" ? null : "infrastructure")}
              className={`absolute left-[28.8%] top-[71.2%] z-20 flex h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 ${
                active === "infrastructure"
                  ? "scale-110 border-[#9d9997] shadow-md bg-white"
                  : "border-[#9d9997]"
              }`}
            >
              <Landmark
                size={20}
                strokeWidth={1.8}
                className="text-[#777370]"
              />
            </button>
          </div>

          {/* 4 Cards Grid for Tablet & Mobile */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px] mx-auto">
            {SECTIONS.map((sec) => {
              const Icon = sec.icon;
              const isSelected = active === sec.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => setActive(isSelected ? null : sec.id)}
                  className={`cursor-pointer rounded-lg border p-4 transition-all duration-200 text-left ${
                    isSelected
                      ? "border-[#CEA44D] bg-[#fbf9f4] shadow-sm ring-1 ring-[#CEA44D]"
                      : "border-[#e5e0d8] bg-white/70 hover:bg-white hover:border-[#cfc9be]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isSelected
                          ? "border-[#CEA44D] bg-[#CEA44D]/10 text-[#CEA44D]"
                          : "border-[#d8d3c9] bg-white text-[#17191d]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-liberation text-[16px] font-bold leading-tight text-[#17191d]">
                      {sec.title}
                    </h3>
                  </div>

                  <p className="font-liberation mt-2.5 text-[13.5px] font-normal leading-[20px] text-[#4a4d52]">
                    {sec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <p
          className="font-liberation mx-auto mt-8 sm:mt-10 max-w-[1000px] text-center text-base sm:text-lg font-normal leading-[25px] sm:leading-[28px] text-[#25272a] px-2"
          style={{ fontFamily: '"Liberation Sans", sans-serif' }}
        >
          We bring together{" "}
          <strong style={{ fontFamily: '"Liberation Sans", sans-serif' }}>
            Capitalization, Business Infrastructure, Sales Expansion,
            <br className="hidden md:block" /> and Growth Strategy
          </strong>{" "}
          as one integrated system — creating greater value than any
          <br className="hidden md:block" /> single capability could deliver
          alone.
        </p>
      </div>
    </section>
  );
}