import {useState} from 'react';
import {ArrowRight, CheckCircle2, Code2, Mail, MapPin, User} from 'lucide-react';
import {PROFILE, SKILLS, type SkillGroup} from '../data/portfolio';
import {filterSkills} from '../utils/portfolio';

const SKILL_GROUPS: Array<'All' | SkillGroup> = ['All', 'Frontend', 'Backend', 'Data & Tooling'];

interface AboutExpertiseSectionProps {
  onOpenAboutModal: () => void;
}

export function AboutExpertiseSection({onOpenAboutModal}: AboutExpertiseSectionProps) {
  const [selectedGroup, setSelectedGroup] = useState<'All' | SkillGroup>('All');
  const visibleSkills = filterSkills(SKILLS, selectedGroup);

  return (
    <section id="about" className="py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-cyan-400/15 dark:bg-[#081426] lg:col-span-5">
          <div>
            <div className="flex items-center gap-2.5">
              <User className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                About Me
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {PROFILE.aboutBio}
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 dark:border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <User className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Name</dt>
                  <dd className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {PROFILE.name}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Location</dt>
                  <dd className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {PROFILE.location}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:col-span-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Email</dt>
                  <dd className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:underline"
                    >
                      {PROFILE.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">Availability</dt>
                  <dd className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    {PROFILE.availability}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="mt-6 pt-2">
            <button
              type="button"
              onClick={onOpenAboutModal}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-800 transition-colors duration-150 hover:border-cyan-500/50 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-cyan-400/25 dark:bg-[#0c1d36] dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:bg-[#102646] whitespace-nowrap shrink-0"
            >
              <span>More About Me</span>
              <ArrowRight className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            </button>
          </div>
        </article>

        <article
          id="skills"
          className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-cyan-400/15 dark:bg-[#081426] lg:col-span-7"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Code2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                  My Expertise
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="Filter skills by category"
                className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#050e1d]"
              >
                {SKILL_GROUPS.map((group) => {
                  const active = selectedGroup === group;
                  return (
                    <button
                      key={group}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedGroup(group)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        active
                          ? 'bg-white text-slate-900 shadow-sm dark:bg-[#0f2440] dark:text-cyan-300'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                      }`}
                    >
                      {group}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {visibleSkills.map((skill) => (
                <div key={skill.id}>
                  <div className="mb-1.5 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono-nums text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-[#0e2038]"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 transition-all duration-300"
                      style={{width: `${skill.proficiency}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
