import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import StoryTimeline from "./StoryTimeline";
import ExperienceSection from "./ExperienceSection";
import CaseStudies from "./CaseStudies";
import EcosystemSection from "./EcosystemSection";
import TrackRecord from "./TrackRecord";
import FutureSection from "./FutureSection";

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="flex-1 bg-[#f6f4f0] text-[#16181a] [&_h1]:text-[34px]/[40px] [&_h1]:tracking-[-.025em] [&_h2]:text-[24px]/[30px] [&_h2]:tracking-[-.02em] [&_h3]:text-[16px]/[22px] [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h1]:text-balance [&_h2]:text-balance [&_h3]:text-balance max-[701px]:[&_h1]:text-[30px]/[37px] motion-reduce:[&_*]:transition-none"
    >
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1040px] max-[701px]:w-[calc(100%-36px)]">
        <AboutHero />
        <OurStory />
        <ExperienceSection />
        <CaseStudies />
        <EcosystemSection />
        <TrackRecord />
        <FutureSection />
      </div>
    </main>
  );
}
