"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Clock, Phone, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function OfficeDeskSection() {
  const { t, lang } = useLanguage();
  const office = t.officeDesk;

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-500/30 border-t border-gray-100 dark:border-dark-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 shadow-soft-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-400/10 text-accent-500 dark:text-accent-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Building2 className="w-3.5 h-3.5" />
                {office.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-700 dark:text-white mb-4">
                {office.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {office.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-dark-400/50">
                  <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-primary-700 dark:text-white uppercase tracking-wider block">
                      {lang === "en" ? "Physical Address" : "Teessoo Waajjiraa"}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {office.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-dark-400/50">
                  <Clock className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-primary-700 dark:text-white uppercase tracking-wider block">
                      {lang === "en" ? "Consultation Hours" : "Sa'aatii Tajaajilaa"}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {office.hours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/251911123456?text=Hello%20HIKAYA%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3.5 text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>{lang === "en" ? "Chat on WhatsApp (+251 911 123 456)" : "Waatsaappiin Nu Qunnamaa (+251 911 123 456)"}</span>
                </a>

                <Link
                  href={`/${lang}/contact`}
                  className="btn-secondary px-6 py-3.5 text-sm flex items-center gap-2"
                >
                  <span>{lang === "en" ? "View Full Contact & Map" : "Teessoo Guutuu & Kaartaa"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side Stats / Security */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-primary-900 text-white shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-accent-400" />
                  <span className="font-display font-bold text-base">
                    {lang === "en" ? "Licensed Tour & Travel Agency" : "Ejansii Imalaa Seera Qabeessa"}
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {lang === "en"
                    ? "Full compliance with Ethiopian tourism regulations and official Saudi Umrah pilgrimage protocols."
                    : "Heeyyama seera qabeessaa fi sirna imala Umraa Sa'uudii guutuu kan hordofu."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-accent-50 dark:bg-accent-950/20 border border-accent-200/60 dark:border-accent-800/40">
                <span className="text-xs font-bold text-accent-600 dark:text-accent-300 uppercase tracking-wider block mb-1">
                  {lang === "en" ? "Direct Pilgrimage Hotline" : "Lakk. Bilbila Hatattamaa"}
                </span>
                <div className="text-lg font-bold text-primary-700 dark:text-white">
                  +251 911 123 456 / +251 116 123 456
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                  {lang === "en" ? "Or chat anytime on WhatsApp:" : "Ykn Waatsaappiin nu qunnamaa:"}{" "}
                  <a
                    href="https://wa.me/251911123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-semibold underline"
                  >
                    +251 911 123 456
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
