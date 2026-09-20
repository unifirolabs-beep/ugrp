import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function TrackRecordCard({ value, title, children, featured }) {
  return <Reveal><article className={`record-card ${featured ? "featured" : ""}`}><h3><span className="record-value">{value}</span> {title}</h3><AboutParagraph>{children}</AboutParagraph></article></Reveal>;
}
