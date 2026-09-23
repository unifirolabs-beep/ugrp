import AboutParagraph from "./AboutParagraph";
import EcosystemCard from "./EcosystemCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const frontiers = [["Capital advisory", "Strategic capital. Smarter execution."], ["Consumer science", "Innovative products built for real markets."], ["Integrative pharmaceuticals", "Science-driven solutions for better outcomes."], ["AI venture intelligence", "Smarter decisions for the next generation of entrepreneurs."]];
export default function EcosystemSection() {
  return <section className="scroll-mt-[30px] py-[70px] max-[701px]:py-[42px]" aria-labelledby="ecosystem-title"><SectionHeading number="03" id="ecosystem-title">Our ecosystem.</SectionHeading>
    <div className="grid grid-cols-[.9fr_1.1fr] items-center gap-20 [&>div]:min-w-0 max-[901px]:gap-[35px] max-[701px]:grid-cols-1 max-[701px]:gap-7"><Reveal><h3 className="mb-5 text-[26px]! leading-[33px]! font-normal!">Different industries.<br />One operating philosophy.</h3><AboutParagraph>We bring together capital, innovation, science, and technology to identify opportunity, build value, and create sustainable growth.</AboutParagraph><AboutParagraph className="mt-[25px] text-[#16181a]!"><strong>One group. Four frontiers.<br />Shared conviction.</strong></AboutParagraph></Reveal>
      <div className="grid grid-cols-2 gap-3.5 [&>div]:flex [&>div]:min-w-0 max-[381px]:grid-cols-1">{frontiers.map(([title, text], index) => <EcosystemCard key={title} title={title} index={index}>{text}</EcosystemCard>)}</div>
    </div></section>;
}
