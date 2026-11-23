import {useEffect} from 'react';
import {CheckCircle2, ExternalLink, Github, X} from 'lucide-react';
import type {ProjectItem} from '../data/portfolio';
import {ProjectPreview} from './ProjectPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({project, onClose}: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-cyan-400/20 dark:bg-[#081426]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-cyan-600 dark:text-cyan-400">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-nums">{project.year}</span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-cyan-500/40 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5">
          <ProjectPreview variant={project.previewVariant} title={project.title} />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-[#050e1d]"
            >
              <div className="font-mono-nums text-base font-bold text-cyan-600 dark:text-cyan-400">
                {metric.value}
              </div>
              <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold tracking-wide text-slate-800 dark:text-slate-200">
            Engineering Highlights
          </h4>
          <ul className="mt-2.5 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Stack: <span className="text-slate-800 dark:text-slate-200">{project.stack.join(' · ')}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-medium text-slate-800 transition-colors hover:border-cyan-500/50 dark:border-slate-700 dark:text-slate-200"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Source</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
            >
              <span>Live Preview</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
