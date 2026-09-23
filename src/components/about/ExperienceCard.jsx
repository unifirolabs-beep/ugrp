import Image from "next/image";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function ExperienceCard({ title, children, index }) {
  return <Reveal delay={index * 0.07}><article className={`relative flex gap-6 rounded-[14px] border px-[30px] py-[25px] transition-[border-color,box-shadow] duration-250 hover:border-[#c6952d] hover:shadow-[0_10px_25px_#16181a08] [&>img]:mt-[3px] [&>img]:size-[42px] [&>img]:shrink-0 [&>img]:self-start [&>img]:object-contain [&_h3]:mb-1.5 [&_h3]:pr-2.5 max-[901px]:gap-[15px] max-[901px]:p-[22px] ${index === 0 ? "border-[#cea44d] bg-[#cea44d] [&_p]:text-[#302611]" : "border-[#c9c2b7] bg-[#f6f4f0]"}`}>
    <Image src={`/images/about/${index === 0 ? "rocket-light" : "rocket"}.svg`} alt="" width={42} height={42} />
    <div><h3>{title}</h3><AboutParagraph>{children}</AboutParagraph></div>
    <span className="absolute top-3 right-3.5 font-mono-brand text-[9px] text-[#767067]" aria-hidden="true">0{index + 1}</span>
  </article></Reveal>;
}
