import {ArrowUp} from 'lucide-react';
import {PROFILE} from '../data/portfolio';
import {BrandMark} from './BrandMark';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/60 py-6 dark:border-cyan-400/10 dark:bg-[#040b16]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-white"
        >
          <BrandMark className="h-5 w-6" />
          <span>{PROFILE.name}</span>
        </a>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <nav aria-label="Footer navigation" className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-cyan-400/20 dark:bg-[#081426] dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
