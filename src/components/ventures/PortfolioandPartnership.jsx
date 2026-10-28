"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// ASSET PATH CONSTANTS
// Local image assets matching the Figma export
// ==========================================
const GREEN_FOUNDER = "/images/ventures/Frame56.png";
const ORANGE_FOUNDER = "/images/ventures/Frame57.png";

// ==========================================
// VENTURE PORTFOLIO DATA
// Card content and detailed profile attributes
// ==========================================
const VENTURES_DATA = [
  {
    id: "juju-labs",
    title: "JUJU LABS",
    tagline: "WINE & BEVERAGE INNOVATION",
    lead: "Rethinking the Relationship Between Wine & Food.",
    description:
      "Juju Labs applies the science of umami and kokumi to winemaking, creating wines designed to complement cuisine rather than simply follow traditional pairing conventions. What began as a home-lab experiment during the pandemic evolved into Next World Wines, a partnership with Angelina Mondavi & Family.",
    focusAreas: ["Food Science", "Wine Innovation", "Consumer Products"],
    highlights: [
      {
        title: "Kokumi Wines",
        desc: "Avantera and private reserve wines for complex international cuisine.",
      },
      {
        title: "Ujumami",
        desc: "Umami-forward wines for casual dining.",
      },
    ],
    buttonText: "EXPLORE JUJU LABS →",
    image: GREEN_FOUNDER,
    founderName: "Founder Name",
    founderRole: "co-founder",
    href:"https://www.jujuwinelab.com/"
  },
  {
    id: "bioved",
    title: "BIOVED PHARMACEUTICALS",
    tagline: "INTEGRATIVE PHARMACEUTICALS",
    lead: "Natural Medicine. Modern Scientific Rigor.",
    description:
      "Bioved Pharmaceuticals develops plant-based pharmaceuticals and nutraceuticals through its proprietary NRXmodel, applying the discipline of modern drug discovery to natural medicine. Its work spans chemistry, biology, pharmacology, toxicology, and clinical testing across human and animal health.",
    focusAreas: ["Bone Health", "Joint Health", "Mobility", "Pain & Inflammation"],
    highlightBox:
      "Bioved is also the scientific foundation of The U Group's Next World Medicine initiative.",
    buttonText: "EXPLORE BIOVED →",
    image: "/images/ventures/bioved.png",
    founderName: "Founder Name",
    founderRole: "co-founder",
    href:"https://bioved.com/"
  },
  {
    id: "veniq",
    title: "VENIQ",
    tagline: "AI VENTURE INTELLIGENCE",
    lead: "Intelligence for the Entrepreneurial Journey.",
    description:
      "VenIQ is an AI-native venture intelligence platform built to help entrepreneurs make better decisions, identify risks earlier, and avoid preventable failures. Its Venture IQ Score combines venture memory, intelligent guardrails, and decision intelligence to provide founders with continuous insight as they build.",
    focusAreas: ["Artificial Intelligence", "Venture Intelligence", "Entrepreneurship"],
    highlightBox: "Passion starts ventures. Intelligence sustains them.",
    buttonText: "EXPLORE VenIQ →",
    image: "/images/ventures/veniq.jpg",
    founderName: "Founder Name",
    founderRole: "co-founder",
    href:"#"
  },
];

