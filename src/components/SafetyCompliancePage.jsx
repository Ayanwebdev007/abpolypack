import React from 'react';
import { Globe, ShieldCheck, Filter, Droplet, Layers, Sparkles, ClipboardList, BadgeCheck, CheckCircle2 } from 'lucide-react';

export default function SafetyCompliancePage({ onOpenQuoteModal }) {
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
              PRECISION FROM WITHIN
            </h1>
            <p className="text-sm sm:text-base lg:text-[17px] text-stone-200 font-light tracking-widest uppercase drop-shadow-sm text-center">
              PERFORMANCE MUST COME WITH CONFIDENCE.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative w-full bg-[#faf7f2] text-stone-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 font-sans">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Top Intro Section */}
          <div className="text-center max-w-4xl mx-auto space-y-6 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 leading-tight">
              For packaging applications, material performance and <span className="font-semibold text-[#ed4d0d]">product safety</span> must work together.
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Our material and process controls are aligned with the requirements of the intended application, particularly where packaging comes into contact with food or other sensitive products.
            </p>
          </div>

          {/* Considerations Grid */}
          <div className="pt-4">
            <div className="text-center mb-8">
              <h3 className="text-sm font-bold tracking-widest text-stone-400 uppercase">
                Relevant Considerations
              </h3>
              <p className="text-stone-500 mt-2 max-w-4xl mx-auto sm:whitespace-nowrap">
                Depending on the packaging structure and application, we rigorously evaluate the following factors:
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Food-contact suitability', icon: ShieldCheck },
                { label: 'Migration requirements', icon: Filter },
                { label: 'Ink and adhesive suitability', icon: Droplet },
                { label: 'Material compatibility', icon: Layers },
                { label: 'Process hygiene', icon: Sparkles },
                { label: 'Traceability and documentation', icon: ClipboardList }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-stone-100 group hover:border-[#ed4d0d]/30 hover:shadow-md transition-all cursor-default">
                  <div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-[#ed4d0d]/10 transition-colors">
                    <item.icon className="w-7 h-7 text-stone-600 group-hover:text-[#ed4d0d] transition-colors" />
                  </div>
                  <span className="text-[15px] font-semibold text-stone-800 leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Box */}
          <div className="pt-8">
            <div className="bg-[#018ade] text-white p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <BadgeCheck className="w-6 h-6 text-[#ed4d0d]" />
                  <span className="text-sm font-bold tracking-widest text-white/80 uppercase">Global Standards</span>
                </div>
                <p className="text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                  Our <span className="font-semibold text-white">BRC and FSSC 22000 certifications</span> reinforce our commitment to food-safety and controlled manufacturing practices.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {[
                  { name: 'BRC', src: '/cert-brc.jpg' },
                  { name: 'FSSC 22000', src: '/cert-fssc.webp' }
                ].map((cert) => (
                  <div key={cert.name} className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-2 shadow-lg hover:-translate-y-1 transition-transform flex items-center justify-center">
                    <img src={cert.src} alt={cert.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
