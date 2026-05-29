"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, User, Mail, Phone, Users, MessageSquare } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle?: string;
  packagePrice?: number;
}

export default function BookingModal({
  isOpen,
  onClose,
  packageTitle,
  packagePrice,
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", travelers: "1", requests: "" });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white dark:bg-dark-300 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-6 py-5 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-display font-bold text-white">
                Book Your Trip
              </h3>
              {packageTitle && (
                <p className="text-sm text-accent-300 mt-1">
                  {packageTitle}{" "}
                  {packagePrice && (
                    <span className="text-white font-semibold">
                      — ${packagePrice.toLocaleString()}
                    </span>
                  )}
                </p>
              )}
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-primary-700 dark:text-white mb-2">
                    Booking Confirmed!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;ll contact you shortly with your trip details.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="p-6 space-y-4"
                >
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone & Travelers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({ ...formData, travelers: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Traveler" : "Travelers"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      placeholder="Special Requests (optional)"
                      rows={3}
                      value={formData.requests}
                      onChange={(e) =>
                        setFormData({ ...formData, requests: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-base py-4"
                  >
                    Confirm Booking
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
