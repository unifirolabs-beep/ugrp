import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";
import SectionHeading from "./SectionHeading";
import TrackRecordCard from "./TrackRecordCard";

export default function TrackRecord() {
  return <section className="scroll-mt-[30px] py-[70px] max-[701px]:py-[42px]" aria-labelledby="record-title"><SectionHeading number="04" id="record-title">Track record.</SectionHeading><AboutParagraph className="mx-auto -mt-3.5 mb-[35px] max-w-[600px] text-center">Two decades of turning challenging opportunities into executable strategies, stronger businesses, and meaningful transactions.</AboutParagraph>
    <div className="grid grid-cols-[.9fr_1.1fr] gap-7 [&>div:first-child]:min-h-[420px] max-[701px]:grid-cols-1 max-[701px]:[&>div:first-child]:min-h-[350px]"><AboutImage /><div className="grid gap-3.5">
      <TrackRecordCard value="20+" title="years of experience" featured>Building, advising, and executing since 2005.</TrackRecordCard>
      <TrackRecordCard value="$100M+" title="revenue division acquired">Semiconductor division acquired in partnership with Golden Gate Capital.</TrackRecordCard>
      <TrackRecordCard value="6 months" title="from bankruptcy to bankable">RSVI turnaround completed through focused operational and strategic execution.</TrackRecordCard>
      <TrackRecordCard value="Multi-phase" title="IMX acquisitions">Acquisitions sourced and advised by The U Group.</TrackRecordCard>
    </div></div><AboutParagraph className="mt-[25px] text-center italic">A track record built deal by deal — and still growing.</AboutParagraph></section>;
}
