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
    id: "umrah-makkah-medina",
    title: lang === "en" ? "Executive Umrah & Historical Ziyarah" : "Pakeejii Umaraa ((Makkah, Madiina fi daawwannaa))",
    destination: lang === "en" ? "Makkah & Medina, Saudi Arabia" : "Makkaa fi Madiinaa, Saawud Arabiyaa",
    duration: lang === "en" ? "12 Days / 11 Nights" : "Guyyaa 12 / Halkan 11",
    price: 1850,
    originalPrice: 2150,
    rating: 5.0,
    reviews: 640,
    description: lang === "en" 
      ? "Experience a sublime spiritual journey. Includes 5-star hotel near the Haram in Makkah & Medina, visa processing, luxury air-conditioned transport, and complete historical Ziyarah tours (Ghar Hira, Mount Uhud, Masjid Quba)."
      : "Imala hafuuraa addaa nu wajjin dabarsaa. Hoteela urjii 5 Haramatti dhihoo Makkaa fi Madiinaa, viizaa saffisaa, geejjiba qabbaneessaa qabu, fi daawwannaa/ziyaaraa iddoowwan seena-qabeeyyii hunda of keessatti qabata.",
    image: "/images/destinations/umrah-makkah.jpg",
    highlights: lang === "en"
      ? ["5-Star Hotel Steps from Haram", "Complete Historical Ziyarah Tours", "Fast Umrah Visa Approval", "Dedicated Spiritual Guide"]
      : ["Hoteela Urjii 5 Haramatti Dhihoo", "Ziyaaraa Iddoowwan Seenaa Guutuu", "Viizaa Umraa Ariitii", "Qajeelchaa Amantii Addaa"],
    featured: true,
  },
  {
    id: "sof-omar-bale",
    title: lang === "en" ? "Sof Omar Caves & Bale Mountains Expedition" : "Daawwannaa Holqa Soof Umar fi Gaarren Baalee",
    destination: lang === "en" ? "Bale, Oromia, Ethiopia" : "Baalee, Oromiyaa, Itoophiyaa",
    duration: lang === "en" ? "4 Days / 3 Nights" : "Guyyaa 4 / Halkan 3",
    price: 480,
    originalPrice: 590,
    rating: 4.9,
    reviews: 312,
    description: lang === "en"
      ? "Explore Africa's most breathtaking underground cave system at Sof Omar carved by the Weyib River, combined with the alpine beauty of Bale Mountains National Park and endemic wildlife."
      : "Holqa Soof Umar isa dinqisiisaa Laga Wayibiin tolfame daawwadhaa. Akkasumas qilleensa qabbanaawaa Gaarren Baalee, Sanettii, fi Jeedala Booramee argaa.",
    image: "/images/destinations/sof-omar.jpg",
    highlights: lang === "en"
      ? ["Cathedral Limestone Caves", "Weyib River Walk", "Sanetti Alpine Plateau", "Bale Eco Lodge Accommodation"]
      : ["Holqa Dhagaa Cimmeessaa Dinqii", "Daandii Laga Wayib", "Platowii Sanettii", "Loojii Uumamaa Baalee"],
    featured: true,
  },
  {
    id: "wonchi-crater-lake",
    title: lang === "en" ? "Wonchi Crater Lake Paradise Getaway" : "Daawwannaa Haroo Wonchii Hawwataa",
    destination: lang === "en" ? "Wonchi, Oromia, Ethiopia" : "Wonchii, Oromiyaa, Itoophiyaa",
    duration: lang === "en" ? "2 Days / 1 Night" : "Guyyaa 2 / Halkan 1",
    price: 190,
    originalPrice: 240,
    rating: 4.9,
    reviews: 428,
    description: lang === "en"
      ? "Immerse yourself in the emerald waters and lush amphitheater of Wonchi Crater Lake. Enjoy scenic boat rides to the island church, horseback trekking down the caldera, and soothing mineral hot springs."
      : "Haroo Wonchii isa bareedina uumamaan badhaadhe daawwadhaa. Doonidhaan haroo irra deemuu, farda yaabbachuu, fi burqituu ho'aa dhandhamuudhaan boqonnaa gaarii dabarsaa.",
    image: "/images/destinations/wonchi.jpg",
    highlights: lang === "en"
      ? ["Scenic Boat Ride to Island", "Caldera Horseback Riding", "Natural Hot Springs", "Stunning Mountain Views"]
      : ["Imala Doonii Gara Odolaatti", "Farda Yaabbatanii Bu'uu", "Burqituu Ho'aa Uumamaa", "Mul'ata Gaarren Biyya Keessaa"],
    featured: true,
  },
  {
    id: "semien-mountains-samen",
    title: lang === "en" ? "Semien Mountains (Samen Terara) Peak Trek" : "Daawwannaa Gaarren Saameen (Samen Terara)",
    destination: lang === "en" ? "Semien Mountains, Ethiopia" : "Gaarren Saameen, Itoophiyaa",
    duration: lang === "en" ? "5 Days / 4 Nights" : "Guyyaa 5 / Halkan 4",
    price: 650,
    originalPrice: 780,
    rating: 4.9,
    reviews: 215,
    description: lang === "en"
      ? "Trek across the 'Roof of Africa' with dramatic escarpments, deep chasms, and views near Ras Dashen. Encounter wild troops of Gelada baboons and Walia ibex in their natural UNESCO habitat."
      : "Fiixee Gaarren Saameen (Samen Terara) daawwadhaa. Qarqara qileewwan gadi fageenyi isaanii sodaachisaa ta'an, Jaldeessa Giiladaa, fi bineensota alagaa UNESCOn eegaman daawwadhaa.",
    image: "/images/destinations/semien-mountains.jpg",
    highlights: lang === "en"
      ? ["UNESCO World Heritage Escarpments", "Gelada Baboon Encounters", "Camp Under Alpine Skies", "Professional Mountain Guides"]
      : ["Iddoo Dhaala Addunyaa UNESCO", "Jaldeessa Giiladaa Daawwachuu", "Buufata Gaarren Keessaa", "Qajeelchitoota Gaaraa Ogeeyyii"],
    featured: true,
  },
  {
    id: "gammoojji-affaar-danakil",
    title: lang === "en" ? "Afar Depression & Erta Ale Volcano Expedition" : "Imala Gammoojjii Affaar fi Erta Ale",
    destination: lang === "en" ? "Danakil, Afar, Ethiopia" : "Dallol fi Erta Ale, Affaar",
    duration: lang === "en" ? "4 Days / 3 Nights" : "Guyyaa 4 / Halkan 3",
    price: 690,
    originalPrice: 850,
    rating: 4.8,
    reviews: 180,
    description: lang === "en"
      ? "Journey into one of the most surreal landscapes on Earth in the Afar depression. Witness the boiling lava lake of active volcano Erta Ale, the kaleidoscopic neon sulfur springs of Dallol, and salt desert flats."
      : "Gammoojjii Affaar iddoo addunyaa irraa adda ta'e daawwadhaa. Volkaanoo Erta Ale isa abidda bilcheessu, burqaa ashaboo fi salfarii Dallol isa bifa adda addaan miidhage, fi lafa soogiddaa daawwadhaa.",
    image: "/images/destinations/afar-danakil.jpg",
    highlights: lang === "en"
      ? ["Erta Ale Active Volcano Lava Lake", "Dallol Psychedelic Sulfur Springs", "Lake Karum Salt Desert", "Escorted 4x4 Desert Expedition"]
      : ["Galaana Abiddaa Erta Ale", "Burqaa Salfarii Dallol", "Lafa Soogiddaa Kaarum", "Konkolaattota 4x4 Ammayyaa"],
    featured: true,
  },
  {
    id: "international-flight-hotel-package",
    title: lang === "en" ? "International Flights & 5-Star Hotel Booking" : "Tikeettii Xiyyaaraa & Hoteela Idil-Addunyaa",
    destination: lang === "en" ? "Global Destinations & Middle East" : "Baha Giddugaleessaa fi Addunyaa Hundaa",
    duration: lang === "en" ? "Custom Duration" : "Akka Fedhii Keessaniitti",
    price: 920,
    rating: 4.9,
    reviews: 520,
    description: lang === "en"
      ? "Take advantage of HIKAYA's exclusive corporate airfares and hotel connections. Book your international and domestic flight tickets alongside luxury hotel reservations anywhere in the world."
      : "Qophii tikeettii xiyyaaraa idil-addunyaa fi biyya keessaa, akkasumas hoteelota sadarkaa olaanaa gatii salphaa fi amansiisaa ta'een HIKAYA waliin qabsiisaa.",
    image: "/images/destinations/medina-ziyarah.jpg",
    highlights: lang === "en"
      ? ["Best Airfare Guarantee", "Worldwide Luxury Hotels", "24/7 Ticketing Support", "Flexible Dates & Changes"]
      : ["Gatii Tikeettii Isa Gaarii", "Hoteelota Qulqullina Olaanaa", "Gargaarsa Sa'aatii 24", "Jijjiirraa Guyyaa Salphaa"],
    featured: true,
  },
];

