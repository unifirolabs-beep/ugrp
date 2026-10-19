import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function CaseStudyCard({
  number,
  category,
  title,
  imageSrc,
  imageAlt = "",
  children,
}) {
  const isSecondCard = number === "02";
  const gridLayoutClass = isSecondCard
    ? "min-[701px]:grid-cols-[1fr_220px] min-[701px]:[&>div:first-child]:order-2"
    : "min-[701px]:grid-cols-[220px_1fr]";

  return (
    <article
      className={`mt-7 grid gap-7 max-[701px]:grid-cols-1 max-[701px]:gap-3 max-[701px]:[&>div:first-child]:min-h-[235px] ${gridLayoutClass}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-[#c9c2b7]">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="h-full w-full object-cover object-center min-h-[235px]"
        />
      </div>

      <Reveal className="content-center rounded-xl border border-[#c9c2b7] p-[30px] [&_h3]:mb-2.5 max-[701px]:p-[25px]">
        <div className="mb-[18px] flex items-center gap-5 [&>span:first-child]:font-mono-brand [&>span:first-child]:text-[28px]/none [&>span:first-child]:text-[#CEA44D] max-[701px]:gap-[15px]">
          <span>{number}</span>
          <span className="block font-mono-brand text-xl font-bold tracking-[.14em] uppercase text-[#CEA44D]">
            {category}
          </span>
        </div>
        <h3>{title}</h3>
        <AboutParagraph>{children}</AboutParagraph>
      </Reveal>
    </article>
  );
}