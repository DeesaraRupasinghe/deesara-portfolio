import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Awards', href: '#awards' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08090D]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#C6FF5E] rounded-lg p-1"
            aria-label="Deesara Rupasinghe Homepage"
          >
            <div className="relative w-9 h-9 rounded-lg bg-[#12141F] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[#C6FF5E]/60 transition-colors">
              <span className="font-mono text-xs font-bold text-[#F4F5F7] group-hover:text-[#C6FF5E] transition-colors">
                DR
              </span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#C6FF5E] rounded-full blur-[1px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#F4F5F7] group-hover:text-white transition-colors">
                Deesara Rupasinghe
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
                Software & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#10121A]/80 border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#08090D] bg-[#C6FF5E] font-semibold shadow-sm'
                      : 'text-[#94A3B8] hover:text-[#F4F5F7] hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right action controls */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141F] border border-white/[0.08] text-[11px] font-mono text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-[#C6FF5E] animate-pulse" />
              <span>Open to Roles</span>
            </div>

            <a
              href={personalInfo.cvPath}
              download="Deesara_Rupasinghe_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C6FF5E] text-[#08090D] text-xs font-semibold hover:bg-[#B5F843] transition-all transform active:scale-95 shadow-sm shadow-[#C6FF5E]/20"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={personalInfo.cvPath}
              download="Deesara_Rupasinghe_CV.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#C6FF5E] text-[#08090D] text-xs font-medium"
              aria-label="Download CV"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#12141F] border border-white/10 text-[#94A3B8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C6FF5E]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C6FF5E]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#08090D]/95 backdrop-blur-2xl z-50 px-6 py-8 flex flex-col justify-between border-t border-white/[0.08] animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg bg-[#12141F] border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#C6FF5E] animate-pulse" />
              <span className="text-xs font-mono text-[#C6FF5E]">Available for Opportunities</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-lg font-medium text-[#F4F5F7] hover:text-[#C6FF5E] border-b border-white/[0.05] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <a
              href={personalInfo.cvPath}
              download="Deesara_Rupasinghe_CV.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C6FF5E] text-[#08090D] font-semibold text-sm hover:bg-[#B5F843] transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official CV (PDF)</span>
            </a>
            <div className="text-center font-mono text-[11px] text-[#64748B]">
              Homagama, Sri Lanka · deesararupasinghe@gmail.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
