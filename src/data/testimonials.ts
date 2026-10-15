export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const getTestimonials = (lang: "en" | "om"): Testimonial[] => [
  { 
    id: "t1", 
    name: "Sh. Habib Hussen", 
    role: lang === "en" ? "Umrah Pilgrim" : "Imalaa Umraa", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", 
    rating: 5, 
    quote: lang === "en" 
      ? "HIKAYA Tour made my spiritual journey to Mecca and Medina unforgettable. Their attention to detail, 5-star hotel steps from the Haram, and guided Ziyarah allowed me to focus purely on devotion." 
      : "HIKAYA Tour imala hafuuraa koo gara Makkaa fi Madiinaatti baay'ee salphaa fi eebbifamaa taasise. Hoteelli Haramatti dhihoo ta'uu fi qajeelfamni ziyaaraa isaanii baay'ee na gammachiise." 
  },
  { 
    id: "t2", 
    name: "Tolasaa & Ifrah", 
    role: lang === "en" ? "Eco-Tour Traveler" : "Imaltoota Daawwannaa", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80", 
    rating: 5, 
    quote: lang === "en" 
      ? "Our tour to Sof Omar Caves and Wonchi Crater Lake with HIKAYA was mind-blowing! The limestone cathedral caverns and the lake views were stunning, and our 4x4 transport was so comfortable." 
      : "Daawwannaan Holqa Soof Umar fi Haroo Wonchii HIKAYA wajjin taasifne baay'ee nama ajaa'iba! Uumama dinqisiisaa fi geejjiba mijataa nuuf qopheessaniiru. Baay'ee galatoomaa!" 
  },
  { 
    id: "t3", 
    name: "Dr. Fuad Kedir", 
    role: lang === "en" ? "Frequent Traveler" : "Imalaa Daldalaa", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", 
    rating: 5, 
    quote: lang === "en" 
      ? "For domestic and international flight ticketing, HIKAYA is unmatched. They handled our multi-city flights and hotel reservations smoothly with best fares and 24/7 responsiveness." 
      : "Tikeettii xiyyaaraa biyya keessaa fi idil-addunyaa qabsiisuuf HIKAYA qofti ga'aadha. Gatii gaarii, ariitii, fi hoteela mijataa nuuf qabsiisaniiru. Yeroo hunda isaanin filadha." 
  },
];

