import { Button } from "@/components/ui/button";
import { Target, Zap, Eye, TrendingUp, Calendar } from "lucide-react";

const ApexSystem = () => {
  const systemSteps = [
    {
      letter: "A",
      title: "Assess",
      description: "Comprehensive analysis of your current operations and AI opportunities",
      icon: Target,
    },
    {
      letter: "P",
      title: "Plan",
      description: "Custom strategy designed specifically for your business goals",
      icon: Zap,
    },
    {
      letter: "E",
      title: "Execute",
      description: "Seamless implementation of AI solutions with full training and support",
      icon: Eye,
    },
    {
      letter: "X",
      title: "eXpand",
      description: "Scale your success with ongoing optimization and growth strategies",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            The APEX System: Your{" "}
            <span className="text-gold">Proven Path</span>{" "}
            to Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our four-step methodology has helped dozens of Kansas City businesses 
            transform their operations and increase revenue
          </p>
        </div>

        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {systemSteps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                {/* Large Letter Background */}
                <div className="absolute top-4 right-4 opacity-5">
                  <span className="font-display text-9xl font-bold text-primary">
                    {step.letter}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-emerald" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display text-4xl font-bold text-primary">
                      {step.letter}
                    </span>
                    <h3 className="text-2xl font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              <Calendar className="mr-2 h-5 w-5" />
              See the APEX System in Action
            </Button>
            <Button variant="outline" size="xl">
              Download APEX System Overview
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexSystem;
