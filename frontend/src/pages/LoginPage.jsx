import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          const userData = {
            firstName: data.user?.firstName || "Guest",
            lastName: data.user?.lastName || "",
            role: data.role || "user",
          };

          login(userData);
          navigate("/dashboard");
        } else {
          setError("Check your email to verify your account.");
        }
      }
    } catch (err) {
      setError("Maison Server Offline");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif uppercase tracking-tighter mb-2">
            Madagascar
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">
            {isLogin ? "Authenticating" : "Registration"}
          </p>
        </div>

        <div className="bg-white p-8 border border-stone-100 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-[9px] uppercase tracking-widest text-red-500 bg-red-50 p-2 text-center border border-red-100">
                {error}
              </p>
            )}

            <div className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-all text-xs uppercase tracking-widest"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-all text-xs uppercase tracking-widest"
                  />
                </div>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-all text-xs uppercase tracking-widest"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                className="w-full bg-transparent border-b border-stone-200 py-2 outline-none focus:border-black transition-all text-xs tracking-widest"
              />
            </div>

            <button className="w-full bg-black text-white py-4 mt-4 uppercase tracking-[0.4em] text-[10px] hover:bg-stone-800 transition-all">
              {isLogin ? "Sign In" : "Create Profile"}
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-stone-50">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-black transition-colors"
            >
              {isLogin ? "Need an account?" : "Already a member?"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
