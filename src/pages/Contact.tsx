/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ContactForm from '../components/ContactForm';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

export default function Contact({ theme }: ContactProps) {
  return (
    <div className={`relative min-h-screen w-full pt-32 pb-24 bg-transparent ${
      theme === 'light' ? 'text-black' : 'text-white'
    }`}>
      {/* Grid background & decorative vector glows */}
      <div className={`absolute inset-0 opacity-[0.4] pointer-events-none ${
        theme === 'light' ? 'grid-bg-light' : 'grid-bg-dark'
      }`} />

      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-16 space-y-6">
          <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
            theme === 'light'
              ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
              : 'border-white/5 bg-white/5 text-violet-400'
          }`}>
            Project Intake
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight leading-none">
            Let's Shape Your Next<br />Digital Monument.
          </h1>
          <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${
            theme === 'light' ? 'text-[#6F6F6F]' : 'text-white/60'
          }`}>
            Submit your goals below. Our core engineering team will construct a comprehensive diagnostic proposal and schedule a direct video consultation with you.
          </p>
        </div>

        {/* Cohesive form layout wrapper */}
        <ContactForm theme={theme} />

      </div>
    </div>
  );
}
