import React from 'react';
import { 
  Globe, 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  Mail 
} from 'lucide-react';

export default function CompanyOverviewPage() {
  const socialIcons = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Contact Email', href: 'mailto:info@abpolypacks.com' }
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black font-sans">
      
      {/* 1. FULL-BLEED BACKGROUND MEDIA LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/company_overview_hero.jpg" 
          alt="AB Polypacks Factory Floor" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overall dark tint (15%) + Bottom black gradient fade for readability */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-10" />
      </div>

      {/* 2. LEFT SIDE: VERTICAL SOCIAL / CONTACT ICONS (HERO STYLE) */}
      <div className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center space-y-4">
        {socialIcons.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              title={item.label}
              className="p-1.5 text-white/70 hover:text-[#ed4d0d] hover:scale-110 transition-all duration-200"
              aria-label={item.label}
            >
              <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
            </a>
          );
        })}
      </div>

      {/* 3. CENTER BOTTOM CONTENT AND BADGE (HERO STYLE - COMPACTED HEIGHT - CENTERED AT BOTTOM) */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-10 pointer-events-none">
        <div className="max-w-5xl w-full px-4 space-y-1.5 text-center pointer-events-auto flex flex-col items-center justify-center">
          
          {/* Slide Indicator Badge */}
          <div className="flex items-center space-x-3 text-xs font-semibold text-white/80 tracking-widest uppercase mb-0.5">
            <span>OUR STORY</span>
            <span className="w-8 h-[1.5px] bg-white/40"></span>
            <span className="text-[#ed4d0d] font-bold text-sm">OVERVIEW</span>
          </div>

          {/* Headline */}
          <h1 className="text-xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight uppercase drop-shadow-md text-center leading-tight">
            FROM THE FACTORY FLOOR TO THE FINAL HAND.
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-sm text-center">
            One integrated journey. Fewer compromises. Better control. <span className="text-[#ed4d0d] font-semibold">AB Polypacks</span> — From Film to Finish.
          </p>

        </div>
      </div>

    </div>
  );
}
