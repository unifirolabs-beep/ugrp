"use client";

import { useRef } from "react";
import Image from "next/image";

// ==========================================
// ASSET PATH CONSTANTS
// Local image assets matching the Figma export
// ==========================================
const GREEN_FOUNDER = "/images/ventures/Frame56.png";
const ORANGE_FOUNDER = "/images/ventures/Frame57.png";

// ==========================================
// HERO 9-CARD ARCH CONFIGURATION
// Pixel-accurate coordinates & styles from Figma
// Used to form the hero floating portrait arch
// ==========================================
const EXACT_9_CARDS = [
  // 1. Far Left (Upper) - Green
  {
    id: 1,
    img: "/images/ventures/Frame56.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      left: "59px",
      top: "40px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 2. Far Left (Lower) - White
  {
    id: 2,
    img: "/images/ventures/Frame57.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      top: "270px",
      left: "59px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 3. Inner Left - White
  {
    id: 3,
    img: "/images/ventures/Frame57.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "183px",
      height: "206px",
      top: "140px",
      left: "261px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 4. Center-Left (Upper) - Green
  {
    id: 4,
    img: "/images/ventures/Frame56.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "183px",
      height: "206px",
      top: "35px",
      left: "464px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 5. Center (Directly above headline) - White
  {
    id: 5,
    img: "/images/ventures/Frame57.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      top: "160px",
      left: "668px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 6. Center-Right (Upper) - White
  {
    id: 6,
    img: "/images/ventures/Frame57.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      top: "25px",
      left: "874px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 7. Inner Right - Green
  {
    id: 7,
    img: "/images/ventures/Frame56.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      top: "190px",
      left: "1081px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 8. Far Right (Upper) - Green
  {
    id: 8,
    img: "/images/ventures/Frame57.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      top: "25px",
      left: "1288px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
  // 9. Far Right (Lower) - White
  {
    id: 9,
    img: "/images/ventures/Frame56.png",
    bgColor: "bg-[#8FA867]/40",
    borderColor: "border-[#CEA44D]",
    personColor: "#2F4A32",
    style: {
      width: "182px",
      height: "206px",
      top: "260px",
      left: "1288px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
  },
];

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
    image: ORANGE_FOUNDER,
    founderName: "Founder Name",
    founderRole: "co-founder",
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
    buttonText: "EXPLORE JUJU LABS →",
    image: GREEN_FOUNDER,
    founderName: "Founder Name",
    founderRole: "co-founder",
  },
];

export default function Hero() {
  const sliderRef = useRef(null);

  // Smooth scroll handler to jump directly down to the portfolio showcase
  const handleScrollToVentures = () => {
    const section = document.getElementById("ventures-showcase");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* Contains floating arch of 9 cards and headline callout    */}
      {/* ========================================================= */}
      <section className="relative w-full flex flex-col items-center justify-start pt-6 sm:pt-10 pb-16 px-4">
        {/* DESKTOP 9-CARD ARCH (Enabled on xl+ screens with scroll safety) */}
        <div className="hidden xl:block w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="relative w-[1440px] min-w-[1440px] h-[480px] mx-auto pointer-events-none">
            {EXACT_9_CARDS.map((card) => (
              <div
                key={card.id}
                style={card.style}
                className={`absolute w-[182px] h-[206px] rounded-[14px] border-[2.5px] border-[#CEA44D] ${card.bgColor} overflow-hidden shadow-sm flex items-end justify-center transition-transform duration-300 hover:scale-105 pointer-events-auto`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.img}
                    alt="Venture Leader"
                    fill
                    unoptimized
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESPONSIVE FALLBACK ROW (Rendered for viewports below 1280px / high zoom) */}
        <div className="xl:hidden w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {EXACT_9_CARDS.slice(0, 5).map((card) => (
            <div
              key={card.id}
              className={`w-[110px] h-[130px] sm:w-[130px] sm:h-[155px] rounded-[12px] border-[2px] border-[#CEA44D] ${card.bgColor} overflow-hidden relative shadow-sm flex items-end justify-center`}
            >
              <Image
                src={card.img}
                alt="Venture Leader"
                fill
                unoptimized
                className="object-contain object-bottom"
              />
            </div>
          ))}
        </div>

        {/* HERO CORE TEXT & CTA */}
        <div className="relative z-10 max-w-[680px] mx-auto text-center flex flex-col items-center mt-3 sm:mt-6 px-4">
          <h1 className="font-['Libertinus_Sans'] font-bold not-italic text-[40px] leading-[100%] tracking-[0%] text-center text-neutral-900">
            We Don&apos;t Just Invest in Ideas. <br />
            <span className="font-['Libertinus_Sans'] font-bold not-italic text-[40px] leading-[100%] tracking-[0%] text-center text-[#C89B3C]">
              We Build Them.
            </span>
          </h1>

          <p className="mt-5 max-w-[600px] text-[16px] sm:text-[18px] leading-[1.4] text-[#222529] font-normal not-italic tracking-[0%] font-['Libertinus_Sans']">
            The U Group builds and operates ventures across science,
            pharmaceuticals, and AI—turning overlooked potential into lasting
            value through capital, strategy, and execution.
          </p>

          <p className="mt-4 text-[13px] sm:text-[14px] leading-[21px] font-bold tracking-[0.14em] uppercase text-[#16181A] font-['Libertinus_Sans']">
            Ownership. Partnership. Conviction.
          </p>

          <button
            type="button"
            onClick={handleScrollToVentures}
            className="mt-6 w-[207px] h-[32px] inline-flex items-center justify-center gap-1 rounded-[3px] bg-[#C89B3C] hover:bg-[#b3882e] text-white text-[12px] font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer font-sans"
          >
            Explore Our Ventures →
          </button>
        </div>

        {/* SECTION DIVIDER HEADER */}
        <div className="relative z-10 mt-20 sm:mt-24 text-center px-4">
          <h2 className="text-[20px] sm:text-[24px] font-bold uppercase tracking-[0.12em] text-[#111315] font-['Libertinus_Sans']">
            PORTFOLIO & PARTNERSHIPS
          </h2>
          <p className="mt-1.5 text-[14px] sm:text-[16px] text-[#555A60] font-normal font-['Libertinus_Sans']">
            Three Ventures. Three Frontiers. One Conviction.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. VERTICAL VENTURES SHOWCASE                             */}
      {/* Vertical list displaying full venture profile cards       */}
      {/* ========================================================= */}
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
                {/* ----------------------------------------------- */}
                {/* LEFT COLUMN: Founder Portrait & Badge Card     */}
                {/* ----------------------------------------------- */}
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
                    <div className="absolute bottom-6 left-6 z-10 text-white font-['Libertinus_Sans']">
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

                {/* ----------------------------------------------- */}
                {/* RIGHT COLUMN: Venture Copy, Tags, & Buttons    */}
                {/* ----------------------------------------------- */}
                <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:px-2 font-['Libertinus_Sans']">
                  <div>
                    {/* Header Titles */}
                    <h3 className="text-[28px] sm:text-[32px] font-bold tracking-[0.04em] uppercase text-white font-['Libertinus_Sans']">
                      {venture.title}
                    </h3>
                    <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-400 mt-1 font-mono">
                      {venture.tagline}
                    </p>

                    {/* Core Proposition & Paragraph */}
                    <h4 className="text-[19px] sm:text-[21px] font-bold mt-7 text-neutral-100 font-['Libertinus_Sans']">
                      {venture.lead}
                    </h4>
                    <p className="mt-3 text-[14px] sm:text-[15px] leading-[24px] text-neutral-300 font-normal max-w-2xl font-['Libertinus_Sans']">
                      {venture.description}
                    </p>

                    {/* Focus Area Pill Tags */}
                    <div className="mt-8">
                      <p className="text-[11px] uppercase font-bold tracking-[0.14em] text-neutral-400 mb-3 font-mono">
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {venture.focusAreas.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 rounded-full text-[12px] text-neutral-200 border border-neutral-700/80 bg-[#212327] font-['Libertinus_Sans']"
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
                            className="p-5 rounded-[14px] border border-neutral-800/80 bg-[#1E2024]/70"
                          >
                            <p className="text-[15px] font-bold text-white font-['Libertinus_Sans']">
                              {h.title}
                            </p>
                            <p className="text-[12.5px] text-neutral-400 mt-1.5 leading-relaxed font-['Libertinus_Sans']">
                              {h.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : venture.highlightBox ? (
                      <div className="mt-8 p-5 rounded-[14px] border border-neutral-800/80 bg-[#1E2024]/70 max-w-lg">
                        <p className="text-[14px] text-neutral-200 leading-relaxed font-['Libertinus_Sans'] font-medium">
                          {venture.highlightBox}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Primary Exploration Action Button */}
                  <div className="mt-10 pt-2">
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[4px] bg-white hover:bg-neutral-100 text-neutral-950 text-[11px] font-bold tracking-wider uppercase transition cursor-pointer font-mono shadow-sm">
                      {venture.buttonText}
                    </button>
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