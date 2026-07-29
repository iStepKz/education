"use client";

import { type FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-brand-blue/5">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-blue-light/50 via-white to-brand-teal-light/50 p-8 sm:p-12 lg:p-16">
              <SectionHeader
                align="left"
                label="Контакты"
                title="Запишитесь на обучение"
                description="Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня и поможем выбрать программу."
              />

              <div className="space-y-4 text-sm text-brand-muted">
                <p>
                  <span className="font-semibold text-brand-navy">Телефон:</span> +7 (701) 807-97-71
                </p>
                <p>
                  <span className="font-semibold text-brand-navy">Email:</span> info@istep.kz
                </p>
                <p>
                  <span className="font-semibold text-brand-navy">Адрес:</span> г. Астана, ул. Мухамедханова, 6
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-16">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal">
                    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Заявка отправлена!</h3>
                  <p className="mt-3 text-brand-muted">
                    Спасибо! Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand-navy">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ваше имя"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-brand-navy outline-none transition-all placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand-navy">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-brand-navy outline-none transition-all placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-navy">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-brand-navy outline-none transition-all placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10"
                    />
                  </div>

                  <Button type="submit" variant="secondary" className="w-full sm:w-auto">
                    Отправить заявку
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
