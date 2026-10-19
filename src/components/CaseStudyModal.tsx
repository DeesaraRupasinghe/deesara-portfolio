import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2, Cpu, Play, FileText } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectImage: (img: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onSelectImage }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#08090D]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#10121A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#10121A]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-[#C6FF5E]/10 border border-[#C6FF5E]/20 text-xs font-mono text-[#C6FF5E]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline-block">
              CASE STUDY BREAKDOWN
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#171A24] border border-white/10 text-[#94A3B8] hover:text-[#F4F5F7] hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6FF5E]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Title & Subtitle */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F4F5F7] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Primary Image & Gallery Preview */}
          <div className="space-y-3">
            <div
              onClick={() => onSelectImage(project.image)}
              className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#171A24] border border-white/10 cursor-pointer group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg bg-[#08090D]/80 backdrop-blur-sm text-xs font-mono text-[#C6FF5E] border border-[#C6FF5E]/30">
                  Click to inspect full resolution
                </span>
              </div>
            </div>

            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {project.additionalImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectImage(img)}
                    className="relative aspect-video rounded-lg overflow-hidden bg-[#171A24] border border-white/10 cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${project.title} asset ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#12141F] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#F87171] uppercase tracking-wider block mb-2 font-semibold">
                The Problem
              </span>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#12141F] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#C6FF5E] uppercase tracking-wider block mb-2 font-semibold">
                The Engineering Solution
              </span>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Role & Grade */}
          <div className="p-4 rounded-xl bg-[#171A24]/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#94A3B8] block">CONTRIBUTION / ROLE</span>
              <span className="text-sm font-semibold text-[#F4F5F7]">{project.role}</span>
            </div>
            {project.grade && (
              <div className="sm:text-right">
                <span className="text-[11px] font-mono text-[#C6FF5E] block">EVALUATION</span>
                <span className="text-sm font-bold text-[#F4F5F7]">{project.grade}</span>
              </div>
            )}
          </div>

          {/* System Architecture Breakdown */}
          {project.architectureDetails && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#F4F5F7] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#C6FF5E]" />
                <span>System Architecture & Pipeline</span>
              </h3>

              <div className="p-4 rounded-xl bg-[#08090D] border border-white/10 font-mono text-xs text-[#94A3B8] leading-relaxed">
                <span className="text-[#C6FF5E] font-semibold block mb-1.5">// DATAFLOW PIPELINE:</span>
                {project.architectureDetails.pipelineSummary}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architectureDetails.components.map((comp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#12141F] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F5F7] mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF5E]" />
                      {comp.title}
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#F4F5F7] mb-3">Key Project Specifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#12141F] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-[#94A3B8] block">{m.label}</span>
                    <span className="text-xs font-bold text-[#F4F5F7] mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recognition & Honors */}
          {project.recognition && project.recognition.length > 0 && (
            <div className="p-4 rounded-xl bg-[#C6FF5E]/[0.03] border border-[#C6FF5E]/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C6FF5E] mb-2 font-mono">
                <Award className="w-4 h-4" />
                <span>VERIFIED RECOGNITION & AWARDS</span>
              </div>
              <ul className="space-y-1.5">
                {project.recognition.map((rec, idx) => (
                  <li key={idx} className="text-xs text-[#94A3B8] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF5E] shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2.5">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#171A24] border border-white/10 text-xs font-mono text-[#F4F5F7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Action Links (Only when authentic) */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C6FF5E] text-[#08090D] font-semibold text-xs hover:bg-[#B5F843] transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                <span>View on Google Play</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}

            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171A24] border border-white/10 text-xs font-medium text-[#F4F5F7] hover:border-white/20 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#C6FF5E]" />
                <span>Conference Information</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 rounded-lg bg-transparent text-xs font-mono text-[#94A3B8] hover:text-white"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
