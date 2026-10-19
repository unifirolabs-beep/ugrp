import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f4f0] font-liberation">
      {/* Outer section wrapper */}
      <div className="relative mx-auto w-full py-16 min-h-[80vh] flex items-center justify-center">
        
        {/* ── Map layer (Background) ───────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
          <div className="relative aspect-[1706/922] w-full md:w-[85%] opacity-40">
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
        {/* Container is centered horizontally (`mx-auto`) on the screen */}
        <div className="relative z-20 flex flex-col items-start text-left mx-auto max-w-3xl px-6 md:px-8 gap-6">
          
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
          <div className="flex flex-row items-center justify-start gap-8 my-2">
            <Link href="/about">
              <button className="bg-transparent text-[#16181A] font-semibold text-sm md:text-base border-b-2 border-[#CEA44D] pb-1 cursor-pointer hover:opacity-80 transition-opacity">
                Explore The U Group
              </button>
            </Link>
            <Link href="/ventures">
              <button className="bg-[#CEA44D] text-[#16181A] font-medium text-sm md:text-base px-6 py-2.5 rounded cursor-pointer hover:bg-[#b8913f] transition-colors">
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