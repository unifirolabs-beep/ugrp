import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  return (
    <section
      id="ventures"
      className="mx-auto max-w-[900px] scroll-mt-[30px] py-[70px] max-[701px]:py-[42px]"
      aria-labelledby="case-title"
    >
      <h2 className="text-center text-4xl font-semibold text-black">
        From Case Studies to Proof.
      </h2>

      <CaseStudyCard
        number="01"
        category="Consumer science"
        title="A wine that shouldn't have existed"
        imageSrc="/images/about/wine.jpg" // Replace with your image path
        imageAlt="Consumer science wine venture"
      >
        Invented in a home lab during a pandemic, the venture grew to stand
        alongside the Mondavi name.
      </CaseStudyCard>

      <CaseStudyCard
        number="02"
        category="Integrative pharmaceuticals"
        title="Ancient science. Modern rigor."
        imageSrc="/images/about/phrma.jpg" // Replace with your image path
        imageAlt="Integrative pharmaceuticals plant science"
      >
        A pharmaceutical platform spent decades proving that plant science could
        meet modern clinical standards. We backed the patience required to get
        there.
      </CaseStudyCard>

      <CaseStudyCard
        number="03"
        category="AI venture intelligence"
        title="Building the infrastructure for the next generation of entrepreneurs"
        imageSrc="/images/about/ai.jpg" // Replace with your image path
        imageAlt="AI venture intelligence platform"
      >
        Millions of new ventures emerge every year, while accelerator capacity
        reaches only a fraction of them. We saw the gap — and decided to build
        the business that could close it.
      </CaseStudyCard>
    </section>
  );
}