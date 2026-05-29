export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  tours: number;
  featured?: boolean;
}

export const destinations: Destination[] = [
  { id: "saudi-arabia", name: "Mecca & Medina", country: "Saudi Arabia", image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1600&q=90", tours: 42, featured: true },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=90", tours: 24, featured: true },
  { id: "turkey", name: "Istanbul", country: "Turkey", image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1600&q=90", tours: 20, featured: true },
  { id: "kuwait", name: "Kuwait City", country: "Kuwait", image: "https://images.unsplash.com/photo-1567074994308-df304d5611db?w=1600&q=90", tours: 12, featured: true },
  { id: "qatar", name: "Doha", country: "Qatar", image: "https://images.unsplash.com/photo-1700901742651-6b353164caf3?w=1600&q=90", tours: 15, featured: true },
];
