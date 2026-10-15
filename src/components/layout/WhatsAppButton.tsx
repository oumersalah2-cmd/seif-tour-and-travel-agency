"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/251911123456?text=Hello%20HIKAYA%2C%20I%20would%20like%20to%20inquire%20about%20your%20Umrah%20and%20travel%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      aria-label="Chat with HIKAYA on WhatsApp"
    >
      {/* Tooltip Badge */}
      <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-dark-300 text-primary-700 dark:text-white text-xs font-semibold shadow-soft border border-gray-100 dark:border-dark-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        WhatsApp: +251 911 123 456
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-glow-lg hover:scale-110 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.95 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.76C7.62 10.96 8.5 12.12 8.62 12.28C8.75 12.45 10.33 14.89 12.76 15.94C13.34 16.19 13.79 16.34 14.14 16.45C14.73 16.64 15.26 16.61 15.69 16.55C16.16 16.47 17.15 15.94 17.36 15.37C17.56 14.8 17.56 14.31 17.5 14.21C17.44 14.11 17.28 14.05 17.03 13.93C16.78 13.81 15.58 13.22 15.35 13.14C15.13 13.06 14.96 13.01 14.8 13.26C14.63 13.51 14.16 14.05 14.01 14.21C13.87 14.38 13.73 14.4 13.48 14.28C13.23 14.16 12.43 13.89 11.48 13.05C10.74 12.39 10.24 11.58 10.1 11.33C9.95 11.08 10.08 10.95 10.21 10.82C10.32 10.71 10.46 10.53 10.58 10.39C10.71 10.24 10.75 10.14 10.83 9.98C10.91 9.81 10.87 9.67 10.81 9.55C10.75 9.42 10.25 8.21 10.05 7.71C9.85 7.23 9.64 7.29 9.48 7.28C9.33 7.28 9.17 7.44 9.11 7.44Z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </div>
    </motion.a>
  );
}
