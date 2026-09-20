import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function FutureSlide({ label, year, title, children, image = false }) {
  return <article className="grid grid-cols-[1.4fr_1fr] items-center gap-7 [&>div:first-child]:h-[260px] max-[701px]:grid-cols-1 max-[701px]:gap-3">
    {image ? <AboutImage /> : <Reveal className={`relative flex flex-col justify-between overflow-hidden rounded-[10px] border border-[#c6952d] p-[30px] ${year === "2026" ? "bg-[#e9dec7]" : "bg-[#16181a] text-[#f6f4f0] [&>span:first-child]:text-[#cea44d]"}`}><span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">{label}</span><span className="text-[32px]/[1.15] font-bold tracking-[-.03em]">{year === "2026" ? <>Experience.<br />Amplified.</> : <>The next<br />chapter.</>}</span><span className="font-mono-brand text-[9px] tracking-[.1em]">THE U GROUP / {year}</span></Reveal>}
    <Reveal className="rounded-xl bg-[#cea44d] p-[25px] [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:text-[#302611] max-[701px]:p-[22px]"><span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">{label}</span><h3>{year}</h3><AboutParagraph><strong>{title}</strong></AboutParagraph>{children && <AboutParagraph>{children}</AboutParagraph>}</Reveal>
  </article>;
}
