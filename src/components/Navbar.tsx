import {useState} from 'react';
import {Download, Menu, Moon, Sun, X} from 'lucide-react';
import {PROFILE} from '../data/portfolio';
import {BrandMark} from './BrandMark';

interface NavLinkItem {
  id: string;
  label: string;
}

const NAV_LINKS: NavLinkItem[] = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'skills', label: 'Skills'},
  {id: 'projects', label: 'Projects'},
  {id: 'process', label: 'Process'},
  {id: 'contact', label: 'Contact'},
];

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCv: () => void;
}

export function Navbar({activeSection, isDark, onToggleTheme, onOpenCv}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-cyan-500/10 dark:bg-[#040b16]/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <BrandMark className="h-6 w-7" />
          <span className="text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
            {PROFILE.name}
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-cyan-500 dark:bg-cyan-400"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenCv}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100/80 px-3.5 py-2 text-xs font-medium text-slate-800 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-cyan-500/50 hover:bg-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-cyan-400/25 dark:bg-[#0a192f] dark:text-slate-100 dark:hover:border-cyan-400/60 dark:hover:bg-[#0e2240]"
          >
            <Download className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            <span>Download CV</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-slate-100/80 text-slate-700 transition-colors duration-150 hover:border-cyan-500/50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700/80 dark:bg-[#0a192f] dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-white"
          >
            {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-slate-100/80 text-slate-700 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700/80 dark:bg-[#0a192f] dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-[#061020]"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-700 dark:text-cyan-300"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CV</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
