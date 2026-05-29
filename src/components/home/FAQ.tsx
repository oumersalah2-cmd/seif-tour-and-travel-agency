"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-gray-50/50 dark:bg-dark-400">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          subtitle="Common Questions"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our travel services, booking process, and more."
        />

        <div className="space-y-4 mt-12">
          {faqItems.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-2xl border ${
                openId === faq.id
                  ? "border-accent-400 bg-white dark:bg-dark-300 shadow-soft"
                  : "border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-300 hover:border-accent-300"
              } transition-colors duration-300 overflow-hidden`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openId === faq.id}
              >
                <span
                  className={`font-semibold pr-8 ${
                    openId === faq.id
                      ? "text-accent-500 dark:text-accent-400"
                      : "text-primary-700 dark:text-gray-200"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openId === faq.id
                      ? "bg-accent-400 text-white"
                      : "bg-gray-100 dark:bg-dark-200 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {openId === faq.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-dark-200 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
