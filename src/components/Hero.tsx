
import { useState, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="glow top-1/4 left-1/4" />
      <div className="glow top-2/3 right-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="chip mb-4">Welcome to my portfolio</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance leading-tight">
              Creating <span className="text-gradient">thoughtful</span> digital experiences
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
              I'm a designer & developer who crafts intuitive and beautiful interfaces for products that people love to use.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="btn-primary button-hover-effect w-full sm:w-auto"
                style={{ transitionDelay: '200ms' }}
              >
                Get in Touch
              </a>
              <a 
                href="#projects"
                className="btn-secondary w-full sm:w-auto"
                style={{ transitionDelay: '300ms' }}
              >
                See My Work
              </a>
            </div>
          </div>
          
          <div 
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a 
              href="#about" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-300 inline-flex flex-col items-center"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDownCircle className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
