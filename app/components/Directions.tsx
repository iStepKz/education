import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

type ServicePrice = {
  amount: string;
  note: string;
};

type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  prices: ServicePrice[];
  footnote?: string;
  icon: string;
  color: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Обучение ИИ",
    subtitle: "Корпоративный курс · 5 часов",
    description:
      "ИИ и вайб-кодинг для специалистов: инструменты, практика на задачах заказчика и прототипы рабочих решений.",
    features: [
      "ChatGPT, Claude, Perplexity, NotebookLM, Gemini, Copilot, DeepL, Gamma",
      "Codex и Claude Code для работы с файлами",
      "Практика на согласованных кейсах заказчика",
      "Вайб-кодинг: прототипы с Cursor AI (согласование с ИТ-службой)",
    ],
    prices: [{ amount: "от 157 500 ₸", note: "за 1 сотрудника / курс 5 часов" }],
    footnote: "Формат и расписание согласуем. Для практики — материалы, разрешённые заказчиком.",
    icon: "AI",
    color: "bg-brand-teal-light text-brand-teal",
  },
  {
    number: "02",
    title: "Маркетинг и продвижение",
    subtitle: "Развитие маркетологов и SMM",
    description:
      "Видеоуроки на платформе YSoft, контент с ИИ и сайт с SEO — под задачи продвижения компании.",
    features: [
      "Digital Marketing и бизнес-навыки на YSoft",
      "Reels, видео и изображения: Heygen, ElevenLabs, SubMagic, Higgsfield.ai",
      "Разработка сайта для продуктов и услуг",
      "SEO-продвижение по согласованным направлениям",
    ],
    prices: [
      { amount: "от 49 000 ₸", note: "за сотрудника · доступ к видеоурокам YSoft (от 10 человек)" },
      { amount: "от 99 000 ₸", note: "сайт с SEO-продвижением" },
    ],
    footnote:
      "Состав уроков и срок доступа фиксируем в предложении. Лицензии ИИ-сервисов и домен — отдельно.",
    icon: "MKT",
    color: "bg-brand-blue-light text-brand-blue",
  },
  {
    number: "03",
    title: "Платформа LMS",
    subtitle: "Среда для обучения сотрудников",
    description:
      "Собственная LMS: веб и мобильные приложения, каталог курсов, эквайринг и защита контента.",
    features: [
      "Веб-интерфейс и мобильные приложения iOS / Android",
      "Неограниченный каталог курсов, рейтинги, прогресс",
      "Эквайринг, рассрочка 0-0-12, интеграции с внешними сервисами",
      "Защита данных, видео и контроль доступа",
    ],
    prices: [
      { amount: "от 5 900 000 ₸", note: "бессрочная лицензия для одной организации" },
      { amount: "от 14 900 000 ₸", note: "исключительные права и исходный код" },
    ],
    footnote:
      "Для корпоративного использования чаще выбирают бессрочную лицензию. Детали настройки — в договоре.",
    icon: "LMS",
    color: "bg-brand-blue-light text-brand-blue",
  },
];

export function Directions() {
  return (
    <section id="courses" className="scroll-mt-32 bg-slate-50/80 py-10 sm:py-12 lg:py-14">
      <Container>
        <SectionHeader
          title="Наши услуги"
          description="Корпоративное обучение, маркетинг и собственная платформа LMS — комплексное предложение iStep для бизнеса."
          className="!mb-8 lg:!mb-10"
        />

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-teal/5 lg:rounded-3xl lg:p-6"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative mb-3 flex items-start justify-between gap-3">
                <div
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-2 text-[10px] font-bold sm:text-xs ${item.color}`}
                >
                  {item.icon}
                </div>
                <span className="text-xl font-bold text-brand-blue/15">{item.number}</span>
              </div>

              <h3 className="relative text-base font-bold text-brand-navy lg:text-lg">{item.title}</h3>
              <p className="relative mt-0.5 text-xs font-medium text-brand-teal sm:text-sm">{item.subtitle}</p>
              <p className="relative mt-2 text-xs leading-relaxed text-brand-muted sm:text-sm">
                {item.description}
              </p>

              <ul className="relative mt-3 flex-1 space-y-1.5">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-xs text-brand-muted sm:text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative mt-4 space-y-2 border-t border-slate-100 pt-4">
                {item.prices.map((price) => (
                  <div key={price.note}>
                    <p className="text-lg font-bold text-brand-navy">{price.amount}</p>
                    <p className="text-xs text-brand-muted">{price.note}</p>
                  </div>
                ))}
              </div>

              {item.footnote && (
                <p className="relative mt-3 text-[11px] leading-snug text-brand-muted/90 sm:text-xs">
                  {item.footnote}
                </p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
