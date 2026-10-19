import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, ZoomIn } from 'lucide-react';

interface CertificationsProps {
  onOpenLightbox: (img: string, caption?: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenLightbox }) => {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-[#0D0F15] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-4">
            Professional <span className="text-[#C6FF5E]">Certifications.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Industry training across Autonomous Agents, Cloud Architecture, Foundation Models, and Enterprise Data Science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-[#12141F] border border-white/[0.08] hover:border-[#C6FF5E]/30 transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                {cert.image && (
                  <div
                    onClick={() => onOpenLightbox(cert.image!, `${cert.name} - ${cert.issuer} Workshop`)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-[#171A24] border border-white/10 mb-4 cursor-pointer group/img"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-[#C6FF5E]" />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#C6FF5E] mb-2">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="text-base font-bold text-[#F4F5F7] mb-2 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {cert.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF5E]" />
                <span>Verified Qualification</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
