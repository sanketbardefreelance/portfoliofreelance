import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "React", "JavaScript", "Python", "Supabase", "Node.js", "AI", "PostgreSQL"
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#262626]">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6 leading-tight">
            Built with technology.<br />
            Driven by business problems.
          </h2>
        </div>

        <div>
          <p className="text-xl text-[#EDEDED] mb-6 font-medium">
            I'm Sanket, a freelance developer focused on building modern websites and digital products for businesses.
          </p>
          <p className="text-lg text-[#A3A3A3] mb-12 leading-relaxed">
            I combine frontend development, backend systems and AI to turn business ideas into practical digital solutions that look great and actually work.
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span 
                key={tech} 
                className="px-4 py-2 text-sm font-medium bg-[#171717] border border-[#262626] rounded-lg text-[#EDEDED]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
