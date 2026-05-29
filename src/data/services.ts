import { Plane, MapPin, Globe, Palmtree, FileCheck, Hotel, Shield, Car, Briefcase, Moon, Compass } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof serviceIcons;
}

export const serviceIcons = {
  Plane, MapPin, Globe, Palmtree, FileCheck, Hotel, Shield, Car, Briefcase, Moon, Compass,
};

export const services: Service[] = [
  { id: "hajj-umrah", title: "Hajj & Umrah Packages", description: "Our core specialty: expertly guided spiritual journeys to the holy cities with premium VIP services and full visa assistance.", icon: "Moon" },
  { id: "middle-east-tours", title: "Middle East Tours", description: "Exclusive tour packages focusing on Turkey, Saudi Arabia, UAE, Kuwait, and the wider Middle East.", icon: "Globe" },
  { id: "international-flights", title: "International Flight Booking", description: "Book flights to any destination worldwide with the best fares and flexible options for your journey.", icon: "Plane" },
  { id: "visa-assistance", title: "Work & Tourist Visas", description: "Specialized processing for Middle East employment visas (Saudi, UAE, Kuwait, Qatar) and global tourist visas with guaranteed efficiency.", icon: "FileCheck" },
  { id: "hotel-reservations", title: "Hotel Reservations", description: "Premium hotel bookings worldwide — from boutique stays to luxury 5-star resorts at best rates.", icon: "Hotel" },
  { id: "travel-insurance", title: "Travel Insurance", description: "Comprehensive travel insurance coverage for medical emergencies, trip cancellation, and more.", icon: "Shield" },
  { id: "airport-pickup", title: "Airport Pickup Services", description: "Reliable airport transfer services with professional drivers for a comfortable arrival experience.", icon: "Car" },
  { id: "business-travel", title: "Business Travel Solutions", description: "Corporate travel management with dedicated support, cost optimization, and VIP arrangements.", icon: "Briefcase" },
  { id: "custom-planning", title: "Custom Travel Planning", description: "Personalized itineraries crafted to your preferences, budget, and travel style by our experts.", icon: "Compass" },
];
