import React from "react";

const LEADERS = [
  {
    name: "ANNA WETHERBEE",
    role: "CHIEF EXECUTIVE OFFICER",
    bio: "Guiding the vision, strategic direction, and long-term growth of The U Group.",
    image: "/images/leadership/anna.png",
    linkedin: "#",
  },
  {
    name: "SANJEEV CHITRE",
    role: "MANAGING PARTNER",
    bio: "Driving strategic partnerships, business development, and venture growth.",
    image: "/images/leadership/sanjiv.png",
    linkedin: "#",
  },
  {
    name: "VISHNU AGRAWAL",
    role: "CHIEF FINANCIAL OFFICER",
    bio: "Leading financial strategy, planning, and management.",
    image: "/images/leadership/vishnu.png",
    linkedin: "#",
  },
  {
    name: "MICHAEL GRAY",
    role: "EXECUTIVE PARTNER – SEMICONDUCTOR",
    bio: "Bringing semiconductor industry expertise and strategic insight.",
    image: "/images/leadership/michael.png",
    linkedin: "#",
  },
];

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V10.67H6.12V17.34H8.34ZM7.23 9.76C8 9.76 8.5 9.25 8.5 8.61C8.48 7.96 8 7.47 7.24 7.47C6.49 7.47 6 7.96 6 8.61C6 9.25 6.48 9.76 7.21 9.76H7.23ZM17.88 17.34V13.57C17.88 11.55 16.8 10.61 15.36 10.61C14.2 10.61 13.68 11.25 13.39 11.7V10.67H11.17C11.2 11.14 11.17 17.34 11.17 17.34H13.39V13.62C13.39 13.42 13.41 13.22 13.47 13.08C13.63 12.68 13.99 12.27 14.61 12.27C15.41 12.27 15.73 12.88 15.73 13.77V17.34H17.88Z" />
    </svg>
  );
}

export default function LeadershipSection({ leaders = LEADERS }) {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#1C1C1C] font-liberation">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Top Header Area */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4A4742]">
              <span>MEET THE LEADERS</span>
            </div>

            <h2 className="mt-4 text-4xl font-normal leading-[1.08] tracking-tight text-[#1C1917] sm:text-5xl lg:text-[56px]">
              The People Behind Our Vision.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#57534E] sm:text-base">
              Our executive leadership pairs decades of cross-sector mastery,
              institutional discipline, and hands-on governance to create
              compounding enterprise value.
            </p>
          </div>

          {/* Right Side Eyebrow Label */}
          <div className="hidden md:block md:pt-1 md:text-right">
            <p className="text-[10px] font-medium uppercase leading-[1.6] tracking-[0.2em] text-[#292524]">
              EXECUTIVE
              <br />
              GOVERNANCE &amp;
              <br />
              STEWARDSHIP
            </p>
            <div className="mt-2 ml-auto h-[1px] w-14 bg-[#C8C3B8]" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group flex flex-col rounded-2xl border border-[#ECE8DF] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)] sm:p-5"
            >
              {/* Portrait Container */}
              <div className="aspect-[4/4.3] w-full overflow-hidden rounded-xl bg-[#EAE6DC]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Name & LinkedIn Row */}
              <div className="mt-5 flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-[#1C1917] sm:text-[15px]">
                  {leader.name}
                </h3>

                <a
                  href={leader.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="shrink-0 text-[#4A4742] transition-colors hover:text-[#141414]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>

              {/* Role */}
              <p className="mt-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-[#C6952D]">
                {leader.role}
              </p>

              {/* Bio */}
              <p className="mt-3.5 text-xs leading-relaxed text-[#78716C] sm:text-[13px]">
                {leader.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}