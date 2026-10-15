"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";

const slides = [
  { image: "/images/destinations/umrah-makkah.jpg", alt: "Makkah Al-Mukarramah Umrah Package" },
  { image: "/images/destinations/sof-omar.jpg", alt: "Sof Omar Caves in Bale, Ethiopia" },
  { image: "/images/destinations/wonchi.jpg", alt: "Wonchi Crater Lake in Oromia, Ethiopia" },
  { image: "/images/destinations/bale-mountains.jpg", alt: "Bale Mountains National Park, Ethiopia" },
  { image: "/images/destinations/semien-mountains.jpg", alt: "Semien Mountains Samen Terara, Ethiopia" },
  { image: "/images/destinations/afar-danakil.jpg", alt: "Afar Depression Dallol & Erta Ale, Ethiopia" },
  { image: "/images/destinations/medina-ziyarah.jpg", alt: "Al-Masjid an-Nabawi Medina Ziyarah Tour" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { t, lang } = useLanguage();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/50 to-primary-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <span className="inline-block px-5 py-2 rounded-full bg-accent-400/20 border border-accent-400/30 text-accent-300 text-sm font-medium tracking-wide mb-8 backdrop-blur-sm">
            {t.hero.welcome}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          {t.hero.titleStart} <span className="text-gradient-gold">{t.hero.titleHighlight}</span><br className="hidden sm:block" /> {t.hero.titleEnd}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href={`/${lang}/#packages`} className="btn-primary text-base px-10 py-4">{t.hero.explore}</Link>
          <Link href={`/${lang}/contact`} className="btn-secondary text-base px-10 py-4">{t.hero.contact}</Link>
        </motion.div>

        {/* Zad-style Trust Badges Pill Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
            📍 {t.hero.pills.route}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
            📋 {t.hero.pills.quoteFirst}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
            🛡 {t.hero.pills.passportCheck}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
            🌍 {t.hero.pills.diaspora}
          </span>
          <a href="https://t.me/Seifa95" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-accent-400/30 hover:bg-accent-400/50 backdrop-blur-md border border-accent-400/40 text-accent-300 text-xs font-medium transition">
            ✈ {t.hero.pills.support}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === current ? "w-10 bg-accent-400" : "w-4 bg-white/30 hover:bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href={`/${lang}/#search`} className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
          <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
