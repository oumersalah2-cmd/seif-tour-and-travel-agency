"use client";

import { motion } from "framer-motion";
import { Globe, HeartHandshake, CheckCircle2, Send, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DiasporaSection() {
  const { t, lang } = useLanguage();
  const diaspora = t.diaspora;

  return (
    <section id="diaspora" className="py-24 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-400/20 text-accent-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-accent-400/30">
              <Globe className="w-3.5 h-3.5" />
              {diaspora.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              {diaspora.title}
            </h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              {diaspora.subtitle}
            </p>

            <div className="space-y-4 mb-10">
              {diaspora.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-400/20 text-accent-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-100 font-medium leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://t.me/Seifa95"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-base flex items-center gap-2 shadow-glow"
              >
                <Send className="w-4 h-4" />
                <span>{diaspora.ctaTelegram}</span>
              </a>

              <Link
                href={`/${lang}/contact`}
                className="px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition"
              >
                {diaspora.ctaQuote}
              </Link>
            </div>
          </div>

          {/* Right Card / Visual Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-accent-400 text-white flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {lang === "en" ? "Parent Sponsorship Guarantee" : "Wabii Kunuunsa Maatii"}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {lang === "en" ? "Addis Ababa Desk ➔ Holy Cities" : "Finfinnee ➔ Magaalota Qulqullaa'oo"}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-200">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs text-accent-300 font-bold block mb-1">
                    {lang === "en" ? "Step 1: Abroad" : "Sadarkaa 1: Biyya Alaa"}
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {lang === "en"
                      ? "Contact us via Telegram (@Seifa95), confirm dates and package, pay securely in USD/EUR/ETB."
                      : "Telekiraamiin (@Seifa95) nu qunnamaa, guyyaa filadhaa, kaffaltii nagaan raawwadhaa."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs text-accent-300 font-bold block mb-1">
                    {lang === "en" ? "Step 2: Addis Ababa" : "Sadarkaa 2: Finfinnee"}
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {lang === "en"
                      ? "Our Addis Ababa team contacts your parents, handles passport verification, visa stamping, and orientation."
                      : "Gareen keenya maatii keessan waliin ta'uun paaspoortii fi viizaa qindeessa."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs text-accent-300 font-bold block mb-1">
                    {lang === "en" ? "Step 3: Holy Cities Ground Chaperone" : "Sadarkaa 3: Makkaa fi Madiinaa"}
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {lang === "en"
                      ? "Airport pickup in Jeddah, assistance at Haram hotels, wheelchairs if needed, and guided Ziyarat."
                      : "Jeddah irraa simachuun hoteela Haramatti dhiheessuu, fi Ziyaaraa guutuu raawwachiisuu."}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-gray-300">
                  {lang === "en" ? "Direct Telegram Coordinator:" : "Qindeessaa Telekiraamii:"}{" "}
                  <a href="https://t.me/Seifa95" className="text-accent-300 font-bold underline hover:text-accent-200">
                    @Seifa95
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
