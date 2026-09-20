"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
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
  const meterRef = useRef(null);
  const inView = useInView(meterRef, { amount: 0.15 });
  const shimmer = inView && !reduced;
  return <section ref={meterRef} className="relative mx-auto mt-2.5 mb-[70px] min-h-[340px] max-w-[740px] pt-[52px] max-[701px]:mb-2.5 max-[701px]:min-h-[310px]" aria-label="Our journey">
    <div className="absolute inset-x-5 top-[30px] h-[310px] overflow-hidden rounded-t-[400px] border-[19px] border-b-0 border-[#dedbd5] max-[701px]:inset-x-[5px] max-[701px]:h-[245px] max-[701px]:border-[10px] max-[701px]:border-b-0" aria-hidden="true"><motion.div className="absolute bottom-0 left-[calc(50%-1px)] h-full w-0.5 origin-bottom bg-[#c6952d]" animate={{ rotate: [-56, 0, 56][active], boxShadow: shimmer ? ["0 0 4px #c6952d66", "0 0 14px #c6952dcc", "0 0 4px #c6952d66"] : "0 0 5px #c6952d66" }} transition={{ rotate: { duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }, boxShadow: { duration: 2.8, repeat: shimmer ? Infinity : 0, ease: "easeInOut" } }}>
      <motion.span className="pointer-events-none absolute -left-[6px] top-[3%] text-[15px]/none text-[#bd8617]" animate={shimmer ? { top: ["90%", "3%"], opacity: [0, 1, 1, 0], scale: [0.6, 1.15, 0.6] } : { top: "3%", opacity: 0 }} transition={{ duration: 3.6, repeat: shimmer ? Infinity : 0, repeatDelay: 0.5, ease: "easeInOut" }}>✦</motion.span>
    </motion.div></div>
    <div className="relative flex h-16 items-start justify-between" aria-label="Choose a milestone">
      {milestones.map((item, index) => <motion.button whileHover={reduced ? undefined : { scale: 1.06 }} whileTap={reduced ? undefined : { scale: 0.97 }} className="relative cursor-pointer rounded-3xl border border-[#d8d1c4] bg-[#f6f4f0] px-3.5 py-2.5 font-mono-brand text-[10px] font-bold first:mt-[114px] last:mt-[114px] aria-pressed:border-[#cea44d] aria-pressed:bg-[#cea44d] aria-pressed:text-[#16181a] max-[701px]:p-[9px] max-[701px]:text-[9px] max-[701px]:first:mt-[65px] max-[701px]:last:mt-[65px]" key={item.year} type="button" aria-pressed={active === index} aria-controls="timeline-story" onClick={() => setActive(index)}><span className="mr-2 inline-block size-1.5 rounded-full bg-current max-[701px]:hidden" />{item.year}
        <motion.span aria-hidden="true" className="pointer-events-none absolute -inset-[4px] rounded-full border border-[#c6952d] shadow-[0_0_12px_#c6952d55]" animate={shimmer ? { opacity: [0.15, 0.7, 0.15], scale: [1, 1.09, 1] } : { opacity: 0.25, scale: 1 }} transition={{ duration: 2.8, delay: index * 0.45, repeat: shimmer ? Infinity : 0, ease: "easeInOut" }} />
        <motion.span aria-hidden="true" className="pointer-events-none absolute -top-2 right-1 text-[12px]/none text-[#b27d12]" animate={shimmer ? { opacity: [0.15, 1, 0.15], scale: [0.7, 1.15, 0.7], rotate: [0, 30, 0] } : { opacity: 0.5, scale: 1, rotate: 0 }} transition={{ duration: 2.8, delay: index * 0.45 + 0.3, repeat: shimmer ? Infinity : 0, ease: "easeInOut" }}>✦</motion.span>
      </motion.button>)}
    </div>
    <div id="timeline-story" className="relative mx-auto mt-11 min-h-[150px] w-[58%] bg-[#f6f4f0] px-3 py-[15px] [&_h3]:mt-2.5 [&_h3]:mb-2 max-[701px]:mt-[15px] max-[701px]:w-3/4 max-[701px]:p-3.5 max-[701px]:[&_p]:text-[12px]/[19px] max-[381px]:w-[78%]" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
        <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">{milestones[active].year}</span><h3>{milestones[active].title}</h3><AboutParagraph>{milestones[active].text}</AboutParagraph>
      </motion.div></AnimatePresence>
    </div>
  </section>;
}

