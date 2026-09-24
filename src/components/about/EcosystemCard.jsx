import Image from "next/image";
import AboutParagraph from "./AboutParagraph";
import Reveal from "./Reveal";

export default function EcosystemCard({ title, children, index }) {
  const isFeatured = index === 0;
  const cardStyleClass = isFeatured
    ? "border-[#cea44d] bg-[#cea44d] [&_p]:text-[#302611]"
    : "border-[#c9c2b7] bg-[#f6f4f0]";

  return (
    <Reveal delay={index * 0.06}>
      <article
        className={`w-full rounded-[14px] border p-[23px] [&_h3]:mb-[7px] [&_p]:text-[12px]/[19px] max-[701px]:p-[18px] ${cardStyleClass}`}
      >
        <span className="mb-5 flex size-[38px] items-center justify-center rounded-full bg-[#ead8b0]">
          {index < 2 ? (
            <Image
              src={`/images/about/${index === 0 ? "landmark" : "microscope"}.svg`}
              alt=""
              width={24}
              height={24}
            />
          ) : (
            <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
              0{index + 1}
            </span>
          )}
        </span>
        <h3>{title}</h3>
        <AboutParagraph>{children}</AboutParagraph>
      </article>
    </Reveal>
  );
}
