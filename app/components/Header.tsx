"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Курсы", href: "#courses" },
  { label: "Корпоративное обучение", href: "#corporate" },
  { label: "Преподаватели и менторы", href: "#team" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-white/70 shadow-sm backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex items-end justify-between pt-1 pb-6 lg:pt-1.5 lg:pb-7">
          <Link
            href="#home"
            className="relative z-10 inline-flex h-12 shrink-0 translate-y-1.5 items-center justify-center rounded-lg bg-white px-2 py-0.5 shadow-sm ring-1 ring-slate-100 sm:translate-y-2 sm:h-14 lg:h-16"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt="iStep"
              width={400}
              height={160}
              className="h-[4.25rem] w-auto sm:h-20 lg:h-24"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#contact" variant="primary" className="px-3 py-1.5 text-xs">
              Записаться
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition-colors hover:bg-slate-50 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Меню</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Container className="flex h-full flex-col justify-center pt-24">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-4 text-2xl font-semibold text-brand-navy transition-colors hover:bg-brand-blue-light"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Button href="#contact" variant="primary" className="w-full">
              Записаться
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
