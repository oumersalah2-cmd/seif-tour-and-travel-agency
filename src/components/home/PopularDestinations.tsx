"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  return (
    <section id="destinations" className="section-padding bg-gray-50/50 dark:bg-dark-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            subtitle="Explore"
            title="Popular Destinations"
            description="Discover the world's most breathtaking locations. Where will your next adventure take you?"
            centered={false}
          />
          <Link
            href="#packages"
            className="hidden md:flex items-center gap-2 text-primary-600 dark:text-gray-300 font-semibold hover:text-accent-500 transition-colors group"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Masonry/Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          {/* Large Hero Item */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group h-[300px] md:h-full cursor-pointer"
          >
            <Image
              src={destinations[0].image}
              alt={destinations[0].name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
                {destinations[0].country}
              </span>
              <h3 className="font-display font-bold text-3xl text-white mb-2">
                {destinations[0].name}
              </h3>
              <p className="text-gray-200 text-sm">{destinations[0].tours} Tours Available</p>
            </div>
          </motion.div>

          {/* Regular Items */}
          {destinations.slice(1, 5).map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="relative rounded-2xl overflow-hidden group h-[250px] md:h-[290px] cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="px-2.5 py-0.5 bg-accent-400 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  {dest.country}
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {dest.name}
                </h3>
                <p className="text-gray-300 text-xs">{dest.tours} Tours</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="#packages"
          className="flex md:hidden items-center justify-center gap-2 mt-8 text-primary-600 dark:text-gray-300 font-semibold"
        >
          View All Destinations
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