export default function PortfolioAndPartnership() {
  const sliderRef = useRef(null);

  // Vertical programmatic scroll controls for the venture cards section
  const scrollSlide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 800;
      sliderRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#f6f4f0] text-[#111315] font-sans overflow-x-hidden">
      {/* SECTION DIVIDER HEADER */}
      <div className="relative z-10 pt-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.12em] text-[#111315]">
          PORTFOLIO & PARTNERSHIPS
        </h2>
        <p className="mt-1.5 text-md md:text-xl text-[#555A60] font-normal">
          Three Ventures. Three Frontiers. One Conviction.
        </p>
      </div>

      {/* VERTICAL VENTURES SHOWCASE */}
      <section
        id="ventures-showcase"
        className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-6 pb-24 relative"
      >
        {/* Navigation Arrow Controls (Up / Down) */}
        <div className="flex justify-end gap-2 mb-4 pr-2">
          <button
            onClick={() => scrollSlide("up")}
            aria-label="Previous Slide"
            className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-sm font-bold text-neutral-800 transition cursor-pointer shadow-sm"
          >
            ↑
          </button>
          <button
            onClick={() => scrollSlide("down")}
            aria-label="Next Slide"
            className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-sm font-bold text-neutral-800 transition cursor-pointer shadow-sm"
          >
            ↓
          </button>
        </div>

        {/* Vertical Stack Track */}
        <div
          ref={sliderRef}
          className="flex flex-col gap-10 overflow-y-auto scroll-smooth snap-y snap-mandatory pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {VENTURES_DATA.map((venture) => (
            <div
              key={venture.id}
              className="w-full max-w-[1330px] mx-auto snap-center rounded-[24px] overflow-hidden bg-[#161719] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* LEFT COLUMN: Founder Portrait & Badge Card */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="relative w-full aspect-[430/540] max-h-[580px] rounded-[18px] overflow-hidden border-[3px] border-[#CEA44D] bg-transparent">
                    <Image
                      src={venture.image}
                      alt={venture.founderName}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />

                    {/* Founder Overlay Details (Bottom Left) */}
                    <div className="absolute bottom-6 left-6 z-10 text-white">
                      <p className="text-[22px] font-bold leading-none drop-shadow-sm">
                        {venture.founderName}
                      </p>
                      <p className="text-[14px] text-neutral-200 lowercase mt-1 drop-shadow-sm">
                        {venture.founderRole}
                      </p>
                      <div className="mt-3 w-6 h-6 rounded-[2px] bg-neutral-950/80 flex items-center justify-center text-[11px] font-bold text-neutral-200 border border-white/10 font-sans">
                        in
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Venture Copy, Tags, & Buttons */}
                <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:px-2">
                  <div>
                    {/* Header Titles */}
                    <h3 className="text-2xl md:text-4xl font-bold tracking-[0.04em] uppercase text-white">
                      {venture.title}
                    </h3>
                    <p className="text-lg md:text-2xl uppercase tracking-[0.18em] text-white">
                      {venture.tagline}
                    </p>

                    {/* Core Proposition & Paragraph */}
                    <h4 className="text-xl md:text-2xl font-bold mt-7">
                      {venture.lead}
                    </h4>
                    <p className="mt-3 text-md md:text-lg leading-[24px] font-normal max-w-2xl">
                      {venture.description}
                    </p>

                    {/* Focus Area Pill Tags */}
                    <div className="mt-8">
                      <p className="text-md uppercase font-bold tracking-[0.14em] mb-3">
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {venture.focusAreas.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 rounded-xl text-md border border-white bg-[#212327]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights Cards or Single Blockquote Callout */}
                    {venture.highlights ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {venture.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="p-5 rounded-xl border border-white bg-[#1E2024]/70"
                          >
                            <p className="text-md font-bold text-white">
                              {h.title}
                            </p>
                            <p className="text-sm mt-1.5 leading-relaxed">
                              {h.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : venture.highlightBox ? (
                      <div className="mt-8 p-5 rounded-xl border border-white bg-[#1E2024]/70 max-w-lg">
                        <p className="text-lg leading-relaxed font-medium">
                          {venture.highlightBox}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Primary Exploration Action Button */}
                  <div className="mt-10 pt-2">
                    <Link href={venture.href} target="_blank" rel="noopener noreferrer">
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[4px] bg-white hover:bg-neutral-100 text-neutral-950 text-[11px] font-bold tracking-wider uppercase transition cursor-pointer shadow-sm">
                      {venture.buttonText}
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
