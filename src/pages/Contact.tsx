import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you soon. Thank you for reaching out!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-script text-5xl md:text-6xl text-chocolate mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-lg text-chocolate/70 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-card border-warm-cream rounded-2xl">
              <h2 className="font-script text-3xl text-chocolate mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="font-body font-medium text-chocolate">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2 border-warm-cream focus:border-golden rounded-lg"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-body font-medium text-chocolate">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2 border-warm-cream focus:border-golden rounded-lg"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-body font-medium text-chocolate">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 border-warm-cream focus:border-golden rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-body font-medium text-chocolate">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 border-warm-cream focus:border-golden rounded-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-body font-medium text-chocolate">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-2 border-warm-cream focus:border-golden rounded-lg resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-chocolate hover:bg-chocolate-light text-cream font-body font-semibold rounded-lg py-3"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <Card className="p-8 bg-card border-warm-cream rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                </div>
                <div>
                  <h3 className="font-script text-xl text-chocolate mb-2">Visit Us</h3>
                  <div className="font-body text-chocolate/80 space-y-1">
                    <p>123 Sweet Street</p>
                    <p>Vallikkavu, Kerala</p>
                    <p>Pin: 686633</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-8 bg-card border-warm-cream rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                </div>
                <div>
                  <h3 className="font-script text-xl text-chocolate mb-2">Call Us</h3>
                  <div className="font-body text-chocolate/80">
                    <a 
                      href="tel:+919876543210" 
                      className="hover:text-golden transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-8 bg-card border-warm-cream rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-golden" />
                  </div>
                </div>
                <div>
                  <h3 className="font-script text-xl text-chocolate mb-2">Email Us</h3>
                  <div className="font-body text-chocolate/80">
                    <a 
                      href="mailto:hello@chocomellow.com" 
                      className="hover:text-golden transition-colors"
                    >
                      hello@chocomellow.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-8 bg-card border-warm-cream rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-golden" />
                  </div>
                </div>
                <div>
                  <h3 className="font-script text-xl text-chocolate mb-2">Opening Hours</h3>
                  <div className="font-body text-chocolate/80 space-y-1">
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
              </div>
            </Card>

            {/* Social */}
            <Card className="p-8 bg-card border-warm-cream rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-golden" />
                  </div>
                </div>
                <div>
                  <h3 className="font-script text-xl text-chocolate mb-2">Follow Us</h3>
                  <div className="font-body text-chocolate/80">
                    <a 
                      href="https://instagram.com/chocomellow" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-golden transition-colors"
                    >
                      @chocomellow
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="p-8 bg-card border-warm-cream rounded-2xl">
            <h2 className="font-script text-3xl text-chocolate mb-6 text-center">
              Find Us on the Map
            </h2>
            <div className="bg-warm-cream/50 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-golden mx-auto mb-4" />
                <p className="font-body text-chocolate/70">
                  Interactive map coming soon!
                </p>
                <p className="font-body text-sm text-chocolate/60 mt-2">
                  123 Sweet Street, Vallikkavu, Kerala 686633
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;