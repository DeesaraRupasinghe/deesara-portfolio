import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  imageSrc: string | null;
  caption?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imageSrc, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-[#08090D]/95 backdrop-blur-lg"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Content */}
      <div className="relative z-10 max-w-5xl max-h-[92vh] flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#C6FF5E]" />
            <span className="text-xs font-mono text-[#94A3B8]">
              {caption || 'Verified Photograph / Artifact'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#171A24] border border-white/20 text-[#F4F5F7] hover:text-[#C6FF5E] hover:border-[#C6FF5E]/50 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scaled Image */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#10121A] max-h-[80vh] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={caption || 'Preview'}
            className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
          />
        </div>

        {/* Bottom Caption */}
        {caption && (
          <div className="mt-3 px-4 py-2 rounded-lg bg-[#12141F]/80 border border-white/10 text-xs font-mono text-[#94A3B8] text-center max-w-xl">
            {caption}
          </div>
        )}

      </div>
    </div>
  );
};
