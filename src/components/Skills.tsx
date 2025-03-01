
import { useState } from 'react';
import { staggeredAnimation, useScrollAnimation } from '@/lib/animations';

const skillCategories = [
  {
    name: "Design",
    skills: ["UI/UX Design", "Visual Design", "Interaction Design", "Design Systems", "Wireframing", "Prototyping"]
  },
  {
    name: "Development",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  {
    name: "Tools",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Git", "VS Code"]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Design");
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  const selectedCategory = skillCategories.find(category => category.name === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container">
        <div 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          ref={titleRef as React.RefObject<HTMLDivElement>}
        >
          <div className="chip mb-4">My Expertise</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Skills & Capabilities
          </h2>
          <p className="text-foreground/80 text-balance">
            I've developed a diverse set of skills over the years, allowing me to deliver 
            comprehensive solutions from concept to implementation.
          </p>
        </div>
        
        <div 
          className="opacity-0"
          ref={contentRef as React.RefObject<HTMLDivElement>}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === category.name 
                    ? 'bg-primary text-primary-foreground shadow-subtle' 
                    : 'bg-secondary/80 text-foreground/70 hover:bg-secondary/90 hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {selectedCategory?.skills.map((skill, index) => (
              <div 
                key={skill}
                className="card-glass p-6 h-full card-hover opacity-0"
                {...staggeredAnimation(index)}
              >
                <h3 className="text-lg font-medium mb-2">{skill}</h3>
                <div className="w-12 h-1 bg-primary/20 rounded-full mb-4"></div>
                <p className="text-foreground/70 text-sm">
                  Expert proficiency with extensive project experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
