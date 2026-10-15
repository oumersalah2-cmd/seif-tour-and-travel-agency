export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  priceETB?: string;
  originalPrice?: number;
  occupancy?: string;
  routeBadge?: string;
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  highlights: string[];
  featured?: boolean;
}

export const getPackages = (lang: "en" | "om"): Package[] => [
  {
    id: "umrah-standard",
    title: lang === "en" ? "Standard Umrah Package" : "Pakeejii Umaraa Istadaardii",
    destination: lang === "en" ? "Makkah (7N) · Madinah (3N)" : "Makkaa (Halkan 7) · Madiinaa (Halkan 3)",
    duration: lang === "en" ? "11 Days / 10 Nights" : "Guyyaa 11 / Halkan 10",
    price: 1450,
    priceETB: "150,000 ETB",
    originalPrice: 1650,
    occupancy: lang === "en" ? "4 / Room Sharing" : "Nama 4 / Kutaa 1",
    routeBadge: "Addis ➔ Madinah ➔ Makkah ➔ Addis",
    badge: lang === "en" ? "Most Popular Round" : "Filatamaa Baay'ee",
    rating: 5.0,
    reviews: 780,
    description: lang === "en" 
      ? "Full package for 150,000 ETB — 3 nights Madinah near Masjid an-Nabawi, 7 nights Makkah near the Haram (11 days from Addis Ababa and back). 4 pilgrims per room sharing with full historical Ziyarah, visa, and dedicated scholar guidance."
      : "Kaffaltii guutuu 150,000 ETB — Halkan 3 Madiinaa Masjiida Nabawiitti dhihoo, Halkan 7 Makkaa Haramatti dhihoo (Guyyaa 11 Finfinnee irraa deebi'u). Kutaa 1 keessa namoota 4, ziyaaraa guutuu, viizaa fi qajeelchaa amantii waliin.",
    image: "/images/destinations/umrah-makkah.jpg",
    highlights: lang === "en"
      ? ["3N Madinah + 7N Makkah", "4 / Room Sharing", "Full Historical Ziyarat (Quba & Uhud)", "Official Umrah Visa & Ground Support"]
      : ["Halkan 3 Madiinaa + Halkan 7 Makkaa", "Nama 4 Kutaa Tokkotti", "Ziyaaraa Guutuu (Qubaa fi Uhud)", "Viizaa Umraa fi Geejjiba Guutuu"],
    featured: true,
  },
  {
    id: "umrah-vip",
    title: lang === "en" ? "VIP Luxury Umrah Package" : "Pakeejii Umaraa VIP Qulqullina Olaanaa",
    destination: lang === "en" ? "Makkah (7N) · Madinah (3N)" : "Makkaa (Halkan 7) · Madiinaa (Halkan 3)",
    duration: lang === "en" ? "11 Days / 10 Nights" : "Guyyaa 11 / Halkan 10",
    price: 1850,
    priceETB: "177,500 ETB",
    originalPrice: 2100,
    occupancy: lang === "en" ? "2 / Room (Couples / Double)" : "Nama 2 / Kutaa Dhuunfaa",
    routeBadge: "Addis ➔ Madinah ➔ Makkah ➔ Addis",
    badge: "VIP Luxury",
    rating: 5.0,
    reviews: 420,
    description: lang === "en"
      ? "Premium comfort for 177,500 ETB — 5-star luxury hotels steps from the Haramain, arranged for 2 people per room (couples or private double occupancy). Includes VIP airport fast-track, private transport, and personalized scholar accompaniment."
      : "Muuxannoo addaa 177,500 ETB — Hoteelota urjii 5 Haramainitti dhihoo, kutaa tokko keessa namoota 2 (abbaa warraa fi haadha warraa ykn dhuunfaa). Geejjiba VIP qabbaneessaa, ziyaaraa dhuunfaa, fi qajeelchaa amantii dhuunfaa.",
    image: "/images/destinations/medina-ziyarah.jpg",
    highlights: lang === "en"
      ? ["5-Star Hotels Steps from Haram", "2 / Room Private Double Occupancy", "Private VIP Luxury Transfers", "Personalized Scholar & Ziyarah Guidance"]
      : ["Hoteela Urjii 5 Haramatti Dhihoo", "Kutaa Dhuunfaa Nama 2", "Geejjiba VIP Qabbaneessaa", "Qajeelchaa Amantii Dhuunfaa"],
    featured: true,
  },
  {
    id: "sof-omar-bale",
    title: lang === "en" ? "Sof Omar Caves & Bale Mountains Expedition" : "Daawwannaa Holqa Soof Umar fi Gaarren Baalee",
    destination: lang === "en" ? "Bale, Oromia, Ethiopia" : "Baalee, Oromiyaa, Itoophiyaa",
    duration: lang === "en" ? "4 Days / 3 Nights" : "Guyyaa 4 / Halkan 3",
    price: 480,
    priceETB: "35,000 ETB",
    originalPrice: 590,
    occupancy: lang === "en" ? "Guided Small Group" : "Garee Qajeelfama Qabu",
    routeBadge: "Addis ➔ Bale ➔ Sof Omar ➔ Addis",
    badge: lang === "en" ? "Natural Wonder" : "Dinqii Uumamaa",
    rating: 4.9,
    reviews: 312,
    description: lang === "en"
      ? "Explore Africa's most breathtaking underground cave system at Sof Omar carved by the Weyib River, combined with the alpine beauty of Bale Mountains National Park and endemic wildlife (Ethiopian Wolf, Mountain Nyala)."
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
    priceETB: "18,500 ETB",
    originalPrice: 240,
    occupancy: lang === "en" ? "Weekend / Daily Departures" : "Ayyaana / Torbee",
    routeBadge: "Addis ➔ Ambo ➔ Wonchi ➔ Addis",
    badge: lang === "en" ? "Eco Paradise" : "Jannata Uumamaa",
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
    priceETB: "48,000 ETB",
    originalPrice: 780,
    occupancy: lang === "en" ? "Trekking Group" : "Garee Daandii Gaaraa",
    routeBadge: "Gondar ➔ Debark ➔ Semien ➔ Addis",
    badge: lang === "en" ? "UNESCO Heritage" : "Dhaala UNESCO",
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
    priceETB: "52,000 ETB",
    originalPrice: 850,
    occupancy: lang === "en" ? "4x4 Desert Expedition" : "Konkolaataa 4x4",
    routeBadge: "Semera ➔ Erta Ale ➔ Dallol ➔ Addis",
    badge: lang === "en" ? "Extreme Adventure" : "Imala Addaa",
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
    title: lang === "en" ? "International & Domestic Tickets & Hotel Booking" : "Tikeettii Xiyyaaraa & Hoteela Idil-Addunyaa fi Biyya Keessaa",
    destination: lang === "en" ? "Worldwide & Domestic Routes" : "Addunyaa Guutuu fi Biyya Keessaa",
    duration: lang === "en" ? "Flexible / Instant" : "Yeroo Fedhii Keessanii",
    price: 180,
    priceETB: "18,000+ ETB",
    occupancy: lang === "en" ? "Individual & Family" : "Dhuunfaa fi Maatii",
    routeBadge: "Any Destination Worldwide",
    badge: lang === "en" ? "Instant Booking" : "Salphaatti Qabsiisaa",
    rating: 4.9,
    reviews: 520,
    description: lang === "en"
      ? "Take advantage of HIKAYA's direct airline reservations and global hotel contracts. Book domestic Ethiopian flights, international tickets across all continents, and luxury hotel rooms with 24/7 date-change support."
      : "Tikeettii balali'iinsa xiyyaaraa biyya keessaa fi idil-addunyaa, akkasumas hoteelota sadarkaa addunyaa gatii madaalawaa fi amansiisaa ta'een HIKAYA waliin qabsiisaa. Jijjiirraa guyyaa sa'aatii 24.",
    image: "/images/destinations/medina-ziyarah.jpg",
    highlights: lang === "en"
      ? ["Best Airfare Rates Guarantee", "Worldwide & Domestic Hotel Bookings", "Instant Date Changes & Support", "Official Airline Ticket Confirmation"]
      : ["Gatii Tikeettii Isa Gaarii", "Hoteelota Sadarkaa Olaanaa", "Jijjiirraa Guyyaa Salphaa", "Ragaa Tikeettii Seera Qabeessa"],
    featured: true,
  },
];
