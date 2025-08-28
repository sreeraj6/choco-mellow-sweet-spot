import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-script text-6xl md:text-8xl text-chocolate mb-4">404</h1>
          <h2 className="font-script text-2xl md:text-3xl text-caramel mb-4">
            Oops! Page Not Found
          </h2>
          <p className="font-body text-chocolate/70 text-lg mb-8">
            Looks like this page melted away! Don't worry, there are still plenty of sweet treats waiting for you.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-chocolate hover:bg-chocolate-light text-cream font-body font-semibold rounded-2xl"
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-chocolate text-chocolate hover:bg-chocolate hover:text-cream font-body font-semibold rounded-2xl"
          >
            <Link to="/menu">
              View Our Menu
            </Link>
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 opacity-20">
          <div className="w-16 h-16 bg-golden/30 rounded-full mx-auto blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
