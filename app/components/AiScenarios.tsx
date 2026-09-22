import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const scenarios = [
  {
    department: "Отдел закупок",
    practice: "Сравнение предложений поставщиков по согласованным критериям",
    check: "Время подготовки и точность таблицы",
  },
  {
    department: "Юридический отдел",
    practice: "Анализ договоров и рисков, претензии, правовые исследования",
    check: "Достоверность источников и качество документов",
  },
  {
    department: "Продажи",
    practice: "Коммерческое предложение на основе данных о продуктах и услугах",
    check: "Полнота предложения и объём правок",
  },
  {
    department: "HR и обучение",
    practice: "Материалы для адаптации и изучения продуктов компании",
    check: "Качество материалов и усвоение знаний",
  },
  {
    department: "Маркетинг",
    practice: "Изображения и видео для продвижения продуктов и услуг",
    check: "Срок подготовки и соответствие заданию",
  },
];

export function AiScenarios() {
  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <SectionHeader
          label="Практика"
          title="Где можно применить ИИ"
          description="Сценарии уточняем с руководителями подразделений. Сотрудник проверяет результат ИИ по исходным материалам."
          className="!mb-6 lg:!mb-8"
        />

        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="hidden grid-cols-[1fr_1.2fr_1fr] gap-4 border-b border-slate-100 bg-slate-50/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-brand-navy sm:grid lg:px-6">
            <span>Подразделение</span>
            <span>Сценарий для практики</span>
            <span>Что проверяем</span>
          </div>
          <ul className="divide-y divide-slate-100">
            {scenarios.map((row) => (
              <li
                key={row.department}
                className="grid gap-2 px-4 py-4 sm:grid-cols-[1fr_1.2fr_1fr] sm:gap-4 lg:px-6"
              >
                <p className="text-sm font-semibold text-brand-navy">{row.department}</p>
                <p className="text-sm text-brand-muted">{row.practice}</p>
                <p className="text-sm text-brand-muted">{row.check}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
