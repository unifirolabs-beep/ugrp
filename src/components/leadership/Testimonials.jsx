import React from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "EM",
    name: "Elena Morales",
    role: "CTO, APEX CLOUD SYSTEMS",
    quote:
      "“Nexora unlocked an operational tempo our internal teams had struggled to achieve for quarters. Their technical rigor is world-class.”",
    rating: 5,
  },
  {
    initials: "DR",
    name: "David Reynolds",
    role: "MANAGING DIRECTOR, HORIZON VENTURES",
    quote:
      "“From restructuring our cloud pipelines to refining executive governance, their partnership paid for itself within the first quarter.”",
    rating: 5,
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "CHIEF OPERATING OFFICER, LUMINA PAY",
    quote:
      "“Exceptional strategic foresight. Nexora helped us seamlessly scale across 14 sovereign jurisdictions without missing a beat.”",
    rating: 5,
  },
];

export default function ClientTestimonials({ testimonials = TESTIMONIALS }) {
  return (
    <section className="w-full bg-[#F6F4F0] text-[#1C1C1C] font-libration">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Centered Header Area */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#44403C] sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1C1C1C]" />
            <span>CLIENT TESTIMONIALS</span>
          </div>

          <h2 className="mt-4 text-3xl font-normal leading-[1.12] tracking-tight text-[#1C1917] sm:text-5xl lg:text-[48px]">
            Trusted by visionary founders and Fortune 500 leadership.
          </h2>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-14 lg:gap-7">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-[#ECE8DF] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.05)] sm:p-8"
            >
              <div>
                {/* Star Rating */}
                <div
                  className="flex items-center gap-1 text-[#C89B4B]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-3.5 w-3.5 fill-[#CEA44D] text-[#C89B4B]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-5 text-xs leading-[1.75] text-[#44403C] sm:text-[13px]">
                  {item.quote}
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="mt-8 flex items-center gap-3.5 border-t border-[#F2EFE8] pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CEA44D] text-xs font-medium text-[#1C1917]">
                  {item.initials}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-[#1C1917] sm:text-[13px]">
                    {item.name}
                  </p>
                  <p className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-[0.12em] text-[#78716C] sm:text-[10px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}