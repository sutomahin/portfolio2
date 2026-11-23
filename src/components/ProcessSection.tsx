import {useState} from 'react';
import {Code2, LayoutList, PenTool, Rocket, Search, ShieldCheck, Workflow} from 'lucide-react';
import {PROCESS_STEPS, type ProcessStep} from '../data/portfolio';

const STEP_ICONS: Record<ProcessStep['iconKey'], typeof Search> = {
  search: Search,
  layout: LayoutList,
  pen: PenTool,
  code: Code2,
  shield: ShieldCheck,
  rocket: Rocket,
};

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeIndex] ?? PROCESS_STEPS[0];

  return (
    <section id="process" className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-cyan-400/15 dark:bg-[#081426]">
          <div className="flex items-center gap-2.5">
            <Workflow className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              My Work Process
            </h2>
          </div>

          <div className="relative mt-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 left-[8%] right-[8%] hidden h-px bg-slate-200 lg:block dark:bg-cyan-400/20"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = STEP_ICONS[step.iconKey];
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className="group relative flex flex-col items-center text-center rounded-xl p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span
                      className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-150 ${
                        isActive
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-600 dark:border-cyan-400 dark:bg-cyan-500/15 dark:text-cyan-300'
                          : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-cyan-500/50 group-hover:text-cyan-600 dark:border-cyan-400/25 dark:bg-[#050e1d] dark:text-cyan-400/80 dark:group-hover:border-cyan-400/60 dark:group-hover:text-cyan-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <span className="font-mono-nums mt-3 text-base font-bold text-slate-900 dark:text-white">
                      {step.number}
                    </span>
                    <span className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {step.title}
                    </span>
                    <span className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {step.summary}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs dark:border-slate-800/80">
            <span className="font-medium text-slate-500 dark:text-slate-400">
              Phase {activeStep.number} · {activeStep.title} Deliverable
            </span>
            <span className="font-medium text-slate-800 dark:text-cyan-300">
              {activeStep.deliverable}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
