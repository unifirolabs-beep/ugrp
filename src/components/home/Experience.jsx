import Image from "next/image";
import {
  CircleDollarSign,
  Hourglass,
  Building2,
  Share2,
} from "lucide-react";

const stats = [
  {
    title: "$100M+",
    description: "Commercial Division Transaction Experience",
    icon: CircleDollarSign,
  },
  {
    title: "20+ Years",
    description: "Building, Advising & Growing Businesses",
    icon: Building2,
  },
  {
    title: "6 Months",
    description: "RSVI – From Bankruptcy to Bankable",
    icon: Hourglass,
  },
  {
    title: "Multi-Phase",
    description: "Acquisitions Sourced & Advised for IMX",
    icon: Share2,
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-[#f6f4f0] px-6 py-16 md:px-[5.7vw] md:py-[4.5vw]">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-liberation text-4xl font-bold leading-[30px] text-[#17191d]">
            Experience That Creates Value
          </h2>

          <p className="font-liberation mx-auto mt-3 max-w-[650px] text-lg font-normal leading-[21px] text-[#25272a]">
            From complex transactions to venture building, our track record is
            defined by
            <br className="hidden md:block" />
            disciplined execution and lasting impact.
          </p>
        </div>

        {/* Main layout */}
        <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 md:mt-[1.8vw] md:grid-cols-[1fr_1fr_1fr] md:grid-rows-2 md:gap-[1.2vw]">
          {/* Top-left */}
          <StatCard stat={stats[0]} />

          {/* Center image */}
          <div className="relative order-first aspect-[0.98/1] self-center overflow-hidden rounded-[7px] border-2 border-[#c49227] sm:col-span-2 md:order-none md:col-span-1 md:row-span-2">
            <Image
              src="/images/diverse_people_3.jpg"
              alt="The U Group team"
              fill
              className="object-cover"
            />
          </div>

          {/* Top-right */}
          <StatCard stat={stats[1]} />

          {/* Bottom-left */}
          <StatCard stat={stats[2]} />

          {/* Bottom-right */}
          <StatCard stat={stats[3]} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div
      className={`relative flex flex-col justify-end bg-[#CEA44D] text-white rounded-[7px] p-5`}
    >
      {/* Icon */}
      <div
        className={`absolute right-3 top-3 flex md:h-12 md:w-12 h-8 w-8 items-center justify-center rounded-[5px] bg-white`}
      >
        <Icon size={30} strokeWidth={1} className="text-[#CEA44D]" />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-liberation text-lg md:text-3xl text-white font-bold pb-2 leading-[22px]">
          {stat.title}
        </h3>

        <p className="font-liberation mt-2 text-md md:text-lg text-white font-normal leading-[20px]">
          {stat.description}
        </p>
      </div>
    </div>
  );
}