import {useEffect, useRef, useState} from 'react';
import type {ProjectItem} from './data/portfolio';
import {AboutExpertiseSection} from './components/AboutExpertiseSection';
import {AboutModal} from './components/AboutModal';
import {ContactSection} from './components/ContactSection';
import {CvModal} from './components/CvModal';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {ProcessSection} from './components/ProcessSection';
import {ProjectModal} from './components/ProjectModal';
import {ProjectsSection} from './components/ProjectsSection';
import {TestimonialsStatsSection} from './components/TestimonialsStatsSection';

const OBSERVED_SECTION_IDS = ['home', 'about', 'skills', 'projects', 'process', 'testimonials', 'contact'];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const contactNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const elements = OBSERVED_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {rootMargin: '-35% 0px -55% 0px'},
    );

    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleQuickMessage = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({behavior: 'smooth'});
    window.setTimeout(() => {
      contactNameRef.current?.focus();
    }, 350);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#040b16] dark:text-slate-100">
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onOpenCv={() => setCvModalOpen(true)}
      />

      <main>
        <HeroSection onQuickMessage={handleQuickMessage} />
        <AboutExpertiseSection onOpenAboutModal={() => setAboutModalOpen(true)} />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ProcessSection />
        <TestimonialsStatsSection />
        <ContactSection nameInputRef={contactNameRef} />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <AboutModal open={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
