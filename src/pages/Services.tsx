/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, ShoppingBag, Palette, Shield, Cpu, Zap, ArrowRight, Check } from 'lucide-react';
import { Theme } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  theme: Theme;
  setActiveTab: (tab: string) => void;
}

export default function Services({ theme, setActiveTab }: ServicesProps) {
  
  // Icon mapper helper
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} />;
      case 'ShoppingBag': return <ShoppingBag className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Zap': return <Zap className={className} />;
      default: return <Globe className={className} />;
    }
  };

  return (
    <div className={`relative min-h-screen w-full pt-32 pb-24 bg-transparent ${
      theme === 'light' ? 'text-black' : 'text-white'
    }`}>
      {/* Decorative Grid & glowing background objects */}
      <div className={`absolute inset-0 opacity-[0.4] pointer-events-none ${
        theme === 'light' ? 'grid-bg-light' : 'grid-bg-dark'
      }`} />
      
      {/* Ambient background glows */}
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Title Section */}
        <div className="max-w-3xl mb-24 space-y-6">
          <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
            theme === 'light'
              ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
              : 'border-white/5 bg-white/5 text-violet-400'
          }`}>
            Capabilities Suite
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight leading-none">
            Bespoke Solutions,<br />Built Without Bloat.
          </h1>
          <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${
            theme === 'light' ? 'text-[#6F6F6F]' : 'text-white/60'
          }`}>
            We believe your website should be as refined as your product. Explore our complete scope of services, detailed with precise core deliverables.
          </p>
        </div>

        {/* Alternating Services Layout */}
        <div className="space-y-32">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                      theme === 'light'
                        ? 'border-black/5 bg-black/5 text-black'
                        : 'border-white/5 bg-white/5 text-violet-400'
                    }`}>
                      {renderIcon(service.iconName, 'w-6 h-6')}
                    </div>
                    <span className="font-mono text-sm opacity-40">0{idx + 1} / 0{SERVICES.length}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-tight">
                    {service.title}
                  </h2>

                  <p className={`text-base sm:text-lg leading-relaxed ${
                    theme === 'light' ? 'text-neutral-700' : 'text-white/70'
                  }`}>
                    {service.longDescription}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setActiveTab('contact');
                        window.location.hash = 'contact';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-sm font-mono font-medium flex items-center space-x-2 border-b pb-1 cursor-pointer hover:opacity-85 ${
                        theme === 'light' ? 'border-black text-black' : 'border-violet-400 text-violet-400'
                      }`}
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Deliverables/Graphic Side */}
                <div className={`lg:col-span-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-500 hover:scale-[1.01] ${
                    theme === 'light'
                      ? 'bg-neutral-50/50 border-black/5 shadow-sm'
                      : 'bg-[#0b0b11] border-white/5 shadow-2xl'
                  }`}>
                    <h3 className="text-xs uppercase font-mono tracking-widest opacity-50 mb-6">
                      Key Service Deliverables
                    </h3>

                    <ul className="space-y-4">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-3">
                          <span className={`p-1 rounded-full mt-0.5 flex-shrink-0 ${
                            theme === 'light'
                              ? 'bg-black/5 text-black'
                              : 'bg-violet-500/15 text-violet-400'
                          }`}>
                            <Check size={12} />
                          </span>
                          <span className={`text-sm ${
                            theme === 'light' ? 'text-neutral-700' : 'text-white/85'
                          }`}>
                            {deliv}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
