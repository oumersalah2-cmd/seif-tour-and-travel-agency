"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingModal from "@/components/ui/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import { getPackages } from "@/data/packages";

export default function FeaturedPackages() {
  const { lang, t } = useLanguage();
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
          subtitle={lang === "en" ? "Exclusive Deals" : "Gatii Addaa Filatamaa"} 
          title={lang === "en" ? "Featured Tour Packages" : "Paakeejota Daawwannaa Filatamoo"} 
          description={lang === "en" ? "Handpicked tour packages designed to give you the best travel experience at unbeatable prices." : "Paakeejota daawwannaa gatii madaalamaa fi muuxannoo gaarii isiniif kennuuf qophaa'an."} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, index) => (
            <motion.div key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-2xl bg-white dark:bg-dark-300 border border-gray-100 dark:border-dark-100 overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-white text-xs font-medium flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {pkg.duration}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-accent-400 text-white text-sm font-bold shadow-glow">${pkg.price.toLocaleString()}</div>
                  {pkg.originalPrice && (
                    <div className="text-right mt-1"><span className="text-xs text-gray-300 line-through">${pkg.originalPrice.toLocaleString()}</span></div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm">
                  <MapPin className="w-3.5 h-3.5" /> {pkg.destination}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-primary-700 dark:text-white mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-300 transition-colors">{pkg.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? "fill-accent-400 text-accent-400" : "fill-gray-200 text-gray-200 dark:fill-dark-100 dark:text-dark-100"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{pkg.rating} ({pkg.reviews} {lang === "en" ? "reviews" : "yaada"})</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">{pkg.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="px-2.5 py-1 text-xs rounded-full bg-primary-50 dark:bg-dark-200 text-primary-600 dark:text-gray-300 font-medium">{h}</span>
                  ))}
                </div>
                <button onClick={() => handleBookNow(pkg)} className="btn-primary w-full">{lang === "en" ? "Book Now" : "Amma Qabsiisi"}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} packageTitle={selectedPkg?.title} packagePrice={selectedPkg?.price} />
    </section>
  );
}
