import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui/Container";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M21 4L3 11l7 2 2 7 9-16z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="iStep"
              width={320}
              height={128}
              className="h-28 w-auto rounded-xl bg-white px-4 py-3 lg:h-32"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Современное IT-образование для детей, студентов и взрослых. Делаем шаг к
              технологическому будущему вместе.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:+77018079771" className="transition-colors hover:text-white">
                  +7 (701) 807-97-71
                </a>
              </li>
              <li>
                <a href="mailto:info@istep.kz" className="transition-colors hover:text-white">
                  info@istep.kz
                </a>
              </li>
              <li>г. Астана, ул. Мухамедханова, 6</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Социальные сети
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-brand-teal/50 hover:bg-brand-teal/10 hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} iStep. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="transition-colors hover:text-white">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Условия использования
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
