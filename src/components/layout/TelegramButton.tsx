"use client";

import { motion } from "framer-motion";

export default function TelegramButton() {
  return (
    <motion.a
      href="https://t.me/Seifa95"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      aria-label="Chat with HIKAYA on Telegram"
    >
      {/* Tooltip Badge */}
      <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-dark-300 text-primary-700 dark:text-white text-xs font-semibold shadow-soft border border-gray-100 dark:border-dark-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Telegram Chatbot (@Seifa95)
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#0088cc] to-[#2AABEE] text-white flex items-center justify-center shadow-lg hover:shadow-glow-lg hover:scale-110 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white translate-x-[-1px] translate-y-[-1px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#2AABEE] animate-ping opacity-25" />
      </div>
    </motion.a>
  );
}
