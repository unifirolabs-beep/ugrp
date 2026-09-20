import Image from "next/image";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function EcosystemCard({ title, children, index }) {
  return <Reveal delay={index * 0.06}><article className={`ecosystem-card ${index === 0 ? "featured" : ""}`}>
    <span className="ecosystem-icon">{index < 2 ? <Image src={`/images/about/${index === 0 ? "landmark" : "microscope"}.svg`} alt="" width={24} height={24} /> : <span className="eyebrow">0{index + 1}</span>}</span>
    <h3>{title}</h3><AboutParagraph>{children}</AboutParagraph>
  </article></Reveal>;
}
