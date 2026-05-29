export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Sarah Johnson", role: "Business Traveler", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80", rating: 5, quote: "Seif Tour made my business trips seamless. Their attention to detail and 24/7 support is unmatched. I've been a loyal client for over 3 years now." },
  { id: "t2", name: "Ahmed Hassan", role: "Family Vacation", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80", rating: 5, quote: "Our family trip to Turkey was absolutely incredible. Everything was perfectly organized — hotels, tours, and transfers. The kids loved every moment!" },
  { id: "t3", name: "Maria Gonzalez", role: "Solo Traveler", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80", rating: 4, quote: "As a solo female traveler, I felt completely safe and supported throughout my Paris tour. The guides were knowledgeable and the experience was authentic." },
];
