import Image from "next/image";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

const lessons = [
  ["Turnaround", "Rebuilding the plan, rebuilding trust, and making the operating decisions others wouldn't."],
  ["Strategic transactions", "Standing beside a $100M+ semiconductor division through a Golden Gate Capital transaction."],
  ["Industry by industry", "Learning through real businesses, real challenges, and deal-by-deal execution."],
  ["Entrepreneurship is a discipline", "A discipline that can be built, capitalized, and scaled with the right commitment."],
];

export default function ExperienceSection() {
  return (
    <section
      className="scroll-mt-[30px] py-[100px] max-[701px]:py-[42px] relative"
      aria-labelledby="experience-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side - Sticky Heading (Vertically Centered) */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center">
            <Reveal>
              <h2 className="!text-4xl font-bold mb-5 text-[#16181A]">
                Tested through
                <br />
                experience.
              </h2>
              <AboutParagraph>
                That belief got tested early, and often. From turning RSVI from bankruptcy to bankable to helping carry a{" "}
                <strong>$100M+</strong> semiconductor division into a Golden Gate Capital transaction, every challenge reinforced what we believe about entrepreneurship.
              </AboutParagraph>
            </Reveal>
          </div>

          {/* Right Side - Stacking Cards Container */}
          <div className="relative space-y-6 pb-12">
            {lessons.map(([title, text], index) => {
              // Calculate stacking offset for each card as user scrolls
              const topOffset = 100 + index * 20;

              return (
                <div
                  key={title}
                  className="sticky rounded-[14px] border border-[#c9c2b7] bg-[#f6f4f0] px-[30px] py-[25px] flex gap-6 items-start transition-all duration-300 hover:border-[#cea44d] hover:bg-[#cea44d] hover:shadow-[0_10px_25px_#16181a08] [&>img]:mt-[3px] [&>img]:size-[42px] [&>img]:shrink-0 [&>img]:self-start [&>img]:object-contain [&_h3]:mb-1.5 [&_h3]:pr-2.5 hover:[&_p]:text-[#302611] max-[901px]:gap-[15px] max-[901px]:p-[22px]"
                  style={{
                    top: `${topOffset}px`,
                    zIndex: index + 1,
                  }}
                >
                  <Image
                    src="/images/about/rocket.svg"
                    alt=""
                    width={42}
                    height={42}
                  />
                  <div className="flex-1">
                    <h3>{title}</h3>
                    <AboutParagraph>{text}</AboutParagraph>
                  </div>
                  <span
                    className="absolute top-3 right-3.5 font-mono-brand text-[9px] text-[#767067]"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}