import React from 'react';
import { ArrowRight, Download, Sparkles, MapPin, Award, GraduationCap, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-grid-subtle"
    >
      {/* Ambient background glows */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C6FF5E]/[0.04] rounded-full blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-32 w-[400px] h-[400px] bg-[#A78BFA]/[0.03] rounded-full blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow with status dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10121A] border border-white/10 text-xs font-mono tracking-wider text-[#94A3B8] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C6FF5E] shadow-[0_0_8px_#C6FF5E]" />
              <span className="text-[11px] font-semibold text-[#F4F5F7] tracking-wider uppercase">
                {personalInfo.eyebrow}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F4F5F7] leading-[1.08] mb-6">
              Engineering ideas into{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF5E] via-[#D8FF8A] to-[#B5F843]">
                intelligent solutions.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#C6FF5E]/40"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 9C50 3 150 2 299 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl font-normal leading-relaxed mb-8">
              {personalInfo.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C6FF5E] text-[#08090D] font-semibold text-sm hover:bg-[#B5F843] transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#C6FF5E]/20"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12141F] border border-white/10 text-[#F4F5F7] font-medium text-sm hover:bg-[#181C2B] hover:border-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href={personalInfo.cvPath}
                download="Deesara_Rupasinghe_CV.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#C6FF5E] py-2 transition-colors ml-1 sm:ml-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Micro-Credentials Strip */}
            <div className="pt-6 border-t border-white/[0.08] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#C6FF5E] shrink-0" />
                <span>Dual Honours Degrees</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C6FF5E] shrink-0" />
                <span>NBQSA 2026 Merit</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#C6FF5E] shrink-0" />
                <span>Homagama, Sri Lanka</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Portrait Visual Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative background framing */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#C6FF5E]/20 via-transparent to-transparent opacity-60 blur-md" />
              
              {/* Technical coordinate badge top right */}
              <div className="absolute -top-3.5 right-6 z-20 px-3 py-1 rounded-md bg-[#08090D] border border-white/10 font-mono text-[10px] text-[#C6FF5E] tracking-tight shadow-md">
                ENGINEERING · 2026
              </div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#10121A] border border-white/[0.12] overflow-hidden p-3 shadow-2xl">
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#171A24]">
                  <img
                    src={personalInfo.portraitImage}
                    alt="Deesara Rupasinghe - Software Engineer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                  />

                  {/* Subtle inner gradient shadow at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-75" />

                  {/* Floating info overlay at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#08090D]/80 backdrop-blur-md border border-white/10 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#F4F5F7]">
                        Deesara Rupasinghe
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#C6FF5E]/10 text-[#C6FF5E] border border-[#C6FF5E]/20">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Profile
                      </span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-tight">
                      UOC (ICT Honours) & SLIIT (Data Science Honours)
                    </p>
                  </div>
                </div>

                {/* Bottom Technical Spec strip */}
                <div className="mt-3 pt-2.5 px-2 flex items-center justify-between font-mono text-[10px] text-[#64748B]">
                  <span>LAT 6.8402° N / LON 80.0034° E</span>
                  <span className="flex items-center gap-1.5 text-[#94A3B8]">
                    <Sparkles className="w-3 h-3 text-[#C6FF5E]" />
                    AI · FULL-STACK · IOT
                  </span>
                </div>
              </div>

              {/* Floating Award Chip */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 px-4 py-2.5 rounded-xl bg-[#171A24]/95 backdrop-blur-md border border-[#C6FF5E]/30 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C6FF5E]/10 border border-[#C6FF5E]/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#C6FF5E]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#F4F5F7]">NBQSA 2026 Merit Award</span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">28th National ICT Awards</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-20 flex flex-col items-center justify-center">
          <a
            href="#trust-bar"
            aria-label="Scroll to credibility details"
            className="group flex flex-col items-center gap-2 text-[#64748B] hover:text-[#C6FF5E] transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Discover</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#C6FF5E] transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-[#C6FF5E] animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
