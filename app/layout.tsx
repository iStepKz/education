import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, siteName } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "iStep — обучение ИИ и вайб-кодингу для бизнеса в Астане",
    template: `%s — ${siteName}`,
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
  },
  description:
    "Обучение искусственному интеллекту и вайб-кодингу для сотрудников и руководителей. Корпоративные программы в Астане и онлайн по Казахстану.",
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    siteName,
    images: [{ url: "/images/logo.png", alt: "iStep" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
