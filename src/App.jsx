import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import Process from './components/sections/Process';
import About from './components/sections/About';
import FinalCTA from './components/sections/FinalCTA';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Set up document metadata
    document.title = "Sanket Barde — Freelance Developer | Websites & Business Solutions";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "I build modern websites, ordering systems, booking platforms and custom web applications for businesses.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "I build modern websites, ordering systems, booking platforms and custom web applications for businesses.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <SelectedWork />
        <Services />
        <Industries />
        <Process />
        <About />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
