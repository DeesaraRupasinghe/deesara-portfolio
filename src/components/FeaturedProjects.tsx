import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Award, Sparkles, ExternalLink, Play, Layers } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenLightbox: (img: string, caption?: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'iot' | 'fullstack'>('all');

  const filterButtons = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'AI & Machine Learning', value: 'ai-ml' as const },
    { label: 'IoT & Hardware Systems', value: 'iot' as const },
    { label: 'Software & Mobile', value: 'fullstack' as const },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filterTag === activeFilter;
  });

  const pawura = projects.find((p) => p.id === 'pawura')!;
  const hivProject = projects.find((p) => p.id === 'hiv-dss')!;
  const beforeBuy = projects.find((p) => p.id === 'before-buy')!;
  const otherProjects = filteredProjects.filter(
    (p) => p.id !== 'pawura' && p.id !== 'hiv-dss' && p.id !== 'before-buy'
  );

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#08090D]">
      
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C6FF5E]/[0.025] rounded-full blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-4">
              Engineering solutions to <span className="text-[#C6FF5E]">real problems.</span>
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Explore highlighted research projects, autonomous AI prototypes, and applied IoT hardware solutions backed by verified recognition and academic evaluations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeFilter === btn.value
                    ? 'bg-[#C6FF5E] text-[#08090D] font-bold shadow-md shadow-[#C6FF5E]/20'
                    : 'bg-[#12141F] text-[#94A3B8] hover:text-white border border-white/[0.08]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP 1: PAWURA (HEROIC ASYMMETRIC CASE STUDY LAYOUT)
           ========================================================================= */}
        {(activeFilter === 'all' || activeFilter === 'ai-ml' || activeFilter === 'iot') && (
          <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#10121A] via-[#12141F] to-[#171A24] border border-white/[0.14] overflow-hidden shadow-2xl relative group">
            
            {/* Top decorative accent strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#C6FF5E] via-[#38BDF8] to-[#A78BFA]" />

            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* Category, Honors and Grade Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C6FF5E]/10 border border-[#C6FF5E]/30 text-xs font-mono font-semibold text-[#C6FF5E]">
                    FLAGSHIP CAPSTONE · UOC
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#171A24] border border-white/10 text-xs font-mono text-[#94A3B8]">
                    {pawura.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6FF5E] text-[#08090D] text-xs font-mono font-bold shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    NBQSA 2026 Merit Award
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#12141F] border border-white/10 text-[11px] font-mono text-[#38BDF8]">
                    WSA National Nominee
                  </span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F4F5F7] tracking-tight mb-2">
                      {pawura.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-[#C6FF5E] mb-4">
                      {pawura.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                      {pawura.solutionOverview}
                    </p>

                    {/* Architecture Workflow Visual Diagram */}
                    <div className="p-4 rounded-xl bg-[#08090D]/80 border border-white/10 mb-6 font-mono text-xs">
                      <div className="text-[10px] text-[#64748B] uppercase tracking-wider mb-2 font-semibold">
                        INTEGRATED MULTI-TIER ARCHITECTURE
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[11px]">
                        <div className="p-2 rounded-lg bg-[#12141F] border border-white/[0.08]">
                          <span className="text-[#38BDF8] block font-semibold">Remote Sensing</span>
                          <span className="text-[#94A3B8] text-[10px]">Sentinel-2 & Landsat</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#12141F] border border-white/[0.08]">
                          <span className="text-[#C6FF5E] block font-semibold">Predictive AI</span>
                          <span className="text-[#94A3B8] text-[10px]">LSTM Shoreline Model</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#12141F] border border-white/[0.08]">
                          <span className="text-[#A78BFA] block font-semibold">Marine IoT Buoy</span>
                          <span className="text-[#94A3B8] text-[10px]">ESP32 + LoRa Marine</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {pawura.technologies.slice(0, 7).map((tech) => (
                        <span key={tech} className="tech-chip text-[11px]">
                          {tech}
                        </span>
                      ))}
                      {pawura.technologies.length > 7 && (
                        <span className="tech-chip text-[11px] text-[#C6FF5E]">
                          +{pawura.technologies.length - 7} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                    <button
                      onClick={() => onSelectProject(pawura)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6FF5E] text-[#08090D] font-bold text-xs hover:bg-[#B5F843] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#C6FF5E]/20"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenLightbox(pawura.image, 'Pawura Solar Marine IoT Smart Buoy Hardware Prototype')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171A24] border border-white/10 text-xs font-mono text-[#F4F5F7] hover:border-white/25 transition-colors"
                    >
                      <span>View Hardware Prototype</span>
                    </button>

                    <span className="ml-auto text-xs font-mono text-[#94A3B8] hidden sm:inline-block">
                      ICMSS 2026 Research Paper
                    </span>
                  </div>
                </div>

                {/* Right Visual Image Column */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => onOpenLightbox(pawura.image, 'Pawura Smart Marine Buoy Prototype')}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#171A24] border border-white/10 cursor-pointer group/img"
                  >
                    <img
                      src={pawura.image}
                      alt="Pawura Smart Buoy Hardware"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />

                    {/* Image Badges */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#08090D]/85 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#C6FF5E]">
                      PHYSICAL IOT HARDWARE PROTOTYPE
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#08090D]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#F4F5F7] block">Trincomalee & Pigeon Island</span>
                        <span className="text-[10px] font-mono text-[#94A3B8]">In-situ marine water telemetry</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#C6FF5E] underline">
                        Inspect
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* =========================================================================
            TWO-COLUMN GRID: HIV DECISION SUPPORT SYSTEM + BEFORE BUY
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* HIV DECISION SUPPORT SYSTEM */}
          {(activeFilter === 'all' || activeFilter === 'ai-ml') && (
            <div className="rounded-3xl bg-[#10121A] border border-white/[0.1] hover:border-[#38BDF8]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-xs font-mono text-[#38BDF8]">
                    SLIIT CAPSTONE · GRADE A
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    eSmarTA 2026 Paper
                  </span>
                </div>

                <div
                  onClick={() => onOpenLightbox(hivProject.image, 'Wearable IoT hardware device for HIV decision support')}
                  className="relative aspect-video rounded-xl overflow-hidden bg-[#171A24] border border-white/10 mb-5 cursor-pointer group/img"
                >
                  <img
                    src={hivProject.image}
                    alt="IoT Device for HIV Decision Support"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-[#08090D]/80 backdrop-blur-sm text-[10px] font-mono text-[#38BDF8] border border-white/10">
                    ESP32 WEARABLE HARDWARE
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F7] mb-1">
                  {hivProject.title}
                </h3>
                <p className="text-sm font-medium text-[#38BDF8] mb-3">
                  {hivProject.subtitle}
                </p>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                  {hivProject.solutionOverview}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {hivProject.technologies.map((t) => (
                    <span key={t} className="tech-chip text-[11px]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(hivProject)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-[#67E8F9] transition-colors"
                >
                  <span>View Case Study Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-[#64748B]">XGBoost + Wearable IoT</span>
              </div>
            </div>
          )}

          {/* BEFORE BUY: VEHICLE EMISSION ANALYSIS */}
          {(activeFilter === 'all' || activeFilter === 'ai-ml') && (
            <div className="rounded-3xl bg-[#10121A] border border-white/[0.1] hover:border-[#C6FF5E]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#C6FF5E]/10 border border-[#C6FF5E]/20 text-xs font-mono text-[#C6FF5E]">
                    APPLIED AI · IN ACTIVE R&D
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    OCR & LLMs
                  </span>
                </div>

                <div
                  onClick={() => onSelectProject(beforeBuy)}
                  className="relative aspect-video rounded-xl overflow-hidden bg-[#12141F] border border-white/10 mb-5 p-5 flex flex-col justify-between cursor-pointer group/card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#C6FF5E] tracking-wider uppercase">
                      SYSTEM PIPELINE CONCEPT
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8]">FASTAPI + FLUTTER</span>
                  </div>

                  {/* Visual mockup representation of OCR document extraction */}
                  <div className="space-y-2 py-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] border-b border-white/[0.06] pb-1">
                      <span>CO Reading (Idle / 2500 RPM)</span>
                      <span className="text-[#C6FF5E]">0.08% [PASS]</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] border-b border-white/[0.06] pb-1">
                      <span>Hydrocarbons (HC ppm)</span>
                      <span className="text-[#C6FF5E]">24 ppm [OPTIMAL]</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                      <span>Lambda Calculation (λ)</span>
                      <span className="text-[#38BDF8]">1.002 [BALANCED]</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#64748B] text-center">
                    Document Scan → Vision LLM Extraction → Anomaly Engine
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F7] mb-1">
                  {beforeBuy.title}
                </h3>
                <p className="text-sm font-medium text-[#C6FF5E] mb-3">
                  {beforeBuy.subtitle}
                </p>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                  {beforeBuy.solutionOverview}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {beforeBuy.technologies.map((t) => (
                    <span key={t} className="tech-chip text-[11px]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(beforeBuy)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6FF5E] hover:text-[#B5F843] transition-colors"
                >
                  <span>Explore Design & Progress</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-[#64748B]">Automotive Health AI</span>
              </div>
            </div>
          )}

        </div>

        {/* =========================================================================
            ADDITIONAL PROJECTS GRID (CONSTRUCTION SAFETY & C PROGRAMMING SINHALA)
           ========================================================================= */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#F4F5F7] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C6FF5E]" />
              <span>Specialized Engineering & Applications</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#10121A] border border-white/[0.08] hover:border-white/20 transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#C6FF5E] px-2.5 py-0.5 rounded bg-[#C6FF5E]/10">
                        {project.category}
                      </span>
                      {project.playStoreUrl && (
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          Published on Google Play
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-[#F4F5F7] mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      {project.solutionOverview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((t) => (
                        <span key={t} className="tech-chip text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-[#F4F5F7] hover:text-[#C6FF5E] transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C6FF5E] hover:underline"
                      >
                        <Play className="w-3 h-3" />
                        <span>Google Play</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
