import { ReactNode } from 'react';
import Navigation from './Navigation';
import GrandOpeningBanner from './GrandOpeningBanner';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <GrandOpeningBanner />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;