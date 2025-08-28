import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All Items' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'specials', name: 'Specials' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Chocolate Lava Cake',
      category: 'desserts',
      price: '₹320',
      description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
      isSpecial: true,
    },
    {
      id: 2,
      name: 'Belgian Waffle Supreme',
      category: 'desserts',
      price: '₹280',
      description: 'Crispy waffle topped with fresh berries, whipped cream, and maple syrup',
      isSpecial: false,
    },
    {
      id: 3,
      name: 'Tiramisu Classic',
      category: 'desserts',
      price: '₹350',
      description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone',
      isSpecial: false,
    },
    {
      id: 4,
      name: 'Chocolate Brownie Stack',
      category: 'desserts',
      price: '₹290',
      description: 'Triple-layer brownie with chocolate ganache and caramel drizzle',
      isSpecial: false,
    },
    {
      id: 5,
      name: 'Caramel Macchiato',
      category: 'drinks',
      price: '₹180',
      description: 'Rich espresso with steamed milk and caramel syrup',
      isSpecial: false,
    },
    {
      id: 6,
      name: 'Hot Chocolate Deluxe',
      category: 'drinks',
      price: '₹200',
      description: 'Premium hot chocolate with whipped cream and chocolate shavings',
      isSpecial: true,
    },
    {
      id: 7,
      name: 'Iced Vanilla Latte',
      category: 'drinks',
      price: '₹160',
      description: 'Smooth espresso with cold milk and vanilla syrup over ice',
      isSpecial: false,
    },
    {
      id: 8,
      name: 'Strawberry Milkshake',
      category: 'drinks',
      price: '₹220',
      description: 'Fresh strawberries blended with premium ice cream',
      isSpecial: false,
    },
    {
      id: 9,
      name: 'Grand Opening Special Combo',
      category: 'specials',
      price: '₹450',
      description: 'Chocolate lava cake + any drink of choice (Limited time offer)',
      isSpecial: true,
    },
    {
      id: 10,
      name: 'Mellow Monday Deal',
      category: 'specials',
      price: '₹299',
      description: 'Any waffle + coffee combo every Monday',
      isSpecial: true,
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => 
        activeCategory === 'specials' 
          ? item.isSpecial 
          : item.category === activeCategory
      );

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl md:text-6xl text-chocolate mb-4">
            Our Menu
          </h1>
          <p className="font-body text-lg text-chocolate/70 max-w-2xl mx-auto">
            Discover our carefully crafted selection of desserts, beverages, and special treats
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-warm-cream rounded-2xl">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "ghost"}
                className={`font-body font-medium rounded-xl transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-chocolate text-cream shadow-lg'
                    : 'text-chocolate hover:bg-cream'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="p-6 bg-card border-warm-cream hover:shadow-xl transition-all duration-300 menu-item rounded-2xl relative"
            >
              {item.isSpecial && (
                <Badge 
                  className="absolute -top-2 -right-2 bg-golden text-chocolate font-body font-semibold"
                >
                  Special
                </Badge>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-script text-xl text-chocolate leading-tight">
                  {item.name}
                </h3>
                <span className="font-body font-bold text-lg text-caramel ml-4 flex-shrink-0">
                  {item.price}
                </span>
              </div>
              
              <p className="font-body text-chocolate/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Special Offers Note */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-golden/10 to-caramel/10 border-golden/30 rounded-2xl">
            <h3 className="font-script text-2xl text-chocolate mb-4">
              Grand Opening Offers!
            </h3>
            <p className="font-body text-chocolate/80">
              Enjoy special discounts and combo deals during our opening week. 
              Follow us on Instagram @chocomellow for exclusive offers!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Menu;