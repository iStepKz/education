import { Container } from "./ui/Container";

const directions = [
  {
    number: "01",
    title: "Искусственный интеллект",
    description:
      "Практическое применение AI для работы, анализа информации, автоматизации задач и повышения личной эффективности.",
    features: [
      "Работа с современными AI-инструментами",
      "Анализ и обработка данных",
      "Автоматизация рутинных задач",
      "Создание контента и решений для работы",
    ],
    highlight: "Применяйте AI уже сегодня для реальных рабочих задач",
    icon: "AI",
    color: "bg-brand-teal-light text-brand-teal",
  },
  {
    number: "02",
    title: "Вайбкодинг для работы",
    description:
      "Создание приложений и рабочих решений с помощью AI без навыков программирования.",
    features: [
      "Создание прототипов и мини-приложений",
      "Автоматизация рабочих процессов",
      "Работа с современными AI-платформами",
      "Практика на реальных кейсах",
    ],
    highlight: "Создавайте решения быстро и без программирования",
    icon: "</>",
    color: "bg-brand-blue-light text-brand-blue",
  },
  {
    number: "03",
    title: "Аналитика данных в Excel",
    subtitle: "Продвинутый уровень",
    description:
      "Мощные инструменты для анализа, обработки и визуализации данных для принятия эффективных решений.",
    features: [
      "Power Query и Power Pivot",
      "Финансовые модели и прогнозирование",
      "KPI и управленческие дашборды",
      "Практические кейсы и шаблоны",
    ],
    highlight: "Больше данных — больше решений — лучше результат",
    icon: "📊",
    color: "bg-brand-blue-light text-brand-blue",
  },
];

export function Directions() {
  return (
    <section
      id="courses"
      className="scroll-mt-32 bg-slate-50/80 py-6 sm:py-8 lg:flex lg:min-h-[calc(100svh-8rem)] lg:items-center lg:py-8"
    >
      <Container>
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-brand-navy sm:mb-5 sm:text-3xl lg:text-4xl">
          Направления обучения
        </h2>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {directions.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-teal/5 lg:rounded-3xl lg:p-6"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative mb-3 flex items-start justify-between gap-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold ${item.color}`}
                >
                  {item.icon}
                </div>
                <span className="text-xl font-bold text-brand-blue/15">{item.number}</span>
              </div>

              <h3 className="relative text-base font-bold text-brand-navy lg:text-lg">{item.title}</h3>
              {"subtitle" in item && item.subtitle && (
                <p className="relative mt-0.5 text-xs font-medium text-brand-teal sm:text-sm">
                  {item.subtitle}
                </p>
              )}
              <p className="relative mt-2 text-xs leading-relaxed text-brand-muted sm:text-sm">
                {item.description}
              </p>

              <ul className="relative mt-3 space-y-1">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-xs text-brand-muted sm:text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="relative mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-brand-navy sm:text-sm">
                {item.highlight}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
