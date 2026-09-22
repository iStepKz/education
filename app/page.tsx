import type { Metadata } from "next";
import { AiScenarios } from "./components/AiScenarios";
import { ContactForm } from "./components/ContactForm";
import { Corporate, Team, WhyUs } from "./components/WhyUs";
import { Directions } from "./components/Directions";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { JsonLd } from "./components/JsonLd";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/organization-schema";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "iStep — обучение ИИ и вайб-кодингу для бизнеса в Астане",
  },
  description:
    "Курсы ИИ в Астане и онлайн: обучение искусственному интеллекту и вайб-кодингу для бизнеса. Корпоративное обучение ИИ в Казахстане для команд и руководителей.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "iStep — обучение ИИ и вайб-кодингу для бизнеса в Астане",
    description:
      "Обучение искусственному интеллекту и вайб-кодингу для сотрудников и руководителей. Корпоративные программы в Астане и онлайн по Казахстану.",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getOrganizationJsonLd()} />
      <JsonLd data={getWebSiteJsonLd()} />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Directions />
        <AiScenarios />
        <Corporate />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
