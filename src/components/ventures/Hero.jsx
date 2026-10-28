"use client";

import Image from "next/image";

// ==========================================
// HERO 9-CARD CONFIGURATION
// Transparent cutouts: person 1 to person 7
// Clean data objects: style, bgColor, borderColor, and personColor removed
// ==========================================
const EXACT_9_CARDS = [
  { id: 1, img: "/images/ventures/person1.png" },
  { id: 2, img: "/images/ventures/person2.png" },
  { id: 3, img: "/images/ventures/person3.png" },
  { id: 4, img: "/images/ventures/person4.png" },
  { id: 5, img: "/images/ventures/person5.png" },
  { id: 6, img: "/images/ventures/person6.png" },
  { id: 7, img: "/images/ventures/person7.png" },
  { id: 8, img: "/images/ventures/person8.png" },
  { id: 9, img: "/images/ventures/person10.png" },
];

// Staggered arch coordinates for the 9 floating cards
const CARD_POSITIONS = [
  { left: "59px", top: "40px" },
  { left: "59px", top: "270px" },
  { left: "261px", top: "140px" },
  { left: "464px", top: "35px" },
  { left: "668px", top: "160px" },
  { left: "874px", top: "25px" },
  { left: "1081px", top: "190px" },
  { left: "1288px", top: "25px" },
  { left: "1288px", top: "260px" },
];

export default function Hero() {
  // Smooth scroll handler to jump directly down to the portfolio showcase
  const handleScrollToVentures = () => {
    const section = document.getElementById("ventures-showcase");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#f6f4f0] text-[#111315] font-sans overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* Contains floating arch of 9 cards and headline callout    */}
      {/* ========================================================= */}
      <section className="relative w-full flex flex-col items-center justify-start pt-6 sm:pt-10 pb-12 overflow-hidden">
        {/* INFINITE HORIZONTAL SCROLLING ARCH (Unified for mobile & desktop) */}
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-infinite-marquee">
            {/* First Set of 9-Card Arch */}
            <div className="relative w-[1440px] min-w-[1440px] h-[480px] shrink-0">
              {EXACT_9_CARDS.map((card, index) => {
                const pos = CARD_POSITIONS[index % CARD_POSITIONS.length];
                const bgColor =
                  index % 2 === 0 ? "bg-[#8FA867]/40" : "bg-white";

                return (
                  <div
                    key={`set1-${card.id}-${index}`}
                    style={pos}
                    className={`absolute w-[182px] h-[206px] rounded-[14px] border-[2.5px] border-[#CEA44D] ${bgColor} overflow-hidden shadow-sm flex items-end justify-center transition-transform duration-300 hover:scale-105 pointer-events-auto`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={card.img}
                        alt="Venture Leader"
                        fill
                        className="object-contain object-bottom"
                        sizes="182px"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second Set of 9-Card Arch (Identical duplicate for seamless continuous looping) */}
            <div className="relative w-[1440px] min-w-[1440px] h-[480px] shrink-0">
              {EXACT_9_CARDS.map((card, index) => {
                const pos = CARD_POSITIONS[index % CARD_POSITIONS.length];
                const bgColor =
                  index % 2 === 0 ? "bg-[#8FA867]" : "bg-white";

                return (
                  <div
                    key={`set2-${card.id}-${index}`}
                    style={pos}
                    className={`absolute w-[182px] h-[206px] rounded-[14px] border-[2.5px] border-[#CEA44D] ${bgColor} overflow-hidden shadow-sm flex items-end justify-center transition-transform duration-300 hover:scale-105 pointer-events-auto`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={card.img}
                        alt="Venture Leader"
                        fill
                        className="object-contain object-bottom"
                        sizes="182px"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* HERO CORE TEXT & CTA */}
        <div className="relative z-10 max-w-[680px] mx-auto text-center flex flex-col items-center mt-3 sm:mt-6 px-4 pt-4">
          <h1 className="font-bold not-italic text-4xl md:text-5xl leading-[100%] tracking-[0%] text-center text-neutral-900">
            We Don&apos;t Just Invest in Ideas.
            <span className="font-bold not-italic text-4xl md:text-5xl leading-[100%] tracking-[0%] text-center text-[#CEA44D]">
              We Build Them.
            </span>
          </h1>

          <p className="mt-5 max-w-[600px] text-lg md:text-xl leading-[1.4] text-[#222529] font-normal not-italic tracking-[0%]">
            The U Group builds and operates ventures across science,
            pharmaceuticals, and AI—turning overlooked potential into lasting
            value through capital, strategy, and execution.
          </p>

          <p className="mt-4 text-[13px] sm:text-[14px] leading-[21px] font-bold tracking-[0.14em] uppercase text-[#16181A]">
            Ownership. Partnership. Conviction.
          </p>

          <button
            type="button"
            onClick={handleScrollToVentures}
            className="mt-6 w-[207px] h-[32px] inline-flex items-center justify-center gap-1 rounded-[3px] bg-[#CEA44D] hover:bg-[#b3882e] text-white text-[12px] font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer font-sans"
          >
            Explore Our Ventures →
          </button>
        </div>
      </section>
    </div>
  );
}