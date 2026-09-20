import Link from "next/link";

export default function Home() {
  return <main id="main-content" className="flex-1 home-placeholder"><h1>The U Group</h1><p>Explore our story and the experience behind it.</p><Link href="/about">Discover our story ↗</Link></main>;
}
