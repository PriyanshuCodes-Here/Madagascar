import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext' // <-- Import it

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* <-- Wrap it here */}
      <App />
    </CartProvider>
  </React.StrictMode>,
)