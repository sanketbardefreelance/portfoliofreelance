import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">What I build</h2>
          <p className="text-xl text-[#A3A3A3] max-w-2xl">
            Custom digital solutions tailored to the specific needs of modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-6 md:gap-8 items-start">
                <div className="text-4xl md:text-5xl font-light text-[#262626] group-hover:text-white transition-colors duration-500 font-mono">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#EDEDED] mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#A3A3A3] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              {/* Subtle line separator */}
              <div className="absolute -bottom-8 left-0 right-0 h-px bg-gradient-to-r from-[#262626] to-transparent md:hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
