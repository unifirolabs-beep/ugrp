import Image from "next/image";

const VENTURES = [
  {
    name: "Juju",
    image: "/images/ventures/juju.png",
    description: "Consumer Science / Beverage Innovation",
  },
  {
    name: "Bioved",
    image: "/images/ventures/bioved.png",
    description: "Integrative Pharmaceuticals / Drug Discovery",
  },
  {
    name: "VenIQ",
    description: "AI Venture Intelligence",
  },
];

const AVATARS = [
  "/images/hero/3.png",
  "/images/hero/1.png",
  "/images/hero/2.png",
];

export default function Ventures() {
  return (
    <section className="w-full bg-[#f6f4f0] px-6 py-16 md:px-[5vw] md:py-[3vw]">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-liberation text-4xl font-bold leading-[40px] text-[#17191d]">
            Our Ventures
          </h2>

          <p className="font-liberation mx-auto mt-4 text-lg font-medium leading-[30px] text-[#16181A]">
            Ideas Become Companies. Companies Become
            <br />
            Possibilities.
          </p>
        </div>

        {/* Avatars + Statement */}
        <div className="mx-auto mt-12 max-w-[1100px] grid grid-cols-2 items-start md:mt-[4vw] md:gap-[5vw]">
          {/* Avatars */}
          <div className="flex justify-center items-center">
            {AVATARS.map((avatar, index) => (
              <div
                key={avatar}
                className={`relative h-[80px] w-[80px] overflow-hidden rounded-full border border-[#d4d4d4] md:h-[7vw] md:w-[7vw] ${
                  index !== 0 ? "-ml-[18px] md:-ml-[1.5vw]" : ""
                }`}
              >
                <Image
                  src={avatar}
                  alt={`Team member ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 7vw, 80px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Statement */}
          <p className="font-liberation max-w-[650px] text-lg leading-[30px] text-[#17191d]">
            The U Group&apos;s ventures span multiple industries, united by
            one principle:
            <br />
            <span className="font-bold">
              challenge conventional thinking and
              build what comes next.
            </span>
          </p>
        </div>

        {/* Venture circles */}
        <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-3 md:mt-[5vw] md:gap-[2vw]">
          {VENTURES.map((venture) => (
            <div
              key={venture.name}
              className="flex aspect-square w-full items-center justify-center rounded-full border-[2px] border-[#c49227] bg-[#f6f4f0]"
            >
              <div className="flex h-full w-full flex-col items-center justify-center px-[12%] text-center">
                {/* Logo */}
                <div className="relative flex h-[38%] w-[72%] items-center justify-center">
                  {venture.image ? (
                    <Image
                      src={venture.image}
                      alt={`${venture.name} logo`}
                      fill
                      sizes="(min-width: 768px) 18vw, 60vw"
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-liberation text-[28px] font-normal tracking-[0.16em] text-[#17191d] md:text-[2.15vw]">
                      VenIQ
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-liberation mt-3 max-w-[190px] text-[13px] font-normal leading-[21px] text-[#25272a]">
                  {venture.description.includes(" / ") ? (
                    <>
                      {venture.description.split(" / ")[0]}
                      <br />
                      / {venture.description.split(" / ")[1]}
                    </>
                  ) : (
                    venture.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}