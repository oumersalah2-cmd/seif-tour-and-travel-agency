"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Coins, HeartHandshake, LockKeyhole, Headphones, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Hajj & Umrah Specialists",
    description: "Dedicated scholars, VIP tents, and premium accommodations near the Haram for a deeply spiritual journey.",
  },
  {
    icon: Coins,
    title: "Middle East Experts",
    description: "Unrivaled connections across Saudi Arabia, UAE, Turkey, Kuwait, and Qatar ensuring the best experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Services",
    description: "Tailor-made itineraries designed specifically around your preferences, schedule, and budget.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Booking",
    description: "Bank-level encryption and secure payment gateways ensure your personal information is protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Round-the-clock assistance throughout your pilgrimage or tour for complete peace of mind.",
  },
  {
    icon: Zap,
    title: "Fast Visa Processing",
    description: "Expert assistance for rapid Umrah, Hajj, tourist, and Middle East work visa approvals without the usual hassle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-dark-500">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Advantages"
          title="Why Choose Seif Tour?"
          description="We are your premier partner for Hajj, Umrah, and exclusive Middle East travel experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
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
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-primary-700 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
