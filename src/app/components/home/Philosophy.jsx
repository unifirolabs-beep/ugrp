export default function Philosophy() {
  return (
    <section className="w-full bg-[#151719] px-6 py-16 md:px-[8vw] md:py-[4.5vw]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        {/* Section heading */}
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono-dejavu font-bold text-[9px] md:text-[10px] leading-[14px] text-white">
            ✣
          </span>

          <h2 className="font-liberation text-[24px] font-bold leading-[30px] text-white">
            Our Philosophy
          </h2>

          <span className="font-mono-dejavu font-bold text-[9px] md:text-[10px] leading-[14px] text-white">
            ✣
          </span>
        </div>

        {/* Main statement */}
        <p className="font-liberation mt-8 max-w-[800px] text-[34px] font-bold leading-[40px] text-white md:mt-[2.2vw] md:max-w-[55vw]">
          Build stronger businesses, create
          <br className="hidden md:block" />
          meaningful opportunities and generate
          <br className="hidden md:block" />
          lasting shared value.
        </p>
      </div>
    </section>
  );
}