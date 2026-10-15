"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const { lang, t } = useLanguage();
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
      icon: MessageCircle,
      title: lang === "en" ? "WhatsApp Direct" : "Waatsaappii Nu Qunnamaa",
      details: ["+251 911 123 456", "Chat on WhatsApp"],
      description: lang === "en" ? "Chat directly with our 24/7 instant booking & pilgrimage consultants." : "Tajaajila Umraa fi imalaa hatattamaaf Waatsaappiin nu qunnamaa.",
      link: "https://wa.me/251911123456?text=Hello%20HIKAYA%2C%20I%20would%20like%20to%20inquire%20about%20your%20services",
    },
    {
      icon: Phone,
      title: t.contact.callUs,
      details: ["+251 911 123 456", "+251 116 123 456"],
      description: t.contact.callDesc,
    },
    {
      icon: Mail,
      title: t.contact.emailUs,
      details: ["info@hikayatour.com", "support@hikayatour.com"],
      description: t.contact.emailDesc,
    },
    {
      icon: MapPin,
      title: t.contact.visitUs,
      details: ["Bole Road, Near Friendship Mall", "Addis Ababa, Ethiopia"],
      description: t.contact.visitDesc,
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      details: ["Mon - Fri: 8:30 AM - 5:30 PM", "Sat: 9:00 AM - 1:00 PM"],
      description: t.contact.hoursDesc,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <SectionHeading
            subtitle={t.contact.subtitle}
            title={t.contact.title}
            description={t.contact.description}
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
                        info.link ? (
                          <a
                            key={idx}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-accent-500 hover:text-accent-600 font-semibold underline underline-offset-2 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-gray-700 dark:text-gray-300 font-medium">
                            {detail}
                          </p>
                        )
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
                {t.contact.sendMessage}
              </h3>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-green-700 dark:text-green-500/80">
                    {t.contact.successDesc}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        type="email"
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.subjectLabel}
                      </label>
                      <input
                        {...register("subject", { required: "Subject is required" })}
                        type="text"
                        placeholder={t.contact.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-400 text-primary-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
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
                      t.contact.sending
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.contact.send}
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
