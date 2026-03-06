import { createContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check token and fetch profile logic here
    const token = localStorage.getItem('madagascar_token');
    if (token) {
      // Mocking a successful user fetch
      setUser({ role: 'user', name: 'Priyanshu' }); 
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // const res = await authService.login({ email, password });
      // localStorage.setItem('madagascar_token', res.data.token);
      setUser({ role: 'user', name: 'Priyanshu' });
    } catch (error) {
      console.error("Login failed, mate", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('madagascar_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};