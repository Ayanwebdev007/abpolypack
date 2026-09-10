import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CompanyOverview from './components/CompanyOverview';
import FeaturedProducts from './components/FeaturedProducts';
import PerformanceNumbers from './components/PerformanceNumbers';
import MarketSegments from './components/MarketSegments';
import BrandPartners from './components/BrandPartners';
import RegenerativeCycle from './components/RegenerativeCycle';
import OperationalExcellence from './components/OperationalExcellence';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import GlobalReach from './components/GlobalReach';
import OurLocation from './components/OurLocation';
import EmployeeStories from './components/EmployeeStories';
import CompanyOverviewPage from './components/CompanyOverviewPage';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState('laminates');
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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Sections */}
      {currentPage === 'home' ? (
        <main className="flex-1">
          {/* 1. Hero Slider Section */}
          <HeroSlider
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigate={(sec) => {
              setActiveSection(sec);
              document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 2. Company Overview Section */}
          <CompanyOverview
            onNavigate={(sec) => {
              setActiveSection(sec);
              document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
            }}
            onNavigatePage={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          />

          {/* 3. Featured Products Bento Grid Section */}
          <FeaturedProducts
            onOpenQuoteModal={handleOpenQuoteModal}
            onSelectProduct={(prodKey) => {
              setSelectedProduct(prodKey);
              setCurrentPage('products');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          />

          {/* 4. Numbers Behind Our Performance Section */}
          <PerformanceNumbers />

          {/* 5. Industries & Market Segments Served Section */}
          <MarketSegments
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 6. Our Brands Horizontal Loop Section */}
          <BrandPartners />

          {/* 7. Regenerative Sustainability Cycle Rolling Wheel Section */}
          <RegenerativeCycle
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 8. Operational Excellence Section */}
          <OperationalExcellence
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 9. Before & After Transformation Slider Section */}
          <BeforeAfterComparison />

          {/* 10. Global Reach & Export World Map Section */}
          <GlobalReach
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 10.5. Employee Stories / Testimonials Section */}
          <EmployeeStories />

          {/* 11. Our Location Map Section */}
          <OurLocation />

        </main>
      ) : currentPage === 'company-overview' ? (
        <main className="flex-1">
          <CompanyOverviewPage 
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        </main>
      ) : currentPage === 'products' ? (
        <main className="flex-1">
          <ProductPage
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        </main>
      ) : null}

      {/* Footer Section */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigate={(sec) => {
          if (currentPage !== 'home') {
            setCurrentPage('home');
            setTimeout(() => {
              setActiveSection(sec);
              const el = document.getElementById(sec);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            setActiveSection(sec);
            const el = document.getElementById(sec);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />



      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={selectedQuoteProduct}
      />
    </div>
  );
}
