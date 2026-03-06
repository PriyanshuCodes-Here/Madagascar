import { motion, AnimatePresence } from 'framer-motion';

const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />

        {/* Slide-over Panel */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-stone-50 h-full shadow-2xl p-8 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl uppercase tracking-widest font-light">Edit Piece</h2>
            <button onClick={onClose} className="text-xs uppercase tracking-tighter hover:text-stone-500 transition-colors">Close</button>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onSave(product); }}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Product Name</label>
              <input 
                type="text" 
                defaultValue={product?.name} 
                className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-colors uppercase text-sm tracking-wide"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Price (USD)</label>
                <input 
                  type="number" 
                  defaultValue={product?.price} 
                  className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Stock</label>
                <input 
                  type="number" 
                  defaultValue={12} 
                  className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Category</label>
              <select className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-colors text-sm uppercase tracking-widest">
                <option>Men</option>
                <option>Women</option>
                <option>Accessories</option>
              </select>
            </div>

            <div className="pt-12">
              <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-xs hover:bg-stone-800 transition-all">
                Update Master Record
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EditProductModal;