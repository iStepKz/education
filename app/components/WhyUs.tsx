import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const reasons = [
  {
    title: "Индивидуальный подход",
    description:
      "Адаптация под уровень участников и сферу деятельности заказчика, разбор реальных рабочих кейсов, менторство",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 2a5 5 0 015 5c0 2.5-1.5 4.5-3.5 5.5V14a2 2 0 002 2h1a2 2 0 012 2v1H6v-1a2 2 0 012-2h1a2 2 0 002-2v-1.5C8.5 11.5 7 9.5 7 7a5 5 0 015-5z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Актуальные технологии",
    description:
      "Обучаем тому, что востребовано сегодня: AI, data science, vibe-coding и современный web.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Гибкий формат",
    description:
      "Очные, онлайн и гибридные занятия. Удобное расписание для школьников, студентов и взрослых.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Сертификаты",
    description:
      "Официальные сертификаты iStep и помощь в подготовке к международным IT-сертификациям.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 15l-2 5 2-1 2 1-2-5zM7 4h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section id="about" className="bg-slate-50/80 py-20 lg:py-28">
      <Container>
        <SectionHeader
          label="О нас"
          title="Почему выбирают iStep"
          description="Мы объединяем качественное образование, живую практику и поддержку в одной экосистеме."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {reasons.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-lg shadow-brand-blue/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Corporate() {
  return (
    <section
      id="corporate"
      className="scroll-mt-32 py-10 sm:py-12 lg:flex lg:min-h-[calc(100svh-8rem)] lg:items-center lg:py-10"
    >
      <Container className="w-full lg:-translate-y-3">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
                B2B
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Корпоративное обучение
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Разрабатываем программы upskilling и reskilling для команд любого размера.
                AI, data, project management и digital-трансформация — под задачи вашего бизнеса.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Кастомные программы", "Очно и онлайн", "Отчётность для АУР", "Пилотный модуль"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Team() {
  const experts = [
    {
      role: "Корпоративный тренер по ИИ",
      focus: "Управление данными и AI",
      summary:
        "Опыт в IT-архитектуре, управлении данными и цифровой трансформации. Проводит корпоративные программы по AI, промптингу и вайбкодингу для административно-управленческого персонала.",
      competencies: [
        "Генеративный ИИ и промптинг",
        "Vibe-coding и прототипирование",
        "Управление данными",
        "IT-архитектура и трансформация",
      ],
      certifications: [
        "Trainer for Artificial Intelligence (2026)",
        "Astana IT University — вайбкодинг и AI для IT-подразделений",
        "TOGAF · COBIT · PRINCE2 · ITIL · MCP",
        "Диплом Astana IT University",
      ],
    },
    {
      role: "Эксперт цифрового развития",
      focus: "Управление ИТ-проектами и бизнес-анализ",
      summary:
        "ИТ-руководитель с более 15-летним опытом внедрения проектов в государственном секторе, здравоохранении и транспортной отрасли, включая международные ИТ-инициативы и менторство.",
      competencies: [
        "Project Management",
        "Business Analysis",
        "Data Analytics, AI, Vibe-coding",
        "Career Transition & Reinvention",
      ],
      certifications: [
        "IPMA Level C - Руководитель проектов",
        "ITIL 4 Foundation",
        "Certified Reinvention Practitioner (CRP)",
        "Scrum Master",
        "Диплом Московского Государственного Университета",
      ],
    },
    {
      role: "Эксперт по бизнес-аналитике",
      focus: "Аналитика данных и автоматизация процессов",
      summary:
        "Специалист по анализу данных, моделированию бизнес-процессов и автоматизации отчётности в транспортной и логистической отрасли. Опыт обучения сотрудников продвинутой работе с Excel и BI-инструментами.",
      competencies: [
        "Business Analysis и BPMN/UML",
        "Power BI и Data Modeling",
        "Оптимизация бизнес-процессов",
        "Claude, Codex",
      ],
      certifications: [
        "ITIL 4 Foundation — IT Service Management",
        "Business Analysis Modeling Skills and Techniques",
        "Power BI",
        "Диплом Института Управления и Информационных Технологий РУТ",
      ],
    },
  ];

  return (
    <section
      id="team"
      className="scroll-mt-32 py-10 sm:py-12 lg:flex lg:min-h-[calc(100svh-8rem)] lg:items-center lg:py-10"
    >
      <Container>
        <SectionHeader
          label="Экспертиза"
          title="Преподаватели и менторы"
          description="Экспертный состав iStep — практикующие IT-специалисты с международными и национальными сертификатами, многолетним отраслевым опытом. Корпоративные тренеры, которые адаптируют сложные технологии под задачи бизнеса и обучают на реальных кейсах."
          className="!mb-5 lg:!mb-6"
        />

        <div className="mb-6 rounded-2xl border border-brand-teal/20 bg-brand-teal-light/40 px-6 py-4 text-center sm:px-8">
          <p className="text-xl font-bold text-brand-navy sm:text-2xl">~270</p>
          <p className="mt-1 text-sm text-brand-muted">
            сотрудников корпоративного сектора уже прошли обучение у нашей команды
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {experts.map((expert) => (
            <article
              key={expert.role}
              className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/5 lg:p-7"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-brand-navy">{expert.role}</h3>
                <p className="mt-1 text-sm leading-snug text-brand-teal">{expert.focus}</p>
              </div>

              <p className="text-sm leading-snug text-brand-muted">{expert.summary}</p>

              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-navy">
                  Компетенции
                </p>
                <ul className="space-y-0.5">
                  {expert.competencies.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-brand-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-navy">
                  Сертификаты и обучение
                </p>
                <ul className="space-y-1">
                  {expert.certifications.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-brand-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
