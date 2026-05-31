"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Coins, HeartHandshake, LockKeyhole, Headphones, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const reasonIcons = [
  ShieldCheck,
  Coins,
  HeartHandshake,
  LockKeyhole,
  Headphones,
  Zap
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white dark:bg-dark-500">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle={t.whyChooseUs.subtitle}
          title={t.whyChooseUs.title}
          description={t.whyChooseUs.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {t.whyChooseUs.reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-gray-50/80 dark:bg-dark-400 border border-gray-100 dark:border-dark-300 hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Decorative Number */}
              <div className="absolute top-4 right-6 text-6xl font-display font-bold text-gray-100 dark:text-dark-300 group-hover:text-accent-50 dark:group-hover:text-accent-900/10 transition-colors z-0">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center mb-6 text-accent-500 group-hover:bg-accent-400 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-primary-700 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
