import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group relative flex flex-col cursor-pointer">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-stone-100">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white py-4 text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-stone-800 transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <h3 className="text-sm uppercase tracking-widest font-light">{product.name}</h3>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;