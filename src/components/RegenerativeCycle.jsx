import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  FileCheck, 
  Scan, 
  Leaf, 
  Package, 
  Globe, 
  Plus, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function RegenerativeCycle({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const steps = [
    {
      id: 'quality',
      stepNum: 1,
      title: 'QUALITY',
      description: 'Consistency starts at the source.',
      icon: ShieldCheck,
      color: '#ed4d0d'
    },
    {
      id: 'performance',
      stepNum: 2,
      title: 'PERFORMANCE',
      description: 'Materials selected for what they need to do.',
      icon: Zap,
      color: '#ed4d0d'
    },
    {
      id: 'safety-compliance',
      stepNum: 3,
      title: 'SAFETY & COMPLIANCE',
      description: 'Performance must come with confidence.',
      icon: FileCheck,
      color: '#ed4d0d'
    },
    {
      id: 'traceability',
      stepNum: 4,
      title: 'TRACEABILITY',
      description: 'From material batch to finished pack.',
      icon: Scan,
      color: '#ed4d0d'
    },
    {
      id: 'sustainability',
      stepNum: 5,
      title: 'SUSTAINABILITY',
      description: 'Less material. Better performance. Smarter production.',
      icon: Leaf,
      color: '#ed4d0d'
    },
    {
      id: 'application',
      stepNum: 6,
      title: 'APPLICATION',
      description: 'Materials that respond to the product.',
      icon: Package,
      color: '#ed4d0d'
    },
    {
      id: 'sourcing',
      stepNum: 7,
      title: 'SOURCING',
      description: 'Quality starts with who we source from.',
      icon: Globe,
      color: '#ed4d0d'
    }
  ];

  const totalSteps = steps.length;
  const anglePerStep = 360 / totalSteps;

  // Handle clicking a specific step with shortest angular path
  const goToStep = (targetIndex) => {
    setHasInteracted(true);
    setActiveStep((currentActive) => {
      let diff = targetIndex - currentActive;
      while (diff > totalSteps / 2) diff -= totalSteps;
      while (diff < -totalSteps / 2) diff += totalSteps;
      
      setRotationAngle((prevAngle) => prevAngle - diff * anglePerStep);
      return targetIndex;
    });
  };

  const handleStepClick = (index) => {
    goToStep(index);
  };

  const handleNext = () => {
    setHasInteracted(true);
    setActiveStep((prev) => (prev + 1) % totalSteps);
    setRotationAngle((prev) => prev - anglePerStep);
  };

  const handlePrev = () => {
    setHasInteracted(true);
    setActiveStep((prev) => (prev - 1 + totalSteps) % totalSteps);
    setRotationAngle((prev) => prev + anglePerStep);
  };

  const current = steps[activeStep];

  return (
    <section id="provenance" className="relative w-full bg-[#faf7f2] text-stone-900 py-12 sm:py-16 lg:py-20 overflow-hidden font-sans border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE) */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-end mb-3">
            <div className="relative inline-flex items-end">
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-2 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none">
                PROVENANC<span className="tracking-normal [letter-spacing:0]">E</span>
              </span>
            </div>
          </div>
        </div>

        {/* 2-COLUMN LAYOUT: LEFT COLUMN STORY, RIGHT COLUMN ROLLING WHEEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: PROVENANCE NARRATIVE COPY & CTA (5 COLS) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Headline with Thin Stone & Heavy Brand Orange Weights */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight uppercase leading-[1.2]">
                <span className="font-extralight text-stone-900">THE RIGHT PACKAGING BEGINS WITH </span>
                <span className="font-black text-[#ed4d0d]">THE RIGHT MATERIAL</span>
              </h2>
            </div>

            {/* Paragraph Content */}
            <p className="text-stone-700 text-[15px] sm:text-base lg:text-[16.5px] leading-relaxed font-normal text-justify">
              At AB Polypacks, material selection is the first quality decision we make. Every raw material entering our manufacturing ecosystem is considered against its intended application, functional requirements, process compatibility and finished-pack performance.
            </p>

            {/* CTA Button and Navigation Arrows */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Provenance')}
                className="inline-flex items-center px-7 py-3.5 rounded-lg bg-[#ed4d0d] hover:bg-[#d4410a] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg space-x-3 group whitespace-nowrap"
              >
                <span>EXPLORE PROVENANCE</span>
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>

              {/* Prev / Next manual controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous step"
                  className="p-3 rounded-lg bg-white border border-stone-200 hover:border-[#ed4d0d] text-stone-700 hover:text-[#ed4d0d] shadow-sm transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next step"
                  className="p-3 rounded-lg bg-white border border-stone-200 hover:border-[#ed4d0d] text-stone-700 hover:text-[#ed4d0d] shadow-sm transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Step Indicators */}
            <div className="pt-2 flex items-center space-x-2">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => handleStepClick(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    hasInteracted && activeStep === idx 
                      ? 'w-7 bg-[#ed4d0d]' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Jump to ${s.title}`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE ROLLING CYCLE WHEEL (7 COLS) */}
          <div className="lg:col-span-7 flex items-center justify-center relative py-6">
            
            {/* Soft Ambient Multi-Ring Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              
              {/* Layer 1: Outer Soft Drop Shadow Base Ring */}
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06),0_2px_12px_rgba(0,0,0,0.03)] border border-stone-200/80 pointer-events-none" />
              
              {/* Layer 2: Slim Colored Orbital Track Band */}
              <div className="absolute inset-[32px] sm:inset-[42px] lg:inset-[46px] rounded-full bg-gradient-to-br from-[#ed4d0d]/15 via-[#ed4d0d]/10 to-[#ed4d0d]/20 border border-[#ed4d0d]/30 pointer-events-none" />

              {/* Layer 3: Dashed Orbital Center Guide Line */}
              <div className="absolute inset-[44px] sm:inset-[58px] lg:inset-[65px] rounded-full border border-dashed border-[#ed4d0d]/40 pointer-events-none" />

              {/* Layer 4: Center Crisp White Disc for Text */}
              <div className="absolute inset-[56px] sm:inset-[74px] lg:inset-[84px] rounded-full bg-white border border-[#ed4d0d]/30 shadow-sm pointer-events-none" />

              {/* ---------------------------------------------------- */}
              {/* THE ROTATING ORBITAL WHEEL */}
              {/* ---------------------------------------------------- */}
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{
                  transform: `rotate(${rotationAngle}deg)`
                }}
              >
                {steps.map((step, index) => {
                  const itemAngleDeg = index * anglePerStep - 90;
                  const itemAngleRad = (itemAngleDeg * Math.PI) / 180;
                  
                  const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 125 : 185;
                  
                  const x = radius * Math.cos(itemAngleRad);
                  const y = radius * Math.sin(itemAngleRad);

                  const isActive = hasInteracted && activeStep === index;
                  const IconComponent = step.icon;

                  return (
                    <div
                      key={step.id}
                      onClick={() => handleStepClick(index)}
                      className="absolute left-1/2 top-1/2 cursor-pointer select-none group z-20"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      {/* Counter-rotate icon container so icon always stays upright */}
                      <div 
                        className="flex flex-col items-center justify-center transition-transform duration-700 ease-out"
                        style={{
                          transform: `rotate(${-rotationAngle}deg)`
                        }}
                      >
                        {/* Circular Node Icon Button */}
                        <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                          isActive
                            ? 'bg-[#ed4d0d] text-white ring-4 ring-[#ed4d0d]/20 scale-110 shadow-lg'
                            : 'bg-white text-stone-700 border border-stone-200 group-hover:border-[#ed4d0d] group-hover:text-[#ed4d0d] group-hover:scale-105'
                        }`}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ---------------------------------------------------- */}
              {/* CENTER DISPLAY AREA (DYNAMIC / INITIAL CONTENT) */}
              {/* ---------------------------------------------------- */}
              <div className="relative z-10 w-[200px] sm:w-[260px] text-center px-3 sm:px-4 py-2 pointer-events-auto">
                {!hasInteracted ? (
                  <div className="space-y-2.5 animate-fadeIn">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 leading-snug">
                      Seven disciplines.
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal">
                      One uncompromising objective: dependable packaging performance.
                    </p>
                  </div>
                ) : (
                  <div 
                    key={current.id} 
                    className="space-y-2 animate-fadeIn"
                  >
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#ed4d0d] uppercase tracking-wider leading-tight">
                      {current.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] text-stone-700 leading-relaxed font-normal">
                      {current.description}
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
