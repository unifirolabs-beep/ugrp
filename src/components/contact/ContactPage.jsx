import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-[#dcdae5]">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
