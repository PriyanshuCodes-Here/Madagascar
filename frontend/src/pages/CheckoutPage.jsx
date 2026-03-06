import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  // We pull everything from the 'Brain' (CartContext)
  const { cartItems, getCartTotal, removeFromCart, updateQuantity } = useContext(CartContext);
console.log("Current Cart Items:", cartItems);
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 min-h-screen bg-stone-50">
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-light tracking-widest uppercase mb-12 text-center"
      >
        Secure Checkout
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Forms Area (Left Side) */}
        <div className="flex-1 space-y-12">
          <section>
            <h2 className="text-lg uppercase tracking-widest mb-6 border-b pb-2 text-stone-800">Contact Details</h2>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full border-b border-stone-200 py-3 outline-none focus:border-black transition-colors bg-transparent placeholder-stone-400 uppercase text-xs tracking-widest" 
            />
          </section>

          <section>
            <h2 className="text-lg uppercase tracking-widest mb-6 border-b pb-2 text-stone-800">Shipping</h2>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full border-b border-stone-200 py-3 outline-none focus:border-black bg-transparent text-xs uppercase tracking-widest" />
              <input type="text" placeholder="Last Name" className="w-full border-b border-stone-200 py-3 outline-none focus:border-black bg-transparent text-xs uppercase tracking-widest" />
              <input type="text" placeholder="Shipping Address" className="col-span-2 w-full border-b border-stone-200 py-3 outline-none focus:border-black bg-transparent text-xs uppercase tracking-widest" />
            </div>
          </section>
        </div>

        {/* Dynamic Order Summary (Right Side) */}
        <aside className="lg:w-[450px] shrink-0">
          <div className="bg-white p-8 sticky top-24 border border-stone-100 shadow-sm">
            <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-4">
              <h2 className="text-sm uppercase tracking-[0.3em]">Your Selection</h2>
              <Link to="/shop" className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-black transition-colors underline underline-offset-4">
                Add More Pieces
              </Link>
            </div>
            
            {/* THE DYNAMIC LIST - This replaces ALL mock data */}
            <div className="space-y-8 mb-8 max-h-[400px] overflow-y-auto pr-2">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-24 object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <p className="text-[11px] uppercase tracking-widest font-medium text-stone-800">{item.name}</p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[9px] uppercase tracking-tighter text-red-400 hover:text-red-700 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-[9px] text-stone-400 uppercase tracking-widest mt-1">{item.category}</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-lg font-light hover:text-stone-400">-</button>
                        <span className="text-xs font-light">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-lg font-light hover:text-stone-400">+</button>
                        <span className="ml-auto text-sm font-medium">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-xs uppercase tracking-widest text-stone-400 italic">Your bag is currently empty</p>
                  <Link to="/shop" className="inline-block mt-4 text-[10px] uppercase tracking-widest bg-black text-white px-6 py-2">Go to Shop</Link>
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="space-y-4 text-[10px] uppercase tracking-[0.2em] border-t border-stone-100 pt-6 mb-6">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
            </div>
            
            <div className="flex justify-between font-light text-2xl mb-8 border-t border-stone-100 pt-6">
              <span className="uppercase tracking-tighter text-sm self-center">Total</span>
              <span>${getCartTotal()}</span>
            </div>

            <button 
              disabled={cartItems.length === 0}
              className={`w-full py-5 uppercase tracking-[0.3em] text-[10px] transition-all ${
                cartItems.length === 0 ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : 'bg-black text-white hover:bg-stone-800 shadow-xl'
              }`}
            >
              Place Order
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;