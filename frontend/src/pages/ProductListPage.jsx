import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import silknoir from "../assets/Silknoir.jpg";
import overcoat from "../assets/oversizedwoolcoat.jpg";

// Mock Data for the grid
const products = [
  {
    id: 1,
    name: "Silk Noir Dress",
    price: 890,
    category: "Women",
    image: silknoir,
  },
  {
    id: 2,
    name: "Oversized Wool Coat",
    price: 1250,
    category: "Men",
    image: overcoat,
  },
  {
    id: 3,
    name: "Leather Chelsea Boot",
    price: 650,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800",
  },
  {
    id: 4,
    name: "Cashmere Turtleneck",
    price: 420,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800",
  },
  {
    id: 5,
    name: "Pleated Trousers",
    price: 580,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1767631338127-8cd80ee2f9df?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Slick Trouser",
    price: 20,
    category: "Women",
    image:
      "https://images.meesho.com/images/products/345685167/ooieg_512.avif?width=512",
  },
  {
    id: 7,
    name: "Air Jordan 4 Retro",
    price: 110,
    category: "Footwear",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a484787-457e-4cb1-add5-af6fa20dbcc1/AIR+JORDAN+4+RETRO+OG+FC+%28GS%29.png",
  },
  {
    id: 8,
    name: "Air Jordan 1 G",
    price: 175,
    category: "Footwear",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b878d81f-1c3f-4fe8-ab46-9b1a50d40e21/AIR+JORDAN+1+LOW+G.png",
  },
  {
    id: 9,
    name: "Minimalist Tote",
    price: 950,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800",
  },
];

const ProductListPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Simple filter logic
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-24 min-h-screen flex flex-col md:flex-row gap-12">
      {/* Filter Sidebar */}
      <aside className="md:w-64 shrink-0 md:sticky md:top-24 h-fit">
        <h2 className="text-sm font-medium tracking-widest uppercase mb-8 border-b border-black pb-4">
          Filters
        </h2>

        <div className="mb-8">
          <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Category
          </h3>
          <ul className="space-y-3 text-sm font-light">
            {["All", "Men", "Women", "Footwear", "Accessories"].map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`hover:text-black transition-colors ${activeCategory === cat ? "text-black font-medium" : "text-gray-400"}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Price
          </h3>
          <ul className="space-y-3 text-sm font-light text-gray-400">
            <li>
              <button className="hover:text-black transition-colors">
                Under $500
              </button>
            </li>
            <li>
              <button className="hover:text-black transition-colors">
                $500 - $1000
              </button>
            </li>
            <li>
              <button className="hover:text-black transition-colors">
                Over $1000
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-gray-500">
            {filteredProducts.length} Results
          </p>
          <select className="bg-transparent text-sm outline-none border-b border-gray-300 pb-1 cursor-pointer">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default ProductListPage;
