export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const getBlogPosts = (lang: "en" | "om"): BlogPost[] => [
  { 
    id: "umrah-preparation", 
    title: lang === "en" ? "Essential Guide to Preparing for Umrah & Ziyarah" : "Qajeelfama Bu'uuraa Qophii Umraa fi Ziyaaraa", 
    excerpt: lang === "en" ? "Everything you need to know about preparing for your spiritual journey to Makkah & Medina — documents, rituals, hotels near Haram, and sacred Ziyarah sites." : "Waan hundumaa imala hafuuraa gara Makkaa fi Madiinaatti qophaa'uuf beekuu qabdan — ragaalee barbaachisoo, sirna amantii, hoteelota Haramatti dhihoo, fi iddoowwan ziyaaraa.", 
    category: lang === "en" ? "Umrah Guide" : "Qajeelfama Umraa", 
    date: lang === "en" ? "May 15, 2025" : "Caamsaa 15, 2025", 
    readTime: lang === "en" ? "8 min read" : "Daqiqa 8 dubbisa", 
    image: "/images/destinations/umrah-makkah.jpg", 
    author: "HIKAYA Tour Team" 
  },
  { 
    id: "sof-omar-wonchi-bale", 
    title: lang === "en" ? "Exploring Sof Omar Caves & Wonchi Crater Lake" : "Daawwannaa Holqa Soof Umar fi Haroo Wonchii", 
    excerpt: lang === "en" ? "Discover the geological marvels of Ethiopia — from the underground cathedral river caverns of Sof Omar to the serene volcanic caldera of Wonchi." : "Dinqisiisaa uumamaa Itoophiyaa daawwadhaa — holqa dinqii Soof Umar Laga Wayibiin dhangala'u irraa kaasee hanga haroo calaqqisaa Wonchiitti.", 
    category: lang === "en" ? "Ethiopia Tours" : "Daawwannaa Itoophiyaa", 
    date: lang === "en" ? "May 8, 2025" : "Caamsaa 8, 2025", 
    readTime: lang === "en" ? "6 min read" : "Daqiqa 6 dubbisa", 
    image: "/images/destinations/sof-omar.jpg", 
    author: "HIKAYA Tour Team" 
  },
  { 
    id: "ticketing-hotel-booking", 
    title: lang === "en" ? "How to Secure the Best International & Domestic Flights" : "Akkamitti Tikeettii Xiyyaaraa fi Hoteela Gaarii Qabsiisuu Dandeenya", 
    excerpt: lang === "en" ? "Maximize your travel budget with HIKAYA's expert tips for booking domestic Ethiopian flights, international tickets, and luxury hotel accommodations." : "Tooftaalee HIKAYA fayyadamuun tikeettii xiyyaaraa biyya keessaa fi idil-addunyaa gatii madaalawaan akkamitti akka qabsiistan baradhaa.", 
    category: lang === "en" ? "Flight & Hotels" : "Xiyyaara fi Hoteela", 
    date: lang === "en" ? "April 28, 2025" : "Ebla 28, 2025", 
    readTime: lang === "en" ? "7 min read" : "Daqiqa 7 dubbisa", 
    image: "/images/destinations/medina-ziyarah.jpg", 
    author: "HIKAYA Tour Team" 
  },
];

