import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import SearchBooking from "@/components/home/SearchBooking";
import TrustPillars from "@/components/home/TrustPillars";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import UmrahTimeline from "@/components/home/UmrahTimeline";
import ZiyaratHub from "@/components/home/ZiyaratHub";
import BookingWorkflow from "@/components/home/BookingWorkflow";
import DiasporaSection from "@/components/home/DiasporaSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OfficeDeskSection from "@/components/home/OfficeDeskSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <SearchBooking />
        <TrustPillars />
        <ServicesSection />
        <FeaturedPackages />
        <UmrahTimeline />
        <ZiyaratHub />
        <BookingWorkflow />
        <DiasporaSection />
        <WhyChooseUs />
        <OfficeDeskSection />
        <StatsSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
