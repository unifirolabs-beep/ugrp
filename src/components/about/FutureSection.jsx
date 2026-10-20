import FutureSlide from "./FutureSlide";

const slides = [
  { label: "Then", year: "2005", title: "Capital + Experience", image: "/images/about/captialandexperience.jpg" },
  { label: "Now", year: "2026", title: "Capital + Experience + AI", image: "/images/about/CEAI.jpg" },
  { label: "Next", year: "The next generation", title: "Bigger ideas. Faster execution. Greater impact.", image: "/images/about/future.jpg"},
];

export default function FutureSection() {
  return (
    <section
      className="scroll-mt-[30px] py-[70px] max-[701px]:py-[42px] pb-[110px]! max-[701px]:pb-[70px]! relative"
      aria-labelledby="future-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Sticky Heading (Vertically Centered) */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center [&_h2]:mt-3.5">
            <h2 id="future-title" className="text-4xl lg:text-5xl font-bold tracking-tight text-[#16181A]">
              The future
            </h2>
          </div>

          {/* Right Side - Stacking Slides Container */}
          <div className="relative space-y-6 pb-12">
            {slides.map((slide, index) => {
              // Calculate incremental stacking offset for each slide card
              const topOffset = 96 + index * 32;

              return (
                <div
                  key={slide.year}
                  className="sticky transition-all duration-300"
                  style={{
                    top: `${topOffset}px`,
                    zIndex: index + 1,
                  }}
                >
                  <FutureSlide
                    label={slide.label}
                    year={slide.year}
                    title={slide.title}
                    image={slide.image}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}