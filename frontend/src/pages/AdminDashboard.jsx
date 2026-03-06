import { useState } from 'react';
import EditProductModal from '../components/EditProductModal';

const AdminDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to trigger the modal for a NEW product
  const handleAddNew = () => {
    setSelectedProduct(null); // Clear selection so the modal starts empty
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        
        {/* --- THE NEW HEADER WITH ADD BUTTON --- */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-stone-200">
          <div>
            <h1 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4">Maison Madagascar / Admin</h1>
            <h2 className="text-5xl font-serif uppercase tracking-tighter text-stone-900">Inventory</h2>
          </div>
          
          <button 
            onClick={handleAddNew}
            className="group relative flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-2xl"
          >
            <span className="text-lg leading-none">+</span>
            Add New Piece
          </button>
        </header>

        {/* ... Rest of your table logic here ... */}
        
      </div>
      
      {/* The Modal handles both Edit and Add */}
      <EditProductModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        product={selectedProduct}
      />
    </div>
  );
};

export default AdminDashboard;