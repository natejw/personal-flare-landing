
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-display font-medium">
            <span className="text-gradient">John Doe</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a href="#" className="btn-primary">
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="btn-primary inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
