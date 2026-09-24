import Image from "next/image";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function ExperienceCard({ title, children, index }) {
  return (
    <Reveal delay={index * 0.07}>
      <article
        className="relative flex gap-6 rounded-[14px] border border-[#c9c2b7] bg-[#f6f4f0] px-[30px] py-[25px] transition-all duration-300 hover:border-[#cea44d] hover:bg-[#cea44d] hover:shadow-[0_10px_25px_#16181a08] [&>img]:mt-[3px] [&>img]:size-[42px] [&>img]:shrink-0 [&>img]:self-start [&>img]:object-contain [&_h3]:mb-1.5 [&_h3]:pr-2.5 hover:[&_p]:text-[#302611] max-[901px]:gap-[15px] max-[901px]:p-[22px]"
      >
        <Image
          src="/images/about/rocket.svg"
          alt=""
          width={42}
          height={42}
        />
        <div>
          <h3>{title}</h3>
          <AboutParagraph>{children}</AboutParagraph>
        </div>
        <span
          className="absolute top-3 right-3.5 font-mono-brand text-[9px] text-[#767067]"
          aria-hidden="true"
        >
          0{index + 1}
        </span>
      </article>
    </Reveal>
  );
}
