import { Button } from "@/components/ui/button";
import { Calendar, Shield, TrendingUp } from "lucide-react";
import GHLCalendar from "@/components/integrations/GHLCalendar";
import GHLForm from "@/components/integrations/GHLForm";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Headline */}
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Schedule your free, no-obligation AI assessment today and discover 
            how much you can save and earn.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-gold" />
              <span className="text-primary-foreground/80">No Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-gold" />
              <span className="text-primary-foreground/80">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-gold" />
              <span className="text-primary-foreground/80">Just Results</span>
            </div>
          </div>
        </div>

        {/* Calendar Widget Placeholder */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-background rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Choose Your Time Below
            </h3>
            
            {/* GHL Calendar */}
            <GHLCalendar calendarUrl="https://link.aileadbuilder.com/widget/booking/C80at2JpoS6R6z1qtua8" />
          </div>
        </div>

        {/* Alternative Contact Form - GHL Integration */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4 text-center">
              Prefer to Have Someone Call You?
            </h3>
            <p className="text-primary-foreground/80 text-center mb-6">
              Fill out the form below and we'll reach out within 24 hours
            </p>
            
            <GHLForm 
              webhookUrl={import.meta.env.VITE_GHL_WEBHOOK_URL}
              formType="final-cta"
              submitText="Have Someone Call Me"
            />
          </div>
        </div>

        {/* Final Reassurance */}
        <p className="text-center text-primary-foreground/70 mt-12 text-lg italic">
          "Take the first step toward a more profitable, efficient business—on your schedule."
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
