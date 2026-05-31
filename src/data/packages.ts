export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  highlights: string[];
  featured?: boolean;
}

export const getPackages = (lang: "en" | "om"): Package[] => [
  {
    id: "hajj-premium",
    title: lang === "en" ? "Premium Hajj Package" : "Paakeejii Hajjii Filatamaa",
    destination: lang === "en" ? "Mecca & Medina, Saudi Arabia" : "Makkaa fi Madiinaa, Saawud Arabiyaa",
    duration: lang === "en" ? "14 Days / 13 Nights" : "Guyyaa 14 / Halkan 13",
    price: 5999,
    rating: 5.0,
    reviews: 428,
    description: lang === "en" 
      ? "Our flagship Hajj package with VIP services. Experience the most profound spiritual journey of your lifetime with premium accommodations near the Haram, dedicated guides, and seamless logistics."
      : "Paakeejii Hajjii keenya muummee tajaajila VIP waliin. Bakka bultii sadarkaa olaanaa Haramatti dhihoo ta'e, qajeelchitoota addaa fi haala mijataa ta'een muuxannoo imalaa hafuuraa jireenya keessanii isa guddaa argadhaa.",
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&q=80",
    highlights: lang === "en"
      ? ["VIP Tents in Mina", "5-Star Hotels near Haram", "Dedicated Islamic Scholars", "All-inclusive Meals"]
      : ["Dunkaana VIP Miinaatti", "Hoteelota Urjii 5 Haramatti dhihoo", "Beektota Islaamaa Addaa", "Nyaata Guutuu"],
    featured: true,
  },
  {
    id: "umrah-executive",
    title: lang === "en" ? "Executive Umrah Package" : "Paakeejii Umrah Olaanaa",
    destination: lang === "en" ? "Mecca & Medina, Saudi Arabia" : "Makkaa fi Madiinaa, Saawud Arabiyaa",
    duration: lang === "en" ? "10 Days / 9 Nights" : "Guyyaa 10 / Halkan 9",
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 856,
    description: lang === "en"
      ? "Perform your Umrah with peace of mind. We handle your visa, flights, and luxury stays, providing an effortless and deeply spiritual experience."
      : "Umrah keessan nagaan raawwadhaa. Viizaa, xiyyaaraa fi bultii mijataa isiniif haala mijeessina, muuxannoo hafuuraa salphaa fi gadifagoo isiniif dhiyeessina.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
    highlights: lang === "en"
      ? ["Umrah Visa Processing", "Luxury Transport", "Guided Ziyarat", "Zamzam Water Provided"]
      : ["Viizaa Umrah Hojjechuu", "Geejjiba Mijataa", "Ziyaaraa Qajeelchitoonni Geggeessan", "Bishaan Zamzam"],
    featured: true,
  },
  {
    id: "dubai-tour",
    title: lang === "en" ? "Dubai Luxury Tour" : "Daawwannaa Dubaay Sadarkaa Olaanaa",
    destination: lang === "en" ? "Dubai, UAE" : "Dubaay, UAE",
    duration: lang === "en" ? "5 Days / 4 Nights" : "Guyyaa 5 / Halkan 4",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 234,
    description: lang === "en"
      ? "Experience the glamour of Dubai — from the towering Burj Khalifa to desert safaris and luxury shopping in the UAE's most vibrant city."
      : "Bareedina Dubaay muuxadhaa — gamoo dheeraa Burj Khalifa irraa kaasee hanga saafaarii gammoojjii fi bittaa qaalii magaalaa UAE ishee saffisattitti.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    highlights: lang === "en"
      ? ["Burj Khalifa Visit", "Desert Safari", "Dubai Mall", "Marina Cruise"]
      : ["Burj Khalifa Daawwachuu", "Saafaarii Gammoojjii", "Dubai Mall", "Marina Cruise"],
    featured: true,
  },
  {
    id: "turkey-tour",
    title: lang === "en" ? "Turkey Cultural Tour" : "Daawwannaa Aadaa Tarkii",
    destination: lang === "en" ? "Istanbul & Cappadocia" : "Istanbuul fi Kaappadooshiyaa",
    duration: lang === "en" ? "7 Days / 6 Nights" : "Guyyaa 7 / Halkan 6",
    price: 1499,
    originalPrice: 1899,
    rating: 4.9,
    reviews: 189,
    description: lang === "en"
      ? "Discover the magic of Turkey — explore historic Istanbul, fly over Cappadocia in hot air balloons, and savor world-renowned Turkish cuisine."
      : "Dinqisiisaa Tarkii daawwadhaa — Istanbuul seena qabeettii sakatta'aa, Kaappadooshiyaa irra baaluuniin balali'aa, fi nyaata Tarkii beekamaa ta'e dhandhamaa.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
    highlights: lang === "en"
      ? ["Hagia Sophia", "Hot Air Balloon", "Grand Bazaar", "Bosphorus Cruise"]
      : ["Hagia Sophia", "Balali'iinsa Baaluunii", "Grand Bazaar", "Bosphorus Cruise"],
    featured: true,
  },
  {
    id: "kuwait-discovery",
    title: lang === "en" ? "Kuwait Discovery" : "Daawwannaa Kuwaat",
    destination: lang === "en" ? "Kuwait City, Kuwait" : "Kuwaat Siitii, Kuwaat",
    duration: lang === "en" ? "4 Days / 3 Nights" : "Guyyaa 4 / Halkan 3",
    price: 999,
    rating: 4.7,
    reviews: 112,
    description: lang === "en"
      ? "Explore the modern marvels and rich history of Kuwait. Visit the iconic Kuwait Towers, traditional souks, and beautiful waterfronts."
      : "Dinqisiisaa ammayyaa fi seenaa badhaadhaa Kuwaat qoradhaa. Godambaa Kuwaat beekamoo, suuqii aadaa, fi qarqara galaanaa babbareedoo daawwadhaa.",
    image: "https://images.unsplash.com/photo-1567074994308-df304d5611db?w=800&q=80",
    highlights: lang === "en"
      ? ["Kuwait Towers", "Souq Al Mubarakiya", "Grand Mosque", "Avenues Mall"]
      : ["Godambaa Kuwaat", "Souq Al Mubarakiya", "Masjiida Guddaa", "Avenues Mall"],
  },
  {
    id: "qatar-getaway",
    title: lang === "en" ? "Qatar Premium Experience" : "Muuxannoo Qaataar Addaa",
    destination: lang === "en" ? "Doha, Qatar" : "Dohaa, Qaataar",
    duration: lang === "en" ? "5 Days / 4 Nights" : "Guyyaa 5 / Halkan 4",
    price: 1199,
    rating: 4.8,
    reviews: 145,
    description: lang === "en"
      ? "Experience the luxury and culture of Qatar. Stroll through Souq Waqif, marvel at Islamic art, and relax by the Arabian Gulf."
      : "Qaalummaa fi aadaa Qaataar muuxadhaa. Souq Waqif keessa naanna'aa, aartii Islaamaatti dinqisiifadhaa, fi qarqara Arabian Gulf itti boqodhaa.",
    image: "https://images.unsplash.com/photo-1700901742651-6b353164caf3?w=800&q=80",
    highlights: lang === "en"
      ? ["Souq Waqif", "Museum of Islamic Art", "Pearl-Qatar", "Desert Safari"]
      : ["Souq Waqif", "Godambaa Aartii Islaamaa", "Pearl-Qatar", "Saafaarii Gammoojjii"],
  },
];
