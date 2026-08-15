/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Theme, Project } from '../types';
import { PROJECTS } from '../data';
import { X, ExternalLink, Sparkles, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  theme: Theme;
}

export default function Portfolio({ theme }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Applications', 'E-Commerce', 'SaaS Platforms', 'Fintech', 'Real Estate'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <div className={`relative min-h-screen w-full pt-32 pb-24 bg-transparent ${
      theme === 'light' ? 'text-black' : 'text-white'
    }`}>
      {/* Grid overlay & ambient glow blur circles */}
      <div className={`absolute inset-0 opacity-[0.4] pointer-events-none ${
        theme === 'light' ? 'grid-bg-light' : 'grid-bg-dark'
      }`} />
      
      <div className="absolute top-20 right-10 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20 space-y-6"
        >
          <span className={`text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full border inline-block ${
            theme === 'light'
              ? 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
              : 'border-white/5 bg-white/5 text-violet-400'
          }`}>
            Visual Archive
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight leading-none">
            Selected Lab Works &<br />Client Deliveries.
          </h1>
          <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${
            theme === 'light' ? 'text-neutral-600' : 'text-white/60'
          }`}>
            An elite showcase of custom codebases, high-performing schemas, and gorgeous graphic designs built for actual businesses.
          </p>
        </motion.div>

        {/* Category Filters with sliding pill motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  isSelected
                    ? theme === 'light'
                      ? 'text-white font-semibold'
                      : 'text-black font-semibold'
                    : theme === 'light'
                      ? 'text-neutral-700 hover:text-black bg-white border border-neutral-200 shadow-sm'
                      : 'text-white/60 hover:text-white bg-white/[0.03] border border-white/5'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="portfolioFilterPill"
                    className={`absolute inset-0 rounded-full shadow-md ${
                      theme === 'light' ? 'bg-neutral-950' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid with Hover-Zoom & whileInView staggered reveal */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-500 group cursor-pointer ${
                  theme === 'light'
                    ? 'bg-white border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-neutral-300'
                    : 'bg-[#0a0a0f] border-white/5 hover:border-violet-500/20 hover:shadow-2xl hover:shadow-violet-500/5'
                }`}
              >
              {/* Image Container with zoom hover effect */}
              <div className="relative aspect-video overflow-hidden w-full bg-neutral-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                {/* Elegant overlay appearing on hover */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-violet-300">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl font-normal">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Text Context Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${
                      theme === 'light' ? 'text-neutral-500 font-semibold' : 'text-white/40'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl tracking-tight mb-3 transition-colors ${
                    theme === 'light' ? 'text-neutral-950 group-hover:text-violet-600' : 'text-white group-hover:text-violet-400'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-3 mb-6 ${
                    theme === 'light' ? 'text-neutral-600' : 'text-white/60'
                  }`}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                          theme === 'light'
                            ? 'border-neutral-200 bg-neutral-100 text-neutral-800 font-medium'
                            : 'border-white/5 bg-white/5 text-violet-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study trigger link */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`text-xs font-mono font-medium flex items-center space-x-2 transition-all cursor-pointer ${
                      theme === 'light' ? 'text-neutral-950 hover:text-violet-600 font-semibold' : 'text-violet-400 hover:text-violet-300'
                    }`}
                  >
                    <BookOpen size={13} />
                    <span>View Full Case Study</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* --- CASE STUDY DETAIL MODAL --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Case Study Content Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 ${
                  theme === 'light'
                    ? 'bg-white border-black/10 text-black'
                    : 'bg-[#0c0c12] border-white/10 text-white'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-6 right-6 p-2 rounded-full border transition-all cursor-pointer ${
                    theme === 'light'
                      ? 'border-black/10 text-black hover:bg-black/5'
                      : 'border-white/10 text-white hover:bg-white/5'
                  }`}
                  aria-label="Close Case Study"
                >
                  <X size={16} />
                </button>

                <div className="space-y-8">
                  {/* Top Meta info */}
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-xs font-mono uppercase tracking-widest text-violet-500">
                      {selectedProject.category} Case Study
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-none">
                      {selectedProject.title}
                    </h2>
                  </div>

                  {/* Thumbnail Banner */}
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 border border-current/10">
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Detail Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-current/10">
                    
                    {/* Tech & Overview column */}
                    <div className="md:col-span-4 space-y-6">
                      <div>
                        <h4 className="text-xs uppercase font-mono tracking-widest opacity-50 mb-2">
                          Project Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                                theme === 'light'
                                  ? 'border-black/10 bg-black/5 text-[#6f6f6f]'
                                  : 'border-white/5 bg-white/5 text-violet-300'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase font-mono tracking-widest opacity-50 mb-2">
                          Primary Focus
                        </h4>
                        <p className="text-sm leading-relaxed opacity-85">
                          Custom UX/UI architecture, database optimization, instant transaction times.
                        </p>
                      </div>
                    </div>

                    {/* Problem/Solution content column */}
                    <div className="md:col-span-8 space-y-6">
                      
                      {/* Problem Statement */}
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase font-mono tracking-widest opacity-50 flex items-center space-x-2">
                          <Layers size={12} />
                          <span>The Challenge</span>
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          theme === 'light' ? 'text-neutral-700' : 'text-white/80'
                        }`}>
                          {selectedProject.caseStudy.problem}
                        </p>
                      </div>

                      {/* Solution Implemented */}
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase font-mono tracking-widest opacity-50 flex items-center space-x-2">
                          <Sparkles size={12} className="text-violet-400" />
                          <span>Handcrafted Solution</span>
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          theme === 'light' ? 'text-neutral-700' : 'text-white/80'
                        }`}>
                          {selectedProject.caseStudy.solution}
                        </p>
                      </div>

                      {/* Measurable Business Impact */}
                      <div className={`p-6 rounded-2xl border ${
                        theme === 'light' ? 'bg-neutral-50 border-black/5' : 'bg-white/5 border-white/5'
                      }`}>
                        <h4 className="text-xs uppercase font-mono tracking-widest opacity-50 flex items-center space-x-2 mb-2">
                          <ExternalLink size={12} className="text-emerald-500" />
                          <span>Business Impact</span>
                        </h4>
                        <p className={`text-base font-medium ${
                          theme === 'light' ? 'text-black' : 'text-emerald-400'
                        }`}>
                          {selectedProject.caseStudy.impact}
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
