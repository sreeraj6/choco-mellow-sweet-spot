import { Card } from '@/components/ui/card';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-golden" />,
      title: "Passion for Perfection",
      description: "Every dessert is crafted with love and attention to detail"
    },
    {
      icon: <Users className="w-8 h-8 text-golden" />,
      title: "Community First",
      description: "We believe in bringing people together over sweet moments"
    },
    {
      icon: <Award className="w-8 h-8 text-golden" />,
      title: "Premium Quality",
      description: "Only the finest ingredients make it to our kitchen"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-golden" />,
      title: "Magical Experiences",
      description: "Creating memories one dessert at a time"
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-script text-5xl md:text-6xl text-chocolate mb-6">
            Our Sweet Story
          </h1>
          <p className="font-body text-lg text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
            Welcome to Choco Mellow, where every dessert tells a story of passion, 
            quality, and the pure joy of indulgence.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-script text-3xl md:text-4xl text-chocolate mb-6">
              A Dream Born from Love
            </h2>
            <div className="space-y-4 font-body text-chocolate/80 leading-relaxed">
              <p>
                Choco Mellow began as a simple dream: to create a place where people could escape 
                the everyday hustle and immerse themselves in moments of pure, chocolatey bliss. 
                Our founders, passionate food enthusiasts with a love for artisanal desserts, 
                wanted to bring something special to Vallikkavu.
              </p>
              <p>
                After months of perfecting recipes, sourcing the finest ingredients, and creating 
                the perfect ambiance, we're thrilled to finally open our doors. Every chocolate 
                brownie, every golden waffle, and every creamy latte is made with the same care 
                and attention we'd give to desserts for our own family.
              </p>
              <p>
                At Choco Mellow, we believe that life's sweetest moments deserve the sweetest treats. 
                Whether you're celebrating a special occasion, catching up with friends, or simply 
                treating yourself, we're here to make every visit memorable.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-warm-cream to-cream border-golden/30 rounded-3xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-golden" />
                </div>
                <h3 className="font-script text-2xl text-chocolate mb-4">
                  Our Mission
                </h3>
                <p className="font-body text-chocolate/80 leading-relaxed">
                  To create a warm, welcoming space where premium desserts and exceptional 
                  service come together to deliver unforgettable experiences, one sweet bite at a time.
                </p>
              </div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-caramel/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-golden/20 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl md:text-5xl text-chocolate mb-4">
              What Makes Us Special
            </h2>
            <p className="font-body text-lg text-chocolate/70 max-w-2xl mx-auto">
              Our core values guide everything we do, from ingredient selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center bg-card border-warm-cream hover:shadow-lg transition-all duration-300 menu-item rounded-2xl"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-script text-xl text-chocolate mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-chocolate/70 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team/Opening Section */}
        <div className="text-center">
          <Card className="p-12 bg-chocolate text-cream rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-script text-3xl md:text-4xl mb-6">
                Ready to Welcome You!
              </h2>
              <p className="font-body text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
                We can't wait to share our passion for exceptional desserts with you. 
                Join us starting August 29, 2025, and become part of the Choco Mellow family!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="font-body font-semibold text-golden">Grand Opening:</span>
                <span className="font-body">August 29, 2025 • 10:00 AM • Vallikkavu</span>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cream/10 rounded-full blur-2xl"></div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;