import AboutParagraph from "./AboutParagraph";
import EcosystemCard from "./EcosystemCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const frontiers = [["Capital advisory", "Strategic capital. Smarter execution."], ["Consumer science", "Innovative products built for real markets."], ["Integrative pharmaceuticals", "Science-driven solutions for better outcomes."], ["AI venture intelligence", "Smarter decisions for the next generation of entrepreneurs."]];
export default function EcosystemSection() {
  return <section className="about-section" aria-labelledby="ecosystem-title"><SectionHeading number="03" id="ecosystem-title">Our ecosystem.</SectionHeading>
    <div className="ecosystem-layout"><Reveal><h3 className="ecosystem-statement">Different industries.<br />One operating philosophy.</h3><AboutParagraph>We bring together capital, innovation, science, and technology to identify opportunity, build value, and create sustainable growth.</AboutParagraph><AboutParagraph className="ecosystem-conviction"><strong>One group. Four frontiers.<br />Shared conviction.</strong></AboutParagraph></Reveal>
      <div className="ecosystem-grid">{frontiers.map(([title, text], index) => <EcosystemCard key={title} title={title} index={index}>{text}</EcosystemCard>)}</div>
    </div></section>;
}
