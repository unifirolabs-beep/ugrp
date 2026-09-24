"use client";

import { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import AboutParagraph from "@/components/about/AboutParagraph";

// Only dated milestones established in the supplied design are used.
const milestones = [
  {
    year: "2005",
    title: "A conviction worth building on",
    text: "We started with a simple, almost stubborn belief: value doesn't disappear, it hides. Capital and experience became the foundation.",
  },
  {
    year: "20+ years",
    title: "From bankruptcy to bankable",
    text: "RSVI moved from bankruptcy to bankability in six months through operational rebuilding, strategic planning, and restored trust.",
  },
  {
    year: "2026",
    title: "Capital. Experience. AI.",
    text: "The same operating philosophy, with new tools for the next generation of entrepreneurs. Bigger ideas. Faster execution. Greater impact.",
  },
];

// How much scroll distance (in viewport heights) is dedicated to each
// milestone. Bump this up for a slower, more deliberate scroll-through.
const STEP_VH = 65;

/**
 * Maps a milestone index to a point on the upper semicircle track.
 * `sweep` runs 0 -> 180 left to right (mirrors the original fillAngle
 * convention) and is reused for the needle rotation + fill mask so the
 * pointer always lands exactly on the dot.
 */
function arcPoint(index, total) {
  const t = total > 1 ? index / (total - 1) : 0.5;
  const sweep = t * 180; // 0 = left foot, 180 = right foot
  const mathAngle = 180 - sweep; // standard polar angle for positioning
  const rad = (mathAngle * Math.PI) / 180;

  return {
    sweep,
    leftPct: 50 + 50 * Math.cos(rad),
    topPct: 100 - 100 * Math.sin(rad),
    labelRotate: (sweep - 90) * 0.65,
  };
}

export default function StoryTimeline() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const points = useMemo(
    () => milestones.map((_, i) => arcPoint(i, milestones.length)),
    []
  );

  // Advance the active milestone as the section scrolls through view.
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(
      milestones.length - 1,
      Math.max(0, Math.floor(progress * milestones.length))
    );
    setActive((current) => (current === next ? current : next));
  });

  const goTo = (index) => {
    setActive(index);
    const node = scrollRef.current;
    if (!node) return;
    const segment = node.scrollHeight / milestones.length;
    const top =
      node.getBoundingClientRect().top +
      window.scrollY +
      segment * index +
      segment / 2;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  const point = points[active];

  return (
    <section
      ref={scrollRef}
      className="relative"
      style={{ height: reduced ? "auto" : `${STEP_VH * milestones.length}vh` }}
      aria-label="Our journey"
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-5 py-10">
        <div className="relative mx-auto w-full max-w-[720px] aspect-[2/1]">
          {/* Track */}
          <div className="absolute inset-x-0 top-0 h-full rounded-t-full border-[3px] border-b-0 border-[#e1ddd3] max-[640px]:border-2" />

          {/* Progress fill, clipped to the active sweep angle */}
          <motion.div
            className="absolute inset-x-0 top-0 h-full rounded-t-full border-[3px] border-b-0 border-[#d79b1f] max-[640px]:border-2"
            style={{
              maskImage:
                "conic-gradient(from 270deg at 50% 100%, black 0deg, black var(--fill), transparent var(--fill), transparent 360deg)",
              WebkitMaskImage:
                "conic-gradient(from 270deg at 50% 100%, black 0deg, black var(--fill), transparent var(--fill), transparent 360deg)",
            }}
            animate={{ "--fill": `${point.sweep}deg` }}
            transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Needle, pivoting from the base of the arc to the active dot */}
          <motion.div
            className="absolute bottom-0 left-1/2 w-[2px] origin-bottom bg-[#d79b1f]"
            style={{ height: "100%" }}
            animate={{ rotate: point.sweep - 90 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute -top-1.5 -left-[3px] h-2 w-2 rotate-45 bg-[#d79b1f]" />
          </motion.div>

          {/* Year markers */}
          {milestones.map((item, index) => {
            const p = points[index];
            const isActive = index === active;
            return (
              <button
                key={item.year}
                type="button"
                aria-pressed={isActive}
                aria-controls="timeline-story"
                onClick={() => goTo(index)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${p.leftPct}%`, top: `${p.topPct}%` }}
              >
                <span
                  className="mb-1.5 block whitespace-nowrap text-[13px] font-bold text-[#1a1a1a] max-[640px]:text-[11px]"
                  style={{
                    transform: `translateY(-18px) rotate(${p.labelRotate}deg)`,
                    opacity: isActive ? 1 : 0.55,
                  }}
                >
                  {item.year}
                </span>
                <motion.span
                  className="block rounded-full bg-[#1a1a1a]"
                  animate={{
                    width: isActive ? 14 : 10,
                    height: isActive ? 14 : 10,
                  }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            );
          })}

          {/* Story detail card, tucked into the open lower half of the arc */}
          <div
            id="timeline-story"
            className="absolute bottom-[6%] left-0 w-[55%] max-[640px]:w-[80%]"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.25 }}
              >
                <h3 className="mb-2 font-bold">{milestones[active].title}</h3>
                <AboutParagraph>{milestones[active].text}</AboutParagraph>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}