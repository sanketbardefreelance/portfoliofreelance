import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../../data/industries';
import { ArrowRight } from 'lucide-react';

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 border-t border-[#262626]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">Built for businesses</h2>
          <p className="text-xl text-[#A3A3A3] max-w-2xl">
            I understand the unique requirements of different industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Industry List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {industries.map((industry, index) => (
              <button
                key={industry.name}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex justify-between items-center ${
                  activeIndex === index 
                    ? 'bg-[#171717] border border-[#262626] shadow-lg' 
                    : 'bg-transparent border border-transparent hover:bg-[#0A0A0A] hover:border-[#262626]/50'
                }`}
              >
                <span className={`text-lg font-medium transition-colors ${
                  activeIndex === index ? 'text-[#EDEDED]' : 'text-[#525252]'
                }`}>
                  {industry.name}
                </span>
                {activeIndex === index && (
                  <motion.div layoutId="arrow">
                    <ArrowRight size={20} className="text-[#EDEDED]" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-7 relative flex flex-col justify-end bg-[#050505] border border-[#262626] rounded-2xl p-8 lg:p-12 min-h-[400px] overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <img 
                  src={industries[activeIndex].image} 
                  alt={industries[activeIndex].name}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
              </motion.div>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative z-10 max-w-md"
              >
                <h3 className="text-3xl font-bold text-[#EDEDED] mb-4 drop-shadow-md">
                  {industries[activeIndex].name}
                </h3>
                <p className="text-xl text-[#EDEDED]/90 leading-relaxed drop-shadow-sm">
                  {industries[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
