export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const getTestimonials = (lang: "en" | "om"): Testimonial[] => [
  { id: "t1", name: "Sh. Habib Hussen", role: lang === "en" ? "Umrah Pilgrim" : "Imalaa Umrah", avatar: "/images/habib.jpg", rating: 5, quote: lang === "en" ? "Seif Tour made my spiritual journey to Mecca seamless. Their attention to detail, VIP tents, and dedicated support allowed me to focus entirely on my Umrah." : "Seif Tour imala hafuuraa koo gara Makkaatti baay'ee salphaa taasise. Sirreeffamni isaanii, dunkaanni VIP, fi gargaarsi isaanii Umrah koo qofa irratti akkan xiyyeeffadhu na gargaare." },
  { id: "t2", name: "Abdulhakim Abda", role: lang === "en" ? "Family Vacation" : "Boqonnaa Maatii", avatar: "/images/abdulhakim.jpg", rating: 5, quote: lang === "en" ? "Our family trip to Turkey and Dubai was absolutely incredible. Everything was perfectly organized — hotels, tours, and transfers. The kids loved every moment!" : "Imalli maatii keenyaa gara Tarkii fi Dubaay baay'ee ajaa'ibaa ture. Wanti hundinuu sirriitti qophaa'ee ture — hoteelota, daawwannaa fi geejjiba. Ijoolleen baay'ee itti gammadaniiru!" },
  { id: "t3", name: "Seifadin Ibrahim", role: lang === "en" ? "Business Traveler" : "Imalaa Daldalaa", avatar: "/images/seifadin.jpg", rating: 5, quote: lang === "en" ? "Securing my employment visa for Saudi Arabia was incredibly fast and hassle-free thanks to their expert team. I highly recommend them for all Middle East travel needs." : "Viizaa hojii koo Saawud Arabiyaatiif baay'ee dafee fi rakkoo tokko malee akkan argadhu waan taasisaniif galatoomaa. Dhimma imala Baha Giddugaleessaa hundumaaf isaanin isiniif gorsa." },
];
