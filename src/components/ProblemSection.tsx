import { PhoneMissed, Clock, Settings } from "lucide-react";
import businessChallenges from "@/assets/business-challenges.jpg";
import GHLForm from "@/components/integrations/GHLForm";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: PhoneMissed,
      text: "Are missed calls costing you customers?",
    },
    {
      icon: Clock,
      text: "Do you spend hours on repetitive tasks instead of growth?",
    },
    {
      icon: Settings,
      text: "Is navigating new technology overwhelming and confusing?",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-fade-in">
            <img
              src={businessChallenges}
              alt="Business owner facing challenges"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Are You Losing{" "}
              <span className="text-gold">Money and Time</span>{" "}
              Every Day?
            </h2>

            {/* Pain Points */}
            <div className="space-y-6 mb-8">
              {painPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <point.icon className="h-8 w-8 text-gold" />
                  </div>
                  <p className="text-lg text-foreground font-medium">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Lead Magnet Form - GHL Integration */}
            <div className="bg-background rounded-lg p-6 shadow-lg border-2 border-gold/20">
              <h3 className="text-xl font-bold text-primary mb-4">
                Get Our Free Guide: '5 Ways AI Can Save Your Business 12+ Hours Weekly'
              </h3>
              <GHLForm 
                formType="problem"
                submitText="Download Free Guide"
                // webhookUrl="YOUR_GHL_WEBHOOK_URL" // Add your GHL webhook URL
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
