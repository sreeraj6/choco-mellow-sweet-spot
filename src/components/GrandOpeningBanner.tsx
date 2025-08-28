import { Calendar, MapPin, Clock } from 'lucide-react';

const GrandOpeningBanner = () => {
  return (
    <div className="bg-gradient-to-r from-golden via-caramel to-golden text-chocolate py-4 px-4 text-center relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-2 text-sm md:text-base font-body font-semibold">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Grand Opening!
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            August 29, 2025 at 10 AM
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Vallikkavu
          </span>
        </div>
      </div>
      
      {/* Decorative chocolate drips */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-2 h-8 bg-chocolate rounded-full transform -skew-x-12"></div>
        <div className="absolute top-0 right-1/4 w-2 h-6 bg-chocolate rounded-full transform skew-x-12"></div>
        <div className="absolute top-0 left-3/4 w-1 h-4 bg-chocolate rounded-full"></div>
      </div>
    </div>
  );
};

export default GrandOpeningBanner;