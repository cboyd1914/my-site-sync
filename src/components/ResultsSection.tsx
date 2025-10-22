import { useEffect, useRef, useState } from "react";
import { Phone, DollarSign, Calendar as CalendarIcon, Clock } from "lucide-react";
import GHLForm from "@/components/integrations/GHLForm";

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span className="font-display text-5xl md:text-6xl font-bold text-gold">
        {count}{suffix}
      </span>
    );
  };

  const stats = [
    {
      icon: Phone,
      value: 95,
      suffix: "%",
      label: "Call Answer Rate",
      description: "Never miss another opportunity",
    },
    {
      icon: DollarSign,
      value: 96000,
      suffix: "",
      label: "Avg. Additional Annual Revenue",
      description: "Real money in your pocket",
      prefix: "$",
    },
    {
      icon: CalendarIcon,
      value: 62,
      suffix: "%",
      label: "Booking Rate",
      description: "Turn calls into appointments",
    },
    {
      icon: Clock,
      value: 12,
      suffix: "+",
      label: "Hours Saved Weekly",
      description: "Focus on what matters",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Real Results for{" "}
            <span className="text-gold">Real Businesses</span>{" "}
            in Kansas City
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our clients don't just survive—they thrive. Here's the proof.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-gold" />
              </div>
              <div className="mb-2">
                {stat.prefix && <span className="font-display text-5xl md:text-6xl font-bold text-gold">{stat.prefix}</span>}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Badges Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 pb-16 border-b border-border">
          <div className="bg-background rounded-lg px-8 py-4 shadow-md">
            <p className="font-bold text-primary">✓ IAAIC Certified</p>
          </div>
          <div className="bg-background rounded-lg px-8 py-4 shadow-md">
            <p className="font-bold text-primary">✓ Kansas City Focused</p>
          </div>
          <div className="bg-background rounded-lg px-8 py-4 shadow-md">
            <p className="font-bold text-primary">✓ Community Committed</p>
          </div>
        </div>

        {/* High-Intent Form - GHL Integration */}
        <div className="max-w-2xl mx-auto bg-background rounded-lg p-8 shadow-xl border-2 border-gold/30">
          <h3 className="text-2xl font-bold text-primary mb-2 text-center">
            I Want These Results for My Business
          </h3>
          <p className="text-muted-foreground mb-6 text-center">
            Get your custom ROI projection in 24 hours
          </p>
          <GHLForm 
            webhookUrl={import.meta.env.VITE_GHL_WEBHOOK_URL}
            formType="results"
            submitText="Get My Custom ROI Projection"
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
