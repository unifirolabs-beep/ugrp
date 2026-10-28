import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function EcosystemCard({ title, children, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <article
        className="w-full rounded-[14px] border border-[#c9c2b7] bg-[#f6f4f0] p-[23px] transition-all duration-300 hover:border-[#cea44d] hover:bg-[#cea44d] [&_h3]:mb-[7px] [&_p]:text-[12px]/[19px] hover:[&_p]:text-[#302611] max-[701px]:p-[18px]"
      >
        <span className="mb-5 flex size-[38px] items-center justify-center rounded-full bg-[#ead8b0]">
          <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>
        <h3>{title}</h3>
        <AboutParagraph>{children}</AboutParagraph>
      </article>
    </Reveal>
  );
}