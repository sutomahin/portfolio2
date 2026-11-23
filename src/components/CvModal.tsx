import {useEffect} from 'react';
import {Download, FileText, X} from 'lucide-react';
import {EXPERIENCE_TIMELINE, PROFILE, PROJECTS, SKILLS} from '../data/portfolio';
import {buildResumeDocumentText} from '../utils/portfolio';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({open, onClose}: CvModalProps) {
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

  const handleDownloadTxt = () => {
    const content = buildResumeDocumentText({
      name: PROFILE.name,
      role: PROFILE.role,
      location: PROFILE.location,
      email: PROFILE.email,
      phone: PROFILE.phone,
      bio: PROFILE.aboutBio,
      skills: SKILLS,
      projects: PROJECTS,
    });
    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abdullah_Tariq_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-cyan-400/20 dark:bg-[#081426]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Curriculum Vitae</span>
            </div>
            <h3
              id="cv-modal-title"
              className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {PROFILE.name} — {PROFILE.role}
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {PROFILE.location} · {PROFILE.email} · {PROFILE.phone}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-cyan-500/40 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Summary</h4>
            <p className="mt-1.5">{PROFILE.aboutBio}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Experience</h4>
            <div className="mt-2 space-y-3">
              {EXPERIENCE_TIMELINE.map((exp) => (
                <div key={exp.period} className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {exp.role} · {exp.company}
                    </span>
                    <span className="font-mono-nums text-[11px] text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <p>{exp.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Core Technical Stack</h4>
            <p className="mt-1.5">
              {SKILLS.map((skill) => skill.name).join(' · ')}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleDownloadTxt}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Download CV File</span>
          </button>
        </div>
      </div>
    </div>
  );
}
