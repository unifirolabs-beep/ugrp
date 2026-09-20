import Image from "next/image";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function ExperienceCard({ title, children, index }) {
  return <Reveal delay={index * 0.07}><article className={`experience-card ${index === 0 ? "featured" : ""}`}>
    <Image src={`/images/about/${index === 0 ? "rocket-light" : "rocket"}.svg`} alt="" width={42} height={42} />
    <div><h3>{title}</h3><AboutParagraph>{children}</AboutParagraph></div>
    <span className="card-index" aria-hidden="true">0{index + 1}</span>
  </article></Reveal>;
}
