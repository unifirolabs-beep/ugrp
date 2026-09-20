import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function AboutHero() {
  return <section className="about-hero" aria-labelledby="about-title">
    <Reveal><span className="eyebrow">OUR STORY · SINCE 2005</span>
      <h1 id="about-title"><span>Twenty years of learning.</span><br />What that really means.</h1>
      <AboutParagraph>Every business has a moment it could have quit and didn&apos;t. The U Group has had several — and we didn&apos;t walk away from a single one without learning something we refused to unlearn.</AboutParagraph>
      <div className="hero-actions"><a className="text-link" href="#our-story">Explore The U Group <span aria-hidden="true">↗</span></a><a className="gold-button" href="#ventures">Our ventures <span aria-hidden="true">↗</span></a></div>
    </Reveal>
  </section>;
}
