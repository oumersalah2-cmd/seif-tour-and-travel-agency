export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  tours: number;
  featured?: boolean;
}

export const destinations: Destination[] = [
  { id: "saudi-arabia", name: "Mecca & Medina", country: "Saudi Arabia", image: "https://images.unsplash.com/photo-1565552643983-631d87e1f44a?w=1600&q=90", tours: 42, featured: true },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=90", tours: 24, featured: true },
  { id: "turkey", name: "Istanbul", country: "Turkey", image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1600&q=90", tours: 20, featured: true },
  { id: "kuwait", name: "Kuwait City", country: "Kuwait", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1600&q=90", tours: 12, featured: true },
  { id: "qatar", name: "Doha", country: "Qatar", image: "https://images.unsplash.com/photo-1610986708602-cb0bb28669b3?w=1600&q=90", tours: 15, featured: true },
];
