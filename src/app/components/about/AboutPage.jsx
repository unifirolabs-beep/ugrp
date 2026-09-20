import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import StoryTimeline from "./StoryTimeline";
import ExperienceSection from "./ExperienceSection";
import CaseStudies from "./CaseStudies";
import EcosystemSection from "./EcosystemSection";
import TrackRecord from "./TrackRecord";
import FutureSection from "./FutureSection";
import "./about.css";

export default function AboutPage() {
  return <main id="main-content" className="about-page"><div className="about-container"><AboutHero /><OurStory /><StoryTimeline /><ExperienceSection /><CaseStudies /><EcosystemSection /><TrackRecord /><FutureSection /></div></main>;
}
