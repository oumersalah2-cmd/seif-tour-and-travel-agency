"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { getDestinations } from "@/data/destinations";

export default function PopularDestinations() {
  const { lang, t } = useLanguage();
  const destinations = getDestinations(lang);

  return (
    <section id="destinations" className="section-padding bg-gray-50/50 dark:bg-dark-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            subtitle={lang === "en" ? "Explore" : "Daawwadhaa"}
            title={lang === "en" ? "Popular Destinations" : "Bakkeewwan Beekamoo"}
            description={lang === "en" ? "Discover the world's most breathtaking locations. Where will your next adventure take you?" : "Bakkeewwan addunyaa babbareedoo ta'an daawwadhaa. Imalli keessan itti aanu eessatti isin geessa?"}
            centered={false}
          />
          <Link
            href={`/${lang}/#packages`}
            className="hidden md:flex items-center gap-2 text-primary-600 dark:text-gray-300 font-semibold hover:text-accent-500 transition-colors group"
          >
            {lang === "en" ? "View All Destinations" : "Bakkeewwan Hunda Daawwadhaa"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid displaying all 6 destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Top 2 Featured Large Cards */}
          {destinations.slice(0, 2).map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-2 relative rounded-3xl overflow-hidden group h-[320px] sm:h-[360px] cursor-pointer shadow-soft hover:shadow-soft-lg transition-all"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3.5 py-1 bg-accent-400 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block shadow-sm">
                  {dest.country}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2 group-hover:text-accent-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-gray-200 text-sm flex items-center justify-between">
                  <span>{dest.tours} {lang === "en" ? "Tours & Packages Available" : "Daawwannaan Ni Argama"}</span>
                  <span className="text-accent-300 font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {lang === "en" ? "Explore" : "Daawwadhaa"} &rarr;
                  </span>
                </p>
              </div>
            </motion.div>
          ))}

          {/* 4 Bottom Grid Cards */}
          {destinations.slice(2, 6).map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
              className="relative rounded-3xl overflow-hidden group h-[280px] cursor-pointer shadow-soft hover:shadow-soft-lg transition-all"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  {dest.country}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-accent-300 transition-colors line-clamp-1">
                  {dest.name}
                </h3>
                <p className="text-gray-300 text-xs flex items-center justify-between">
                  <span>{dest.tours} {lang === "en" ? "Tours" : "Daawwannaa"}</span>
                  <span className="text-accent-300 text-xs font-semibold group-hover:translate-x-1 transition-transform">&rarr;</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href={`/${lang}/#packages`}
          className="flex md:hidden items-center justify-center gap-2 mt-8 text-primary-600 dark:text-gray-300 font-semibold"
        >
          {lang === "en" ? "View All Destinations" : "Bakkeewwan Hunda Daawwadhaa"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
