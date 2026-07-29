import { ContactForm } from "./components/ContactForm";
import { Corporate, Team, WhyUs } from "./components/WhyUs";
import { Directions } from "./components/Directions";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Directions />
        <Corporate />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
