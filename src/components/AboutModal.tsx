import {useEffect} from 'react';
import {Briefcase, X} from 'lucide-react';
import {EXPERIENCE_TIMELINE, PROFILE} from '../data/portfolio';

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export function AboutModal({open, onClose}: AboutModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-cyan-400/20 dark:bg-[#081426]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Experience &amp; Background</span>
            </div>
            <h3
              id="about-modal-title"
              className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {PROFILE.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close background modal"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-cyan-500/40 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {PROFILE.aboutBio}
        </p>

        <div className="mt-6 space-y-4">
          {EXPERIENCE_TIMELINE.map((item) => (
            <div
              key={item.period}
              className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-[#050e1d]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.role}
                </span>
                <span className="font-mono-nums text-xs text-cyan-700 dark:text-cyan-400">
                  {item.period}
                </span>
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.company}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
