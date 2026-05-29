"use client";

import Link from "next/link";
import { Plane, Mail, Phone, MapPin, Globe, Camera, MessageCircle, Video, Briefcase, Send } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#packages", label: "Tour Packages" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  "International Flights",
  "Tour Packages",
  "Visa Assistance",
  "Hotel Reservations",
  "Travel Insurance",
  "Custom Planning",
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-primary-700 dark:bg-dark-600 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 via-accent-300 to-accent-500 flex items-center justify-center">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
              <div>
                <span className="text-lg font-display font-bold">Seif Tour</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-accent-300 -mt-0.5">
                  & Travel Agency
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner for extraordinary travel experiences. We craft
              unforgettable journeys with personalized service, competitive
              pricing, and expert guidance to destinations worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-400 hover:shadow-glow transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-accent-300 hover:pl-1 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm hover:text-accent-300 cursor-pointer hover:pl-1 transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bole Road, Addis Ababa,<br />Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+251 911 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@seiftour.com</span>
              </div>
            </div>

            <h5 className="font-semibold text-sm mb-3">Newsletter</h5>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition"
              />
              <button type="submit" className="px-4 py-2.5 rounded-xl bg-accent-400 hover:bg-accent-500 text-white transition-colors duration-300">
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-accent-300 text-xs mt-2 animate-fade-in">
                ✓ Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Seif Tour and Travel Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-accent-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
