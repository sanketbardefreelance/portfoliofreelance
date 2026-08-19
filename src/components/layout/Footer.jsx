import React from 'react';
import { MessageCircle, Briefcase, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#262626] py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold tracking-tight text-[#EDEDED]">Sanket Barde</span>
          <p className="text-[#A3A3A3] text-sm max-w-xs">
            Digital solutions for modern businesses.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex flex-col gap-4">
            <a href="#work" className="text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">Work</a>
            <a href="#services" className="text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/sanketbarde03/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">
              <Briefcase size={16} /> LinkedIn
            </a>
            <a href="https://wa.me/917795457322" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="mailto:sanketbarde643@gmail.com" className="flex items-center gap-2 text-sm font-medium text-[#A3A3A3] hover:text-[#EDEDED] transition-colors">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-[#171717] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#525252]">
        <p>© {new Date().getFullYear()} Sanket Barde. All rights reserved.</p>
        <p>Built for businesses.</p>
      </div>
    </footer>
  );
};

export default Footer;
