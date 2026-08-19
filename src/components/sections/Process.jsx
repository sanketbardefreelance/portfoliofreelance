import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand your business, customers and requirements."
  },
  {
    num: "02",
    title: "PLAN",
    desc: "Define the structure, features and user experience."
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Develop, test and refine the product."
  },
  {
    num: "04",
    title: "LAUNCH",
    desc: "Deploy the solution and help you get started."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">From idea to launch.</h2>
          <p className="text-xl text-[#A3A3A3] max-w-2xl">
            A structured approach to building digital products that work.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-[#262626]"></div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="hidden md:flex absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-[#EDEDED] z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                
                <div className="md:pt-12">
                  <div className="text-sm font-bold text-[#525252] mb-4 font-mono">{step.num}</div>
                  <h3 className="text-xl font-bold text-[#EDEDED] mb-3">{step.title}</h3>
                  <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
