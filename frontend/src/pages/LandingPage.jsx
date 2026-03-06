import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

// Example Mock Data
const trendingProducts = [
  { id: 1, name: 'Silk Noir Dress', price: 890, category: 'Women', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Oversized Wool Coat', price: 1250, category: 'Men', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Leather Chelsea Boot', price: 650, category: 'Footwear', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Cashmere Turtleneck', price: 420, category: 'Men', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop' },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Fashion" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Subtle overlay */}
        
        <div className="relative z-10 text-center text-white p-8 backdrop-blur-sm bg-stone-50/10 border border-white/20">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif tracking-tighter uppercase mb-4"
          >
            Madagascar
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-widest uppercase mb-8"
          >
            Redefining Modern Luxury
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-stone-50 text-black px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Shop The Collection
          </motion.button>
        </div>
      </section>

      {/* Trending Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-light tracking-wide uppercase">Trending Now</h2>
          <button className="text-sm border-b border-black pb-1 hover:text-gray-500 transition-colors">View All</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;