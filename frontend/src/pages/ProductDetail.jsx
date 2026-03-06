import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();

  // In a real app, you'd fetch by ID. For now, let's mock it:
  const product = {
    name: "Silk Noir Dress",
    price: 890,
    description: "A fluid silhouette crafted from 100% mulberry silk. Designed for the modern minimalist.",
    image: "/silknoir.jpg" 
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-stone-100 aspect-[3/4] overflow-hidden"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4">New Collection</span>
          <h1 className="text-4xl font-serif uppercase mb-6">{product.name}</h1>
          <p className="text-xl mb-8 font-light">${product.price}</p>
          <p className="text-stone-500 leading-relaxed mb-12 max-w-md">{product.description}</p>
          
          <button className="w-full bg-black text-white py-5 uppercase tracking-[0.3em] text-[10px] hover:bg-stone-800 transition-all shadow-xl">
            Add to Bag
          </button>
          
          <div className="mt-12 pt-8 border-t border-stone-200">
            <details className="cursor-pointer group">
              <summary className="list-none text-[10px] uppercase tracking-widest flex justify-between items-center">
                Composition & Care
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-xs text-stone-400 leading-loose">
                100% Silk. Dry clean only. Handle with extreme care.
              </p>
            </details>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;