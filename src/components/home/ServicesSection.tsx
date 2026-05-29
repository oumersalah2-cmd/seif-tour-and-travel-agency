"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, serviceIcons } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50/50 dark:bg-dark-400">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="What We Offer" title="Our Premium Services" description="From flight bookings to custom travel planning, we provide comprehensive travel solutions tailored to your needs." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: index * 0.06 }} whileHover={{ y: -6 }} className="group p-6 rounded-2xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400/10 to-accent-300/10 flex items-center justify-center mb-5 group-hover:from-accent-400 group-hover:to-accent-300 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary-700 dark:text-white mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
