import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import GHLForm from "@/components/integrations/GHLForm";
import GHLCalendar from "@/components/integrations/GHLCalendar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Increase Your Revenue by{" "}
            <span className="text-gold">35%</span>{" "}
            with AI That Works
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            We help Kansas City small and minority-owned businesses automate operations, 
            capture every lead, and save 12+ hours a week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="gold" 
              size="xl"
              className="w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              GET YOUR FREE AI ASSESSMENT
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary border-0"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Call Now: (816) 555-0100
            </Button>
          </div>

          {/* GHL Calendar Widget OR Lead Capture Form */}
          <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">
              Book Your Free 30-Minute AI Assessment
            </h3>
            
            {/* Uncomment and add your GHL calendar URL to enable calendar booking */}
            {/* <GHLCalendar calendarUrl="YOUR_GHL_CALENDAR_URL" /> */}
            
            {/* Lead capture form - connects to GHL via webhook */}
            <GHLForm 
              formType="hero"
              submitText="Send Me More Information"
              // webhookUrl="YOUR_GHL_WEBHOOK_URL" // Add your GHL webhook URL here
            />
          </div>

          {/* Social Proof */}
          <p className="text-primary-foreground/80 mt-8 text-sm">
            Join dozens of Kansas City businesses who are building their future with Apex Resolution.
          </p>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
