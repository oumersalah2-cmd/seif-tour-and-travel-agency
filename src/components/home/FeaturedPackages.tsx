"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Clock, MapPin, Users, MessageCircle, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingModal from "@/components/ui/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import { getPackages } from "@/data/packages";

export default function FeaturedPackages() {
  const { lang } = useLanguage();
  const packages = getPackages(lang);
  const featuredPackages = packages.filter((pkg) => pkg.featured);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<(typeof packages)[0] | null>(null);

  const handleBookNow = (pkg: (typeof packages)[0]) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };

  return (
    <section id="packages" className="py-24 bg-gray-50 dark:bg-dark-500/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl opacity-50 dark:opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle={lang === "en" ? "Transparent Pricing & Rounds" : "Gatii Ifaa & Paakeejota"}
          title={lang === "en" ? "Featured Umrah & Travel Packages" : "Paakeejota Umraa fi Imalaa Filatamoo"}
          description={
            lang === "en"
              ? "Clear quotations with room occupancy breakdown, historical Ziyarat included, and no upfront passport documents."
              : "Gatii ifa ta'e, kutaa filatamaa, ziyaaraa guutuu waliin, fi paaspoortii dura hin barbaachisne."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    <div className="px-3 py-1 rounded-full glass text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <Clock className="w-3 h-3 text-accent-300" /> {pkg.duration}
                    </div>
                    {pkg.occupancy && (
                      <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gray-100 text-[11px] font-medium flex items-center gap-1 border border-white/10">
                        <Users className="w-3 h-3 text-accent-300" /> {pkg.occupancy}
                      </div>
                    )}
                  </div>

                  {/* Price Tag with ETB & USD */}
                  <div className="absolute top-3 right-3 text-right">
                    {pkg.priceETB ? (
                      <div className="px-3.5 py-1.5 rounded-2xl bg-accent-400 text-white shadow-glow text-right">
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-90 leading-none">
                          {lang === "en" ? "From" : "Ka'umsa"}
                        </div>
                        <div className="text-sm font-extrabold">{pkg.priceETB}</div>
                        <div className="text-[10px] opacity-90 leading-none">~${pkg.price.toLocaleString()}</div>
                      </div>
                    ) : (
                      <div className="px-3.5 py-1.5 rounded-2xl bg-accent-400 text-white text-sm font-bold shadow-glow">
                        ${pkg.price.toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* Bottom Destination pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-medium truncate">
                      <MapPin className="w-3.5 h-3.5 text-accent-300 shrink-0" /> {pkg.destination}
                    </span>
                    {pkg.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold text-accent-200">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-primary-700 dark:text-white mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-300 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(pkg.rating)
                              ? "fill-accent-400 text-accent-400"
                              : "fill-gray-200 text-gray-200 dark:fill-dark-100 dark:text-dark-100"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {pkg.rating} ({pkg.reviews} {lang === "en" ? "reviews" : "yaada"})
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {pkg.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {pkg.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => handleBookNow(pkg)}
                  className="btn-primary w-full py-3 text-sm font-semibold shadow-soft"
                >
                  {lang === "en" ? "Request Quote & Book" : "Gatii Gaafadhaa & Qabsiisaa"}
                </button>

                <a
                  href={`https://wa.me/251911123456?text=Hello%20HIKAYA%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                    pkg.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-dark-100 hover:border-[#25D366]/50 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#25D366] flex items-center justify-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{lang === "en" ? "Inquire on WhatsApp (+251 911 123 456)" : "Waatsaappiin Gaafadhaa (+251 911 123 456)"}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageTitle={selectedPkg?.title}
        packagePrice={selectedPkg?.price}
      />
    </section>
  );
}
