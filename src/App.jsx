import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CompanyOverview from './components/CompanyOverview';
import FeaturedProducts from './components/FeaturedProducts';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState(null);

  const handleOpenQuoteModal = (product = null) => {
    setSelectedQuoteProduct(product);
    setQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900 flex flex-col font-sans selection:bg-[#ed4d0d] selection:text-white">
      
      {/* Sticky Header Navbar (Pidilite Style) */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Slider Section */}
        <HeroSlider
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigate={(sec) => {
            setActiveSection(sec);
            document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Thicker White Gap Divider (Top Divider Only) */}
        <div className="w-full h-6 sm:h-10 lg:h-12 bg-white relative z-30 shadow-md" />

        {/* 2. Company Overview Section */}
        <CompanyOverview
          onNavigate={(sec) => {
            setActiveSection(sec);
            document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Featured Products Bento Grid Section */}
        <FeaturedProducts
          onOpenQuoteModal={handleOpenQuoteModal}
        />

      </main>



      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={selectedQuoteProduct}
      />
    </div>
  );
}
