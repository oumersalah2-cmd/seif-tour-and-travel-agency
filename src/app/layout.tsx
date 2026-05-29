import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
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
        url: "/images/hero-dubai.png",
        width: 1200,
        height: 630,
        alt: "Jebel Bright Travel Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-white dark:bg-dark-500 text-primary-700 dark:text-gray-100 antialiased selection:bg-accent-400/30 selection:text-accent-500 dark:selection:text-accent-300 transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
