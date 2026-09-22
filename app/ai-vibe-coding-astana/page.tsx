import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  courseAudience,
  courseFaq,
  courseInstructors,
  courseOutcomes,
  courseProgram,
  courseTasks,
} from "@/lib/course-ai-content";
import { SITE_URL, siteName } from "@/lib/site";

const pagePath = "/ai-vibe-coding-astana";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata: Metadata = {
  title: {
    absolute: "Курсы ИИ и вайб-кодинга в Астане — iStep",
  },
  description:
    "Практическое обучение искусственному интеллекту и вайб-кодингу для руководителей и сотрудников компаний. Корпоративные программы в Астане и онлайн по Казахстану.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Курсы ИИ и вайб-кодинга в Астане — iStep",
    description:
      "Практическое обучение искусственному интеллекту и вайб-кодингу для руководителей и сотрудников компаний. Корпоративные программы в Астане и онлайн по Казахстану.",
    url: pageUrl,
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Обучение ИИ и вайб-кодингу для бизнеса в Астане",
  description:
    "Корпоративный практический курс по генеративному ИИ и вайб-кодингу для сотрудников и руководителей. Очно в Астане и онлайн по Казахстану.",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: SITE_URL,
    email: "info@istep.kz",
    telephone: "+7-701-807-97-71",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Астана",
      streetAddress: "ул. Мухамедханова, 6",
      addressCountry: "KZ",
    },
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["onsite", "online"],
    courseWorkload: "PT5H",
    location: {
      "@type": "Place",
      name: "Астана, Казахстан",
    },
  },
  offers: {
    "@type": "Offer",
    price: "157500",
    priceCurrency: "KZT",
    description: "от 157 500 ₸ за одного сотрудника (курс 5 часов)",
    url: pageUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: SITE_URL,
  email: "info@istep.kz",
  telephone: "+7-701-807-97-71",
};

export default function AiVibeCodingAstanaPage() {
  return (
    <>
      <JsonLd data={courseJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-blue-light/40 to-white pt-28 pb-12 sm:pt-32 sm:pb-16">
          <Container>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Корпоративное обучение
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
              Обучение ИИ и вайб-кодингу для бизнеса в Астане
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
              Практический корпоративный курс для руководителей и сотрудников: генеративный
              искусственный интеллект, работа с документами и прототипы рабочих инструментов в
              формате вайб-кодинга. Занятия в Астане или онлайн по согласованию.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-all hover:bg-[#0066dd]"
              >
                Записаться на обучение
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-all hover:border-brand-blue/30"
              >
                Все услуги iStep
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container>
            <SectionHeader
              title="Кому подходит курс"
              description="Программа ориентирована на бизнес-задачи, а не на абстрактную теорию технологий."
              align="left"
              className="!mb-8"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {courseAudience.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-sm leading-relaxed text-brand-muted"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="bg-slate-50/80 py-12 sm:py-16">
          <Container>
            <SectionHeader
              title="Какие рабочие задачи закрывает обучение"
              description="Сценарии практики согласуем с руководителями подразделений. Участники проверяют ответы ИИ по исходным материалам компании."
              align="left"
              className="!mb-8"
            />
            <ul className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-100 bg-white">
              {courseTasks.map((row) => (
                <li key={row.department} className="grid gap-2 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <p className="text-sm font-semibold text-brand-navy">{row.department}</p>
                  <p className="text-sm text-brand-muted">{row.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container>
            <SectionHeader
              title="Программа обучения"
              description="Корпоративный курс · 5 часов. Содержание адаптируем под отрасль и уровень участников."
              align="left"
              className="!mb-8"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {courseProgram.map((block) => (
                <article
                  key={block.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-brand-navy">{block.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-brand-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-brand-navy py-12 text-white sm:py-16">
          <Container>
            <SectionHeader
              title="Практические результаты"
              description="Фокус на навыках, которые команда может применить сразу после занятий."
              align="left"
              className="!mb-8 [&_h2]:text-white [&_p]:text-slate-300"
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {courseOutcomes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container>
            <SectionHeader
              title="Формат и длительность"
              align="left"
              className="!mb-6"
            />
            <div className="max-w-3xl space-y-4 text-brand-muted">
              <p className="leading-relaxed">
                <strong className="text-brand-navy">Длительность:</strong> 5 часов — базовая
                корпоративная программа по ИИ и вайб-кодингу.
              </p>
              <p className="leading-relaxed">
                <strong className="text-brand-navy">Формат:</strong> очные занятия в Астане,
                онлайн или гибрид для команд в других городах Казахстана. Расписание и состав
                группы согласуем с заказчиком.
              </p>
              <p className="leading-relaxed">
                <strong className="text-brand-navy">Стоимость:</strong> от 157 500 ₸ за одного
                сотрудника (уточняется в коммерческом предложении). На главной странице также
                представлены другие услуги iStep — маркетинг и LMS.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50/80 py-12 sm:py-16">
          <Container>
            <SectionHeader
              title="Преподаватели"
              description="Корпоративные тренеры iStep — практикующие IT-специалисты с отраслевым опытом. Подробные профили — на главной странице."
              align="left"
              className="!mb-8"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {courseInstructors.map((person) => (
                <article
                  key={person.role}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-bold text-brand-navy">{person.role}</h3>
                  <p className="mt-1 text-sm text-brand-teal">{person.focus}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-muted">
              <Link href="/#team" className="font-semibold text-brand-blue hover:text-brand-teal">
                Смотреть полные профили преподавателей →
              </Link>
            </p>
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container>
            <SectionHeader title="Частые вопросы" align="left" className="!mb-8" />
            <dl className="space-y-4">
              {courseFaq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-brand-navy">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-brand-muted">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <ContactForm
          sectionId="contact"
          formspreeSubject="Заявка: курс ИИ и вайб-кодинг (Астана)"
        />
      </main>
      <Footer />
    </>
  );
}
