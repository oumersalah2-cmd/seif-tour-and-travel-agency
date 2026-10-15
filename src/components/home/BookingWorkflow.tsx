"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle, FileText, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingWorkflow() {
  const { t, lang } = useLanguage();
  const workflow = t.bookingWorkflow;

  const icons = [Search, CheckCircle, FileText, Send];

  return (
    <section className="py-24 bg-white dark:bg-dark-600 border-y border-gray-100 dark:border-dark-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-400/10 text-accent-500 dark:text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {workflow.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-700 dark:text-white mb-4">
            {workflow.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {workflow.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workflow.steps.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-7 rounded-3xl bg-gray-50/70 dark:bg-dark-300/60 border border-gray-100 dark:border-dark-100 hover:border-accent-400/40 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent-400/10 dark:bg-accent-400/20 text-accent-500 dark:text-accent-300 flex items-center justify-center font-display font-bold text-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-display font-black text-3xl text-gray-200 dark:text-dark-100">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-primary-700 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-dark-100/50 text-xs font-semibold text-accent-500 dark:text-accent-300 flex items-center gap-1">
                  <span>{lang === "en" ? `Step ${item.step} Details` : `Odeeffannoo Sadarkaa ${item.step}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA underneath */}
        <div className="mt-14 text-center">
          <Link
            href={`/${lang}/#packages`}
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base"
          >
            <span>{lang === "en" ? "Explore Packages & Request Quote" : "Paakeejota Ilaalaa Gatii Gaafadhaa"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
