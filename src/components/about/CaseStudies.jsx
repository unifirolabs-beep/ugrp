import CaseStudyCard from "./CaseStudyCard";
import SectionHeading from "./SectionHeading";

export default function CaseStudies() {
  return <section id="ventures" className="scroll-mt-[30px] py-[70px] max-[701px]:py-[42px] mx-auto max-w-[900px]" aria-labelledby="case-title">
    <SectionHeading number="02" id="case-title">From case studies to proof.</SectionHeading>
    <CaseStudyCard number="01" category="Consumer science" title="A wine that shouldn't have existed">Invented in a home lab during a pandemic, the venture grew to stand alongside the Mondavi name.</CaseStudyCard>
    <CaseStudyCard number="02" category="Integrative pharmaceuticals" title="Ancient science. Modern rigor.">A pharmaceutical platform spent decades proving that plant science could meet modern clinical standards. We backed the patience required to get there.</CaseStudyCard>
    <CaseStudyCard number="03" category="AI venture intelligence" title="Building the infrastructure for the next generation of entrepreneurs">Millions of new ventures emerge every year, while accelerator capacity reaches only a fraction of them. We saw the gap — and decided to build the business that could close it.</CaseStudyCard>
  </section>;
}
