import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import carlosBoyd from "@/assets/carlos-boyd.jpg";

const FounderStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Photo */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src={carlosBoyd}
                alt="Carlos Boyd - Founder of Apex Resolution"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-gold-foreground p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-bold text-sm">
                  "Every business deserves the tools to succeed, regardless of their starting point."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="animate-slide-up md:pl-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              From IT Consulting to{" "}
              <span className="text-gold">Community Building</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I started Apex Resolution because I saw a gap—small and minority-owned 
                businesses in Kansas City were being left behind in the AI revolution.
              </p>
              
              <p>
                With over a decade in IT consulting, I've worked with Fortune 500 companies 
                and watched them leverage technology to dominate their markets. But what about 
                the local barbershop? The family-owned restaurant? The emerging tech startup?
              </p>

              <p>
                <strong className="text-primary">They deserved the same advantages.</strong>
              </p>

              <p>
                That's why I created the APEX System—a proven methodology that brings 
                enterprise-level AI automation to businesses of all sizes. We're not just 
                consultants; we're partners in your growth, invested in the success of 
                Kansas City's vibrant business community.
              </p>
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-gold pl-6 py-4 mb-8 bg-secondary rounded-r-lg">
              <p className="text-xl font-semibold text-primary italic">
                "Technology should empower everyone, not just the few. 
                At Apex Resolution, we're making that vision a reality, 
                one Kansas City business at a time."
              </p>
              <footer className="mt-4 text-muted-foreground font-medium">
                — Carlos Boyd, Founder & CEO
              </footer>
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask Carlos a Question
              </Button>
              <Button variant="gold" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call with Carlos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
