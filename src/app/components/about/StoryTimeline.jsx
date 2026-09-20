"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AboutParagraph from "./AboutParagraph";

// Only dated milestones established in the supplied design are used.
const milestones = [
  { year: "2005", title: "A conviction worth building on", text: "We started with a simple, almost stubborn belief: value doesn't disappear, it hides. Capital and experience became the foundation." },
  { year: "20+ years", title: "From bankruptcy to bankable", text: "RSVI moved from bankruptcy to bankability in six months through operational rebuilding, strategic planning, and restored trust." },
  { year: "2026", title: "Capital. Experience. AI.", text: "The same operating philosophy, with new tools for the next generation of entrepreneurs. Bigger ideas. Faster execution. Greater impact." },
];

export default function StoryTimeline() {
  const [active, setActive] = useState(1);
  const reduced = useReducedMotion();
  return <section className="story-timeline" aria-label="Our journey">
    <div className="timeline-arc" aria-hidden="true"><motion.div className="timeline-hand" animate={{ rotate: [-56, 0, 56][active] }} transition={{ duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} /></div>
    <div className="timeline-controls" aria-label="Choose a milestone">
      {milestones.map((item, index) => <button key={item.year} type="button" aria-pressed={active === index} aria-controls="timeline-story" onClick={() => setActive(index)}><span className="timeline-dot" />{item.year}</button>)}
    </div>
    <div id="timeline-story" className="timeline-story" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
        <span className="eyebrow">{milestones[active].year}</span><h3>{milestones[active].title}</h3><AboutParagraph>{milestones[active].text}</AboutParagraph>
      </motion.div></AnimatePresence>
    </div>
  </section>;
}
