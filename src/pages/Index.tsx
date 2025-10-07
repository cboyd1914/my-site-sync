import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ApexSystem from "@/components/ApexSystem";
import ResultsSection from "@/components/ResultsSection";
import FounderStory from "@/components/FounderStory";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ApexSystem />
      <ResultsSection />
      <FounderStory />
      <ServicesSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
