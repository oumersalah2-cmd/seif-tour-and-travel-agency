"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1600&q=90", alt: "Grand Mosque in Mecca, Saudi Arabia" },
  { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=90", alt: "Dubai skyline at night" },
  { image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1600&q=90", alt: "Hagia Sophia and Istanbul skyline" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

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
            ✈ Welcome to Seif Tour and Travel Agency
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Your Gateway To <span className="text-gradient-gold">Extraordinary</span><br className="hidden sm:block" /> Travel Experiences
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Embark on deeply spiritual Hajj & Umrah journeys, discover the Middle East's most breathtaking destinations, and secure rapid employment visas with our expert guidance.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4">
          <Link href="#packages" className="btn-primary text-base px-10 py-4">Explore Packages</Link>
          <Link href="/contact" className="btn-secondary text-base px-10 py-4">Contact Us</Link>
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
        <Link href="#search" className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
