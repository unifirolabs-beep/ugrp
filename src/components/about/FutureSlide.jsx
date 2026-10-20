import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";
import Image from "next/image";

export default function FutureSlide({ label, year, title, children, image = false }) {
  const is2026 = year === "2026";
  const slideStyleClass = is2026
    ? "bg-[#e9dec7]"
    : "bg-[#16181a] text-[#f6f4f0] [&>span:first-child]:text-[#cea44d]";

  return (
    <article className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-7 bg-[#f6f4f0] rounded-2xl sm:p-6 backdrop-blur-md [&>div:first-child]:h-[260px]">
      {image ? (
        <Image src={image} alt="future image" width={600} height={600} className="rounded-xl h-full"/>
      ) : (
        <Reveal
          className={`relative flex flex-col justify-between overflow-hidden rounded-[10px] border border-[#c6952d] p-[30px] h-full ${slideStyleClass}`}
        >
          <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
            {label}
          </span>
          <span className="text-[32px]/[1.15] font-bold tracking-[-.03em] my-4">
            {is2026 ? (
              <>
                Experience.
                <br />
                Amplified.
              </>
            ) : (
              <>
                The next
                <br />
                chapter.
              </>
            )}
          </span>
          <span className="font-mono-brand text-[9px] tracking-[.1em]">
            THE U GROUP / {year}
          </span>
        </Reveal>
      )}

      <Reveal className="rounded-xl bg-[#cea44d] p-[25px] h-full flex flex-col justify-center [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:text-[#302611]">
        <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
          {label}
        </span>
        <h3>{year}</h3>
        <AboutParagraph>
          <strong>{title}</strong>
        </AboutParagraph>
        {children && <AboutParagraph>{children}</AboutParagraph>}
      </Reveal>
    </article>
  );
}