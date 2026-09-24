import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="mx-auto mt-4 mb-[54px] max-w-[640px] border-t border-[#d8d1c4] pt-6 pb-2.5 [&_p]:mt-[17px] max-[701px]:mb-[30px]"
      aria-label="Our founding belief"
    >
      <Reveal>
        <AboutParagraph className="text-[19px]! leading-[29px]! text-[#16181a]! first-letter:text-[34px] first-letter:font-bold">
          We started in 2005 with a simple, almost stubborn belief:{" "}
          <strong>value doesn&apos;t disappear, it hides.</strong>
        </AboutParagraph>
      </Reveal>
      <Reveal>
        <AboutParagraph>
          Inside a struggling division. Inside a founder who&apos;s run out of runway but not out of conviction. Inside an idea nobody&apos;s financed yet because nobody&apos;s finished believing in it.
        </AboutParagraph>
      </Reveal>
      <Reveal>
        <AboutParagraph>
          Our job was never to invent value out of nothing. It was to find where it was already buried, and have the patience and the capital to dig it out.
        </AboutParagraph>
      </Reveal>
    </section>
  );
}
