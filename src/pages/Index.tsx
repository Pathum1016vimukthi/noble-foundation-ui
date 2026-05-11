import "@fontsource/playfair-display/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CommitteeSection from "@/components/home/CommitteeSection";
import CompetitionSection from "@/components/home/CompetitionSection";
import RegistrationSection from "@/components/home/RegistrationSection";
import GallerySection from "@/components/home/GallerySection";
import FAQSection from "@/components/home/FAQSection";
import TimelineSection from "@/components/home/TimelineSection";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <CompetitionSection />
    <TimelineSection />
    <RegistrationSection />
    <AboutSection />
    <CommitteeSection />
    <GallerySection />
    <FAQSection />
    <Footer />
    <BackToTop />
  </>
);

export default Index;
