import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutImage({ className = "", position = "68% center" }) {
  return <Reveal className={`about-image ${className}`}>
    <Image src="/images/about/team.png" alt="Two business professionals holding a laptop together" fill
      sizes="(max-width: 700px) 100vw, 45vw" style={{ objectFit: "cover", objectPosition: position }} />
  </Reveal>;
}
