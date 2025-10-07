import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gold">
              Apex Resolution
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Empowering Kansas City businesses through AI innovation and 
              community-focused solutions.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#results" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 text-sm mb-1">Email</p>
                  <a 
                    href="mailto:carlos@theapexresolution.com" 
                    className="text-primary-foreground hover:text-gold transition-colors"
                  >
                    carlos@theapexresolution.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 text-sm mb-1">Phone</p>
                  <a 
                    href="tel:+18165550100" 
                    className="text-primary-foreground hover:text-gold transition-colors font-semibold"
                  >
                    (816) 555-0100
                  </a>
                  <p className="text-primary-foreground/60 text-xs mt-1">
                    Call and experience our AI Voice Bot
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 text-sm mb-1">Location</p>
                  <p className="text-primary-foreground">Kansas City, MO</p>
                </div>
              </div>

              {/* Chat CTA */}
              <Button 
                variant="gold" 
                size="lg" 
                className="w-full mt-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with Us Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Apex Resolution. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-primary-foreground/60 hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-primary-foreground/60 hover:text-gold transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-sm text-center mt-4 italic">
            Empowering Kansas City businesses through AI innovation
          </p>
        </div>
      </div>

      {/* Floating Chat Widget Indicator */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-16 h-16 bg-gold rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse-slow"
          aria-label="Open chat"
        >
          <MessageCircle className="h-8 w-8 text-gold-foreground" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
