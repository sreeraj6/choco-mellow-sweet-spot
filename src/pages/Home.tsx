import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star, Heart, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-desserts.jpg';

const Home = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-golden" />,
      title: "Made with Love",
      description: "Every dessert is crafted with passion and the finest ingredients"
    },
    {
      icon: <Star className="w-8 h-8 text-golden" />,
      title: "Premium Quality",
      description: "We use only the best chocolate and fresh ingredients daily"
    },
    {
      icon: <Coffee className="w-8 h-8 text-golden" />,
      title: "Perfect Pairings",
      description: "Our desserts pair perfectly with our specialty coffee and beverages"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="font-script text-5xl md:text-7xl text-chocolate mb-6 leading-tight">
              Choco Mellow
            </h1>
            <p className="font-script text-2xl md:text-3xl text-caramel mb-6">
              Your Favorite Dessert Spot
            </p>
            <p className="font-body text-lg text-chocolate/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Indulge in our handcrafted desserts, artisanal waffles, and premium beverages. 
              Every bite is a journey to chocolate paradise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-chocolate hover:bg-chocolate-light text-cream font-body font-semibold rounded-2xl btn-bounce"
              >
                <Link to="/menu">
                  View Our Menu <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-chocolate text-chocolate hover:bg-chocolate hover:text-cream font-body font-semibold rounded-2xl"
              >
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl float">
              <img
                src={heroImage}
                alt="Delicious array of gourmet desserts at Choco Mellow"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-golden/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-caramel/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Background decorative shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-golden/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-caramel/10 rounded-full blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-script text-4xl md:text-5xl text-chocolate mb-4">
              Why Choose Choco Mellow?
            </h2>
            <p className="font-body text-lg text-chocolate/70 max-w-2xl mx-auto">
              We're more than just a dessert café – we're a destination for creating sweet memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center bg-card border-warm-cream hover:shadow-lg transition-all duration-300 menu-item rounded-2xl">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-script text-2xl text-chocolate mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-chocolate/70">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 chocolate-gradient text-cream relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-6">
            Ready for a Sweet Experience?
          </h2>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join us for the grand opening and be among the first to taste our incredible desserts!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-golden hover:bg-golden/90 text-chocolate font-body font-bold rounded-2xl btn-bounce"
          >
            <Link to="/contact">
              Visit Us Soon <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-golden/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 bg-cream/20 rounded-full"></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-golden/40 rounded-full"></div>
      </section>
    </div>
  );
};

export default Home;