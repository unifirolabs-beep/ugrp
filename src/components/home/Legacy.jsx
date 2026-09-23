import Image from "next/image";
import Link from "next/link";

export default function Legacy() {
  return (
    <section className="w-full bg-[#f6f4f0] px-6 py-16 md:px-[9%] md:py-[6vw]">
      <div className="mx-auto max-w-[1920px]">
        {/* Section heading */}
        <div className="mb-10 flex items-center justify-center gap-3 md:mb-[3vw]">
          <h2
            className="font-liberation text-4xl font-bold leading-none text-[#CEA44D]"
            style={{ fontFamily: '"Liberation Sans", sans-serif' }}
          >
            Our Legacy
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto flex max-w-[1100px] flex-col gap-10 md:flex-row md:items-center md:gap-[5vw]">
          {/* Left content */}
          <div className="md:w-[48%]">
            <h3
              className="font-liberation text-4xl font-bold leading-[40px] text-[#17191b]"
              style={{ fontFamily: '"Liberation Sans", sans-serif' }}
            >
              Entrepreneurship Is Our
              <br className="hidden md:block" />
              Tool for Creating Wealth.
            </h3>

            <div
              className="font-liberation mt-6 space-y-4 text-md font-normal leading-[21px] text-[#16181A] md:mt-[2vw] md:space-y-[1vw]"
              style={{ fontFamily: '"Liberation Sans", sans-serif' }}
            >
              <p>
                <strong>
                  For more than 20 years, The U Group
                </strong>{" "}
                has identified undervalued potential, built the right strategy,
                and turned opportunities into scalable ventures.
              </p>

              <p>
                We bring together{" "}
                <strong>
                  capital, business infrastructure, sales expansion, and growth
                  strategy
                </strong>{" "}
                to strengthen businesses, unlock potential, and create lasting
                value.
              </p>

              <p>
                Our approach goes beyond investment. We work alongside
                businesses to build the foundation, accelerate growth, and
                create opportunities for long-term success.
              </p>
            </div>

            <Link
              href="/about"
              className="font-liberation mt-6 inline-block border-b-2 border-[#c49227] pb-1 text-md font-bold leading-[21px] text-[#17191b] md:mt-[1.8vw]"
              style={{ fontFamily: '"Liberation Sans", sans-serif' }}
            >
              Explore The U Group
            </Link>
          </div>

          {/* Right image */}
          <div className="relative w-full md:w-[42%]">
            <div className="relative aspect-[1.02/1] w-full overflow-hidden rounded-[7px] border-2 border-[#c49227]">
              <Image
                src="/images/home/legacy.png"
                alt="The U Group team"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}