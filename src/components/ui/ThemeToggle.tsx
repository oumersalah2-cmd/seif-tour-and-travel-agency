"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-dark-300 hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-primary-600" />
        ) : (
          <Sun className="w-5 h-5 text-accent-300" />
        )}
      </motion.div>
    </button>
  );
}
