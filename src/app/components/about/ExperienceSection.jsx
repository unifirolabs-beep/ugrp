import AboutParagraph from "./AboutParagraph";
import ExperienceCard from "./ExperienceCard";
import Reveal from "./Reveal";

const lessons = [
  ["Turnaround", "Rebuilding the plan, rebuilding trust, and making the operating decisions others wouldn't."],
  ["Strategic transactions", "Standing beside a $100M+ semiconductor division through a Golden Gate Capital transaction."],
  ["Industry by industry", "Learning through real businesses, real challenges, and deal-by-deal execution."],
  ["Entrepreneurship is a discipline", "A discipline that can be built, capitalized, and scaled with the right commitment."],
];
export default function ExperienceSection() {
  return <section className="about-section experience-section" aria-labelledby="experience-title">
    <Reveal><span className="eyebrow">01 / CONVICTION, TESTED</span><h2 id="experience-title">Tested through<br />experience.</h2><AboutParagraph>That belief got tested early, and often. From turning RSVI from bankruptcy to bankable to helping carry a <strong>$100M+</strong> semiconductor division into a Golden Gate Capital transaction, every challenge reinforced what we believe about entrepreneurship.</AboutParagraph></Reveal>
    <div className="experience-cards">{lessons.map(([title, text], index) => <ExperienceCard key={title} title={title} index={index}>{text}</ExperienceCard>)}</div>
  </section>;
}
