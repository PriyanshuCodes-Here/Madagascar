import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-16">
        <div className="md:col-span-2">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase mb-6">Madagascar</h2>
          <p className="text-gray-400 font-light max-w-sm">
            Redefining modern luxury. Join our private list for early access to new collections.
          </p>
          <div className="mt-8 flex border-b border-white/30 focus-within:border-white transition-colors">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent w-full py-2 outline-none uppercase text-sm tracking-widest placeholder-gray-600"
            />
            <button className="uppercase text-sm tracking-widest hover:text-gray-400 transition-colors">Subscribe</button>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide">
            <li><a href="#" className="hover:text-gray-300 transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Menswear</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Womenswear</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Client Services</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide">
            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
            <li><a href="/shipping" className="hover:text-gray-300 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between text-xs text-gray-600 uppercase tracking-widest">
        <p>© 2026 MADAGASCAR. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;