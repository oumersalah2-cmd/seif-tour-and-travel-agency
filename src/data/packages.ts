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

export const packages: Package[] = [
  {
    id: "hajj-premium",
    title: "Premium Hajj Package",
    destination: "Mecca & Medina, Saudi Arabia",
    duration: "14 Days / 13 Nights",
    price: 5999,
    rating: 5.0,
    reviews: 428,
    description: "Our flagship Hajj package with VIP services. Experience the most profound spiritual journey of your lifetime with premium accommodations near the Haram, dedicated guides, and seamless logistics.",
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&q=80",
    highlights: ["VIP Tents in Mina", "5-Star Hotels near Haram", "Dedicated Islamic Scholars", "All-inclusive Meals"],
    featured: true,
  },
  {
    id: "umrah-executive",
    title: "Executive Umrah Package",
    destination: "Mecca & Medina, Saudi Arabia",
    duration: "10 Days / 9 Nights",
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 856,
    description: "Perform your Umrah with peace of mind. We handle your visa, flights, and luxury stays, providing an effortless and deeply spiritual experience.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
    highlights: ["Umrah Visa Processing", "Luxury Transport", "Guided Ziyarat", "Zamzam Water Provided"],
    featured: true,
  },
  {
    id: "dubai-tour",
    title: "Dubai Luxury Tour",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 234,
    description: "Experience the glamour of Dubai — from the towering Burj Khalifa to desert safaris and luxury shopping in the UAE's most vibrant city.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    highlights: ["Burj Khalifa Visit", "Desert Safari", "Dubai Mall", "Marina Cruise"],
    featured: true,
  },
  {
    id: "turkey-tour",
    title: "Turkey Cultural Tour",
    destination: "Istanbul & Cappadocia",
    duration: "7 Days / 6 Nights",
    price: 1499,
    originalPrice: 1899,
    rating: 4.9,
    reviews: 189,
    description: "Discover the magic of Turkey — explore historic Istanbul, fly over Cappadocia in hot air balloons, and savor world-renowned Turkish cuisine.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
    highlights: ["Hagia Sophia", "Hot Air Balloon", "Grand Bazaar", "Bosphorus Cruise"],
    featured: true,
  },
  {
    id: "kuwait-discovery",
    title: "Kuwait Discovery",
    destination: "Kuwait City, Kuwait",
    duration: "4 Days / 3 Nights",
    price: 999,
    rating: 4.7,
    reviews: 112,
    description: "Explore the modern marvels and rich history of Kuwait. Visit the iconic Kuwait Towers, traditional souks, and beautiful waterfronts.",
    image: "https://images.unsplash.com/photo-1567074994308-df304d5611db?w=800&q=80",
    highlights: ["Kuwait Towers", "Souq Al Mubarakiya", "Grand Mosque", "Avenues Mall"],
  },
  {
    id: "qatar-getaway",
    title: "Qatar Premium Experience",
    destination: "Doha, Qatar",
    duration: "5 Days / 4 Nights",
    price: 1199,
    rating: 4.8,
    reviews: 145,
    description: "Experience the luxury and culture of Qatar. Stroll through Souq Waqif, marvel at Islamic art, and relax by the Arabian Gulf.",
    image: "https://images.unsplash.com/photo-1700901742651-6b353164caf3?w=800&q=80",
    highlights: ["Souq Waqif", "Museum of Islamic Art", "Pearl-Qatar", "Desert Safari"],
  },
];
