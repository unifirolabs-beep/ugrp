export default function Philosophy() {
  return (
    <section className="w-full bg-[#151719] px-6 py-16 md:px-[8vw] md:py-[4.5vw]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        {/* Section heading */}
        <div className="flex items-center justify-center gap-3">
          <h2 className="font-liberation text-4xl font-bold leading-[40px] text-white">
            Our Philosophy
          </h2>
        </div>

        {/* Main statement */}
        <p className="font-liberation mt-8 max-w-[800px] text-3xl font-bold leading-[40px] text-white md:mt-[2.2vw] md:max-w-[55vw]">
          Build stronger businesses, create
          meaningful opportunities and generate
          lasting shared value.
        </p>
      </div>
    </section>
  );
}