import axios from 'axios';

// Mocking the base URL for the vibe
const API_URL = import.meta.env.VITE_API_URL || 'https://api.madagascar.luxury';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to attach the JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('madagascar_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (userData) => api.post('/api/auth/register', userData),
};

export const productService = {
  getAll: (params) => api.get('/api/products', { params }),
  getById: (id) => api.get(`/api/products/${id}`),
};

export default api;