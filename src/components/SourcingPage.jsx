import React from 'react';
import { Globe, ShieldCheck, Sliders, Layers, FileText, Target, CheckCircle2 } from 'lucide-react';

export default function SourcingPage({ onOpenQuoteModal }) {
  return (
    <div className="w-full min-h-screen bg-[#faf7f2] font-sans pb-16">
      {/* FULL-BLEED HERO SECTION */}
      <section className="w-full h-screen min-h-[600px] relative overflow-hidden bg-black font-sans">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="AB POLYPACK Provenance & Material Manufacturing" 
            className="w-full h-full object-cover object-center scale-105 transition-all duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10" />
        </div>

        <div className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center space-y-4">
          <a
            href="tel:+913326778400"
            title="Call Sales Office"
            className="p-2 text-white/80 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200 bg-black/30 backdrop-blur-md rounded-full border border-white/10"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:info@abpolypack.com"
            title="Email Compliance Team"
            className="p-2 text-white/80 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200 bg-black/30 backdrop-blur-md rounded-full border border-white/10"
          >
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-12 pointer-events-none">
          <div className="max-w-5xl w-full px-4 space-y-2 text-center pointer-events-auto flex flex-col items-center justify-center">
            <h1 className="text-lg sm:text-2xl lg:text-[28px] xl:text-[30px] font-bold text-white tracking-tight uppercase drop-shadow-md text-center leading-tight">
              ORIGIN SETS THE STANDARD
            </h1>
            <p className="text-sm sm:text-base lg:text-[17px] text-stone-200 font-light tracking-widest uppercase drop-shadow-sm text-center">
              QUALITY STARTS WITH WHO WE SOURCE FROM.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative w-full bg-[#faf7f2] text-stone-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 font-sans">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Top Intro Section */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 leading-tight sm:whitespace-nowrap">
              A dependable pack begins with <span className="font-semibold text-[#ed4d0d]">dependable materials.</span>
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              At AB Polypacks, sourcing is built around reliable suppliers, defined specifications, technical documentation and consistent batch quality.
            </p>
          </div>

          {/* Suppliers & Process Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Major Suppliers Box */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/60 flex flex-col justify-center space-y-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold tracking-widest text-stone-400 uppercase">Major Polymer Partners</h3>
              <p className="text-stone-700 text-lg leading-relaxed">
                For polyethylene granules, our identified major suppliers include:
              </p>
              <div className="flex flex-wrap gap-3">
                {['HPL', 'IOCL', 'Dow Chemicals', 'Borouge'].map((supplier) => (
                  <span key={supplier} className="px-4 py-2 bg-[#018ade] border border-[#018ade] rounded-full text-white font-medium text-sm shadow-sm hover:bg-[#018ade]/90 transition-colors">
                    {supplier}
                  </span>
                ))}
              </div>
            </div>

            {/* Process Consideration Box */}
            <div className="bg-[#ed4d0d] text-white p-8 rounded-2xl shadow-sm flex flex-col justify-center space-y-4 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-8 h-8 text-white" />
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Every incoming material is considered for <span className="text-white font-semibold">consistency, process compatibility</span> and <span className="text-white font-semibold">intended application</span> before it becomes part of the manufacturing chain.
              </p>
            </div>

          </div>

          {/* 5 Core Pillars Grid */}
          <div className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Supplier reliability', icon: ShieldCheck },
                { label: 'Specification control', icon: Sliders },
                { label: 'Batch consistency', icon: Layers },
                { label: 'Technical documentation', icon: FileText },
                { label: 'Application suitability', icon: Target }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100 group hover:border-[#ed4d0d]/30 hover:shadow-md transition-all cursor-default">
                  <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-[#ed4d0d]/10 transition-colors">
                    <item.icon className="w-6 h-6 text-stone-600 group-hover:text-[#ed4d0d] transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-stone-800 leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bold Footer Statement */}
          <div className="pt-12 border-t border-stone-200 flex justify-center text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#ed4d0d] tracking-wider uppercase drop-shadow-sm">
              RIGHT SOURCE. RIGHT MATERIAL. RIGHT START.
            </h2>
          </div>

        </div>
      </section>
    </div>
  );
}
