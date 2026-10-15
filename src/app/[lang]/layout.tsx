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
  title: "HIKAYA Tour and Travel Agency | Umrah, Flights & Ethiopia Tours",
  description: "Experience sacred Umrah pilgrimages (Makkah & Medina), Domestic & International flight tickets, luxury hotel bookings, and extraordinary tours across Ethiopia (Sof Omar, Wonchi, Bale Mountains, Semien, Afar).",
  keywords: "HIKAYA travel agency, Umrah packages, Sof Omar caves, Wonchi crater lake, Bale mountains, Semien mountains, Afar Danakil, domestic flight tickets, international flights, Ethiopia tours",
  openGraph: {
    title: "HIKAYA Tour and Travel Agency",
    description: "Your gateway to sacred Umrah journeys, flight tickets, and breathtaking tours across Ethiopia.",
    url: "https://hikayatour.com",
    siteName: "HIKAYA Tour and Travel Agency",
    images: [
      {
        url: "/images/destinations/umrah-makkah.jpg",
        width: 1200,
        height: 630,
        alt: "HIKAYA Tour and Travel Agency",
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
