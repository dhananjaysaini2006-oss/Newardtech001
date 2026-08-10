/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Theme } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  theme: Theme;
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border ${
          theme === 'light'
            ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
            : 'border-white/5 bg-white/5 text-violet-400'
        }`}>
          Endorsements
        </span>
        <h2 className={`font-serif text-4xl sm:text-5xl mt-6 tracking-tight ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}>
          Trusted by Industry Leaders
        </h2>
        <p className={`mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed ${
          theme === 'light' ? 'text-[#6F6F6F]' : 'text-white/60'
        }`}>
          Read reviews from some of our highly satisfied partners who built their digital platforms with us.
        </p>

        {/* Carousel Container */}
        <div className="mt-16 relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`w-full p-8 sm:p-12 rounded-3xl border text-left relative ${
                theme === 'light'
                  ? 'glass-panel-light'
                  : 'glass-panel-dark'
              }`}
            >
              {/* Quote Mark Decoration */}
              <Quote size={64} className={`absolute top-6 right-8 opacity-[0.06] ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`} />

              <div className="flex flex-col space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className={`text-lg sm:text-xl font-normal leading-relaxed italic ${
                  theme === 'light' ? 'text-neutral-800' : 'text-white/90'
                }`}>
                  "{current.content}"
                </blockquote>

                {/* Profile Details */}
                <div className="flex items-center space-x-4 pt-4 border-t border-current/10">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/30"
                  />
                  <div>
                    <h4 className={`text-base font-semibold ${
                      theme === 'light' ? 'text-black' : 'text-white'
                    }`}>
                      {current.name}
                    </h4>
                    <p className={`text-xs ${
                      theme === 'light' ? 'text-[#6F6F6F]' : 'text-white/50'
                    }`}>
                      {current.role}, <span className="font-semibold">{current.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <button
            onClick={prevSlide}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <span className="text-xs font-mono opacity-50 select-none">
            {currentIndex + 1} / {TESTIMONIALS.length}
          </span>

          <button
            onClick={nextSlide}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              theme === 'light'
                ? 'border-black/10 text-black hover:bg-black/5'
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
