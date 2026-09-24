import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    <section
      className="pt-[105px] pb-[76px] text-center [&_h1]:mx-auto [&_h1]:mt-[22px] [&_h1]:mb-5 [&_h1>span]:text-[#a77c27] [&_p]:mx-auto [&_p]:max-w-[540px] max-[701px]:pt-[58px] max-[701px]:pb-10"
      aria-labelledby="about-title"
    >
      <Reveal>
        <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
          OUR STORY · SINCE 2005
        </span>
        <h1 id="about-title">
          <span>Twenty years of learning.</span>
          <br />
          What that really means.
        </h1>
        <AboutParagraph>
          Every business has a moment it could have quit and didn&apos;t. The U Group has had several — and we didn&apos;t walk away from a single one without learning something we refused to unlearn.
        </AboutParagraph>
        <div className="mt-7 flex items-center justify-center gap-[30px] text-[13px] font-bold [&_a]:transition-colors [&_a]:duration-200 [&_a_span]:ml-[13px] max-[701px]:flex-wrap max-[701px]:gap-5">
          <a
            className="border-b-2 border-[#c6952d] py-[9px] hover:text-[#89651d]"
            href="#our-story"
          >
            Explore The U Group <span aria-hidden="true">↗</span>
          </a>
          <a
            className="bg-[#c6952d] px-[17px] py-[11px] text-[#16181a] hover:bg-[#dfb757]"
            href="#ventures"
          >
            Our ventures <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
