import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seif Tour and Travel Agency | Premium Tours & Flights",
  description: "Discover extraordinary travel experiences with Seif Tour and Travel Agency. We offer international flights, premium tour packages, visa assistance, and custom travel planning.",
  keywords: "travel agency, tour packages, flights, vacation, holiday, booking, visa assistance",
  openGraph: {
    title: "Seif Tour and Travel Agency",
    description: "Your gateway to extraordinary travel experiences.",
    url: "https://seiftour.com",
    siteName: "Seif Tour and Travel Agency",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seif Tour and Travel Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const currentLang = (lang === "om" ? "om" : "en") as "en" | "om";

  return (
    <html lang={currentLang} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-white dark:bg-dark-500 text-primary-700 dark:text-gray-100 antialiased selection:bg-accent-400/30 selection:text-accent-500 dark:selection:text-accent-300 transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider lang={currentLang}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
