import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 focus:outline-none uppercase text-xs tracking-widest"
              >
                {isOpen ? 'Close' : 'Menu'}
              </button>
            </div>

            {/* Desktop Links (Left) */}
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-light">
              <Link to="/shop" className={`hover:text-gray-500 transition-colors ${isActive('/shop') ? 'border-b border-black' : ''}`}>Shop</Link>
              <Link to="/about" className={`hover:text-gray-500 transition-colors ${isActive('/about') ? 'border-b border-black' : ''}`}>About us</Link>
            </div>

            {/* Brand Logo (Center) */}
            <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="text-3xl font-serif tracking-tighter uppercase">
                Madagascar
              </Link>
            </div>

            {/* Utility Links (Right) */}
            <div className="flex items-center space-x-6 text-sm uppercase tracking-widest font-light">
              <Link className="hidden md:block hover:text-gray-500 transition-colors" to="/dashboard">Account</Link>
              <Link to="/cart" className="hover:text-gray-500 transition-colors flex items-center gap-2">
                Cart 
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-50 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-2xl font-light uppercase tracking-widest">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About us</Link>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;