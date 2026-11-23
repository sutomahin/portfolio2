import {useState} from 'react';
import {BarChart3, ChevronLeft, ChevronRight, Quote} from 'lucide-react';
import {SUMMARY_METRICS, TESTIMONIALS} from '../data/portfolio';
import {nextCarouselIndex} from '../utils/portfolio';

export function TestimonialsStatsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex] ?? TESTIMONIALS[0];

  const handleStep = (delta: 1 | -1) => {
    setActiveIndex((prev) => nextCarouselIndex(prev, TESTIMONIALS.length, delta));
  };

  return (
    <section id="testimonials" className="py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-cyan-400/15 dark:bg-[#081426] lg:col-span-5">
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Quote className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                  What Clients Say
                </h2>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleStep(-1)}
                  aria-label="Previous testimonial"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700/80 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStep(1)}
                  aria-label="Next testimonial"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700/80 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5 dark:border-slate-800/80 dark:bg-[#050e1d]/80">
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300"
                >
                  {current.initials}
                </div>
                <div>
                  <blockquote className="text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-200">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                  <div className="mt-3 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {current.author}
                    </span>
                    <span className="mx-1.5 text-slate-400" aria-hidden="true">
                      {' · '}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {current.role}, {current.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Select testimonial">
            {TESTIMONIALS.map((item, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show testimonial from ${item.author}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    active
                      ? 'w-5 bg-cyan-500 dark:bg-cyan-400'
                      : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500'
                  }`}
                />
              );
            })}
          </div>
        </article>

        <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-cyan-400/15 dark:bg-[#081426] lg:col-span-7">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              By The Numbers
            </h2>
          </div>

          <div className="my-auto grid grid-cols-2 gap-4 pt-5 sm:grid-cols-4">
            {SUMMARY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-6 text-center dark:border-slate-800/80 dark:bg-[#050e1d]/80"
              >
                <span className="font-mono-nums text-2xl font-bold tracking-tight text-cyan-600 sm:text-3xl dark:text-cyan-400">
                  {metric.value}
                </span>
                <span className="mt-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
