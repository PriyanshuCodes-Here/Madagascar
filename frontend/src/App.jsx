import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Context
import { AuthProvider, AuthContext } from "./context/AuthContext";

// Components
import Navbar from "./components/Navbar";
import AdminDashboard from './pages/AdminDashboard';
import Footer from "./components/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetail from './pages/ProductDetail';
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import ShippingReturn from "./pages/ShippingPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserDashboard from "./pages/UserDashboard";


// Protected Route Logic
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center uppercase tracking-widest text-sm animate-pulse">
        Loading...
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/shop" element={<ProductListPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CheckoutPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/shipping" element={<ShippingReturn />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* Protected User Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              {/* 404 Catch-All */}
              <Route
                path="*"
                element={
                  <div className="h-screen flex items-center justify-center flex-col">
                    <h1 className="text-6xl font-serif mb-4">404</h1>
                    <p className="uppercase tracking-widest text-sm text-gray-500">
                      Page not found
                    </p>
                  </div>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
