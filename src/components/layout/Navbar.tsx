"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#packages", label: "Packages" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/#blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileOpen
            ? "bg-white/90 dark:bg-dark-500/90 backdrop-blur-xl shadow-soft border-b border-gray-100/50 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 via-accent-300 to-accent-500 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
            </div>
            <div>
              <span
                className={`text-lg font-display font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled || isMobileOpen ? "text-primary-700 dark:text-white" : "text-white"
                }`}
              >
                Seif Tour
              </span>
              <span
                className={`block text-[10px] uppercase tracking-[0.3em] font-medium -mt-0.5 transition-colors duration-300 ${
                  isScrolled || isMobileOpen ? "text-accent-500 dark:text-accent-300" : "text-accent-300"
                }`}
              >
                & Travel Agency
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  isScrolled
                    ? "text-primary-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-white hover:bg-primary-50 dark:hover:bg-dark-200"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/#packages" className="btn-primary text-sm px-6 py-2.5">
              Book Now
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || isMobileOpen ? "text-primary-700 dark:text-white" : "text-white"
              }`}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[300px] bg-white dark:bg-dark-400 shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block px-4 py-3 text-primary-700 dark:text-gray-200 font-medium rounded-xl hover:bg-primary-50 dark:hover:bg-dark-200 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/#packages"
                    onClick={() => setIsMobileOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
