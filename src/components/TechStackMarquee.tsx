/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from '../types';

interface TechStackMarqueeProps {
  theme: Theme;
}

export default function TechStackMarquee({ theme }: TechStackMarqueeProps) {
  // Define our core tech stack items
  const techItems = [
    { name: 'Next.js', desc: 'React Framework' },
    { name: 'React', desc: 'Frontend Library' },
    { name: 'Tailwind CSS', desc: 'Utility Styling' },
    { name: 'PostgreSQL', desc: 'Relational Database' },
    { name: 'Node.js', desc: 'JS Runtime' },
    { name: 'Prisma ORM', desc: 'Database Client' },
    { name: 'TypeScript', desc: 'Type Safety' },
    { name: 'Framer Motion', desc: 'Smooth Animations' },
  ];

  // We duplicate items to create a seamless endless loop
  const duplicatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className={`w-full py-10 border-y overflow-hidden select-none relative ${
      theme === 'light'
        ? 'border-black/5 bg-gray-50/50'
        : 'border-white/5 bg-[#0a0a0f]/50'
    }`}>
      {/* Decorative gradient masks over sides of marquee */}
      <div className={`absolute top-0 bottom-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r ${
        theme === 'light' ? 'from-white to-transparent' : 'from-[#07070a] to-transparent'
      }`} />
      <div className={`absolute top-0 bottom-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l ${
        theme === 'light' ? 'from-white to-transparent' : 'from-[#07070a] to-transparent'
      }`} />

      {/* Marquee Container */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex space-x-12 animate-marquee pr-12 shrink-0">
          {duplicatedItems.map((tech, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                theme === 'light'
                  ? 'border-black/5 bg-white shadow-sm'
                  : 'border-white/5 bg-[#12121a] shadow-[0_4px_20px_0_rgba(0,0,0,0.2)]'
              }`}
            >
              {/* Decorative Colored Dot */}
              <span className={`w-2.5 h-2.5 rounded-full ${
                idx % 4 === 0 
                  ? 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]' 
                  : idx % 4 === 1 
                  ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' 
                  : idx % 4 === 2 
                  ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' 
                  : 'bg-indigo-500 shadow-[0_0_8px_#6366f1]'
              }`} />
              
              <div className="flex flex-col text-left">
                <span className={`text-base font-semibold tracking-tight ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}>
                  {tech.name}
                </span>
                <span className={`text-[10px] font-mono leading-none ${
                  theme === 'light' ? 'text-[#6f6f6f]' : 'text-white/40'
                }`}>
                  {tech.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
