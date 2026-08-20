import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Copy, Check, Building2, ArrowUpRight } from 'lucide-react';

const GoogleMapsLogo = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 92.3 132.3" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/>
    <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/>
    <path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/>
    <path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/>
    <path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/>
  </svg>
);

export default function OurLocation() {
  const [copied, setCopied] = useState(false);
  const mapUrl = "https://maps.google.com/maps?q=22.575106868431217,88.34919330000001&hl=en&z=15&output=embed";
  const directionsUrl = "https://goo.gl/maps/4mq2HZ4f5QfMC6ug8";
  const addressText = "Lakhanpur Industrial Area, Tentulkuli(N) Domjur, Howrah-711409, West Bengal (India)";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="location" 
      className="relative w-full bg-[#faf7f2] text-stone-900 py-12 sm:py-16 lg:py-20 overflow-hidden font-sans border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER (OPPENHEIM STYLE) */}
        <div className="mb-8 sm:mb-10 space-y-3">
          <div className="flex items-end mb-2">
            <div className="relative inline-flex items-end">
              <div className="absolute right-full bottom-0 w-[100vw] h-[1.5px] bg-stone-300 pointer-events-none" />
              
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[1.5px] border-stone-300 leading-tight whitespace-nowrap select-none pr-2">
                OUR
              </span>
              <span className="inline-block text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-stone-800 pb-1.5 border-b-[3px] sm:border-b-[3.5px] border-[#ed4d0d] leading-tight whitespace-nowrap select-none pl-1">
                LOCATIO<span className="tracking-normal [letter-spacing:0]">N</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight uppercase leading-[1.2] max-w-5xl">
            <span className="font-extralight text-stone-900">MANUFACTURING &amp; </span>
            <span className="font-black text-[#ed4d0d]">SUPPLY HUB</span>
          </h2>
        </div>

        {/* MAIN INTERACTIVE CARD & MAP CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: FACILITY & ADDRESS CARD */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#ed4d0d]" />
                <span>Primary Production Plant</span>
              </div>

              {/* Facility Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                AB Polypacks Pvt. Ltd.
              </h3>

              {/* Address Link */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block">
                  Registered Plant Address
                </span>
                <a 
                  href={directionsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start text-stone-800 hover:text-[#ed4d0d] transition-colors duration-200 text-base sm:text-lg font-medium leading-relaxed"
                >
                  <GoogleMapsLogo className="w-5 h-5 mr-2 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <span>{addressText}</span>
                </a>
              </div>

              {/* Coordinates & Logistics Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                    GPS Coordinates
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-800 font-mono">
                    22.5751° N, 88.3492° E
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                    Connectivity
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">
                    NH 16 / Port Corridor
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a 
                href={directionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-[#ed4d0d] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#d63f06] transition-all duration-200 shadow-md shadow-[#ed4d0d]/20 hover:shadow-lg hover:shadow-[#ed4d0d]/30"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-stone-100 text-stone-700 font-semibold text-sm hover:bg-stone-200 transition-colors duration-200 border border-stone-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE MAP WITH STYLISH OVERLAY */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-white shadow-md border border-stone-200/90 group">
            
            {/* Embedded Google Map */}
            <iframe
              title="AB Polypacks Location"
              src={mapUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Quick Action Pill on Top of Map */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-stone-800 text-xs font-bold uppercase tracking-wider shadow-md border border-stone-200 hover:text-[#ed4d0d] hover:border-[#ed4d0d]/40 transition-all duration-200"
              >
                <GoogleMapsLogo className="w-4 h-4 shrink-0" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
