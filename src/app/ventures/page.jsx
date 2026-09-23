import Hero from "@/components/ventures/Hero";
import PortfolioAndPartnership from "@/components/ventures/PortfolioandPartnership";

export const metadata = {
  title: "Ventures | The U Group",
  description: "Ventures portfolio and partnerships.",
};

export default function VenturesPage() {
  return (
    <main className="flex-1 w-full bg-[#fbf9f4]">
      <Hero />
      <PortfolioAndPartnership />
    </main>
  );
}