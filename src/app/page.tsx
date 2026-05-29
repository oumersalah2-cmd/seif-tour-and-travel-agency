import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import SearchBooking from "@/components/home/SearchBooking";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import TravelBlog from "@/components/home/TravelBlog";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <SearchBooking />
        <ServicesSection />
        <FeaturedPackages />
        <PopularDestinations />
        <WhyChooseUs />
        <StatsSection />
        <Testimonials />
        <TravelBlog />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
