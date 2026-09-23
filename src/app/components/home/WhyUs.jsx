export default function WhyUs() {
  const cards = [
    {
      title: "20+ Years of\nExperience",
      description:
        "Two decades of building, advising, investing, and creating value across industries.",
      featured: true,
    },
    {
      title: "Entrepreneurial\nThinking",
      description:
        "We challenge conventional thinking and look for opportunities others may overlook.",
    },
    {
      title: "We Stay in the\nRoom",
      description:
        "We don't simply invest and step away. We work alongside founders and leadership teams through execution and growth.",
    },
    {
      title: "Capital +\nStrategy",
      description:
        "We connect capital with business infrastructure, strategic planning, and growth opportunities.",
    },
    {
      title: "Proven Track\nRecord",
      description:
        "From turnarounds to acquisitions and strategic transactions, our experience is built through real execution.",
    },
    {
      title: "Built for Long-Term\nValue",
      description:
        "Our goal isn't just the next milestone. We build ventures designed for sustainable growth and lasting value.",
    },
  ];

  return (
    <section className="w-full bg-[#f6f4f0] px-6 py-16 md:px-[7.3vw] md:py-[5vw]">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-[3vw]">
          <h2 className="font-liberation text-[34px] font-bold leading-[40px] text-[#17191d]">
            Why The U Group
          </h2>

          <p className="font-liberation mx-auto mt-3 max-w-[500px] text-[13px] font-normal leading-[21px] text-[#25272a]">
            Two Decades of Experience. One Commitment
            <br />
            to Execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:gap-[1.4vw]">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`flex min-h-[145px] flex-col justify-between rounded-[8px] px-5 py-5 md:min-h-[9.8vw] md:px-[1.1vw] md:py-[1.15vw] ${
                index === 0
                  ? "bg-[#d2a548] text-white md:col-span-2"
                  : index === 1
                    ? "bg-[#9d9997] text-white md:col-span-2"
                    : index === 2
                      ? "bg-[#9d9997] text-white md:col-span-2"
                      : index === 3
                        ? "bg-[#9d9997] text-white md:col-span-2"
                        : index === 4
                          ? "bg-[#9d9997] text-white md:col-span-2"
                          : "bg-[#9d9997] text-white md:col-span-2"
              }`}
            >
              <div>
                <h3 className="font-liberation whitespace-pre-line text-[16px] font-bold leading-[22px]">
                  {card.title}
                </h3>

                <p className="font-liberation mt-4 text-[10px] font-normal leading-[15px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}