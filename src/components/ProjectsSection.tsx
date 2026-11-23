import {useState} from 'react';
import {ArrowRight, FolderKanban} from 'lucide-react';
import {PROJECTS, type ProjectCategory, type ProjectItem} from '../data/portfolio';
import {filterProjects} from '../utils/portfolio';
import {ProjectPreview} from './ProjectPreview';

const PROJECT_CATEGORIES: Array<'All' | ProjectCategory> = ['All', 'Full Stack', 'Web App'];

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({onSelectProject}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = filterProjects(PROJECTS, selectedCategory, showAll);

  return (
    <section id="projects" className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-cyan-400/15 dark:bg-[#081426]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <FolderKanban className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                Selected Work
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#050e1d]"
              >
                {PROJECT_CATEGORIES.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        active
                          ? 'bg-white text-slate-900 shadow-sm dark:bg-[#0f2440] dark:text-cyan-300'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {selectedCategory === 'All' && (
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-700 hover:text-cyan-600 focus-visible:outline-none focus-visible:underline dark:text-cyan-400 dark:hover:text-cyan-300 whitespace-nowrap shrink-0"
                >
                  <span>{showAll ? 'Show Featured' : 'View All Projects'}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 transition-colors duration-150 hover:border-cyan-500/40 dark:border-slate-800/90 dark:bg-[#050e1d]/80 dark:hover:border-cyan-400/35"
              >
                <div>
                  <ProjectPreview variant={project.previewVariant} title={project.title} />

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-cyan-700 dark:text-cyan-400">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-nums">{project.year}</span>
                  </div>

                  <h3 className="mt-1.5 text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200/80 pt-3 dark:border-slate-800/80">
                  <p className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {project.stack.join(' · ')}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`Inspect ${project.title} case study`}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors duration-150 hover:border-cyan-500 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700 dark:bg-[#0a192f] dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                  >
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
