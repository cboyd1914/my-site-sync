import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Shield, TrendingUp, ArrowRight } from "lucide-react";

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
            
            {/* Calendar Placeholder */}
            <div className="bg-secondary rounded-lg p-12 border-2 border-dashed border-border mb-6">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-gold mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">
                  Calendar booking widget integration
                </p>
                <p className="text-sm text-muted-foreground">
                  (GoHighLevel calendar will be embedded here)
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="gold" size="xl" className="mb-4">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free 30-Minute Assessment
              </Button>
              <p className="text-sm text-muted-foreground">
                Most popular times: Weekday mornings & early afternoons
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4 text-center">
              Prefer to Have Someone Call You?
            </h3>
            <p className="text-primary-foreground/80 text-center mb-6">
              Fill out the form below and we'll reach out within 24 hours
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-primary-foreground text-foreground h-12"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-primary-foreground text-foreground h-12"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-primary-foreground text-foreground h-12"
                />
                <Select>
                  <SelectTrigger className="bg-primary-foreground text-foreground h-12">
                    <SelectValue placeholder="Best time to call" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                    <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                type="submit" 
                variant="gold" 
                size="xl" 
                className="w-full"
              >
                Have Someone Call Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
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
