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
  { id: "umrah-preparation", title: lang === "en" ? "Essential Guide to Preparing for Umrah" : "Qajeelfama Bu'uuraa Qophii Umrah", excerpt: lang === "en" ? "Everything you need to know about preparing for your spiritual journey — from required documents and rituals to what to pack for Mecca and Medina." : "Waan hundumaa imala hafuuraa keessaniif qophaa'uuf beekuu qabdan — ragaalee barbaachisoo fi sirnoota irraa kaasee hanga waan gara Makkaa fi Madiinaatti qabattanitti.", category: lang === "en" ? "Travel Guide" : "Qajeelfama Imalaa", date: lang === "en" ? "May 15, 2025" : "Caamsaa 15, 2025", readTime: lang === "en" ? "8 min read" : "Daqiqa 8 dubbisa", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&q=80", author: "Seif Tour Team" },
  { id: "middle-east-visas", title: lang === "en" ? "Navigating Middle East Work Visas" : "Adeemsa Viizaa Hojii Baha Giddugaleessaa", excerpt: lang === "en" ? "A comprehensive breakdown of the employment visa processes for Saudi Arabia, UAE, and Kuwait. Learn the requirements and how we can fast-track your application." : "Adeemsa viizaa hojii Saawud Arabiyaa, UAE, fi Kuwaat guutummaatti ibsame. Ulaagaalee fi akkamitti iyyannoo keessan akka ariifachiisnu baradhaa.", category: lang === "en" ? "Visa & Legal" : "Viizaa fi Seera", date: lang === "en" ? "May 8, 2025" : "Caamsaa 8, 2025", readTime: lang === "en" ? "6 min read" : "Daqiqa 6 dubbisa", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", author: "Seif Tour Team" },
  { id: "dubai-itinerary", title: lang === "en" ? "The Ultimate 5-Day Dubai Itinerary" : "Sagantaa Guyyaa 5 Dubaay", excerpt: lang === "en" ? "Maximize your time in the UAE's most vibrant city. From the Burj Khalifa to hidden cultural gems in Al Fahidi, here is how to spend 5 days in Dubai." : "Yeroo keessan magaalaa UAE saffisattu keessatti guutummaatti fayyadamaa. Burj Khalifa irraa kaasee hanga bakkeewwan aadaa dhokatoo Al Fahidiitti, guyyaa 5 Dubaay keessatti akkamitti akka dabarsitan asitti ibsameera.", category: lang === "en" ? "Destination" : "Bakkeewwan", date: lang === "en" ? "April 28, 2025" : "Ebla 28, 2025", readTime: lang === "en" ? "7 min read" : "Daqiqa 7 dubbisa", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", author: "Seif Tour Team" },
];
