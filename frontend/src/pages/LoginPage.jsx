import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // If they were trying to access a protected route, send them back there after login
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In the real world, await the API call here
    await login(email, password);
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <h1 className="text-4xl font-light tracking-widest uppercase mb-10 text-center">Sign In</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors bg-transparent text-sm tracking-widest placeholder-gray-400 uppercase" 
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="PASSWORD" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors bg-transparent text-sm tracking-widest placeholder-gray-400 uppercase" 
            />
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <button type="button" className="text-xs text-gray-500 hover:text-black uppercase tracking-widest transition-colors">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors mt-8"
          >
            Access Account
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Don't have an account?</p>
          <Link to="/register" className="text-sm border-b border-black pb-1 uppercase tracking-widest hover:text-gray-500 transition-colors">
            Create Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;