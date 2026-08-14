import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, selectedProduct }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: selectedProduct ? selectedProduct.category : 'Food Packaging',
    quantity: '1 - 5 MT',
    message: selectedProduct ? `Inquiry regarding ${selectedProduct.name}` : ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#faf7f2] text-stone-500 hover:text-stone-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <span className="inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-widest text-[#ed4d0d] bg-[#f5f0eb] px-3 py-1 rounded-md border border-stone-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AB POLYPACKS Sales Desk</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900">
            Request Custom Packaging Quote
          </h3>
          <p className="text-xs text-stone-600">
            Get direct technical assistance & wholesale pricing from our Howrah manufacturing team.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 bg-[#faf7f2] p-6 rounded-2xl border border-[#ed4d0d]">
            <CheckCircle2 className="w-12 h-12 text-[#ed4d0d] mx-auto animate-bounce" />
            <h4 className="text-xl font-heading font-bold text-stone-900">Quote Request Received!</h4>
            <p className="text-xs text-stone-700 max-w-md mx-auto font-medium">
              Thank you, <strong className="text-[#ed4d0d]">{formData.name}</strong>. Our flexible packaging specialists will review your requirements for <span className="text-stone-900 font-bold">{formData.category}</span> and send a detailed commercial proposal within 24 hours.
            </p>
            <div className="text-[11px] text-stone-500 font-mono pt-2">
              Reference ID: AB-RFQ-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#ed4d0d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#ed4d0d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#ed4d0d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Foods Pvt Ltd"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#ed4d0d]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Packaging Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#ed4d0d]"
                >
                  <option value="Food Packaging">Food Packaging</option>
                  <option value="Beverages">Beverages & Labels</option>
                  <option value="Liquid Packaging">Liquid Spout Packaging</option>
                  <option value="Spices">Spices & Aroma Lock</option>
                  <option value="Personal Care & Household">Personal Care & Household</option>
                  <option value="Health Care & Agriculture">Health Care & Agriculture</option>
                  <option value="Collation Shrink Films">Collation Shrink Films</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#ed4d0d]"
                >
                  <option value="500 kg - 1 MT">500 kg - 1 MT (Trial Lot)</option>
                  <option value="1 - 5 MT">1 - 5 MT</option>
                  <option value="5 - 20 MT">5 - 20 MT</option>
                  <option value="20+ MT">20+ MT (Bulk Production)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Specific Structure / Requirement Details
              </label>
              <textarea
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention pouch sizes, laminate structure preference (e.g., PET/MET PET/PE), zipper/spout requirement..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#ed4d0d] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#ed4d0d] hover:bg-[#d4410a] text-white font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
