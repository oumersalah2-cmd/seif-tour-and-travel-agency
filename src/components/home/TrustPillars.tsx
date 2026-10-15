"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CalendarCheck, Scale, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustPillars() {
  const { t, lang } = useLanguage();
  const trust = t.trustPillars;

  const icons = [ShieldCheck, CalendarCheck, Scale, Globe];

  return (
    <section className="py-16 bg-white dark:bg-dark-600 border-b border-gray-100 dark:border-dark-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-400/10 text-accent-500 dark:text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {trust.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-700 dark:text-white mb-4">
            {trust.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {trust.subtitle}
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gray-50/80 dark:bg-dark-300/80 border border-gray-100 dark:border-dark-100 hover:border-accent-400/40 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-400/10 dark:bg-accent-400/20 text-accent-500 dark:text-accent-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary-50 dark:bg-dark-200 text-primary-700 dark:text-accent-300 border border-primary-100 dark:border-dark-100">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-primary-700 dark:text-white mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200/60 dark:border-dark-100/60 flex items-center text-xs font-semibold text-accent-500 dark:text-accent-300 group-hover:gap-1.5 transition-all">
                  <span>{lang === "en" ? "Learn how it works" : "Haala itti hojjetu"}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
