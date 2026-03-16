import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';    

const ShippingReturn = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif uppercase tracking-tighter mb-4"
          >
            Logistics & Returns
          </motion.h1>
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400">
            The Madagascar Standard
          </p>
        </header>

        {/* Shipping Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-stone-200 pb-2">
            01. Shipping Policy
          </h2>
          <div className="space-y-4 text-sm text-stone-600 leading-relaxed font-light">
            <p>
              Every order placed with the Maison is treated as a priority. We
              partner with global carriers to ensure your selection arrives in
              pristine condition.
            </p>
            <ul className="space-y-2 list-disc list-inside pl-2">
              <li>
                Complimentary standard shipping on all domestic orders over
                $500.
              </li>
              <li>
                Express Delivery (2-3 business days) is available at checkout.
              </li>
              <li>
                International shipping is calculated based on destination and
                duties.
              </li>
            </ul>
            <p className="italic">
              *Please note: All shipments require a signature upon delivery to
              ensure security.
            </p>
          </div>
        </section>

        {/* Returns Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-stone-200 pb-2">
            02. Returns & Exchanges
          </h2>
          <div className="space-y-4 text-sm text-stone-600 leading-relaxed font-light">
            <p>
              If your selection does not meet your expectations, the Maison
              offers a 14-day return window from the date of delivery.
            </p>
            <div className="bg-white p-6 border border-stone-100 italic">
              "Items must be returned in their original condition: unworn,
              unwashed, and with all Madagascar tags and original packaging
              intact."
            </div>
            <ul className="space-y-2 list-disc list-inside pl-2">
              <li>
                Returns are subject to a $15 restocking fee, deducted from the
                refund.
              </li>
              <li>
                Exchanges for a different size or color are complimentary,
                pending availability.
              </li>
              <li>
                Final Sale items (indicated at checkout) are not eligible for
                return.
              </li>
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-stone-200 pb-2">
            03. The Process
          </h2>
          <p className="text-sm text-stone-600 font-light">
            To initiate a return, please visit your{" "}
            <Link to="/dashboard" className="underline cursor-pointer mx-2 hover:text-stone-500 transition-colors">
              Profile
            </Link>
            or contact our concierge at{" "}
            <span className="font-medium text-black">
              support@madagascar.com
            </span>
            . Once your return is inspected and approved, the refund will be
            issued to your original payment method within 7-10 business days.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingReturn;
