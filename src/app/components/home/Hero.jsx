import Image from "next/image";


const AVATARS = [
  {
    src: "/images/hero/3.png",
    left: "14.55%",
    top: "30.8%",
    animation: "avatar-1",
  },
  {
    src: "/images/hero/1.png",
    left: "20.5%",
    top: "40.1%",
    animation: "avatar-2",
  },
  {
    src: "/images/hero/2.png",
    left: "27.6%",
    top: "32.6%",
    animation: "avatar-3",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f4f0] font-liberation">
      {/* Stage: fixed 727:320 proportions on md+, container for cqw units */}
      <div className="relative mx-auto w-full max-w-[1920px] [container-type:inline-size] md:aspect-[727/320]">
        {/* ── Map layer ─────────────────────────────────────────────
            Reference: left 7.84%, top -4.38% (cropped by the section), width 79.23%.
            aspect-ratio = hero.png's real size, so height follows automatically. */}
        <div className="relative aspect-[1706/922] w-full md:absolute md:left-[7.84%] md:top-[-4.38%] md:w-[79.23%]">
          <Image
            src="/images/hero/hero.png"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover opacity-[0.27]"
          />

          {AVATARS.map((a) => (
            <div
              key={a.src}
              className={`absolute aspect-square w-[7%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[1.5px] border-white shadow-[0_2px_6px_rgba(0,0,0,0.18)] md:w-[4.1%] md:border-[length:0.22cqw] md:shadow-[0_0.3cqw_0.8cqw_rgba(0,0,0,0.18)] ${a.animation}`}
              style={{ left: a.left, top: a.top }}
            >
              <Image
                src={a.src}
                alt="U Group network member"
                fill
                sizes="6vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* ── Right block: heading, paragraph, links ───────────────── */}
        <div className="relative px-6 pt-6 md:absolute md:left-[52.13%] md:top-[39.06%] md:w-[38%] md:p-0">
          <h1 className="text-[34px] font-bold leading-[40px] text-[#0d0f11] md:whitespace-nowrap">
            Creating Wealth Through
            <br className="hidden md:block" />{" "}
            <span className="text-[#c49227]">Entrepreneurship.</span> In America.
            <br />
            And the World.
          </h1>

          <p className="mt-4 text-[13px] font-normal leading-[21px] text-[#1c1f22] md:mt-[0.83cqw] md:whitespace-nowrap">
            Real estate builds wealth. Markets build wealth. But{" "}
            <br className="hidden md:block" />
            entrepreneurship creates wealth while creating the{" "}
            <br className="hidden md:block" />
            people, products, and possibilities the world builds on{" "}
            <br className="hidden md:block" />
            next.
          </p>

          <div className="mt-6 flex items-start md:mt-[2.3cqw]">
            <a
              href="#"
              className="mr-8 inline-block border-b border-[#c49227] pb-1 text-[13px] font-bold leading-[21px] tracking-[0.01em] text-[#111417] md:mr-[5.78cqw] md:w-[14.03cqw] md:border-b-[length:0.14cqw] md:pb-[0.28cqw]"
            >
              Explore The U Group
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap bg-[#c49227] px-4 py-2 text-[13px] font-bold leading-[21px] tracking-[0.02em] text-white md:h-[1.79cqw] md:w-[8.39cqw] md:p-0"
            >
              Our Ventures
            </a>
          </div>
        </div>

        {/* ── Left block: supporting statement ─────────────────────── */}
        <div className="relative px-6 pb-12 pt-8 md:absolute md:left-[8.8%] md:top-[69.9%] md:p-0">
          <p className="max-w-[390px] text-[13px] font-normal leading-[21px] text-[#14171a] md:max-w-none md:whitespace-nowrap">
            <strong className="font-bold">The U Group</strong> builds, funds,
            advises, and scales{" "}
            <br className="hidden md:block" />
            ventures with one goal:{" "}
            <strong className="font-bold">
              create lasting value{" "}
              <br className="hidden md:block" />
              for founders, investors, and the{" "}
              <br className="hidden md:block" />
              communities around them.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}