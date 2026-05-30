export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Sh. Habib Hussen", role: "Umrah Pilgrim", avatar: "/images/habib.jpg", rating: 5, quote: "Seif Tour made my spiritual journey to Mecca seamless. Their attention to detail, VIP tents, and dedicated support allowed me to focus entirely on my Umrah." },
  { id: "t2", name: "Abdulhakim Abda", role: "Family Vacation", avatar: "/images/abdulhakim.jpg", rating: 5, quote: "Our family trip to Turkey and Dubai was absolutely incredible. Everything was perfectly organized — hotels, tours, and transfers. The kids loved every moment!" },
  { id: "t3", name: "Seifadin Ibrahim", role: "Business Traveler", avatar: "/images/seifadin.jpg", rating: 5, quote: "Securing my employment visa for Saudi Arabia was incredibly fast and hassle-free thanks to their expert team. I highly recommend them for all Middle East travel needs." },
];
