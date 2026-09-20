import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function TrackRecordCard({ value, title, children, featured }) {
  return <Reveal><article className={`rounded-[10px] border px-[25px] py-[22px] [&_h3]:mb-[7px] ${featured ? "border-[#cea44d] bg-[#cea44d] [&_p]:text-[#302611]" : "border-[#c9c2b7] bg-[#f6f4f0]"}`}><h3><span className="font-bold">{value}</span> {title}</h3><AboutParagraph>{children}</AboutParagraph></article></Reveal>;
}
