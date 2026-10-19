import React from 'react';
import { education, publications } from '../data/portfolioData';
import { GraduationCap, BookOpen, FileText, CheckCircle2, Award, Clock } from 'lucide-react';

export const EducationResearch: React.FC = () => {
  const degrees = education.filter((e) => e.badge === 'Dual Honours Degree');
  const otherEducation = education.filter((e) => e.badge !== 'Dual Honours Degree');

  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#0D0F15] border-t border-white/[0.08]">
      
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#38BDF8]/[0.02] rounded-full blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & SCHOLARSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-4">
            Concurrent Degrees & <span className="text-[#C6FF5E]">Applied Research.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Completed two rigorous honours bachelor's degrees concurrently across Software Engineering and Data Science, demonstrating continuous workload execution, self-discipline, and research capability.
          </p>
        </div>

        {/* =========================================================================
            CONCURRENT DUAL HONOURS DEGREES (SIDE-BY-SIDE HIGHLIGHT)
           ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF5E] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6FF5E]" />
              CONCURRENT DEGREE PROGRAMMES (2022 – 2026)
            </span>
            <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline-block">
              TWO ACCREDITED HONOURS DEGREES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {degrees.map((deg) => (
              <div
                key={deg.id}
                className="rounded-3xl bg-[#12141F] border border-white/[0.1] hover:border-[#C6FF5E]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#C6FF5E]/10 border border-[#C6FF5E]/30 text-xs font-mono font-semibold text-[#C6FF5E]">
                      {deg.institution}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">{deg.period}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F7] mb-1">
                    {deg.degree}
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mb-4">
                    {deg.faculty}
                  </p>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {deg.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {deg.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F4F5F7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF5E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#64748B]">
                  <span>Status: Completed Concurrently</span>
                  <span className="text-[#C6FF5E]">Honours Bachelor's</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Education: Postgraduate MBA & Advanced Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {otherEducation.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#10121A] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                    {item.status === 'In Progress' ? (
                      <>
                        <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span className="text-[#38BDF8]">Status: In Progress (Pursuing)</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3.5 h-3.5 text-[#C6FF5E]" />
                        <span>Completed (National Admission)</span>
                      </>
                    )}
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">{item.period}</span>
                </div>

                <h4 className="text-lg font-bold text-[#F4F5F7] mb-1">
                  {item.degree}
                </h4>
                <p className="text-xs text-[#94A3B8] font-mono mb-3">
                  {item.institution} {item.faculty ? `· ${item.faculty}` : ''}
                </p>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="text-xs text-[#94A3B8] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            RESEARCH & PEER-REVIEWED CONFERENCE PUBLICATIONS
           ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C6FF5E] mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SCHOLARLY PUBLICATIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F5F7] tracking-tight">
                Peer-Reviewed Conference Papers
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#94A3B8]">
              INTERNATIONAL CONFERENCES 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#12141F] border border-white/[0.1] hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-0.5 rounded-full bg-[#171A24] border border-white/10 text-xs font-mono text-[#C6FF5E]">
                      {pub.status}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">{pub.year}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-[#F4F5F7] leading-snug mb-3">
                    {pub.title}
                  </h4>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#38BDF8] mb-4">
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>{pub.conference}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {pub.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tech-chip text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
