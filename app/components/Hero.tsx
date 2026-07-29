import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative min-h-[22rem] w-full sm:min-h-[24rem] lg:min-h-[25rem] ${className}`}>
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-blue-light via-white to-brand-teal-light shadow-2xl shadow-brand-blue/10" />
      <div className="absolute inset-4 rounded-[1.5rem] border border-white/60 bg-white/40 backdrop-blur-sm" />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute right-8 top-12 h-24 w-24 rounded-full bg-brand-teal/20 blur-2xl" />

      <div className="absolute inset-8 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 shadow-sm backdrop-blur-sm">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="mt-3 space-y-2 font-mono text-[10px] sm:text-xs">
              <p className="text-slate-500">
                <span className="text-slate-400">const</span> future ={" "}
                <span className="text-slate-500">await</span> iStep.learn();
              </p>
              <p className="text-slate-400">// AI · Vibe-coding · Data</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded-lg shadow-md ${
                  i % 2 === 0 ? "bg-brand-blue" : "bg-brand-teal"
                } ${i === 1 ? "translate-y-2" : i === 2 ? "-translate-y-1" : ""}`}
                style={{ opacity: 1 - i * 0.15 }}
              />
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "AI", color: "bg-brand-blue" },
            { label: "Vibe-coding", color: "bg-brand-teal" },
            { label: "Data", color: "bg-brand-navy" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`mb-3 h-1.5 w-8 rounded-full ${item.color}`} />
              <p className="text-[10px] font-semibold leading-tight text-brand-navy sm:text-xs">
                {item.label}
              </p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
                <div className={`h-full w-2/3 rounded-full ${item.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal px-4 py-3 text-white shadow-xl">
            <p className="text-sm font-bold tracking-wide sm:text-base">LIVE обучение</p>
          </div>
          <svg viewBox="0 0 120 80" className="h-16 w-24 shrink-0 text-brand-blue/30 sm:h-20 sm:w-28" aria-hidden>
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,60 30,45 55,50 80,20 120,10"
            />
            <circle cx="120" cy="10" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal-light/60 px-4 py-1.5 text-sm font-medium text-brand-teal">
              <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
              Практические интенсивы
            </div>

            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Искусственный интеллект и вайб-кодинг для бизнеса
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-brand-muted sm:text-xl">
              Практические знания для реальных задач. Обучаем применению AI, вайб-кодинга
              и цифровых навыков в работе — результат уже после первых занятий.
            </p>

            <div className="mt-10">
              <Button href="#courses" variant="outline">
                Посмотреть курсы
              </Button>
            </div>
          </div>

          <HeroIllustration className="mx-auto w-full max-w-lg" />
        </div>
      </Container>
    </section>
  );
}
