import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Smartphone, LayoutDashboard, QrCode } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  if (project.isFeatured) {
    return (
      <div className="mb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Featured Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#171717] text-xs font-medium text-[#A3A3A3] mb-6">
                Featured Case Study
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-4">
                {project.title}
              </h3>
              <p className="text-xl text-[#EDEDED] font-medium mb-6">
                {project.subtitle}
              </p>
              <p className="text-[#A3A3A3] text-base leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#525252] font-semibold mb-2">Industry</h4>
                  <p className="text-sm text-[#EDEDED]">{project.industry}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#525252] font-semibold mb-2">Tech</h4>
                  <p className="text-sm text-[#EDEDED]">{project.tech.join(', ')}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#525252] font-semibold mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.services.map(s => (
                      <span key={s} className="px-2.5 py-1 text-xs font-medium bg-[#171717] border border-[#262626] rounded-md text-[#A3A3A3]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={project.liveDemo} className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDEDED] text-[#0A0A0A] font-medium rounded-full hover:bg-white transition-colors">
                  View Live Demo <ExternalLink size={18} />
                </a>
                <a href={project.caseStudy} className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#262626] text-[#EDEDED] font-medium rounded-full hover:bg-[#171717] transition-colors">
                  View Case Study <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Featured Visual */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#171717] to-[#0A0A0A] border border-[#262626] overflow-hidden flex items-center justify-center group ${project.image ? 'p-2' : 'p-8 lg:p-12'}`}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
                  
                  {/* Abstract App Composition */}
                  <div className="relative w-full h-full">
                    {/* Mobile Mockup */}
                    <div className="absolute left-[10%] top-[10%] w-[220px] h-[450px] bg-[#0A0A0A] rounded-[32px] border-[6px] border-[#262626] shadow-2xl flex flex-col overflow-hidden z-20">
                      <div className="h-full w-full bg-[#171717] p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-1/2 h-4 bg-[#262626] rounded-full"></div>
                          <div className="w-8 h-8 rounded-full bg-[#262626]"></div>
                        </div>
                        <div className="w-full h-32 bg-[#262626] rounded-xl mb-4"></div>
                        <div className="w-3/4 h-4 bg-[#262626] rounded-full mb-2"></div>
                        <div className="w-1/2 h-3 bg-[#262626] rounded-full mb-6"></div>
                        <div className="w-full p-3 border border-[#262626] rounded-lg flex items-center justify-between mt-auto">
                          <div className="w-12 h-4 bg-[#262626] rounded-full"></div>
                          <div className="px-4 py-2 bg-[#EDEDED] rounded-lg"></div>
                        </div>
                      </div>
                    </div>
    
                    {/* Dashboard Mockup */}
                    <div className="absolute right-[5%] bottom-[10%] w-[380px] h-[260px] bg-[#171717] rounded-xl border border-[#262626] shadow-2xl overflow-hidden z-10 flex flex-col">
                      <div className="h-10 border-b border-[#262626] flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="flex-1 p-4 flex gap-4">
                        <div className="w-1/4 h-full border-r border-[#262626] flex flex-col gap-3 pr-4">
                          <div className="w-full h-3 bg-[#262626] rounded-full"></div>
                          <div className="w-full h-3 bg-[#262626] rounded-full"></div>
                          <div className="w-3/4 h-3 bg-[#262626] rounded-full"></div>
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex gap-4">
                            <div className="flex-1 h-16 bg-[#262626] rounded-lg"></div>
                            <div className="flex-1 h-16 bg-[#262626] rounded-lg"></div>
                          </div>
                          <div className="w-full h-full bg-[#262626] rounded-lg"></div>
                        </div>
                      </div>
                    </div>
    
                    {/* QR Code Floating Element */}
                    <div className="absolute top-[5%] right-[20%] p-3 bg-[#0A0A0A] border border-[#262626] rounded-xl shadow-xl z-30">
                      <QrCode size={40} className="text-[#EDEDED]" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Regular Projects
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-12 items-center mb-24"
    >
      <div className={`order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <h3 className="text-3xl font-bold tracking-tight text-[#EDEDED] mb-2">{project.title}</h3>
        <p className="text-[#A3A3A3] mb-6">{project.subtitle}</p>
        <p className="text-[#A3A3A3] leading-relaxed mb-8">{project.description}</p>
        
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider text-[#525252] font-semibold mb-3">Key Features</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-[#A3A3A3]">
            {project.features.map(f => (
              <li key={f} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#EDEDED]"></div>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="aspect-[4/3] rounded-2xl bg-[#171717] border border-[#262626] flex items-center justify-center p-2 group relative overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-8">
                 <span className="inline-flex items-center gap-2 text-[#EDEDED] font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   Coming Soon
                 </span>
              </div>
              {index === 1 ? <Smartphone size={80} className="text-[#262626] group-hover:scale-110 transition-transform duration-700" /> : <LayoutDashboard size={80} className="text-[#262626] group-hover:scale-110 transition-transform duration-700" />}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-[#262626]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">Selected work</h2>
          <p className="text-xl text-[#A3A3A3] max-w-2xl">
            Digital products I've built to solve real business problems.
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;
