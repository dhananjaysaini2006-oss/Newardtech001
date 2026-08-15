/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, ShoppingBag, Palette, Shield, Cpu, Zap, ArrowRight, Check } from 'lucide-react';
import { Theme } from '../types';
import { SERVICES } from '../data';
import { motion } from 'motion/react';

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-24 space-y-6"
        >
          <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
            theme === 'light'
              ? 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
              : 'border-white/5 bg-white/5 text-violet-400'
          }`}>
            Capabilities Suite
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight leading-none">
            Bespoke Solutions,<br />Built Without Bloat.
          </h1>
          <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${
            theme === 'light' ? 'text-neutral-600' : 'text-white/60'
          }`}>
            We believe your website should be as refined as your product. Explore our complete scope of services, detailed with precise core deliverables.
          </p>
        </motion.div>

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
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                      theme === 'light'
                        ? 'border-neutral-200 bg-white text-neutral-900 shadow-sm'
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
                        theme === 'light' ? 'border-neutral-900 text-neutral-900 font-semibold' : 'border-violet-400 text-violet-400'
                      }`}
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>

                {/* Deliverables/Graphic Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div 
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className={`p-8 sm:p-10 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${
                      theme === 'light'
                        ? 'bg-white border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-neutral-300'
                        : 'bg-[#0b0b11] border-white/5 shadow-2xl hover:border-violet-500/20 hover:shadow-violet-500/5'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/0 group-hover:bg-violet-500/5 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

                    <h3 className="text-xs uppercase font-mono tracking-widest opacity-50 mb-6 flex items-center justify-between">
                      <span>Key Service Deliverables</span>
                      <span className="text-[10px] text-violet-500 font-mono font-medium">Bespoke SLA</span>
                    </h3>

                    <ul className="space-y-4">
                      {service.deliverables.map((deliv, dIdx) => (
                        <motion.li 
                          key={dIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: dIdx * 0.08, duration: 0.4 }}
                          className="flex items-start space-x-3 group/item"
                        >
                          <motion.span 
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className={`p-1 rounded-full mt-0.5 flex-shrink-0 transition-colors ${
                              theme === 'light'
                                ? 'bg-neutral-100 text-neutral-900 border border-neutral-200 group-hover/item:bg-neutral-900 group-hover/item:text-white'
                                : 'bg-violet-500/15 text-violet-400 group-hover/item:bg-violet-500 group-hover/item:text-white'
                            }`}
                          >
                            <Check size={12} />
                          </motion.span>
                          <span className={`text-sm ${
                            theme === 'light' ? 'text-neutral-800' : 'text-white/85'
                          }`}>
                            {deliv}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
