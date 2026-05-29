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

export const blogPosts: BlogPost[] = [
  { id: "umrah-preparation", title: "Essential Guide to Preparing for Umrah", excerpt: "Everything you need to know about preparing for your spiritual journey — from required documents and rituals to what to pack for Mecca and Medina.", category: "Travel Guide", date: "May 15, 2025", readTime: "8 min read", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&q=80", author: "Seif Tour Team" },
  { id: "middle-east-visas", title: "Navigating Middle East Work Visas", excerpt: "A comprehensive breakdown of the employment visa processes for Saudi Arabia, UAE, and Kuwait. Learn the requirements and how we can fast-track your application.", category: "Visa & Legal", date: "May 8, 2025", readTime: "6 min read", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", author: "Seif Tour Team" },
  { id: "dubai-itinerary", title: "The Ultimate 5-Day Dubai Itinerary", excerpt: "Maximize your time in the UAE's most vibrant city. From the Burj Khalifa to hidden cultural gems in Al Fahidi, here is how to spend 5 days in Dubai.", category: "Destination", date: "April 28, 2025", readTime: "7 min read", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", author: "Seif Tour Team" },
];
