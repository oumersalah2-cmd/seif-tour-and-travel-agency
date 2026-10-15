export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const getFaqItems = (lang: "en" | "om"): FAQItem[] => [
  {
    id: "faq-1",
    question: lang === "en" ? "How do I book an Umrah package or tour with HIKAYA Tour and Travel Agency?" : "Akkamittin paakeejii Umraa ykn daawwannaa HIKAYA Tour wajjin qabsiisuu danda'a?",
    answer: lang === "en" ? "You can book directly through our website by clicking 'Book Now', or contact our team via our 24/7 Telegram chatbot (@Seifa95), phone, or email. We will guide you through package details, visa processing, flight schedules, and personalized hotel accommodations." : "Marsariitii keenya irraan mallattoo 'Amma Qabsiisi' jedhu fayyadamuun, ykn chatbot Telegram keenya (@Seifa95), bilbila, fi iimeeliidhaan nu qunnamuun qabsiisuu dandeessu. Ogeeyyiin keenya odeeffannoo paakeejii, viizaa, xiyyaaraa fi hoteelaa hunda isiniif qopheessu.",
  },
  {
    id: "faq-2",
    question: lang === "en" ? "What is included in HIKAYA's Umrah package?" : "Pakeejii Umaraa HIKAYA keessatti maaltu dhiyaata?",
    answer: lang === "en" ? "Our Umrah package is all-inclusive: Umrah visa processing, 5-star or premium 4-star hotel stays close to the Haram in both Makkah and Medina, airport transfers in private air-conditioned vehicles, and comprehensive historical Ziyarah tours led by experienced Islamic scholars." : "Paakeejiin Umraa keenya kan guutuu ta'ee dha: Viizaa Umraa, hoteelota sadarkaa olaanaa Haramatti dhihoo Makkaa fi Madiinaatti, geejjiba qabbaneessaa qabu, fi daawwannaa/ziyaaraa iddoowwan seena-qabeeyyii hunda qajeelchitoota amantiin geggeeffamu of keessaa qaba.",
  },
  {
    id: "faq-3",
    question: lang === "en" ? "Do you book both International and Domestic flight tickets?" : "Tikeettii balali'iinsa xiyyaaraa Idil-addunyaa fi Biyya keessaa ni qabsiistuu?",
    answer: lang === "en" ? "Yes! We issue international flight tickets to all global destinations (Saudi Arabia, UAE, Europe, USA, etc.) as well as domestic flight tickets connecting all major Ethiopian destinations (Addis Ababa, Bale/Robe, Dire Dawa, Semera, Gondar, Bahir Dar) at discounted fares." : "Eeyyee! Tikeettii balali'iinsa xiyyaaraa idil-addunyaa (Saawudii, Dubaay, Awurooppaa, kkf) akkasumas tikeettii xiyyaaraa biyya keessaa (Finfinnee, Baalee, Dirree Dhawaa, Samaraa, Bahaar Daar) gatii madaalawaan isiniif qabsiisna.",
  },
  {
    id: "faq-4",
    question: lang === "en" ? "Can HIKAYA arrange domestic and international hotel bookings?" : "Hoteelota biyya keessaa fi idil-addunyaa qabsiisuun ni danda'amaa?",
    answer: lang === "en" ? "Absolutely. We partner with top-rated international hotel chains in Mecca, Medina, Dubai, Istanbul, and globally, as well as luxury lodges and eco-resorts across Ethiopia (Bale Mountain Lodge, Wonchi resorts, and Semien mountain lodges)." : "Eeyyee, Makkaa, Madiinaa, Dubaay, Istanbuul fi addunyaa guutuutti hoteelota urjii 5 qabsiisuu dabalatee, Itoophiyaa keessatti loojjota Gaarren Baalee, Wonchii, fi Saameen haala mijataadhaan isiniif qabsiisna.",
  },
  {
    id: "faq-5",
    question: lang === "en" ? "Which Ethiopia tour destinations do you operate?" : "Bakkeewwan daawwannaa Itoophiyaa kamfaan hojjettu?",
    answer: lang === "en" ? "We provide guided private and group tours to Sof Omar Caves, Wonchi Crater Lake, Bale Mountains National Park, Semien Mountains (Samen Terara), Afar Depression (Dallol & Erta Ale), and other historic and cultural destinations across Ethiopia." : "Holqa Soof Umar, Haroo Wonchii, Gaarren Baalee, Gaarren Saameen (Samen Terara), Gammoojjii Affaar (Dallol & Erta Ale), fi bakkeewwan uumamaa fi seenaa Itoophiyaa hundaaf imala qajeelfamaa qabna.",
  },
  {
    id: "faq-6",
    question: lang === "en" ? "What payment methods are accepted?" : "Mala kaffaltii akkamii fudhattu?",
    answer: lang === "en" ? "We accept domestic Ethiopian bank transfers (CBE, Awash, Bank of Oromia, etc.), Telebirr, international card payments, and direct booking at our office in Addis Ababa." : "Kaffaltii baankii biyya keessaa (CBE, Awaash, Baankii Oromiyaa, kkf), Telebirr, kaardii idil-addunyaa, fi qaamaan waajjira keenya Finfinneetti kaffaluu dandeessu.",
  },
];
