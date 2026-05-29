"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-gray-50/50 dark:bg-dark-400 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Client Reviews"
          title="What Our Travelers Say"
          description="Don't just take our word for it. Read about the unforgettable experiences our clients have had with Jebel Bright Travel."
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-300 rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100 dark:border-dark-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-accent-400/20 rotate-180" />
              
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[current].rating
                          ? "fill-accent-400 text-accent-400"
                          : "fill-gray-200 text-gray-200 dark:fill-dark-100 dark:text-dark-100"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-display italic mb-8 relative z-10">
                  &quot;{testimonials[current].quote}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent-400 shadow-sm">
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-primary-700 dark:text-white">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-dark-300 shadow-soft hover:bg-accent-400 hover:text-white dark:hover:bg-accent-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? "bg-accent-400 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-dark-300 shadow-soft hover:bg-accent-400 hover:text-white dark:hover:bg-accent-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
