import Link from "next/link";

export default function Home() {
  return <main id="main-content" className="min-h-[45vh] flex-1 px-6 py-[70px] text-center [&_h1]:text-[34px] [&_h1]:font-bold [&_p]:m-[15px] [&_a]:underline [&_a]:underline-offset-[5px]"><h1>The U Group</h1><p>Explore our story and the experience behind it.</p><Link href="/about">Discover our story ↗</Link></main>;
}
