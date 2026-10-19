import React from 'react';
import { Trophy, ZoomIn, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AwardsGalleryProps {
  onOpenLightbox: (img: string, caption?: string) => void;
}

export const AwardsGallery: React.FC<AwardsGalleryProps> = ({ onOpenLightbox }) => {
  return (
    <section id="awards" className="py-24 sm:py-32 relative bg-[#0D0F15] border-t border-white/[0.08]">
      
      {/* Background radial glow */}
      <div 
        className="pointer-events-none absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-[#C6FF5E]/[0.02] rounded-full blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-4">
            Visual Proof of <span className="text-[#C6FF5E]">Excellence.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            National awards, competitive hackathon podiums, and international nominations earned through rigorous technical evaluations and real entrepreneurial initiatives.
          </p>
        </div>

        {/* Editorial Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Card 1: NBQSA Merit Award (Large 7-Col) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#12141F] border border-white/[0.12] overflow-hidden flex flex-col justify-between group hover:border-[#C6FF5E]/40 transition-all duration-300 shadow-xl">
            <div
              onClick={() => onOpenLightbox('/images/nbqsa-team-merit.jpg', 'NBQSA 2026 National ICT Awards — Merit Award Winning Team Ceremony')}
              className="relative aspect-[16/10] overflow-hidden bg-[#171A24] cursor-pointer"
            >
              <img
                src="/images/nbqsa-team-merit.jpg"
                alt="NBQSA 2026 Team Award Presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08090D]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#C6FF5E]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>28th NATIONAL ICT AWARDS</span>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090D]/80 backdrop-blur-sm text-xs font-mono text-[#F4F5F7] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 text-[#C6FF5E]" />
                <span>Enlarge Photo</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#C6FF5E] font-semibold">
                  TERTIARY STUDENT PROJECT (TECHNOLOGY)
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">YEAR 2026</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F4F5F7] mb-2">
                Merit Award — NBQSA 2026
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                Honored at the 28th National ICT Awards (NBQSA) organized by the British Computer Society (BCS) Sri Lanka Section, recognizing Pawura for technological innovation in coastal erosion prediction and marine environmental conservation.
              </p>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>Project: Pawura (UOC Capstone)</span>
                <span className="text-[#94A3B8]">Evaluated by BCS Expert Panel</span>
              </div>
            </div>
          </div>

          {/* Main Card 2: GSEA 1st Runner-Up (5-Col) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#12141F] border border-white/[0.12] overflow-hidden flex flex-col justify-between group hover:border-[#C6FF5E]/40 transition-all duration-300 shadow-xl">
            <div
              onClick={() => onOpenLightbox('/images/gsea-award.jpg', 'Global Student Entrepreneur Awards (GSEA) Sri Lanka 2022/23 — 1st Runner-Up with LKR 75,000 Prize')}
              className="relative aspect-[16/11] overflow-hidden bg-[#171A24] cursor-pointer"
            >
              <img
                src="/images/gsea-award.jpg"
                alt="GSEA 2022/23 1st Runner-Up Cheque Presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08090D]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#C6FF5E]">
                <Trophy className="w-3.5 h-3.5" />
                <span>1st RUNNER-UP</span>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090D]/80 backdrop-blur-sm text-xs font-mono text-[#F4F5F7] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 text-[#C6FF5E]" />
                <span>Enlarge Photo</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#C6FF5E] font-semibold">
                  ENTREPRENEURS' ORGANIZATION (EO)
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">2022 / 2023</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F7] mb-2">
                Global Student Entrepreneur Awards (GSEA)
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                Awarded 1st Runner-Up in the national finals of GSEA Sri Lanka for founding <strong>Huwasi Ceylon</strong>, an export startup taking pure Ceylon cinnamon to global international markets.
              </p>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>Cash Award: LKR 75,000</span>
                <span className="text-[#94A3B8]">National Finals Podium</span>
              </div>
            </div>
          </div>

        </div>

        {/* Supporting Secondary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* World Summit Award National Nomination */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#10121A] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-xs font-mono text-[#38BDF8]">
                  INTERNATIONAL NOMINATION
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">2025 / 2026</span>
              </div>
              <h4 className="text-xl font-bold text-[#F4F5F7] mb-2">
                World Summit Award (WSA) — National Nominee
              </h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                Officially selected to represent Sri Lanka at the global World Summit Awards under the <strong>Environment & Green Energy</strong> category for the Pawura coastal monitoring platform.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>United Nations framework digital innovation awards</span>
            </div>
          </div>

          {/* Dhack Designathon 4th Place */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#10121A] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-xs font-mono text-[#A78BFA]">
                  UI/UX DESIGNATHON
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">YEAR 2023</span>
              </div>
              <h4 className="text-xl font-bold text-[#F4F5F7] mb-2">
                Dhack Designathon — 4th Place
              </h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                Secured 4th Place in an intensive product design and user experience hackathon organized by the University of Sri Jayewardenepura, solving complex human interaction challenges.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
              <span>University of Sri Jayewardenepura Design Hackathon</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
