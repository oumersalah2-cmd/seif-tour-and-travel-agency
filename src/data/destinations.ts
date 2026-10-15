export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  tours: number;
  featured?: boolean;
}

export const getDestinations = (lang: "en" | "om"): Destination[] => [
  {
    id: "sof-omar",
    name: lang === "en" ? "Sof Omar Caves" : "Holqa Soof Umar",
    country: lang === "en" ? "Bale, Ethiopia" : "Baalee, Itoophiyaa",
    image: "/images/destinations/sof-omar.jpg",
    tours: 18,
    featured: true,
  },
  {
    id: "wonchi",
    name: lang === "en" ? "Wonchi Crater Lake" : "Haroo Wonchii",
    country: lang === "en" ? "Oromia, Ethiopia" : "Oromiyaa, Itoophiyaa",
    image: "/images/destinations/wonchi.jpg",
    tours: 22,
    featured: true,
  },
  {
    id: "bale-mountains",
    name: lang === "en" ? "Bale Mountains" : "Gaarren Baalee",
    country: lang === "en" ? "Bale, Ethiopia" : "Baalee, Itoophiyaa",
    image: "/images/destinations/bale-mountains.jpg",
    tours: 16,
    featured: true,
  },
  {
    id: "semien-mountains",
    name: lang === "en" ? "Semien Mountains (Samen Terara)" : "Gaarren Saameen (Samen Terara)",
    country: lang === "en" ? "Ethiopia" : "Itoophiyaa",
    image: "/images/destinations/semien-mountains.jpg",
    tours: 15,
    featured: true,
  },
  {
    id: "afar-depression",
    name: lang === "en" ? "Afar Depression (Danakil & Erta Ale)" : "Gammoojjii Affaar (Dallol & Erta Ale)",
    country: lang === "en" ? "Afar, Ethiopia" : "Affaar, Itoophiyaa",
    image: "/images/destinations/afar-danakil.jpg",
    tours: 14,
    featured: true,
  },
  {
    id: "mecca-medina",
    name: lang === "en" ? "Mecca & Medina (Umrah & Ziyarah)" : "Makkaa fi Madiinaa (Umrah fi Daawwannaa)",
    country: lang === "en" ? "Saudi Arabia" : "Saawud Arabiyaa",
    image: "/images/destinations/umrah-makkah.jpg",
    tours: 35,
    featured: true,
  },
];

