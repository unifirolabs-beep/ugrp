import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";
import SectionHeading from "./SectionHeading";
import TrackRecordCard from "./TrackRecordCard";

export default function TrackRecord() {
  return <section className="about-section track-record" aria-labelledby="record-title"><SectionHeading number="04" id="record-title">Track record.</SectionHeading><AboutParagraph className="section-intro">Two decades of turning challenging opportunities into executable strategies, stronger businesses, and meaningful transactions.</AboutParagraph>
    <div className="record-layout"><AboutImage /><div className="record-cards">
      <TrackRecordCard value="20+" title="years of experience" featured>Building, advising, and executing since 2005.</TrackRecordCard>
      <TrackRecordCard value="$100M+" title="revenue division acquired">Semiconductor division acquired in partnership with Golden Gate Capital.</TrackRecordCard>
      <TrackRecordCard value="6 months" title="from bankruptcy to bankable">RSVI turnaround completed through focused operational and strategic execution.</TrackRecordCard>
      <TrackRecordCard value="Multi-phase" title="IMX acquisitions">Acquisitions sourced and advised by The U Group.</TrackRecordCard>
    </div></div><AboutParagraph className="record-caption">A track record built deal by deal — and still growing.</AboutParagraph></section>;
}
