import { Button } from "@/components/ui/button";
import { Bot, Calendar as CalendarIcon, MessageSquare, Users, GraduationCap, Rocket, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const leftServices = [
    {
      icon: Bot,
      title: "AI Voice Bot",
      features: [
        "Answer calls 24/7, never miss a lead",
        "Book appointments automatically",
        "Qualify leads while you sleep",
      ],
    },
    {
      icon: CalendarIcon,
      title: "Automated Scheduling",
      features: [
        "Smart calendar management",
        "Automatic reminders and follow-ups",
        "Reduce no-shows by 40%",
      ],
    },
    {
      icon: MessageSquare,
      title: "24/7 Customer Engagement",
      features: [
        "Live chat that never sleeps",
        "Instant responses to inquiries",
        "Multi-channel support",
      ],
    },
  ];

  const rightServices = [
    {
      icon: Users,
      title: "Business Coaching",
      features: [
        "One-on-one strategy sessions",
        "Personalized growth roadmaps",
        "Accountability and support",
      ],
    },
    {
      icon: GraduationCap,
      title: "Workshops & Training",
      features: [
        "Team AI adoption training",
        "Best practices workshops",
        "Ongoing education programs",
      ],
    },
    {
      icon: Rocket,
      title: "APEX System Implementation",
      features: [
        "Full-service setup and integration",
        "Custom workflow automation",
        "Continuous optimization",
      ],
    },
  ];

  const ServiceCard = ({ icon: Icon, title, features }: { icon: any; title: string; features: string[] }) => (
    <div className="bg-background rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h3 className="font-bold text-xl text-primary mb-3">{title}</h3>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-emerald flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button variant="link" className="p-0 h-auto text-accent">
        Learn More →
      </Button>
    </div>
  );

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Your{" "}
            <span className="text-gold">All-in-One</span>{" "}
            AI Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate, optimize, and scale your business
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - AI-Powered Operations */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Bot className="h-7 w-7 text-accent" />
              AI-Powered Operations
            </h3>
            <div className="space-y-4">
              {leftServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Right Column - Strategic Growth */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Rocket className="h-7 w-7 text-gold" />
              Strategic Growth
            </h3>
            <div className="space-y-4">
              {rightServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Package Selection CTA */}
        <div className="max-w-2xl mx-auto bg-background rounded-lg p-8 shadow-xl border-2 border-accent/30">
          <h3 className="text-2xl font-bold text-primary mb-2 text-center">
            Which Service Interests You Most?
          </h3>
          <p className="text-muted-foreground mb-6 text-center">
            Let us know what you need, and we'll create a custom package for your business
          </p>
          <Button variant="gold" size="xl" className="w-full">
            Get Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
