import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#050608] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#12141F] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#C6FF5E]">
              DR
            </div>
            <div>
              <span className="text-sm font-bold text-[#F4F5F7] block">
                Deesara Rupasinghe
              </span>
              <span className="text-[11px] font-mono text-[#64748B]">
                Software Engineer · Agentic AI · Homagama, Sri Lanka
              </span>
            </div>
          </div>

          {/* Center editorial tagline */}
          <div className="text-center font-mono text-xs text-[#94A3B8]">
            Designed with curiosity. <span className="text-[#C6FF5E]">Built with purpose.</span>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#10121A] border border-white/10 text-[#94A3B8] hover:text-[#F4F5F7] hover:border-white/20 transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#10121A] border border-white/10 text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[#10121A] border border-white/10 text-[#94A3B8] hover:text-[#C6FF5E] hover:border-[#C6FF5E]/30 transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#12141F] border border-white/10 text-xs font-mono text-[#94A3B8] hover:text-[#C6FF5E] hover:border-[#C6FF5E]/40 transition-colors ml-2"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#64748B] gap-3">
          <div>
            © {currentYear} Deesara Rupasinghe. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>UOC (ICT Hons) · SLIIT (Data Science Hons)</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#94A3B8]">Hosted on Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
