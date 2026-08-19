import React from 'react';
import { motion } from 'framer-motion';

const FloatingPill = ({ text, delay, x, y, rotate }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, y: [y, y - 10, y], x: [x, x + 5, x] }}
    transition={{ 
      opacity: { delay, duration: 0.8 },
      scale: { delay, duration: 0.8 },
      y: { repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" },
      x: { repeat: Infinity, duration: 5 + Math.random() * 2, ease: "easeInOut" }
    }}
    style={{ rotate }}
    className="absolute px-4 py-2 bg-[#171717] border border-[#262626] rounded-full text-xs font-medium text-[#A3A3A3] shadow-lg backdrop-blur-sm"
  >
    {text}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-xs font-medium text-[#EDEDED] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance projects
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDEDED] leading-[1.1] mb-6 text-balance"
          >
            I build digital solutions for businesses.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#A3A3A3] mb-10 max-w-xl leading-relaxed"
          >
            Websites, ordering systems, booking platforms and custom web applications designed to help businesses work better and grow online.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0A0A0A] bg-[#EDEDED] hover:bg-white rounded-full transition-colors"
            >
              Start a Project
            </a>
            <a 
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#EDEDED] bg-transparent border border-[#262626] hover:bg-[#171717] rounded-full transition-colors"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>

        {/* Visual Ecosystem */}
        <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-80 h-80 rounded-full border border-[#262626]/50 flex items-center justify-center"
          >
            <div className="w-40 h-40 rounded-full border border-[#262626]/80 bg-[#171717]/30 flex items-center justify-center backdrop-blur-md">
              <span className="text-[#EDEDED] font-semibold tracking-wider">YOUR BUSINESS</span>
            </div>
            
            <FloatingPill text="WEBSITE" delay={0.4} x={-120} y={-100} rotate={-10} />
            <FloatingPill text="ORDERS" delay={0.5} x={140} y={-80} rotate={15} />
            <FloatingPill text="BOOKINGS" delay={0.6} x={-150} y={120} rotate={5} />
            <FloatingPill text="CUSTOMERS" delay={0.7} x={120} y={140} rotate={-5} />
            <FloatingPill text="AI" delay={0.8} x={0} y={-160} rotate={0} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
