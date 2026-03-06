import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext); // Reusing login to auto-auth after register
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
console.log(formData);
  const response = await fetch("http://localhost:5000/api/oth/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const user = await login(formData.email, formData.password);

    if (user) {
      navigate("/");
    }
  }
};

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-stone-50 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <h1 className="text-4xl font-light tracking-widest uppercase mb-10 text-center">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              required
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors bg-transparent text-sm tracking-widest placeholder-gray-400 uppercase"
            />
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              required
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors bg-transparent text-sm tracking-widest placeholder-gray-400 uppercase"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors bg-transparent text-sm tracking-widest placeholder-gray-400 uppercase"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors bg-transparent text-sm tracking-widest placeholder-gray-400 uppercase"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors mt-8"
          >
            Create Account
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Already a client?
          </p>
          <Link
            to="/login"
            className="text-sm border-b border-black pb-1 uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
