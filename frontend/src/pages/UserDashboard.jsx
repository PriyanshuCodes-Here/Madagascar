import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');
  
  // Hooks MUST be inside the component function right here:
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 min-h-screen flex flex-col md:flex-row gap-16">
      {/* Sidebar */}
      <aside className="md:w-64 shrink-0">
        <h1 className="text-2xl font-light tracking-wide uppercase mb-8">My Account</h1>
        <nav className="flex flex-col space-y-4 text-sm tracking-widest uppercase">
          <button 
            onClick={() => setActiveTab('orders')}
            className={`text-left pb-1 border-b ${activeTab === 'orders' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
          >
            Order History
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`text-left pb-1 border-b ${activeTab === 'profile' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
          >
            Profile Settings
          </button>
          {/* Firing the valid logout function here */}
          <button 
            onClick={handleLogout}
            className="text-left pb-1 border-b border-transparent text-gray-400 hover:text-red-500 mt-8 transition-colors"
          >
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1">
        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-lg uppercase tracking-widest mb-8">Recent Orders</h2>
            <div className="border border-gray-200">
              <div className="flex flex-wrap justify-between items-center p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Order #MDG-8472</p>
                  <p className="text-sm">Placed on March 6, 2026</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="font-medium">$1,540.00</p>
                  <p className="text-xs text-green-600 uppercase tracking-widest mt-1">Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'profile' && (
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-lg uppercase tracking-widest mb-8">Personal Details</h2>
            <form className="max-w-md space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input type="text" defaultValue="Priyanshu" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" defaultValue="priyanshu@example.com" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors mt-4">
                Update Profile
              </button>
            </form>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;