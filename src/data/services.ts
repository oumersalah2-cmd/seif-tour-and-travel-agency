import { Plane, MapPin, Globe, Palmtree, FileCheck, Hotel, Shield, Car, Briefcase, Moon, Compass, Ticket, Mountain } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof serviceIcons;
}

export const serviceIcons = {
  Plane, MapPin, Globe, Palmtree, FileCheck, Hotel, Shield, Car, Briefcase, Moon, Compass, Ticket, Mountain,
};

export const getServices = (lang: "en" | "om"): Service[] => [
  {
    id: "umrah-packages",
    title: lang === "en" ? "Umrah Packages (Makkah & Medina)" : "Pakeejii Umaraa ((Makkah, Madiina fi daawwannaa))",
    description: lang === "en" 
      ? "Comprehensive spiritual Umrah packages with 5-star accommodations near Haram in Makkah & Medina, religious guidance, and historical Ziyarah tours."
      : "Paakeejii Umraa guutuu kan Makkaa, Madiinaa fi daawwannaa/ziyaaraa iddoowwan seena qabeessaa, qajeelchitoota beekumsa qabaniifi bakka bultii Haramatti dhihoo ta'e.",
    icon: "Moon",
  },
  {
    id: "international-ticket",
    title: lang === "en" ? "International Flight Tickets" : "Tikeettii Xiyyaaraa Idil-Addunyaa (International Ticket)",
    description: lang === "en"
      ? "Fast, seamless global flight ticket booking with best guaranteed rates to Middle East, Europe, North America, and worldwide."
      : "Tikeettii xiyyaaraa addunyaa gara Baha Giddugaleessaa, Awurooppaa, Ameerikaa fi addunyaa guutuutti gatii madaalawaa fi filannoo mijataan isiniif qabsiisna.",
    icon: "Plane",
  },
  {
    id: "domestic-ticket",
    title: lang === "en" ? "Domestic Flight Tickets" : "Tikeettii Xiyyaaraa Biyya Keessaa (Domestic Ticket)",
    description: lang === "en"
      ? "Reliable domestic air tickets across Ethiopia connecting Addis Ababa, Goba/Bale, Dire Dawa, Bahir Dar, Semera/Afar, and all destinations."
      : "Tikeettii xiyyaaraa biyya keessaa Finfinnee, Baalee, Dirree Dhawaa, Bahaar Daar, Samaraa/Affaar fi magaalaawwan Itoophiyaa hundaaf dhiyeessina.",
    icon: "Ticket",
  },
  {
    id: "international-hotel",
    title: lang === "en" ? "International Hotel Booking" : "Hoteelota Idil-Addunyaa (International Hotel Booking)",
    description: lang === "en"
      ? "Exclusive hotel and resort bookings worldwide — from luxury hotels in Mecca, Medina, Dubai, and Istanbul to global boutique stays."
      : "Hoteelota sadarkaa olaanaa Makkaa, Madiinaa, Dubaay, Istanbuul fi addunyaa guutuutti bakka bultii mijataa fi gatii filatamaadhaan isiniif qabsiisna.",
    icon: "Hotel",
  },
  {
    id: "domestic-hotel",
    title: lang === "en" ? "Domestic Hotel Booking" : "Hoteelota Biyya Keessaa (Domestic Hotel Booking)",
    description: lang === "en"
      ? "Handpicked eco-lodges, resorts, and premium hotels across Ethiopia including Bale Mountain Lodge, Wonchi crater lodges, and Semien resorts."
      : "Hoteelota fi loojjota filatamoo Itoophiyaa keessaa kan akka loojii Gaarren Baalee, Wonchii, fi Gaarren Saameen haala ammayyaawaan isiniif qabsiisna.",
    icon: "Hotel",
  },
  {
    id: "ethiopia-tours",
    title: lang === "en" ? "Ethiopia Tours (Sof Omar, Wonchi, Bale, Semien, Afar)" : "Daawwannaa: Soof Omer, Wonchi, Baalee, Saameen, Affaar",
    description: lang === "en"
      ? "Unforgettable expeditions to Sof Omar Caves, Wonchi Crater Lake, Bale Mountains, Semien Mountains (Samen Terara), and Afar Depression."
      : "Imala daawwannaa dinqisiisaa Holqa Soof Umar, Haroo Wonchii, Gaarren Baalee, Gaarren Saameen (Samen Terara), Gammoojjii Affaar fi kanneen biroo.",
    icon: "Mountain",
  },
  {
    id: "visa-assistance",
    title: lang === "en" ? "Umrah & Tourist Visa Services" : "Tajaajila Viizaa Umraa fi Daawwannaa",
    description: lang === "en"
      ? "Expedited visa processing for Saudi Arabia Umrah, Middle East travel, and international tourist visas with 100% dedicated support."
      : "Viizaa Umraa Saawudii, viizaa daawwannaa fi qophii waraqaa imalaa haala saffisaa fi amansiisaa ta'een hordofnee isiniif xumurra.",
    icon: "FileCheck",
  },
  {
    id: "vip-transport",
    title: lang === "en" ? "Airport Transfer & VIP Logistics" : "Geejjiba Buufata Xiyyaaraa & VIP",
    description: lang === "en"
      ? "Private luxury airport pickups, modern 4x4 tour vehicles, and comfortable transportation throughout your pilgrimage and vacations."
      : "Tajaajila konkolaataa ammayyaa buufata xiyyaaraatii simachuu, konkolaattota 4x4 daawwannaaf ta'an fi geejjiba mijataa imaltoota keenyaaf.",
    icon: "Car",
  },
];

