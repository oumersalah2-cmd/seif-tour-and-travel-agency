"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, Moon, Plane, Hotel, Mountain } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SearchBooking() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"umrah" | "flights" | "hotels" | "tours">("umrah");
  const [formData, setFormData] = useState({ destination: "", departure: "", returnDate: "", travelers: "1" });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const tabs = [
    { id: "umrah", icon: Moon, label: lang === "en" ? "Umrah Packages" : "Pakeejii Umaraa" },
    { id: "flights", icon: Plane, label: lang === "en" ? "Flight Tickets (Intl & Domestic)" : "Tikeettii Xiyyaaraa" },
    { id: "hotels", icon: Hotel, label: lang === "en" ? "Hotel Booking" : "Hoteela Qabsiisuu" },
    { id: "tours", icon: Mountain, label: lang === "en" ? "Ethiopia Tours" : "Daawwannaa Itoophiyaa" },
  ] as const;

  return (
    <section id="search" className="relative z-20 -mt-16 px-4 md:px-8 mb-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
        
        {/* Service Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-3 px-2 sm:px-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-accent-400 text-white shadow-glow"
                    : "bg-white/90 dark:bg-dark-400 text-primary-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-300 backdrop-blur-md"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSearch} className="glass-card rounded-2xl p-6 md:p-8 shadow-soft-lg dark:shadow-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {lang === "en" ? "Select Destination / Service" : "Bakka / Tajaajila Filadhaa"}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <select 
                  value={formData.destination} 
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition appearance-none cursor-pointer text-xs sm:text-sm"
                >
                  <option value="">{lang === "en" ? "Where would you like to go?" : "Eessa deemuu barbaaddu?"}</option>
                  
                  <optgroup label={lang === "en" ? "Umrah & Sacred Visits" : "Pakeejii Umaraa"}>
                    <option value="makkah-medina">{lang === "en" ? "Makkah & Medina (Umrah & Ziyarah)" : "Makkaa fi Madiinaa (Umrah & Daawwannaa)"}</option>
                  </optgroup>

                  <optgroup label={lang === "en" ? "Ethiopia Tours (Attractions)" : "Daawwannaa Bakkeewwan Itoophiyaa"}>
                    <option value="sof-omar">{lang === "en" ? "Sof Omar Caves (Bale)" : "Holqa Soof Umar (Baalee)"}</option>
                    <option value="wonchi">{lang === "en" ? "Wonchi Crater Lake" : "Haroo Wonchii"}</option>
                    <option value="bale-mountains">{lang === "en" ? "Bale Mountains (Sanetti Plateau)" : "Gaarren Baalee"}</option>
                    <option value="semien-mountains">{lang === "en" ? "Semien Mountains (Samen Terara)" : "Gaarren Saameen (Samen Terara)"}</option>
                    <option value="afar-depression">{lang === "en" ? "Afar Depression (Erta Ale & Dallol)" : "Gammoojjii Affaar (Dallol & Erta Ale)"}</option>
                  </optgroup>

                  <optgroup label={lang === "en" ? "Flights & Hotels" : "Tikeettii Xiyyaaraa & Hoteela"}>
                    <option value="intl-tickets">{lang === "en" ? "International Flights & Hotels" : "Tikeettii fi Hoteela Idil-Addunyaa"}</option>
                    <option value="domestic-tickets">{lang === "en" ? "Domestic Flights & Lodges" : "Tikeettii fi Hoteela Biyya Keessaa"}</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {lang === "en" ? "Departure Date" : "Guyyaa Ka'umsaa"}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <input 
                  type="date" 
                  value={formData.departure} 
                  onChange={(e) => setFormData({ ...formData, departure: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition text-xs sm:text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {lang === "en" ? "Return Date" : "Guyyaa Deebii"}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <input 
                  type="date" 
                  value={formData.returnDate} 
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition text-xs sm:text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {lang === "en" ? "Pilgrims / Travelers" : "Baayyina Imaltootaa"}
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <select 
                  value={formData.travelers} 
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition appearance-none cursor-pointer text-xs sm:text-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20].map((n) => (
                    <option key={n} value={n}>
                      {n} {lang === "en" ? (n === 1 ? "Person" : "People") : (n === 1 ? "Nama" : "Namoota")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary w-full py-3.5 gap-2 text-sm sm:text-base">
                <Search className="w-5 h-5" />
                {lang === "en" ? "Find Packages" : "Paakeejii Barbaadi"}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
