
import { useScrollAnimation } from '@/lib/animations';

const About = () => {
  const sectionRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="order-2 md:order-1 opacity-0"
            ref={sectionRef as React.RefObject<HTMLDivElement>}
          >
            <div className="chip mb-4">About Me</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Passionate about creating meaningful digital solutions
            </h2>
            <p className="text-foreground/80 mb-6 text-pretty">
              I'm a multidisciplinary designer and developer with over 5 years of experience creating 
              digital products for clients around the world. I specialize in user 
              interface design, user experience, and frontend development.
            </p>
            <p className="text-foreground/80 mb-6 text-pretty">
              My approach to design focuses on simplicity, functionality, and 
              attention to detail. I believe that good design should be intuitive and 
              serve the needs of users while meeting business goals.
            </p>
            <p className="text-foreground/80 text-pretty">
              When I'm not designing or coding, you can find me exploring nature, 
              reading books on design and technology, or experimenting with new creative tools.
            </p>
          </div>
          
          <div 
            className="order-1 md:order-2 opacity-0"
            ref={imageRef as React.RefObject<HTMLDivElement>}
          >
            <div className="relative">
              <div className="card-glass overflow-hidden rounded-2xl aspect-[4/3] bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Person working on a laptop" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
