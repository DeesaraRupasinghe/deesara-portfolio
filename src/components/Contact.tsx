import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, FileDown, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    subject || 'Software / AI Engineering Opportunity — Connecting with Deesara'
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      
      {/* Background glow */}
      <div 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C6FF5E]/[0.03] rounded-full blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline and Direct Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/10 text-xs font-mono text-[#C6FF5E] mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F5F7] mb-6">
                Have a meaningful <span className="text-[#C6FF5E]">problem to solve?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8">
                I'm interested in opportunities where software engineering, AI, data, and practical problem-solving come together. Whether it's full-time engineering roles, research collaborations, or innovative AI product builds, let's talk.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mb-8">
                
                {/* Email card with quick copy */}
                <div className="p-4 rounded-xl bg-[#10121A] border border-white/[0.08] flex items-center justify-between group hover:border-[#C6FF5E]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#171A24] border border-white/10 flex items-center justify-center text-[#C6FF5E]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] uppercase block">
                        EMAIL ADDRESS
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-[#F4F5F7] hover:text-[#C6FF5E] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-[#171A24] border border-white/10 text-[#94A3B8] hover:text-[#C6FF5E] hover:border-[#C6FF5E]/40 transition-all text-xs flex items-center gap-1.5"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C6FF5E]" />
                        <span className="text-[11px] font-mono text-[#C6FF5E]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone & Location Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#10121A] border border-white/[0.08] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#171A24] border border-white/10 flex items-center justify-center text-[#38BDF8]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] uppercase block">
                        PHONE / WHATSAPP
                      </span>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs font-semibold text-[#F4F5F7] hover:text-[#38BDF8] transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#10121A] border border-white/[0.08] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#171A24] border border-white/10 flex items-center justify-center text-[#A78BFA]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] uppercase block">
                        BASE LOCATION
                      </span>
                      <span className="text-xs font-semibold text-[#F4F5F7]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social and Profile Links */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12141F] border border-white/10 text-xs font-medium text-[#F4F5F7] hover:border-[#0A66C2] hover:text-[#38BDF8] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12141F] border border-white/10 text-xs font-medium text-[#F4F5F7] hover:border-white/30 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repositories</span>
                </a>

                <a
                  href={personalInfo.cvPath}
                  download="Deesara_Rupasinghe_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C6FF5E] text-[#08090D] text-xs font-bold hover:bg-[#B5F843] transition-all shadow-sm shadow-[#C6FF5E]/20"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Composer Box */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#10121A] border border-white/[0.12] p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-lg font-bold text-[#F4F5F7]">
                    Compose Message
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Pre-fills your default email client directly
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#C6FF5E] px-2.5 py-1 rounded bg-[#C6FF5E]/10 border border-[#C6FF5E]/20">
                  Direct Mailto
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-[#94A3B8] block mb-1.5">
                    SUBJECT OR ROLE
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer Opportunity / AI Project"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#12141F] border border-white/10 text-xs text-[#F4F5F7] placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#C6FF5E] focus:border-[#C6FF5E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#94A3B8] block mb-1.5">
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hi Deesara, I came across your portfolio and wanted to discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#12141F] border border-white/10 text-xs text-[#F4F5F7] placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#C6FF5E] focus:border-[#C6FF5E] resize-none"
                  />
                </div>

                <a
                  href={mailtoLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C6FF5E] text-[#08090D] font-bold text-xs sm:text-sm hover:bg-[#B5F843] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C6FF5E]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </a>

                <p className="text-[11px] font-mono text-[#64748B] text-center">
                  Will launch your email app with address: {personalInfo.email}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
