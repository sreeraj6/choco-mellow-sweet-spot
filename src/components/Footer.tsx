import { Instagram, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative bg-chocolate text-cream mt-20">
      {/* Chocolate drip effect */}
      <div className="chocolate-drip"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-script text-3xl text-golden mb-4">Choco Mellow</h3>
            <p className="font-body text-cream/80 mb-4">
              Your favorite dessert spot where every bite is a moment of pure bliss.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:text-golden hover:bg-cream/10 rounded-full"
                asChild
              >
                <a href="https://instagram.com/chocomellow" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:text-golden hover:bg-cream/10 rounded-full"
                asChild
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:text-golden hover:bg-cream/10 rounded-full"
                asChild
              >
                <a href="mailto:hello@chocomellow.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="text-center">
            <h4 className="font-body font-semibold text-golden mb-4 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Opening Hours
            </h4>
            <div className="space-y-2 font-body text-cream/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-body font-semibold text-golden mb-4">Visit Us</h4>
            <div className="space-y-2 font-body text-cream/80">
              <p>123 Sweet Street</p>
              <p>Vallikkavu, Kerala</p>
              <p>Pin: 686633</p>
              <p className="pt-2">
                <a href="tel:+919876543210" className="hover:text-golden transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-6 text-center">
          <p className="font-body text-cream/60 text-sm">
            © 2025 Choco Mellow. All rights reserved. | Made with ♥ and lots of chocolate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;