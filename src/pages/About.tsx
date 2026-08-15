/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FOUNDER_INFO } from '../data';
import { Theme } from '../types';
import { 
  Compass, 
  Cpu, 
  Code2, 
  Trophy, 
  CheckCircle2, 
  Activity, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  Sparkles,
  Server,
  Zap,
  Smartphone
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutProps {
  theme: Theme;
}

export default function About({ theme }: AboutProps) {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [selectedCoreSkill, setSelectedCoreSkill] = useState<string | null>(null);

  const PHASES = [
    {
      step: "01",
      title: "Technical Discovery & Blueprinting",
      tagline: "Preventing upstream defects via deep analysis",
      description: "Before writing a single line of code, we construct comprehensive architectural plans. We map data relationships, detail API contracts, design complete user journeys, and establish performance constraints."
    },
    {
      step: "02",
      title: "Cleanroom Custom Engineering",
      tagline: "Statically typed, secure, high-performance execution",
      description: "Using pristine TypeScript, React, and server-side optimizations, we translate design concepts into solid code. We completely reject heavy visual page-builders to guarantee perfect long-term maintainability."
    },
    {
      step: "03",
      title: "Performance & Security Hardening",
      tagline: "Pushing technical metrics to absolute peak levels",
      description: "We optimize all modern image assets, index database tables, configure edge CDN cache routing, and set up secure SSL/security headers to guarantee sub-second interaction times."
    },
    {
      step: "04",
      title: "Sovereign Handover & Support",
      tagline: "Absolute ownership and robust, modern infrastructure",
      description: "We deploy onto highly optimized containerized platforms, run automated security scans, transfer full intellectual property rights, and establish premium support monitoring pipelines."
    }
  ];

  const whyChooseUsPoints = [
    {
      icon: <Code2 className="w-5 h-5 text-violet-400" />,
      title: 'Handcrafted Architecture',
      description: 'Zero visual builders or bloated page-creation software. Every element is structured with clean, efficient, native code.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      title: 'Full-Stack Scalability',
      description: 'From relational PostgreSQL schemas to serverless Edge routing, we design systems built to grow with your traffic.',
    },
    {
      icon: <Compass className="w-5 h-5 text-violet-400" />,
      title: 'Aesthetic Authority',
      description: 'We couple proven usability layouts with luxury, forward-thinking visual systems, custom typography, and balanced spacing.',
    },
    {
      icon: <Trophy className="w-5 h-5 text-violet-400" />,
      title: 'Direct Architect Liaison',
      description: 'No middleman sales reps or account managers. Collaborate directly with our principal engineers and studio leadership.',
    },
  ];

  const coreCapabilities = [
    {
      category: "Frontend Excellence",
      icon: <Sparkles className="w-4 h-4 text-violet-400" />,
      proficiency: 98,
      items: ["Next.js & React 18+", "Tailwind CSS Architecture", "Custom Framer Motion Systems", "Responsive Core Web Vitals"]
    },
    {
      category: "Backend & Databases",
      icon: <Server className="w-4 h-4 text-violet-400" />,
      proficiency: 95,
      items: ["Node.js & Express API Engines", "PostgreSQL & Relational Schemas", "Prisma & Drizzle ORM Setup", "RESTful & WebSocket Protocol"]
    },
    {
      category: "System Performance",
      icon: <Zap className="w-4 h-4 text-violet-400" />,
      proficiency: 99,
      items: ["Cloud Deployment (Docker, GCP)", "Fast Edge CDN & Cache Rules", "Optimized Core Assets & SEO Schema", "Lighthouse Score Remediation"]
    }
  ];

  return (
    <div className={`relative min-h-screen w-full pt-32 pb-24 bg-transparent ${
      theme === 'light' ? 'text-black' : 'text-white'
    }`}>
      {/* Decorative Grid and Ambient Blur background elements */}
      <div className={`absolute inset-0 opacity-[0.4] pointer-events-none ${
        theme === 'light' ? 'grid-bg-light' : 'grid-bg-dark'
      }`} />
      
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 space-y-32">
        
        {/* --- SECTION 1: LUXURY MISSION STATEMENT --- */}
        <section className="text-center max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <span className={`text-xs uppercase font-mono tracking-widest px-4 py-1.5 rounded-full border inline-block ${
              theme === 'light'
                ? 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
                : 'border-white/5 bg-white/5 text-violet-400'
            }`}>
              Our Operational Philosophy
            </span>
            <h1 className={`font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-tight max-w-4xl mx-auto ${
              theme === 'light' ? 'text-neutral-950' : 'text-white'
            }`}>
              "We reject templates to build custom, elite digital havens of custom code."
            </h1>
            <p className={`text-xs sm:text-sm font-mono max-w-xl mx-auto uppercase tracking-widest ${
              theme === 'light' ? 'text-neutral-500' : 'opacity-50'
            }`}>
              NEXWARD TECH Studio Mission — Est. 2026
            </p>
          </motion.div>
        </section>

        {/* --- SECTION 2: STUDIO LEADERSHIP & EXECUTIVE STORY --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Executive Context (Left side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
                theme === 'light'
                  ? 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
                  : 'border-white/5 bg-white/5 text-violet-400'
              }`}>
                Leadership Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight leading-tight">
                Bespoke Architectures, Deployed Globally.
              </h2>
            </div>
            
            <div className={`space-y-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-neutral-700' : 'text-white/70'
            }`}>
              <p>
                Nexward Tech is a highly-specialized freelance engineering studio. We operate on the boundary of extreme technical optimization and bespoke visual arts.
              </p>
              <p>
                We founded Nexward Tech with a clear philosophy: digital experiences should be beautiful, blindingly fast, and completely customized. In an era dominated by rigid templates and slow page builders, we provide handmade digital craft that matches the ambitions of hyper-growth startups and premium small businesses alike. Deploying highly optimized modern systems, we serve an elite roster of global startups and premium brands.
              </p>
              <p>
                Unlike generic full-service marketing agencies that rely on visual drag-and-drop builders, our work is written cleanly from the ground up. This guarantees absolute compliance with security audits, complete ownership of intellectual property, and instantaneous page interaction indices.
              </p>
            </div>
            
            {/* Direct Signature Card */}
            <div className={`p-6 rounded-2xl border flex items-center space-x-4 max-w-sm ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-[#0a0a0f] border-white/5'
            }`}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-violet-500/30 bg-violet-500/10 text-violet-500 font-mono text-sm font-bold">
                NT
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-tight">{FOUNDER_INFO.name}</h4>
                <p className="text-xs opacity-60">{FOUNDER_INFO.role}</p>
                <p className="text-[10px] font-mono text-violet-500 mt-0.5 font-medium">{FOUNDER_INFO.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Core Capability Dashboard (Right side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className={`p-8 rounded-3xl border ${
              theme === 'light' ? 'glass-panel-light' : 'glass-panel-dark'
            }`}>
              <h3 className="text-xs uppercase font-mono tracking-widest opacity-60 mb-6 flex items-center space-x-2">
                <Workflow className="w-4 h-4 text-violet-400" />
                <span>Competency Matrix & Capabilities</span>
              </h3>
              
              <div className="space-y-6">
                {coreCapabilities.map((cap, capIdx) => (
                  <div 
                    key={capIdx}
                    onMouseEnter={() => setSelectedCoreSkill(cap.category)}
                    onMouseLeave={() => setSelectedCoreSkill(null)}
                    className={`p-4 rounded-xl transition-all duration-300 border ${
                      selectedCoreSkill === cap.category
                        ? 'bg-violet-500/5 border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]'
                        : 'border-transparent bg-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {cap.icon}
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">{cap.category}</h4>
                      </div>
                      <span className="text-xs font-mono text-violet-400 font-medium">{cap.proficiency}%</span>
                    </div>

                    {/* Animated progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cap.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: capIdx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center space-x-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 opacity-60 flex-shrink-0" />
                          <span className="opacity-80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-6 pt-4 border-t border-current/10 text-center text-[11px] opacity-40 font-mono`}>
                Enterprise-grade architecture parameters strictly enforced.
              </div>
            </div>
          </motion.div>

        </section>

        {/* --- SECTION 3: SYSTEMATIC METRIC-DRIVEN DEVELOPMENT PROCESS --- */}
        <section className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
              theme === 'light'
                ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
                : 'border-white/5 bg-white/5 text-violet-400'
            }`}>
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight leading-none">
              Rigorous Engineering Lifecycle
            </h2>
            <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'} max-w-md mx-auto`}>
              Every client deployment undergoes our highly standardized four-tier validation and building protocol.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4"
          >
            {/* Interactive selector list (left 5 columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              {PHASES.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`relative p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? theme === 'light'
                          ? 'border-black/15 shadow-sm'
                          : 'border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.08)]'
                        : theme === 'light'
                          ? 'border-transparent bg-transparent hover:bg-neutral-50'
                          : 'border-transparent bg-transparent hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePhaseIndicator"
                        className={`absolute inset-0 rounded-2xl ${
                          theme === 'light' ? 'bg-neutral-100' : 'bg-[#12121a]'
                        }`}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center space-x-4">
                      <span className={`font-mono text-sm ${
                        isActive ? 'text-violet-400 font-bold' : 'opacity-40'
                      }`}>
                        {phase.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold tracking-tight">{phase.title}</h4>
                        <p className="text-[11px] opacity-55 font-mono truncate max-w-[240px]">
                          {phase.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`relative z-10 w-4 h-4 transition-transform duration-300 ${
                      isActive 
                        ? 'translate-x-0 opacity-100 text-violet-400' 
                        : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Display panel (right 7 columns) */}
            <div className="lg:col-span-7">
              <div className={`p-8 sm:p-12 rounded-3xl border h-full flex flex-col justify-between transition-all duration-500 relative overflow-hidden ${
                theme === 'light' ? 'glass-panel-light' : 'glass-panel-dark'
              }`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full flex flex-col justify-between"
                  >
                    {/* Background watermarked step number */}
                    <div className="absolute right-6 top-4 font-serif text-[120px] font-bold opacity-[0.03] select-none pointer-events-none">
                      {PHASES[activePhase].step}
                    </div>

                    <div className="space-y-6">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-mono">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span>Active Workflow Tier</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl sm:text-3xl tracking-tight">
                          {PHASES[activePhase].title}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-violet-400">
                          {PHASES[activePhase].tagline}
                        </p>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        theme === 'light' ? 'text-neutral-600' : 'text-white/60'
                      }`}>
                        {PHASES[activePhase].description}
                      </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-current/5 flex items-center justify-between text-[11px] font-mono opacity-50">
                      <span>Nexward QA Standard v2.6</span>
                      <span className="flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>SLA Verified</span>
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 4: STRATEGIC QUALITY PILLARS (Grid) --- */}
        <section className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
              theme === 'light'
                ? 'border-black/5 bg-black/5 text-[#6f6f6f]'
                : 'border-white/5 bg-white/5 text-violet-400'
            }`}>
              Strategic Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight mt-6 leading-none">
              Engineering Over Marketing.
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUsPoints.map((point, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-8 rounded-3xl border transition-all duration-500 ${
                  theme === 'light'
                    ? 'bg-neutral-50/50 border-black/5 hover:bg-neutral-100/80 hover:shadow-sm'
                    : 'bg-[#0a0a0f]/60 border-white/5 hover:bg-[#12121a]/80 hover:border-violet-500/20'
                }`}
              >
                <div className={`p-2.5 rounded-xl bg-violet-500/10 text-violet-400 inline-block mb-6`}>
                  {point.icon}
                </div>
                <h3 className="text-base font-bold tracking-tight mb-3">{point.title}</h3>
                <p className={`text-xs leading-relaxed ${
                  theme === 'light' ? 'text-neutral-500' : 'text-white/50'
                }`}>{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
}
