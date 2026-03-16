import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }

  };

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl font-serif uppercase tracking-tighter mb-6">Contact</h1>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                Whether you are seeking product advice or have a question regarding your archive, our concierge is here to assist.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">Inquiries</h3>
                <p className="text-sm font-medium">inquiries@madagascar.com</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">Press</h3>
                <p className="text-sm font-medium">press@madagascar.com</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">Location</h3>
                <p className="text-sm font-medium">75008 Paris, France</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Minimal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 border border-stone-100 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {status && (
                <p className="text-[10px] uppercase tracking-widest text-green-600 bg-green-50 p-3 text-center">
                  {status}
                </p>
              )}
              
              <div className="space-y-6">
                <div className="border-b border-stone-200 py-2">
                  <label className="text-[9px] uppercase tracking-widest text-stone-400 block mb-1">Name</label>
                  <input type="text" required className="w-full bg-transparent outline-none text-sm uppercase tracking-wider" />
                </div>

                <div className="border-b border-stone-200 py-2">
                  <label className="text-[9px] uppercase tracking-widest text-stone-400 block mb-1">Email</label>
                  <input type="email" required className="w-full bg-transparent outline-none text-sm uppercase tracking-wider" />
                </div>

                <div className="border-b border-stone-200 py-2">
                  <label className="text-[9px] uppercase tracking-widest text-stone-400 block mb-1">Subject</label>
                  <select className="w-full bg-transparent outline-none text-sm uppercase tracking-wider appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Returns</option>
                  </select>
                </div>

                <div className="border-b border-stone-200 py-2">
                  <label className="text-[9px] uppercase tracking-widest text-stone-400 block mb-1">Message</label>
                  <textarea rows="4" required className="w-full bg-transparent outline-none text-sm resize-none"></textarea>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 uppercase tracking-[0.4em] text-[10px] hover:bg-stone-800 transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;