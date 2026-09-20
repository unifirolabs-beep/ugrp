import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function CaseStudyCard({ number, category, title, children }) {
  return <article className={`case-study case-study-${number}`}>
    <AboutImage position={number === "02" ? "85% center" : "65% center"} />
    <Reveal className="case-copy"><div className="case-category"><span>{number}</span><span className="eyebrow">{category}</span></div><h3>{title}</h3><AboutParagraph>{children}</AboutParagraph></Reveal>
  </article>;
}
