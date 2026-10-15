"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Sparkles, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ZiyaratHub() {
  const { t, lang } = useLanguage();
  const ziyarat = t.ziyaratHub;

  return (
    <section id="ziyarat" className="py-24 bg-gray-50 dark:bg-dark-500/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-400/10 text-accent-500 dark:text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {ziyarat.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-700 dark:text-white mb-4">
            {ziyarat.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {ziyarat.subtitle}
          </p>
        </div>

        {/* 4 Sacred Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ziyarat.places.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-white text-xs font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-accent-300" />
                    {place.city}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-display font-bold text-lg leading-tight">
                      {place.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {place.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-500 dark:text-accent-300 group-hover:text-accent-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{lang === "en" ? "Guided by Scholar" : "Ogeessa Amantiin Daawwatama"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
