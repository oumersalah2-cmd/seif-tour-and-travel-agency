"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Compass, PlaneTakeoff, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function UmrahTimeline() {
  const { t, lang } = useLanguage();
  const schedule = t.umrahTimeline;
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-dark-500/80 dark:via-dark-600 dark:to-dark-500/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 -ml-20 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 -mr-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-400/10 text-accent-500 dark:text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            {schedule.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-700 dark:text-white mb-4">
            {schedule.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {schedule.subtitle}
          </p>
        </div>

        {/* Route Visualizer Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 shadow-soft-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-dark-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-500 dark:text-accent-300 mb-1">
                <PlaneTakeoff className="w-4 h-4" />
                {lang === "en" ? "Official Round Itinerary" : "Daandii Imalaa Seera Qabeessa"}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-primary-700 dark:text-white">
                Addis Ababa ➔ Jeddah ➔ Madinah (3N) ➔ Makkah (7N) ➔ Addis Ababa
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                ✓ 3 Nights Madinah
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent-950/40 border border-accent-200 dark:border-accent-800 text-accent-700 dark:text-accent-300 text-xs font-semibold">
                ✓ 7 Nights Makkah
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-xs font-semibold">
                ✓ 11 Days Round
              </span>
            </div>
          </div>

          {/* Interactive Route Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {schedule.route.map((item, idx) => (
              <div
                key={idx}
                className="relative p-3.5 rounded-2xl bg-gray-50/70 dark:bg-dark-400/50 border border-gray-100 dark:border-dark-100 text-center flex flex-col justify-between"
              >
                <div className="text-[10px] font-bold text-accent-500 dark:text-accent-300 tracking-wider mb-1">
                  STEP {item.step}
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-primary-700 dark:text-white">
                  {item.city}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day-by-Day Interactive Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Day Selector Pills */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {schedule.days.map((dayItem, idx) => {
              const isActive = activeDay === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveDay(idx)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between min-w-[200px] lg:min-w-0 border ${
                    isActive
                      ? "bg-accent-400 text-white border-accent-400 shadow-glow"
                      : "bg-white dark:bg-dark-300 text-gray-700 dark:text-gray-300 border-gray-100 dark:border-dark-100 hover:border-accent-300 dark:hover:border-dark-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 dark:bg-dark-400 text-accent-500 dark:text-accent-300"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        {dayItem.day}
                      </div>
                      <div className="text-sm font-bold line-clamp-1">
                        {dayItem.title}
                      </div>
                    </div>
                  </div>
                  <Clock className={`w-4 h-4 hidden sm:block ${isActive ? "text-white" : "text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Day Showcase Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 shadow-soft-xl relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-accent-400/10 text-accent-500 dark:text-accent-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {schedule.days[activeDay].day} of 11
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    {lang === "en" ? "Guided by HIKAYA Resident Scholars" : "Ogeeyyii Amantii HIKAYA Waliin"}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-700 dark:text-white mb-4">
                  {schedule.days[activeDay].title}
                </h3>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {schedule.days[activeDay].desc}
                </p>

                {/* Day highlights pills */}
                <div className="pt-6 border-t border-gray-100 dark:border-dark-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-dark-400/50">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-primary-700 dark:text-white uppercase tracking-wider">
                        {lang === "en" ? "Accommodations & Logistics" : "Hoteela & Geejjiba"}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {activeDay < 3
                          ? (lang === "en" ? "Madinah 5-Star Hotel steps from Masjid an-Nabawi" : "Hoteela Madiinaa Masjiida Nabawiitti Dhihoo")
                          : (lang === "en" ? "Makkah 5-Star Hotel steps from Masjid al-Haram" : "Hoteela Makkaa Masjiida al-Haramitti Dhihoo")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-dark-400/50">
                    <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-primary-700 dark:text-white uppercase tracking-wider">
                        {lang === "en" ? "Coordinator Support" : "Qindeessaa Garee"}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {lang === "en" ? "24/7 Ethiopian on-ground chaperone & WhatsApp desk (+251 911 123 456)" : "Gargaarsa qindeessaa sa'aatii 24 fi Waatsaappii (+251 911 123 456)"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-dark-100">
                  <button
                    type="button"
                    onClick={() => setActiveDay((prev) => Math.max(0, prev - 1))}
                    disabled={activeDay === 0}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    ← {lang === "en" ? "Previous Day" : "Guyyaa Duraa"}
                  </button>
                  <div className="text-xs text-gray-400 font-medium">
                    {activeDay + 1} / 11
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveDay((prev) => Math.min(10, prev + 1))}
                    disabled={activeDay === 10}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-accent-500 dark:text-accent-300 hover:bg-accent-50 dark:hover:bg-dark-200 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    {lang === "en" ? "Next Day" : "Guyyaa Itti Aanu"} →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
