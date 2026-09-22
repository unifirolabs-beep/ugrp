import styles from "./home.module.css";
import Hero from "./components/home/Hero";
import Legacy from "./components/home/Legacy";
import Mantra from "./components/home/Mantra";
import WhyUs from "./components/home/WhyUs";
import Experience from "./components/home/Experience";
import Philosophy from "./components/home/Philosophy";
import VentureHome from "./components/home/Ventures_home";

export default function Home() {
  return (
    <main className={`flex-1 flex flex-col w-full bg-[#f6f4f0] ${styles.homePage}`}>
      <Hero />
      <Legacy />
      <Mantra />
      <WhyUs />
      <Experience />
      <Philosophy />
      <VentureHome />
    </main>
  );
}
