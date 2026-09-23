"use client";

import Image from "next/image";

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
        {/* DESKTOP INFINITE HORIZONTAL SCROLLING ARCH (xl+ screens) */}
        <div className="hidden xl:block w-full overflow-hidden relative">
          <div className="flex animate-infinite-marquee">
            {/* First Set of 9-Card Arch */}
            <div className="relative w-[1440px] min-w-[1440px] h-[480px] shrink-0">
              {EXACT_9_CARDS.map((card) => (
                <div
                  key={`set1-${card.id}`}
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

            {/* Second Set of 9-Card Arch (Identical duplicate for seamless continuous looping) */}
            <div className="relative w-[1440px] min-w-[1440px] h-[480px] shrink-0">
              {EXACT_9_CARDS.map((card) => (
                <div
                  key={`set2-${card.id}`}
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
        </div>

        {/* RESPONSIVE INFINITE HORIZONTAL SCROLLING ROW (Below xl screens) */}
        <div className="xl:hidden w-full overflow-hidden relative mb-8">
          <div className="flex gap-4 animate-infinite-marquee">
            {/* Duplicated set of cards for smooth infinite marquee on mobile/tablet */}
            {[...EXACT_9_CARDS, ...EXACT_9_CARDS].map((card, index) => (
              <div
                key={`mobile-${index}`}
                className={`w-[110px] h-[130px] sm:w-[130px] sm:h-[155px] shrink-0 rounded-[12px] border-[2px] border-[#CEA44D] ${card.bgColor} overflow-hidden relative shadow-sm flex items-end justify-center`}
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
        </div>

        {/* HERO CORE TEXT & CTA */}
        <div className="relative z-10 max-w-[680px] mx-auto text-center flex flex-col items-center mt-3 sm:mt-6 px-4 pt-4">
          <h1 className="font-bold not-italic text-[40px] leading-[100%] tracking-[0%] text-center text-neutral-900">
            We Don&apos;t Just Invest in Ideas. <br />
            <span className="font-bold not-italic text-[40px] leading-[100%] tracking-[0%] text-center text-[#CEA44D]">
              We Build Them.
            </span>
          </h1>

          <p className="mt-5 max-w-[600px] text-[16px] sm:text-[18px] leading-[1.4] text-[#222529] font-normal not-italic tracking-[0%]">
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