"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SectionHeading from "@/components/ui/SectionHeading";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+251 911 123 456", "+251 116 123 456"],
      description: "We are available 24/7 for urgent inquiries.",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@seiftour.com", "support@seiftour.com"],
      description: "Drop us a line anytime. We reply within 24 hours.",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Bole Road, Near Friendship Mall", "Addis Ababa, Ethiopia"],
      description: "Our office is open from Monday to Saturday.",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:30 AM - 5:30 PM", "Sat: 9:00 AM - 1:00 PM"],
      description: "Closed on Sundays and Public Holidays.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <SectionHeading
            subtitle="Get In Touch"
            title="Contact Our Travel Experts"
            description="Have a question or ready to book your next trip? Reach out to us and we'll get back to you as soon as possible."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-dark-400 border border-gray-100 dark:border-dark-300 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center flex-shrink-0 text-accent-500">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-700 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 dark:text-gray-300 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 bg-white dark:bg-dark-300 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-100"
            >
              <h3 className="font-display font-bold text-2xl text-primary-700 dark:text-white mb-6">
                Send Us a Message
              </h3>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-green-700 dark:text-green-500/80">
                    Thank you for reaching out. One of our travel experts will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+251 900 000 000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register("subject", { required: "Subject is required" })}
                        type="text"
                        placeholder="e.g. Dubai Tour Inquiry"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      placeholder="Tell us about your travel plans..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition resize-none"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Google Maps Map */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-soft border border-gray-100 dark:border-dark-100 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11523403166!2d38.69469505820312!3d8.963479499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
