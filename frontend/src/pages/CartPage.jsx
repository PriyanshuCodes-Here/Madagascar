import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const mockCart = [
  { id: 1, name: 'Silk Noir Dress', price: 890, size: 'M', qty: 1, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Leather Chelsea Boot', price: 650, size: '42', qty: 1, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop' },
];

const CartPage = () => {
  const subtotal = mockCart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-24 min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl font-light tracking-tight uppercase mb-16 border-b pb-8">Shopping Bag</h1>

      {mockCart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-6 uppercase tracking-widest">Your bag is empty.</p>
          <Link to="/" className="border border-black px-8 py-3 uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {mockCart.map((item) => (
              <motion.div layout key={item.id} className="flex gap-6 border-b pb-8">
                <img src={item.image} alt={item.name} className="w-32 h-40 object-cover bg-gray-100" />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-light">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Size: {item.size}</p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-300">
                      <button className="px-3 py-1 hover:bg-gray-100">-</button>
                      <span className="px-3 text-sm">{item.qty}</span>
                      <button className="px-3 py-1 hover:bg-gray-100">+</button>
                    </div>
                    <button className="text-xs uppercase tracking-widest text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-all">Remove</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 h-fit">
            <h2 className="text-lg uppercase tracking-widest mb-6">Order Summary</h2>
            <div className="space-y-4 text-sm border-b border-gray-200 pb-6 mb-6">
              <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Shipping</span><span>Calculated at checkout</span></div>
            </div>
            <div className="flex justify-between font-medium text-lg mb-8">
              <span>Total</span><span>${subtotal}</span>
            </div>
            <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CartPage;