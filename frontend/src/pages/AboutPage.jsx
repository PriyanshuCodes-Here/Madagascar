import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-stone-50 text-black pt-20">
      {/* Editorial Hero */}
      <section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
          alt="Atelier" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <h1 className="relative z-10 text-6xl md:text-8xl font-serif text-white tracking-tighter uppercase mix-blend-difference">
          The Maison
        </h1>
      </section>

      {/* Manifesto Section */}
      <section className="max-w-4xl mx-auto px-4 py-32 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide"
        >
          "MADAGASCAR was born from a desire to strip away the excess. We believe in the architecture of garments—where every stitch is intentional, and luxury is defined by uncompromising quality, not loud branding."
        </motion.p>
      </section>

      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-200">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Our Materials</h2>
          <p className="font-light leading-loose text-gray-800">
            We source exclusively from heritage mills in Italy and Japan. From heavy-weight silks to responsibly sourced cashmere, our supply chain is completely transparent and fiercely guarded.
          </p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">The Process</h2>
          <p className="font-light leading-loose text-gray-800">
            Design is subtractive. We spend months removing elements until only the purest form remains. Each piece is constructed to outlive trends, creating a permanent wardrobe for the modern era.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;