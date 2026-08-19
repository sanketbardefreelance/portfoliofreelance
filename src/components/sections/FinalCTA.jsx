import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#EDEDED] mb-4">
            Have a business idea?
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[#525252] mb-8">
            Let's build it.
          </h3>
          <p className="text-xl text-[#A3A3A3] mb-12 max-w-xl mx-auto">
            Tell me what you're trying to build and I'll help turn it into a working digital product.
          </p>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-[#0A0A0A] bg-[#EDEDED] hover:bg-white rounded-full transition-all hover:scale-105 active:scale-95"
          >
            Start a Project <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
