import React, { useState } from 'react';

const InputField = ({ label, id, type = "text", required = false, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium text-[#EDEDED]">
      {label} {required && <span className="text-blue-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      placeholder={placeholder}
      className="bg-[#171717] border border-[#262626] rounded-xl px-4 py-3 text-[#EDEDED] placeholder:text-[#525252] focus:outline-none focus:border-[#525252] focus:ring-1 focus:ring-[#525252] transition-colors"
    />
  </div>
);

const SelectField = ({ label, id, options, required = false }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium text-[#EDEDED]">
      {label} {required && <span className="text-blue-500">*</span>}
    </label>
    <div className="relative">
      <select
        id={id}
        name={id}
        required={required}
        className="w-full appearance-none bg-[#171717] border border-[#262626] rounded-xl px-4 py-3 text-[#EDEDED] focus:outline-none focus:border-[#525252] focus:ring-1 focus:ring-[#525252] transition-colors"
      >
        <option value="" disabled selected className="text-[#525252]">Select an option</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#525252]">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate Supabase submission
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] border-t border-[#262626]">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">Let's talk business.</h2>
          <p className="text-xl text-[#A3A3A3] mb-12 max-w-md">
            Fill out the form with your project details, and I'll get back to you within 24 hours.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#525252] uppercase tracking-wider">Email</span>
              <a href="mailto:sanketbarde643@gmail.com" className="text-lg text-[#EDEDED] hover:text-blue-400 transition-colors">sanketbarde643@gmail.com</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#525252] uppercase tracking-wider">Location</span>
              <span className="text-lg text-[#EDEDED]">Available worldwide</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] border border-[#262626] rounded-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Name" id="name" required placeholder="John Doe" />
              <InputField label="Business Name" id="businessName" placeholder="Acme Corp" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Email" id="email" type="email" required placeholder="john@example.com" />
              <InputField label="WhatsApp / Phone" id="phone" placeholder="+1 234 567 8900" />
            </div>

            <SelectField 
              label="What do you need?" 
              id="service" 
              required
              options={[
                "Business Website",
                "QR Ordering System",
                "Booking System",
                "E-commerce",
                "Custom Web App",
                "AI Solution",
                "Other"
              ]} 
            />

            <SelectField 
              label="Budget" 
              id="budget" 
              required
              options={[
                "Under ₹15,000",
                "₹15,000 – ₹30,000",
                "₹30,000 – ₹60,000",
                "₹60,000+",
                "Not sure yet"
              ]} 
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-sm font-medium text-[#EDEDED]">
                Project Details <span className="text-blue-500">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows="4"
                placeholder="Tell me about your business and what you're trying to achieve..."
                className="bg-[#171717] border border-[#262626] rounded-xl px-4 py-3 text-[#EDEDED] placeholder:text-[#525252] focus:outline-none focus:border-[#525252] focus:ring-1 focus:ring-[#525252] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-4 w-full py-4 text-base font-bold text-[#0A0A0A] bg-[#EDEDED] hover:bg-white rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>Sending...</>
              ) : status === 'success' ? (
                <>Request Sent!</>
              ) : (
                <>Send Project Request</>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
