"use client";

import { useState } from "react";
import {
  Building2,
  ChartNoAxesCombined,
  Network,
  Landmark,
} from "lucide-react";

const SECTIONS = [
  {
    id: "capitalization",
    title: "Capitalization",
    description:
      "Strategic capital that fuels growth and enables execution.",
    icon: Building2,
  },
  {
    id: "sales",
    title: "Sales Expansion",
    description:
      "Strategic market development that opens new opportunities and accelerates revenue.",
    icon: ChartNoAxesCombined,
  },
  {
    id: "growth",
    title: "Growth Strategy",
    description:
      "Focused strategies that turn potential into sustainable, long-term value.",
    icon: Network,
  },
  {
    id: "infrastructure",
    title: "Business Infrastructure",
    description:
      "The systems, people, and processes required to build a scalable business.",
    icon: Landmark,
  },
];

export default function Mantra() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full overflow-hidden bg-[#f6f4f0] px-6 py-16 md:px-[5vw] md:py-[5vw]">
      <div className="mx-auto max-w-[1400px]">
        {/* =========================
            HEADING
        ========================== */}
        <div className="text-center">
          <h2 className="font-liberation text-[34px] font-bold leading-[40px] text-[#c49227]">
            The 1 + 1 = 11 Mantra
          </h2>

          <p className="font-liberation mt-2 text-[24px] font-bold leading-[30px] text-[#17191d]">
            More Than the Sum of Its Parts.
          </p>
        </div>

        {/* =========================
            MAIN INTERACTIVE AREA
        ========================== */}
        <div
          className="relative mx-auto mt-10 aspect-[1.45/1] w-full max-w-[1100px] md:mt-[3vw]"
          onMouseLeave={() => setActive(null)}
        >
          {/* =========================
              CAPITALIZATION TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute right-[76%] top-[27.3%] z-10 w-[23%] origin-right -translate-y-1/2 pr-3 text-right transition-all duration-500 md:right-[76%] md:top-[27.3%] md:w-[24%] ${active === null
              ? "scale-100 opacity-[0.035]"
              : active === "capitalization"
                ? "scale-110 opacity-100"
                : "scale-100 opacity-[0.035]"
              }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Capitalization
            </h3>

            <p className="font-liberation mt-1 text-[13px] font-normal leading-[21px] text-[#17191d]">
              Strategic capital that fuels growth and enables execution.
            </p>
          </div>

          {/* Connector: Capitalization → Icon */}
          <div
            className={`pointer-events-none absolute right-[63.5%] top-[27.3%] z-10 h-px w-[12.5%] -translate-y-1/2 bg-[#9d9997] transition-opacity duration-500 ${active === "capitalization" ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#9d9997]" />
          </div>

          {/* =========================
              SALES EXPANSION TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute left-[76%] top-[27.3%] z-10 w-[28%] origin-left -translate-y-1/2 pl-3 transition-all duration-500 md:left-[76%] md:top-[27.3%] md:w-[28%] ${active === null
              ? "scale-100 opacity-[0.035]"
              : active === "sales"
                ? "scale-110 opacity-100"
                : "scale-100 opacity-[0.035]"
              }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Sales Expansion
            </h3>

            <p className="font-liberation mt-1 text-[13px] font-normal leading-[21px] text-[#17191d]">
              Strategic market development that opens new opportunities and
              accelerates revenue.
            </p>
          </div>

          {/* Connector: Sales → Icon */}
          <div
            className={`pointer-events-none absolute left-[63.5%] top-[27.3%] z-10 h-px w-[12.5%] -translate-y-1/2 bg-[#c49227] transition-opacity duration-500 ${active === "sales" ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#c49227]" />
          </div>

          {/* =========================
              BUSINESS INFRASTRUCTURE TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute right-[76%] top-[72.7%] z-10 w-[25%] origin-right -translate-y-1/2 pr-3 text-right transition-all duration-500 md:right-[76%] md:top-[72.7%] md:w-[25%] ${active === null
              ? "scale-100 opacity-[0.035]"
              : active === "infrastructure"
                ? "scale-110 opacity-100"
                : "scale-100 opacity-[0.035]"
              }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Business Infrastructure
            </h3>

            <p className="font-liberation mt-1 text-[13px] font-normal leading-[21px] text-[#17191d]">
              The systems, people, and processes required to build a scalable
              business.
            </p>
          </div>

          {/* Connector: Infrastructure → Icon */}
          <div
            className={`pointer-events-none absolute right-[63.5%] top-[72.7%] z-10 h-px w-[12.5%] -translate-y-1/2 bg-[#9d9997] transition-opacity duration-500 ${active === "infrastructure" ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#9d9997]" />
          </div>

          {/* =========================
              GROWTH STRATEGY TEXT
          ========================== */}
          <div
            className={`pointer-events-none absolute left-[76%] top-[72.7%] z-10 w-[27%] origin-left -translate-y-1/2 pl-3 transition-all duration-500 md:left-[76%] md:top-[72.7%] md:w-[27%] ${active === null
              ? "scale-100 opacity-[0.035]"
              : active === "growth"
                ? "scale-110 opacity-100"
                : "scale-100 opacity-[0.035]"
              }`}
          >
            <h3 className="font-liberation text-[16px] font-bold leading-[22px] text-[#17191d]">
              Growth Strategy
            </h3>

            <p className="font-liberation mt-1 text-[13px] font-normal leading-[21px] text-[#17191d]">
              Focused strategies that turn potential into sustainable,
              long-term value.
            </p>
          </div>

          {/* Connector: Growth → Icon */}
          <div
            className={`pointer-events-none absolute left-[63.5%] top-[72.7%] z-10 h-px w-[12.5%] -translate-y-1/2 bg-[#17191d] transition-opacity duration-500 ${active === "growth" ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#17191d]" />
          </div>

          {/* =========================
              CIRCLE + HOVER ARCS
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
            />

            {/* =========================
                VISIBLE CIRCLE
            ========================== */}

            {/* Sales Expansion */}
            <path
              d="M400 100 A180 180 0 0 1 580 280"
              fill="none"
              stroke="#c49227"
              strokeWidth="9"
            />

            {/* Growth Strategy */}
            <path
              d="M580 280 A180 180 0 0 1 400 460"
              fill="none"
              stroke="#17191d"
              strokeWidth="9"
            />

            {/* Business Infrastructure */}
            <path
              d="M400 460 A180 180 0 0 1 220 280"
              fill="none"
              stroke="#9d9997"
              strokeWidth="9"
            />

            {/* Capitalization */}
            <path
              d="M220 280 A180 180 0 0 1 400 100"
              fill="none"
              stroke="#17191d"
              strokeWidth="9"
            />

            {/* =========================
                CENTER UG
            ========================== */}

            <text
              x="400"
              y="300"
              textAnchor="middle"
              fontSize="70"
              fontWeight="700"
              fill="#34363a"
              style={{ fontFamily: '"Liberation Sans", sans-serif' }}
            >
              U
              <tspan fill="#c49227">G</tspan>
            </text>

            <text
              x="400"
              y="325"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              letterSpacing="2"
              fill="#aaa6a3"
              style={{ fontFamily: '"DejaVu Sans Mono", monospace' }}
            >
              EXIT ENGINEERED EXECUTION.
            </text>
          </svg>

          {/* =========================
              ICONS
          ========================== */}

          {/* Capitalization */}
          <button
            type="button"
            aria-label="Capitalization"
            onMouseEnter={() => setActive("capitalization")}
            className={`absolute left-[34.1%] top-[27.3%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${active === "capitalization"
              ? "scale-110 border-[#17191d]"
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
            className={`absolute left-[65.9%] top-[27.3%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${active === "sales"
              ? "scale-110 border-[#c49227]"
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
            className={`absolute left-[65.9%] top-[72.7%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${active === "growth"
              ? "scale-110 border-[#17191d]"
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
            className={`absolute left-[34.1%] top-[72.7%] z-20 flex aspect-square w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f6f4f0] transition-all duration-300 md:w-[4.2vw] ${active === "infrastructure"
              ? "scale-110 border-[#9d9997]"
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
            BOTTOM STATEMENT
        ========================== */}
        <p
          className="font-liberation mx-auto mt-4 max-w-[1000px] text-center text-[13px] font-normal leading-[21px] text-[#25272a]"
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