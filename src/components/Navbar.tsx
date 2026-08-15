/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Theme } from '../types';
import { motion, AnimatePresence } from 'motion/react';

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
    <motion.header
      id="main-header"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? theme === 'light'
            ? 'bg-white/85 border-b border-black/5 shadow-sm backdrop-blur-xl'
            : 'bg-[#07070a]/85 border-b border-white/5 shadow-2xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo styling */}
        <motion.button
          onClick={() => handleNavClick('home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`font-serif text-2xl sm:text-3xl tracking-tight transition-all flex items-center cursor-pointer group ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          <span className="relative">
            Nexward Tech
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
          </span>
          <sup className="text-sm font-sans font-medium tracking-normal ml-0.5 opacity-70">®</sup>
        </motion.button>

        {/* Desktop Menu Items with Floating Pill Motion */}
        <nav className={`hidden md:flex items-center space-x-1 p-1 rounded-full border backdrop-blur-md ${
          theme === 'light' 
            ? 'border-neutral-200/80 bg-neutral-100/80' 
            : 'border-white/5 bg-white/[0.02]'
        }`}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-wider font-mono font-medium px-4 py-2 rounded-full transition-colors cursor-pointer relative ${
                  isActive
                    ? theme === 'light'
                      ? 'text-neutral-950 font-semibold'
                      : 'text-white font-semibold'
                    : theme === 'light'
                      ? 'text-neutral-600 hover:text-neutral-950'
                      : 'text-white/60 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className={`absolute inset-0 rounded-full ${
                      theme === 'light'
                        ? 'bg-white shadow-sm border border-neutral-200/80'
                        : 'bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/15'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right side CTA + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button with Rotate Animation */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.08, rotate: 15 }}
            whileTap={{ scale: 0.92, rotate: -30 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle visual theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button with Magnetic Pulse */}
          <motion.button
            onClick={() => handleNavClick('contact')}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className={`relative group overflow-hidden rounded-full px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
              theme === 'light'
                ? 'bg-black text-white hover:shadow-lg hover:shadow-black/10'
                : 'bg-white text-black hover:shadow-lg hover:shadow-violet-500/20'
            }`}
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <span>Begin Journey</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
          </motion.button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-3">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full border ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </motion.button>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full border ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer with Staggered Kinetic Reveal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden fixed top-[69px] inset-x-0 bottom-0 z-40 border-t overflow-y-auto ${
              theme === 'light'
                ? 'bg-white/95 border-black/10 text-black'
                : 'bg-[#07070a]/95 border-white/5 text-white'
            } backdrop-blur-2xl`}
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.3 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-serif text-left py-2 border-b border-current/10 flex items-center justify-between ${
                    activeTab === item.id ? 'opacity-100 font-semibold text-violet-400' : 'opacity-70'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <Sparkles size={16} />}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={() => handleNavClick('contact')}
                className={`w-full text-center rounded-full py-4 text-sm font-mono uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-lg ${
                  theme === 'light'
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }`}
              >
                <span>Begin Journey</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

