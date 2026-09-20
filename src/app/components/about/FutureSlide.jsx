import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function FutureSlide({ label, year, title, children, image = false }) {
  return <article className="future-slide">
    {image ? <AboutImage /> : <Reveal className="future-art"><span className="eyebrow">{label}</span><span className="future-art-title">{year === "2026" ? <>Experience.<br />Amplified.</> : <>The next<br />chapter.</>}</span><span className="future-art-detail">THE U GROUP / {year}</span></Reveal>}
    <Reveal className="future-card"><span className="eyebrow">{label}</span><h3>{year}</h3><AboutParagraph><strong>{title}</strong></AboutParagraph>{children && <AboutParagraph>{children}</AboutParagraph>}</Reveal>
  </article>;
}
