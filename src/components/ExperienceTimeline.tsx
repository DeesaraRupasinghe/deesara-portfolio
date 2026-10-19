import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#08090D]">
      
      {/* Background glow */}
      <div 
        className="pointer-events-none absolute top-1/3 left-0 w-80 h-80 bg-[#C6FF5E]/[0.02] rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-4">
            Professional <span className="text-[#C6FF5E]">Experience.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Hands-on software and data engineering contributions across enterprise banking infrastructure, database systems, and full-lifecycle application delivery.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/[0.12] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08090D] border-2 border-[#C6FF5E] group-hover:scale-125 group-hover:shadow-[0_0_12px_#C6FF5E] transition-all duration-200" />

              {/* Main Experience Card */}
              <div className="rounded-3xl bg-[#10121A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 p-6 sm:p-8">
                
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C6FF5E] mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F7]">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#94A3B8] gap-1">
                    <span className="flex items-center gap-1.5 text-[#F4F5F7]">
                      <Calendar className="w-3.5 h-3.5 text-[#C6FF5E]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#64748B]">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Responsibilities & Achievements */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                    KEY RESPONSIBILITIES & CONTRIBUTIONS
                  </span>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C6FF5E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-semibold">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-chip text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
