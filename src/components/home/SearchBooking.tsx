"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function SearchBooking() {
  const [formData, setFormData] = useState({ destination: "", departure: "", returnDate: "", travelers: "1" });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="search" className="relative z-20 -mt-16 px-4 md:px-8 mb-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
        <form onSubmit={handleSearch} className="glass-card rounded-2xl p-6 md:p-8 shadow-soft-lg dark:shadow-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <select value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition appearance-none cursor-pointer">
                  <option value="">Where to?</option>
                  <option value="saudi-arabia">Mecca & Medina, KSA</option>
                  <option value="dubai">Dubai, UAE</option>
                  <option value="turkey">Istanbul, Turkey</option>
                  <option value="kuwait">Kuwait City, Kuwait</option>
                  <option value="qatar">Doha, Qatar</option>
                  <option value="oman">Muscat, Oman</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <input type="date" value={formData.departure} onChange={(e) => setFormData({ ...formData, departure: e.target.value })} className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Return</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <input type="date" value={formData.returnDate} onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Travelers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-400" />
                <select value={formData.travelers} onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition appearance-none cursor-pointer">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary w-full py-3.5 gap-2 text-base">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
