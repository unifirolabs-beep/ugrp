"use client";

import { useEffect, useRef, useState } from "react";
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
  const arcRef = useRef(null);
  const buttonRefs = useRef([]);
  const [geometry, setGeometry] = useState({ angles: [24, 90, 156], lengths: [310, 310, 310] });

  useEffect(() => {
    const measure = () => {
      const arc = arcRef.current?.getBoundingClientRect();
      if (!arc) return;
      const next = buttonRefs.current.map(button => {
        const box = button.getBoundingClientRect();
        const dx = box.left + box.width / 2 - (arc.left + arc.width / 2);
        const dy = arc.bottom - (box.top + box.height / 2);
        return { angle: Math.max(0, Math.min(180, 90 + Math.atan2(dx, dy) * 180 / Math.PI)), length: Math.hypot(dx, dy) };
      });
      setGeometry({ angles: next.map(item => item.angle), lengths: next.map(item => item.length) });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(arcRef.current);
    measure();
    return () => observer.disconnect();
  }, []);

  const fillAngle = geometry.angles[active];
  return <section ref={meterRef} className="relative mx-auto mt-2.5 mb-[70px] min-h-[340px] max-w-[740px] pt-[52px] max-[701px]:mb-2.5 max-[701px]:min-h-[310px]" aria-label="Our journey">
    <div ref={arcRef} className="pointer-events-none absolute inset-x-5 top-[30px] h-[310px] max-[701px]:inset-x-[5px] max-[701px]:h-[245px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-t-[400px] border-[19px] border-b-0 border-[#dedbd5] max-[701px]:border-[10px] max-[701px]:border-b-0" />
      <motion.div className="absolute inset-0 [mask-image:conic-gradient(from_270deg_at_50%_100%,black_0deg,black_var(--fill-angle),transparent_var(--fill-angle),transparent_360deg)]" initial={{ "--fill-angle": "0deg" }} animate={{ "--fill-angle": (inView || reduced ? fillAngle : 0) + "deg" }} transition={{ duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="absolute inset-0 rounded-t-[400px] border-[19px] border-b-0 border-[#edb83d] blur-[7px] max-[701px]:border-[10px] max-[701px]:border-b-0" />
        <div className="absolute inset-0 rounded-t-[400px] border-[19px] border-b-0 border-[#e6ac27] max-[701px]:border-[10px] max-[701px]:border-b-0" />
      </motion.div>
      <motion.div className="absolute bottom-0 left-[calc(50%-3px)] h-full w-1.5 origin-bottom rounded-full bg-[#e9b12f]" animate={{ rotate: fillAngle - 90, height: geometry.lengths[active], boxShadow: shimmer ? ["0 0 10px #eab331bb, 0 0 20px #eab33166", "0 0 18px #ffcb4fff, 0 0 32px #eab331bb", "0 0 10px #eab331bb, 0 0 20px #eab33166"] : "0 0 14px #eab331aa" }} transition={{ height: { duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }, rotate: { duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }, boxShadow: { duration: 2.8, repeat: shimmer ? Infinity : 0, ease: "easeInOut" } }}>
        <motion.span className="absolute -left-[5px] top-[3%] text-[18px]/none text-[#fff0ae] drop-shadow-[0_0_6px_#dc9e16]" animate={shimmer ? { top: ["90%", "3%"], opacity: [0, 1, 1, 0], scale: [0.6, 1.15, 0.6] } : { top: "3%", opacity: 0 }} transition={{ duration: 3.6, repeat: shimmer ? Infinity : 0, repeatDelay: 0.5, ease: "easeInOut" }}>✦</motion.span>
      </motion.div>
    </div>
    <div className="relative flex h-16 items-start justify-between" aria-label="Choose a milestone">
      {milestones.map((item, index) => <motion.button ref={element => { buttonRefs.current[index] = element; }} whileHover={reduced ? undefined : { scale: 1.06 }} whileTap={reduced ? undefined : { scale: 0.97 }} className="relative cursor-pointer rounded-3xl shadow-[0_0_15px_#e6ac2777,0_0_28px_#e6ac2733] border border-[#d8d1c4] bg-[#f6f4f0] px-3.5 py-2.5 font-mono-brand text-[10px] font-bold first:mt-[114px] last:mt-[114px] aria-pressed:border-[#cea44d] aria-pressed:bg-[#cea44d] aria-pressed:text-[#16181a] max-[701px]:p-[9px] max-[701px]:text-[9px] max-[701px]:first:mt-[65px] max-[701px]:last:mt-[65px]" key={item.year} type="button" aria-pressed={active === index} aria-controls="timeline-story" onClick={() => setActive(index)}><span className="mr-2 inline-block size-1.5 rounded-full bg-current max-[701px]:hidden" />{item.year}
        <motion.span aria-hidden="true" className="pointer-events-none absolute -inset-[4px] rounded-full border border-[#c6952d] shadow-[0_0_18px_#e6ac27cc,0_0_30px_#e6ac2777]" animate={shimmer ? { opacity: [0.5, 1, 0.5], scale: [1, 1.09, 1] } : { opacity: 0.65, scale: 1 }} transition={{ duration: 2.8, delay: index * 0.45, repeat: shimmer ? Infinity : 0, ease: "easeInOut" }} />
        <motion.span aria-hidden="true" className="pointer-events-none absolute -top-2 right-1 text-[15px]/none text-[#db9d17] drop-shadow-[0_0_5px_#e6ac27]" animate={shimmer ? { opacity: [0.15, 1, 0.15], scale: [0.7, 1.15, 0.7], rotate: [0, 30, 0] } : { opacity: 0.5, scale: 1, rotate: 0 }} transition={{ duration: 2.8, delay: index * 0.45 + 0.3, repeat: shimmer ? Infinity : 0, ease: "easeInOut" }}>✦</motion.span>
      </motion.button>)}
    </div>
    <div id="timeline-story" className="relative mx-auto mt-11 min-h-[150px] w-[58%] bg-[#f6f4f0] px-3 py-[15px] [&_h3]:mt-2.5 [&_h3]:mb-2 max-[701px]:mt-[15px] max-[701px]:w-3/4 max-[701px]:p-3.5 max-[701px]:[&_p]:text-[12px]/[19px] max-[381px]:w-[78%]" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
        <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">{milestones[active].year}</span><h3>{milestones[active].title}</h3><AboutParagraph>{milestones[active].text}</AboutParagraph>
      </motion.div></AnimatePresence>
    </div>
  </section>;
}

