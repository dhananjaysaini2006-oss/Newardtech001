/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Theme } from '../types';
import React, { FormEvent } from 'react';

interface FooterProps {
  theme: Theme;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ theme, setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Nexward Tech's digital dispatch!");
  };

  return (
    <footer className={`relative border-t overflow-hidden ${
      theme === 'light'
        ? 'bg-neutral-50 border-black/5 text-neutral-900'
        : 'bg-[#050508] border-white/5 text-white'
    }`}>
      {/* Decorative Grid overlay & Glow blob */}
      <div className={`absolute inset-0 opacity-[0.4] pointer-events-none ${
        theme === 'light' ? 'grid-bg-light' : 'grid-bg-dark'
      }`} />
      
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left font-serif text-3xl tracking-tight hover:opacity-80 transition-all flex items-center cursor-pointer"
            >
              Nexward Tech<sup className="text-sm font-sans font-medium">®</sup>
            </button>
            <p className={`text-sm leading-relaxed max-w-xs ${
              theme === 'light' ? 'text-neutral-600' : 'text-white/60'
            }`}>
              Bespoke digital architecture, flawless performance metrics, and premium user experience engineering for progressive brands.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:nexwardtech01@gmail.com"
                className={`p-2.5 rounded-full border transition-all ${
                  theme === 'light'
                    ? 'border-black/5 bg-white hover:bg-black/5 text-black'
                    : 'border-white/5 bg-[#0f0f15] hover:bg-white/5 text-white/70 hover:text-white'
                }`}
                aria-label="Email Studio"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold opacity-50">Studio Pages</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home Experience', id: 'home' },
                { label: 'Services Suite', id: 'services' },
                { label: 'Creative Journal', id: 'portfolio' },
                { label: 'Founder Story', id: 'about' },
                { label: 'Reach Us Today', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm transition-colors text-left flex items-center group cursor-pointer ${
                      theme === 'light' ? 'text-neutral-600 hover:text-black' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold opacity-50">Local Office</h4>
            <div className={`space-y-3 text-sm ${
              theme === 'light' ? 'text-neutral-600' : 'text-white/60'
            }`}>
              <p>Karnal, Haryana<br />India — 132001</p>
              <p className="font-mono text-xs">nexwardtech01@gmail.com</p>
              <p className="font-mono text-xs">+91 79882 42622</p>
            </div>
          </div>

          {/* Newsletter Signup (Optional, but adds massive luxury detail) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold opacity-50">Digital Dispatch</h4>
            <p className={`text-xs leading-relaxed ${
              theme === 'light' ? 'text-neutral-500' : 'text-white/40'
            }`}>
              Join our exclusive list of startup founders and design leaders to receive periodic updates on performance strategies, layout architectures, and web trends.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
              <input
                type="email"
                placeholder="Secure email address"
                required
                className={`w-full px-4 py-3 rounded-full text-xs outline-none border transition-all ${
                  theme === 'light'
                    ? 'bg-white border-black/10 focus:border-black text-black'
                    : 'bg-[#0a0a0f] border-white/10 focus:border-white focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] text-white'
                }`}
              />
              <button
                type="submit"
                className={`absolute right-1.5 top-1.5 p-1.5 rounded-full transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'bg-black text-white hover:opacity-90'
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
                aria-label="Subscribe"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-xs space-y-4 sm:space-y-0 ${
          theme === 'light' ? 'border-black/5 text-neutral-500' : 'border-white/5 text-white/30'
        }`}>
          <div>
            <p>© {currentYear} Nexward Tech®. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:underline">Privacy Charter</a>
            <a href="#home" className="hover:underline">Terms of Craft</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
