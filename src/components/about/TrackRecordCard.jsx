import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function TrackRecordCard({ value, title, children }) {
  return (
    <Reveal>
      <article className="rounded-[10px] border border-[#c9c2b7] bg-[#f6f4f0] px-[25px] py-[22px] transition-all duration-300 hover:border-[#cea44d] hover:bg-[#cea44d] [&_h3]:mb-[7px] hover:[&_p]:text-[#302611]">
        <h3 className="md:text-2xl!">
          <span className="font-bold">{value}</span> {title}
        </h3>
        <AboutParagraph className="text-lg">{children}</AboutParagraph>
      </article>
    </Reveal>
  );
}
