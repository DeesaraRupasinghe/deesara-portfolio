import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { InteractiveCanvas } from './components/InteractiveCanvas';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationResearch } from './components/EducationResearch';
import { AwardsGallery } from './components/AwardsGallery';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LightboxModal } from './components/LightboxModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxData, setLightboxData] = useState<{ src: string; caption?: string } | null>(null);

  // Track active section for navbar highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'about', 'experience', 'education', 'awards', 'skills', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (imgSrc: string, caption?: string) => {
    setLightboxData({ src: imgSrc, caption });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F4F5F7] selection:bg-[#C6FF5E] selection:text-[#08090D]">
      {/* Background Interactive Nodes */}
      <InteractiveCanvas />

      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TrustBar />
        <About />
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenLightbox={openLightbox}
        />
        <ExperienceTimeline />
        <EducationResearch />
        <AwardsGallery onOpenLightbox={openLightbox} />
        <TechnicalSkills />
        <Certifications onOpenLightbox={openLightbox} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Detailed Dialog */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectImage={(img) => openLightbox(img, selectedProject?.title)}
      />

      {/* Full-Resolution Image Lightbox */}
      <LightboxModal
        imageSrc={lightboxData ? lightboxData.src : null}
        caption={lightboxData?.caption}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default App;
