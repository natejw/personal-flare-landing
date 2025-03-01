
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-display font-medium">
              <span className="text-gradient">John Doe</span>
            </a>
          </div>
          
          <div className="flex items-center text-sm text-foreground/70">
            <span>© {currentYear} All rights reserved. Made with </span>
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            <span> by John Doe</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
