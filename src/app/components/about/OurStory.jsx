import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function OurStory() {
  return <section id="our-story" className="our-story" aria-label="Our founding belief">
    <Reveal><AboutParagraph className="story-lead">We started in 2005 with a simple, almost stubborn belief: <strong>value doesn&apos;t disappear, it hides.</strong></AboutParagraph></Reveal>
    <Reveal><AboutParagraph>Inside a struggling division. Inside a founder who&apos;s run out of runway but not out of conviction. Inside an idea nobody&apos;s financed yet because nobody&apos;s finished believing in it.</AboutParagraph></Reveal>
    <Reveal><AboutParagraph>Our job was never to invent value out of nothing. It was to find where it was already buried, and have the patience and the capital to dig it out.</AboutParagraph></Reveal>
  </section>;
}
