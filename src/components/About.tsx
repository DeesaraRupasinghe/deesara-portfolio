import React from 'react';
import { Layers, BrainCircuit, HeartHandshake, Compass, Trophy, Car, Lightbulb } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Building',
      icon: Layers,
      color: 'text-[#C6FF5E]',
      borderGlow: 'hover:border-[#C6FF5E]/40',
      description:
        'Developing robust full-stack software applications, scalable REST APIs, reliable enterprise database architectures, and maintainable digital platforms designed for real-world reliability.',
    },
    {
      num: '02',
      title: 'Exploring Intelligence',
      icon: BrainCircuit,
      color: 'text-[#38BDF8]',
      borderGlow: 'hover:border-[#38BDF8]/40',
      description:
        'Working with agentic AI architectures, LLM API integration, Retrieval-Augmented Generation (RAG), and applied machine learning models to build intelligent systems that reason, automate, and extract meaning.',
    },
    {
      num: '03',
      title: 'Creating Impact',
      icon: HeartHandshake,
      color: 'text-[#A78BFA]',
      borderGlow: 'hover:border-[#A78BFA]/40',
      description:
        'Bridging the physical and digital worlds—applying algorithms, IoT sensors, and data pipelines to solve tangible problems from coastal erosion and reef health to healthcare decision support.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      
      {/* Background glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C6FF5E]/[0.02] rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-6">
            Curious by nature.{' '}
            <span className="text-[#C6FF5E]">Engineer by practice.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        {/* Grid Layout: Real Image + Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Authentic Photo Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl bg-[#10121A] border border-white/10 p-3 h-full flex flex-col justify-between">
              
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#171A24]">
                <img
                  src={personalInfo.aboutPortrait}
                  alt="Deesara Rupasinghe with NBQSA National ICT Merit Award"
                  className="w-full h-full object-cover object-center filter brightness-[1.02] transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
                
                {/* Photo Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#08090D]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-3.5 h-3.5 text-[#C6FF5E]" />
                    <span className="text-xs font-semibold text-[#F4F5F7]">NBQSA National ICT Awards</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    Recognized for technical excellence & research innovation in Pawura coastal AI platform.
                  </p>
                </div>
              </div>

              {/* Sub-strip underneath photo */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between font-mono text-[11px] text-[#64748B]">
                <span>HOMAGAMA, SRI LANKA</span>
                <span className="text-[#94A3B8]">HONOURS GRADUATE</span>
              </div>

            </div>
          </div>

          {/* Right: The 3 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className={`p-6 sm:p-7 rounded-2xl bg-[#10121A]/70 border border-white/[0.08] ${pillar.borderGlow} transition-all duration-300 relative group flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#171A24] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className={`w-5 h-5 ${pillar.color}`} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F4F5F7] tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#64748B] group-hover:text-white transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed pl-0 sm:pl-13">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Beyond the Screen: Authentic Personal Dimension */}
        <div className="rounded-2xl bg-gradient-to-r from-[#10121A] via-[#12141F] to-[#171A24] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C6FF5E] mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>BEYOND THE CODE</span>
              </div>
              <h3 className="text-xl font-bold text-[#F4F5F7] mb-2">
                Entrepreneurship, Mechanical Systems & Off-Road Exploration
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                When stepping away from terminals and datasets, I channel my problem-solving mindset into building practical ventures—such as founding <strong>Huwasi Ceylon</strong> (exporting pure Ceylon cinnamon, 1st Runner-Up at GSEA 2022/23) — as well as hands-on mechanical diagnostics, automotive engineering, and off-road vehicle mechanics.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <div className="px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 text-center">
                <Car className="w-5 h-5 text-[#C6FF5E] mx-auto mb-1" />
                <span className="text-[11px] font-mono text-[#94A3B8] block">Automotive</span>
                <span className="text-xs font-semibold text-[#F4F5F7]">Engineering</span>
              </div>
              <div className="px-4 py-3 rounded-xl bg-[#08090D] border border-white/10 text-center">
                <Trophy className="w-5 h-5 text-[#C6FF5E] mx-auto mb-1" />
                <span className="text-[11px] font-mono text-[#94A3B8] block">GSEA Runner-Up</span>
                <span className="text-xs font-semibold text-[#F4F5F7]">Huwasi Ceylon</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
