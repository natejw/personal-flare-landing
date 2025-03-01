
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { staggeredAnimation, useScrollAnimation } from '@/lib/animations';

const projects = [
  {
    id: 1,
    title: "Minimalist Dashboard",
    description: "A clean dashboard interface for a finance app with intuitive data visualization and user-friendly navigation.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    description: "Complete redesign of an e-commerce platform focusing on conversion optimization and improved user experience.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Intuitive mobile banking application designed for simplicity and security, making finance accessible for everyone.",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "#"
  }
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          ref={titleRef as React.RefObject<HTMLDivElement>}
        >
          <div className="chip mb-4">My Work</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-foreground/80 text-balance">
            A selection of my recent work. Each project represents a unique challenge 
            and solution in design and development.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
          ref={projectsRef as React.RefObject<HTMLDivElement>}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group card-glass overflow-hidden card-hover opacity-0"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              {...staggeredAnimation(index)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ${hoverIndex === index ? 'translate-y-0' : 'translate-y-full'}`}>
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-pretty">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  View Project
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
