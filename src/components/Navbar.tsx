/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ theme, setTheme, activeTab, setActiveTab }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to make navbar slightly more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map menu labels to active tabs
  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Studio', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Journal', id: 'portfolio' },
    { label: 'Reach Us', id: 'contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.location.hash = id;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'light'
            ? 'bg-white/90 border-b border-black/5 shadow-sm backdrop-blur-md'
            : 'bg-[#07070a]/90 border-b border-white/5 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex justify-between items-center">
        {/* Logo styling: text-3xl, tracking-tight, Instrument Serif, color #000000 in light mode */}
        <button
          onClick={() => handleNavClick('home')}
          className={`font-serif text-3xl tracking-tight transition-all hover:opacity-85 flex items-center cursor-pointer ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Nexward Tech<sup className="text-sm font-sans font-medium tracking-normal ml-0.5">®</sup>
        </button>

        {/* Desktop Menu Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            
            // In light mode: Home is black #000000, others are gray #6F6F6F (unless active)
            // In dark mode: Active is bright white, others are gray
            let textClass = '';
            if (theme === 'light') {
              if (isActive) {
                textClass = 'text-black font-semibold';
              } else if (item.id === 'home') {
                textClass = 'text-black font-medium';
              } else {
                textClass = 'text-[#6F6F6F] hover:text-black';
              }
            } else {
              if (isActive) {
                textClass = 'text-white font-semibold';
              } else if (item.id === 'home') {
                textClass = 'text-white/90 font-medium';
              } else {
                textClass = 'text-white/50 hover:text-white';
              }
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors cursor-pointer relative py-1 ${textClass}`}
              >
                {item.label}
                {isActive && (
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] rounded-full ${
                      theme === 'light' ? 'bg-black' : 'bg-violet-400'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side CTA + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all cursor-pointer ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            aria-label="Toggle visual theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-103 cursor-pointer ${
              theme === 'light'
                ? 'bg-[#000000] text-white hover:shadow-lg hover:shadow-black/10'
                : 'bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-violet-500/10'
            }`}
          >
            Begin Journey
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full border ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden fixed top-[75px] inset-x-0 bottom-0 z-40 transition-all duration-300 border-t ${
            theme === 'light'
              ? 'bg-white/95 border-black/10 text-black'
              : 'bg-[#07070a]/95 border-white/5 text-white'
          } backdrop-blur-lg`}
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xl font-serif text-left py-2 border-b border-current/10 ${
                  activeTab === item.id ? 'opacity-100 font-semibold' : 'opacity-60'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-center rounded-full py-4 text-base font-medium flex items-center justify-center space-x-2 ${
                theme === 'light'
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              <span>Begin Journey</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
