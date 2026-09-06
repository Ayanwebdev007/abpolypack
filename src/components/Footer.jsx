import React from 'react';
import { Briefcase, Newspaper, Leaf, Mail, ArrowUp, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer({ onOpenQuoteModal, onNavigate }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#f6f3eb] text-stone-900 border-t border-stone-200 font-sans">
      
      {/* Top Footer Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Column 1: WHO WE ARE */}
        <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-200">
          <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#ed4d0d] mb-4">
            WHO WE ARE
          </h4>
          <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed font-normal text-left">
            Since 2006, AB Polypacks has transformed flexible packaging into a strategic asset for global brands, blending technical precision with material efficiency. From India to the world, every film roll and custom pouch reflects quality, innovation, and decades of manufacturing dedication.
          </p>
        </div>

        {/* Column 2: NAVIGATION CELLS */}
        <div className="lg:col-span-3 flex flex-col border-b lg:border-b-0 lg:border-r border-stone-200">
          
          {/* Career Cell */}
          <button 
            onClick={() => onOpenQuoteModal && onOpenQuoteModal('Career')}
            className="flex-1 flex items-center gap-4 px-8 py-6 sm:py-8 border-b border-stone-200 hover:bg-[#eae6db]/30 transition-colors group cursor-pointer text-left"
          >
            <Briefcase className="w-5 h-5 text-stone-600 group-hover:text-[#ed4d0d] transition-colors shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone-800">
              CAREER
            </span>
          </button>

          {/* Media Cell */}
          <button 
            onClick={() => onOpenQuoteModal && onOpenQuoteModal('Media')}
            className="flex-1 flex items-center gap-4 px-8 py-6 sm:py-8 border-b border-stone-200 hover:bg-[#eae6db]/30 transition-colors group cursor-pointer text-left"
          >
            <Newspaper className="w-5 h-5 text-stone-600 group-hover:text-[#ed4d0d] transition-colors shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone-800">
              MEDIA
            </span>
          </button>

          {/* Sustainability Cell */}
          <button 
            onClick={() => handleNavClick('provenance')}
            className="flex-1 flex items-center gap-4 px-8 py-6 sm:py-8 hover:bg-[#eae6db]/30 transition-colors group cursor-pointer text-left"
          >
            <Leaf className="w-5 h-5 text-stone-600 group-hover:text-[#ed4d0d] transition-colors shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone-800">
              SUSTAINABILITY
            </span>
          </button>

        </div>

        {/* Column 3: REACH US (MASSIVE TEXT) */}
        <div className="lg:col-span-5 p-8 sm:p-12 flex items-center justify-between relative overflow-hidden min-h-[160px] lg:min-h-0 bg-[#eae6db]/10">
          
          {/* Giant Text with individual letter hover effect */}
          <h3 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-black text-stone-900 tracking-tighter uppercase select-none leading-none whitespace-nowrap">
            {"CONTACT US".split("").map((char, idx) => (
              char === " " ? (
                <span key={idx} className="inline-block w-[0.2em]">&nbsp;</span>
              ) : (
                <span 
                  key={idx}
                  className="hover:text-[#ed4d0d] transition-colors duration-150 cursor-default"
                >
                  {char}
                </span>
              )
            ))}
          </h3>

          {/* Square Red/Orange Icon Button */}
          <button 
            onClick={() => onOpenQuoteModal && onOpenQuoteModal('Contact Footer')}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded bg-[#ed4d0d] hover:bg-[#d4410a] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shrink-0 cursor-pointer animate-pulse"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

      </div>

      {/* Bottom Copyright & Footer Links */}
      <div className="border-t border-stone-200 py-6 px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="text-xs sm:text-sm text-stone-600 font-normal order-3 md:order-1 text-center md:text-left">
          © 2025 – 2026 | All rights reserved by AB Polypacks Pvt Ltd
        </div>

        {/* Links + Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
          <button 
            className="text-xs sm:text-sm font-bold text-stone-800 hover:text-[#ed4d0d] transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
          <button 
            className="text-xs sm:text-sm font-bold text-stone-800 hover:text-[#ed4d0d] transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-600 hover:text-[#ed4d0d] transition-colors">
              <Instagram className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-600 hover:text-[#ed4d0d] transition-colors">
              <Facebook className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-stone-600 hover:text-[#ed4d0d] transition-colors">
              <Linkedin className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

        {/* Scroll up */}
        <button 
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full bg-stone-200/80 hover:bg-[#ed4d0d] text-stone-700 hover:text-white flex items-center justify-center transition-colors shadow-sm order-2 md:order-3 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>

    </footer>
  );
}
