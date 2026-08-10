/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Theme } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import CinematicVideo from './components/CinematicVideo';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Initialize theme: dark mode first as requested
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Monitor location hash to support browser back/forward and shareable links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      } else {
        // default to home
        setActiveTab('home');
        window.location.hash = 'home';
      }
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update HTML class attribute to handle global dark mode triggers if needed
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Render correct page view
  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home theme={theme} setActiveTab={setActiveTab} />;
      case 'services':
        return <Services theme={theme} setActiveTab={setActiveTab} />;
      case 'portfolio':
        return <Portfolio theme={theme} />;
      case 'about':
        return <About theme={theme} />;
      case 'contact':
        return <Contact theme={theme} />;
      default:
        return <Home theme={theme} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-500 overflow-x-hidden select-none relative ${
      theme === 'light' ? 'bg-[#ffffff] text-black' : 'bg-[#07070a] text-white'
    }`}>
      {/* Global Cinematic Background Video */}
      <CinematicVideo theme={theme} />

      {/* Sticky Premium Navbar */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area with elegant animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Footer */}
      <Footer theme={theme} setActiveTab={setActiveTab} />
    </div>
  );
}
