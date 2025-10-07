import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Calendar } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "Rodriguez Family Restaurant",
      quote: "Since implementing Apex's AI Voice Bot, we've seen a **35% increase in reservations** and virtually zero missed calls. Our staff can focus on providing great service instead of constantly answering the phone.",
      rating: 5,
    },
    {
      name: "James Thompson",
      business: "Thompson Auto Repair",
      quote: "The APEX System helped us **save 15 hours per week** on scheduling and follow-ups. That's time I can now spend with my family or growing the business. Best investment we've made.",
      rating: 5,
    },
    {
      name: "Keisha Williams",
      business: "Elegant Touch Salon",
      quote: "I was skeptical about AI at first, but Carlos and his team made it so easy. Our **booking rate jumped to 68%** and clients love the 24/7 chat feature. Game-changer!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Hear From{" "}
            <span className="text-gold">Businesses Like Yours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from Kansas City entrepreneurs who transformed their operations with AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-gold/30"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i} className="text-gold font-bold">{part}</strong> : part
                )}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="bg-secondary rounded-lg p-12 text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Watch Our Client Success Stories
            </h3>
            <p className="text-muted-foreground mb-6">
              See real Kansas City business owners share their transformation journey
            </p>
            <div className="aspect-video bg-background rounded-lg flex items-center justify-center border-2 border-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">Video testimonials coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Ready to Be Our Next Success Story?
          </h3>
          <Button variant="gold" size="xl">
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
