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
  return <section className="scroll-mt-[30px] py-[70px] max-[701px]:py-[42px] grid grid-cols-[.85fr_1.15fr] items-start gap-[72px] [&_h2]:mt-3.5 [&_h2]:mb-5 [&>div:first-child]:sticky [&>div:first-child]:top-[38px] max-[901px]:gap-[35px] max-[701px]:grid-cols-1 max-[701px]:gap-7 max-[701px]:[&>div:first-child]:static" aria-labelledby="experience-title">
    <Reveal><span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">01 / CONVICTION, TESTED</span><h2 id="experience-title">Tested through<br />experience.</h2><AboutParagraph>That belief got tested early, and often. From turning RSVI from bankruptcy to bankable to helping carry a <strong>$100M+</strong> semiconductor division into a Golden Gate Capital transaction, every challenge reinforced what we believe about entrepreneurship.</AboutParagraph></Reveal>
    <div className="grid gap-3">{lessons.map(([title, text], index) => <ExperienceCard key={title} title={title} index={index}>{text}</ExperienceCard>)}</div>
  </section>;
}
