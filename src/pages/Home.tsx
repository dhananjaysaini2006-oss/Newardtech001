/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, ShoppingBag, Palette, Shield, Cpu, Zap, ArrowRight, Terminal } from 'lucide-react';
import { Theme } from '../types';
import { SERVICES, STATS } from '../data';
import TechStackMarquee from '../components/TechStackMarquee';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';

interface HomeProps {
  theme: Theme;
  setActiveTab: (tab: string) => void;
}

export default function Home({ theme, setActiveTab }: HomeProps) {
  
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

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-transparent ${
      theme === 'light' ? 'text-black' : 'text-white'
    }`}>
      
      {/* --- HERO SECTION --- */}
      <section 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        {/* Subtle branding subhead */}
        <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border mb-8 ${
          theme === 'light'
            ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
            : 'border-white/5 bg-white/5 text-violet-400'
        }`}>
          Premium Freelance Web Development Studio
        </span>

        {/* Headline: "Beyond silence, we build the eternal." */}
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-serif font-normal leading-[0.95] tracking-[-2.46px] animate-fade-rise"
          style={{ letterSpacing: '-2.46px' }}
        >
          Beyond{' '}
          <span className="italic font-normal text-[#6F6F6F]">
            silence,
          </span>{' '}
          we build{' '}
          <span className="italic font-normal text-[#6F6F6F]">
            the eternal.
          </span>
        </h1>

        {/* Headline Sub-headline (Combination of both requirements) */}
        <p className={`text-lg sm:text-2xl font-serif max-w-4xl mt-6 tracking-tight animate-fade-rise-delay ${
          theme === 'light' ? 'text-black/80' : 'text-white/80'
        }`}>
          We Build Digital Experiences That Move Businesses Forward
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-12 animate-fade-rise-delay-2">
          <button
            onClick={() => handleNavClick('contact')}
            className={`rounded-full px-14 py-5 text-base font-semibold tracking-wide shadow-xl transition-all duration-300 hover:scale-103 cursor-pointer ${
              theme === 'light'
                ? 'bg-black text-white hover:shadow-black/15'
                : 'bg-white text-black hover:bg-neutral-100 hover:shadow-violet-500/10'
            }`}
          >
            Start Your Project
          </button>
          
          <button
            onClick={() => handleNavClick('portfolio')}
            className={`rounded-full px-14 py-5 text-base font-semibold tracking-wide border transition-all duration-300 hover:scale-103 cursor-pointer ${
              theme === 'light'
                ? 'border-black/15 bg-transparent hover:bg-black/5 text-black'
                : 'border-white/10 bg-transparent hover:bg-white/5 text-white'
            }`}
          >
            View Our Work
          </button>
        </div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <section className="relative z-10 w-full">
        <TechStackMarquee theme={theme} />
      </section>

      {/* --- SERVICES PREVIEW SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border ${
            theme === 'light'
              ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
              : 'border-white/5 bg-white/5 text-violet-400'
          }`}>
            Our Core Expertise
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-6 tracking-tight">
            Handcrafted Digital Services
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            theme === 'light' ? 'text-[#6F6F6F]' : 'text-white/60'
          }`}>
            We deliver tailored solutions designed to scale, avoiding clumsy templates or rigid page-builders.
          </p>
        </div>

        {/* 4 Glassmorphism Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-500 group relative overflow-hidden ${
                theme === 'light'
                  ? 'glass-panel-light hover:shadow-xl hover:shadow-black/5'
                  : 'glass-panel-dark hover:shadow-2xl hover:shadow-violet-500/5 hover:border-violet-500/20'
              }`}
            >
              {/* Subtle hover background glow */}
              <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-violet-600/0 group-hover:bg-violet-600/10 blur-3xl transition-colors duration-500 pointer-events-none" />

              <div>
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 mb-6 group-hover:scale-110 ${
                  theme === 'light'
                    ? 'border-black/5 bg-black/5 text-black'
                    : 'border-white/5 bg-white/5 text-violet-400 group-hover:border-violet-500/30'
                }`}>
                  {renderIcon(service.iconName, 'w-6 h-6')}
                </div>

                <h3 className="font-serif text-2xl tracking-tight mb-3">
                  {service.title}
                </h3>
                
                <p className={`text-xs leading-relaxed mb-6 ${
                  theme === 'light' ? 'text-neutral-600' : 'text-white/60'
                }`}>
                  {service.description}
                </p>
              </div>

              <button
                onClick={() => handleNavClick('services')}
                className={`text-xs font-mono font-medium flex items-center space-x-2 transition-all cursor-pointer ${
                  theme === 'light' ? 'text-black hover:opacity-80' : 'text-violet-400 hover:text-violet-300'
                }`}
              >
                <span>Read Full Scope</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => handleNavClick('services')}
            className={`text-sm font-mono font-medium inline-flex items-center space-x-2 border-b pb-1 cursor-pointer hover:opacity-80 ${
              theme === 'light' ? 'border-black text-black' : 'border-violet-400 text-violet-400'
            }`}
          >
            <span>Explore All 6 Custom Service Capabilities</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* --- WHY NEXWARD TECH SECTION (Stats style) --- */}
      <section className={`relative border-y py-32 overflow-hidden ${
        theme === 'light' ? 'bg-neutral-50/50 border-black/5' : 'bg-[#09090f]/50 border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border ${
                theme === 'light'
                  ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
                  : 'border-white/5 bg-white/5 text-violet-400'
              }`}>
                Core Commitments
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-none">
                Bespoke Quality,<br />Absolute Transparency
              </h2>
              <p className={`text-sm leading-relaxed ${
                theme === 'light' ? 'text-[#6F6F6F]' : 'text-white/60'
              }`}>
                Unlike factories that pump out template-built sites, we code everything handmade. This ensures perfect optimization, total structural control, and layout interfaces customized specifically for your demographic.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => handleNavClick('about')}
                  className={`rounded-full px-8 py-3.5 text-xs font-semibold tracking-wide border cursor-pointer transition-all hover:scale-103 ${
                    theme === 'light'
                      ? 'border-black/15 bg-white text-black hover:bg-black/5'
                      : 'border-white/10 bg-[#0f0f15] text-white hover:bg-white/5'
                  }`}
                >
                  Meet the Founder & Read Story
                </button>
              </div>
            </div>

            {/* Value props in 4-point grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border transition-all hover:translate-y-[-4px] duration-300 ${
                    theme === 'light'
                      ? 'bg-white border-black/5 shadow-sm'
                      : 'bg-[#101018] border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
                  }`}
                >
                  <span className={`block font-serif text-5xl sm:text-6xl font-medium tracking-tight mb-2 ${
                    theme === 'light' ? 'text-black' : 'text-violet-400'
                  }`}>
                    {stat.value}
                  </span>
                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {stat.label}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'light' ? 'text-neutral-500' : 'text-white/50'
                  }`}>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <Testimonials theme={theme} />

      {/* --- FINAL CTA SECTION --- */}
      <section className="relative py-32 px-6">
        <div className={`max-w-6xl mx-auto rounded-3xl border p-12 sm:p-20 text-center relative overflow-hidden ${
          theme === 'light'
            ? 'bg-neutral-900 text-white border-none shadow-2xl'
            : 'bg-gradient-to-br from-[#12121a] to-[#0c0c12] border-white/5 shadow-[0_10px_50px_rgba(139,92,246,0.1)]'
        }`}>
          {/* Neon background orbs for visual interest */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 text-violet-300">
              Project Onboarding Open
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight tracking-tight">
              Ready to sculpt your premium web experience?
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              We collaborate with a maximum of three clients concurrently to maintain absolute engineering excellence. Reserve your development cycle now.
            </p>
            <div className="pt-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="rounded-full bg-white text-black px-12 py-5 text-base font-semibold transition-all duration-300 hover:scale-103 cursor-pointer hover:shadow-xl hover:shadow-white/10"
              >
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
