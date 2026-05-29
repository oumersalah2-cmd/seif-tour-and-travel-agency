"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-primary-700 dark:text-white"
        }`}
      >
        {title}
      </h2>
      <div className={`flex ${centered ? "justify-center" : "justify-start"} mt-2 mb-6`}>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500" />
      </div>
      {description && (
        <p
          className={`max-w-2xl ${centered ? "mx-auto" : ""} text-base md:text-lg leading-relaxed ${
            light
              ? "text-gray-300"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
