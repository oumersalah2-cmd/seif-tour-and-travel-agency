import { Plane, MapPin, Globe, Palmtree, FileCheck, Hotel, Shield, Car, Briefcase, Moon, Compass } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof serviceIcons;
}

export const serviceIcons = {
  Plane, MapPin, Globe, Palmtree, FileCheck, Hotel, Shield, Car, Briefcase, Moon, Compass,
};

export const getServices = (lang: "en" | "om"): Service[] => [
  { id: "hajj-umrah", title: lang === "en" ? "Hajj & Umrah Packages" : "Paakeejota Hajjii fi Umrah", description: lang === "en" ? "Our core specialty: expertly guided spiritual journeys to the holy cities with premium VIP services and full visa assistance." : "Hojii keenya inni guddaan: muuxannoo imala hafuuraa gara magaalota qulqulluutti tajaajila VIP fi gargaarsa viizaa guutuu waliin isiniif dhiyeessina.", icon: "Moon" },
  { id: "middle-east-tours", title: lang === "en" ? "Middle East Tours" : "Daawwannaa Baha Giddugaleessaa", description: lang === "en" ? "Exclusive tour packages focusing on Turkey, Saudi Arabia, UAE, Kuwait, and the wider Middle East." : "Paakeejota daawwannaa addaa Tarkii, Saawud Arabiyaa, UAE, Kuwaat fi guutuu Baha Giddugaleessaa irratti xiyyeeffatan.", icon: "Globe" },
  { id: "international-flights", title: lang === "en" ? "International Flight Booking" : "Tikeetii Xiyyaaraa Addunyaa", description: lang === "en" ? "Book flights to any destination worldwide with the best fares and flexible options for your journey." : "Tikeetii xiyyaaraa gara bakkeewwan addunyaa kamiyyuu gatii madaalamaa fi filannoo mijataa ta'een qabsiisaa.", icon: "Plane" },
  { id: "visa-assistance", title: lang === "en" ? "Work & Tourist Visas" : "Viizaa Hojii fi Daawwannaa", description: lang === "en" ? "Specialized processing for Middle East employment visas (Saudi, UAE, Kuwait, Qatar) and global tourist visas with guaranteed efficiency." : "Viizaa hojii Baha Giddugaleessaa (Saawudii, UAE, Kuwaat, Qaataar) fi viizaa daawwannaa addunyaa haala si'ataa fi amansiisaa ta'een ni hojjenna.", icon: "FileCheck" },
  { id: "hotel-reservations", title: lang === "en" ? "Hotel Reservations" : "Hoteela Qabsiisuu", description: lang === "en" ? "Premium hotel bookings worldwide — from boutique stays to luxury 5-star resorts at best rates." : "Hoteelota sadarkaa olaanaa addunyaa guutuutti — bakka bultii salphaa irraa kaasee hanga rizoortii urjii 5 gatii gaariin isiniif qabsiisna.", icon: "Hotel" },
  { id: "travel-insurance", title: lang === "en" ? "Travel Insurance" : "Inshuraansii Imalaa", description: lang === "en" ? "Comprehensive travel insurance coverage for medical emergencies, trip cancellation, and more." : "Inshuraansii imalaa guutuu balaa tasaa fayyaa, imala haquu, fi kan biroof isiniif kaffalu.", icon: "Shield" },
  { id: "airport-pickup", title: lang === "en" ? "Airport Pickup Services" : "Tajaajila Geejjiba Buufata Xiyyaaraa", description: lang === "en" ? "Reliable airport transfer services with professional drivers for a comfortable arrival experience." : "Tajaajila geejjiba buufata xiyyaaraa amansiisaa ogeeyyii konkolaachisaniin haala mijataa ta'een isin simachuuf.", icon: "Car" },
  { id: "business-travel", title: lang === "en" ? "Business Travel Solutions" : "Furmaata Imala Daldalaa", description: lang === "en" ? "Corporate travel management with dedicated support, cost optimization, and VIP arrangements." : "Bulchiinsa imala dhaabbataa gargaarsa addaa, baasii xiqqaaf fi qophii VIP waliin.", icon: "Briefcase" },
  { id: "custom-planning", title: lang === "en" ? "Custom Travel Planning" : "Karoora Imalaa Dhuunfaa", description: lang === "en" ? "Personalized itineraries crafted to your preferences, budget, and travel style by our experts." : "Karoora imalaa dhuunfaa fedhii, baajata, fi haala imala keessanii irratti hundaa'uun ogeeyyii keenyaan qophaa'u.", icon: "Compass" },
];
