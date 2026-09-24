import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutImage({ className = "", position = "68% center" }) {
  const objectPositionClass =
    position === "85% center"
      ? "object-[85%_center]"
      : position === "65% center"
      ? "object-[65%_center]"
      : "object-[68%_center]";

  return (
    <Reveal
      className={`relative min-h-[220px] overflow-hidden rounded-[10px] border border-[#cea44d] bg-[#e6d7b8] ${className}`}
    >
      <Image
        src="/images/about/team.png"
        alt="Two business professionals holding a laptop together"
        fill
        sizes="(max-width: 700px) 100vw, 45vw"
        className={`object-cover ${objectPositionClass}`}
      />
    </Reveal>
  );
}
