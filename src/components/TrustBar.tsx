import React from 'react';
import { trustBarItems } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar" className="py-6 border-y border-white/[0.08] bg-[#0D0F15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF5E]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]">
              Verified Milestones & Credibility
            </span>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#64748B]">
            AUTHENTIC CREDENTIALS
          </span>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {trustBarItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-3 rounded-xl bg-[#12141F]/60 border border-white/[0.06] hover:border-[#C6FF5E]/30 transition-all duration-200"
            >
              <div className="flex items-center gap-1.5 text-[#C6FF5E] mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-mono font-medium tracking-tight">Verified</span>
              </div>
              <div className="text-xs font-semibold text-[#F4F5F7] leading-tight mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-[#94A3B8] leading-tight">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Smooth Horizontal Scroller */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
          {trustBarItems.map((item, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[240px] p-3 rounded-xl bg-[#12141F] border border-white/[0.08] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-[#C6FF5E] mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] font-mono font-medium">Verified</span>
              </div>
              <div className="text-xs font-semibold text-[#F4F5F7] mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
