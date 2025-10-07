import GHLChatWidget from "@/components/integrations/GHLChatWidget";
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
      {/* GoHighLevel Chat Widget - Add your Location ID to activate */}
      <GHLChatWidget 
        // locationId="YOUR_GHL_LOCATION_ID"
        config={{
          position: 'bottom-right',
          primaryColor: '#C5A572', // Gold color from brand
        }}
      />
      
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
