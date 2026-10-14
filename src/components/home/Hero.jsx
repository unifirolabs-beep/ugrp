import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f4f0] font-liberation">
      {/* Stage: fixed 727:320 proportions on md+, container for cqw units */}
      <div className="relative mx-auto w-full max-w-[1920px] [container-type:inline-size] md:aspect-[727/320] py-16">
        
        {/* ── Map layer (Background) ───────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="relative aspect-[1706/922] w-full md:absolute md:left-[7.84%] md:top-[-4.38%] md:w-[79.23%] opacity-40">
            <Image
              src="/images/hero/hero.png"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 80vw, 100vw"
              className="bg-blend-overlay object-contain"
            />
          </div>
        </div>


        {/* ── Content Layer (Foreground) ────────────────────────── */}
        <div className="relative z-20 flex flex-col items-start max-w-3xl mx-auto md:mx-0 md:ml-[27%] gap-6">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#16181A]">
            Creating Wealth Through <br />
            <span className="text-[#CEA44D]">Entrepreneurship</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg lg:text-xl text-[#16181A]/90 leading-relaxed font-normal max-w-2xl">
            Real estate builds wealth. Markets build wealth.<br />
            But Entrepreneurship creates wealth while creating the people, products, and possibilities the world builds on next.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center gap-28 my-1">
            <Link href="/about">
              <button className="bg-transparent text-[#16181A] font-semibold text-sm md:text-base border-b-2 border-[#CEA44D] pb-1 cursor-pointer">
                Explore The U Group
              </button>
            </Link>
            <Link href="/ventures">
              <button className="bg-[#CEA44D] text-[#16181A] font-medium text-sm md:text-base px-5 py-2.5 rounded cursor-pointer">
                Our Ventures
              </button>
            </Link>
          </div>

          {/* Bottom Statement */}
          <p className="text-base md:text-lg lg:text-xl text-[#16181A]/90 leading-relaxed font-normal max-w-2xl pt-2">
            <strong className="text-[#16181A] font-bold">The U Group</strong> builds, funds, advises, and scales ventures with one goal:{" "}
            <strong className="text-[#16181A] font-bold">create lasting value for founders, investors, and the communities around them.</strong>
          </p>

        </div>
      </div>
    </section>
  );
}