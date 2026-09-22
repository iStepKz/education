import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Курсы ИИ для бизнеса в Астане — iStep",
  description:
    "Обучение искусственному интеллекту, вайб-кодингу для сотрудников и руководителей. Корпоративные программы обучения в Астане и онлайн по Казахстану.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white font-sans text-brand-navy">{children}</body>
    </html>
  );
}
