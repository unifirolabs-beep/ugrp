import FutureSlide from "./FutureSlide";

export default function FutureSection() {
  return <section className="about-section future-section" aria-labelledby="future-title"><div className="future-heading"><span className="eyebrow">05 / STILL BUILDING</span><h2 id="future-title">The future.</h2></div><div className="future-slides">
    <FutureSlide label="Then" year="2005" title="Capital + experience" image />
    <FutureSlide label="Now" year="2026" title="Capital + experience + AI" />
    <FutureSlide label="Next" year="The next generation" title="Bigger ideas. Faster execution. Greater impact." />
  </div></section>;
}
