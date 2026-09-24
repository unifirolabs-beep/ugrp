import FutureSlide from "./FutureSlide";

export default function FutureSection() {
  return (
    <section
      className="scroll-mt-[30px] py-[70px] max-[701px]:py-[42px] grid grid-cols-[180px_1fr] gap-[38px] pb-[110px]! max-[901px]:grid-cols-1 max-[701px]:pb-[70px]!"
      aria-labelledby="future-title"
    >
      <div className="sticky top-[38px] self-start [&_h2]:mt-3.5 max-[901px]:static">
        <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
          05 / STILL BUILDING
        </span>
        <h2 id="future-title">The future.</h2>
      </div>
      <div className="grid gap-[38px]">
        <FutureSlide label="Then" year="2005" title="Capital + experience" image />
        <FutureSlide label="Now" year="2026" title="Capital + experience + AI" />
        <FutureSlide label="Next" year="The next generation" title="Bigger ideas. Faster execution. Greater impact." />
      </div>
    </section>
  );
}
