import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Terminal, Search, Code2, Database, Brain, Cloud, Cpu, Sparkles } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getGroupIcon = (name: string) => {
    switch (name) {
      case 'Languages':
        return Code2;
      case 'Frontend & Backend':
        return Terminal;
      case 'Generative & Agentic AI':
        return Sparkles;
      case 'Data Engineering & Databases':
        return Database;
      case 'Machine Learning':
        return Brain;
      case 'Cloud, DevOps & Observability':
        return Cloud;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#08090D]">
      
      {/* Background ambient light */}
      <div 
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C6FF5E]/[0.02] rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-4">
              Technical <span className="text-[#C6FF5E]">Stack.</span>
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Curated tools, languages, and frameworks applied in enterprise systems, machine learning architectures, and full-stack software development.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#10121A] border border-white/10 text-xs text-[#F4F5F7] placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#C6FF5E] focus:border-[#C6FF5E]"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            const Icon = getGroupIcon(group.name);
            const filteredSkills = group.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={group.name}
                className="rounded-2xl bg-[#10121A] border border-white/[0.08] hover:border-[#C6FF5E]/30 transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#171A24] border border-white/10 flex items-center justify-center text-[#C6FF5E] group-hover:bg-[#C6FF5E]/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F4F5F7]">
                        {group.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#64748B]">
                        {filteredSkills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                  {filteredSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-[#171A24] border border-white/[0.12] text-[#F4F5F7] hover:border-[#C6FF5E]/50 hover:text-[#C6FF5E]'
                          : 'bg-[#12141F] border border-white/[0.05] text-[#94A3B8]'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
