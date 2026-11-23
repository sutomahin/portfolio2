import {ArrowRight, Briefcase, Code2, Github, Layers, Linkedin, Mail, MessageSquare, Star} from 'lucide-react';
import {CORE_PRINCIPLES, HERO_METRICS, PROFILE} from '../data/portfolio';

function DeveloperPortraitArtwork() {
  return (
    <svg
      viewBox="0 0 420 440"
      fill="none"
      role="img"
      aria-label="Studio portrait illustration of Abdullah Tariq"
      className="relative z-10 mx-auto h-full w-full max-w-[360px] select-none"
    >
      <defs>
        <radialGradient id="studioAura" cx="50%" cy="46%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.30" />
          <stop offset="55%" stopColor="#0284c7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#040b16" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hoodieGrad" x1="120" y1="265" x2="300" y2="425" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16253b" />
          <stop offset="55%" stopColor="#0d1728" />
          <stop offset="100%" stopColor="#070e1b" />
        </linearGradient>
        <linearGradient id="faceTone" x1="165" y1="108" x2="255" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d9aa8e" />
          <stop offset="60%" stopColor="#b88164" />
          <stop offset="100%" stopColor="#8a5942" />
        </linearGradient>
        <linearGradient id="faceShadow" x1="215" y1="120" x2="270" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="rimCyan" x1="110" y1="90" x2="275" y2="330" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="202" r="168" fill="url(#studioAura)" />
      <circle
        cx="210"
        cy="202"
        r="142"
        className="stroke-cyan-500/25 dark:stroke-cyan-400/20"
        strokeWidth="1.25"
        strokeDasharray="6 6"
      />
      <circle cx="210" cy="202" r="120" className="fill-slate-900/5 dark:fill-[#071528]/85" />

      {/* Hoodie silhouette */}
      <path
        d="M84 422C90 342 132 300 182 290L210 306L238 290C288 300 330 342 336 422H84Z"
        fill="url(#hoodieGrad)"
        stroke="url(#rimCyan)"
        strokeWidth="1.5"
      />
      <path
        d="M154 294C165 322 184 334 210 334C236 334 255 322 266 294C249 282 232 278 210 278C188 278 171 282 154 294Z"
        fill="#132237"
        stroke="#22d3ee"
        strokeOpacity="0.28"
        strokeWidth="1.2"
      />
      <path d="M188 332V382" stroke="#38bdf8" strokeOpacity="0.32" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M232 332V376" stroke="#38bdf8" strokeOpacity="0.32" strokeWidth="2.5" strokeLinecap="round" />

      {/* Neck & jaw shadow */}
      <path d="M188 240H232V298C220 306 200 306 188 298V240Z" fill="#8f5d46" />
      <path d="M188 242C200 264 220 264 232 242V256C220 266 200 266 188 256V242Z" fill="#0f172a" fillOpacity="0.28" />

      {/* Ears */}
      <ellipse cx="151" cy="182" rx="9" ry="15" fill="#9f6d55" />
      <ellipse cx="269" cy="182" rx="9" ry="15" fill="#8c5b44" />

      {/* Head shape */}
      <path
        d="M154 162C154 123 178 102 210 102C242 102 266 123 266 162V196C266 234 239 258 210 258C181 258 154 234 154 196V162Z"
        fill="url(#faceTone)"
      />
      <path
        d="M210 102C242 102 266 123 266 162V196C266 234 239 258 210 258V102Z"
        fill="url(#faceShadow)"
      />

      {/* Styled hair */}
      <path
        d="M148 168C144 132 158 96 192 84C218 75 248 82 266 104C280 121 277 150 268 168C264 143 250 125 224 121C198 117 175 127 161 146C155 154 151 161 148 168Z"
        fill="#0b1322"
        stroke="#38bdf8"
        strokeOpacity="0.28"
        strokeWidth="1.2"
      />
      <path
        d="M172 102C194 90 226 90 248 106"
        stroke="#67e8f9"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Sculpted beard & jawline */}
      <path
        d="M155 196C159 232 182 257 210 257C238 257 261 232 265 196C258 214 244 226 225 229C215 231 205 231 195 229C176 226 162 214 155 196Z"
        fill="#0f172a"
        fillOpacity="0.9"
      />
      <path
        d="M192 215C201 210 219 210 228 215C223 221 216 223 210 223C204 223 197 221 192 215Z"
        fill="#0f172a"
        fillOpacity="0.9"
      />
      <path d="M201 226C207 229 213 229 219 226" stroke="#c89578" strokeOpacity="0.65" strokeWidth="1.8" strokeLinecap="round" />

      {/* Subtle nose bridge & brows */}
      <path d="M210 164V198C210 201 206 203 203 202" stroke="#7c4b36" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
      <path d="M169 156C177 152 188 152 195 155" stroke="#0f172a" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M225 155C232 152 243 152 251 156" stroke="#0f172a" strokeWidth="3.2" strokeLinecap="round" />

      {/* Refined eyes */}
      <ellipse cx="182" cy="171" rx="3.4" ry="2.6" fill="#0f172a" />
      <ellipse cx="238" cy="171" rx="3.4" ry="2.6" fill="#0f172a" />

      {/* Glasses */}
      <rect
        x="162"
        y="159"
        width="40"
        height="25"
        rx="6"
        fill="#22d3ee"
        fillOpacity="0.09"
        stroke="#cbd5e1"
        strokeWidth="2.2"
      />
      <rect
        x="218"
        y="159"
        width="40"
        height="25"
        rx="6"
        fill="#22d3ee"
        fillOpacity="0.09"
        stroke="#cbd5e1"
        strokeWidth="2.2"
      />
      <path d="M202 170H218" stroke="#cbd5e1" strokeWidth="2.2" />
      <path d="M153 169H162" stroke="#cbd5e1" strokeWidth="1.8" />
      <path d="M258 169H267" stroke="#cbd5e1" strokeWidth="1.8" />
      <path d="M168 164L175 179" stroke="#67e8f9" strokeOpacity="0.38" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M224 164L231 179" stroke="#67e8f9" strokeOpacity="0.38" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const METRIC_ICONS = [Briefcase, Layers, Star];

interface HeroSectionProps {
  onQuickMessage: () => void;
}

export function HeroSection({onQuickMessage}: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-14 lg:pt-14 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/12"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-cyan-700 dark:text-cyan-300">
            <Code2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            <span>{PROFILE.role}</span>
          </div>

          <h1 className="mt-4 max-w-xl text-balance text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] dark:text-white">
            {PROFILE.headlinePrefix}{' '}
            <span className="text-cyan-600 dark:text-cyan-400">{PROFILE.headlineAccent}</span>{' '}
            {PROFILE.headlineSuffix}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {PROFILE.heroBio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#040b16] whitespace-nowrap shrink-0"
            >
              <span>View My Work</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onQuickMessage}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition-colors duration-150 hover:border-cyan-500/50 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700/90 dark:bg-[#081426] dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:bg-[#0c1d36] whitespace-nowrap shrink-0"
            >
              <span>Let&apos;s Talk</span>
              <MessageSquare className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-7 flex items-center gap-3" aria-label="Social links">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-150 hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-800 dark:bg-[#081426] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-150 hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-800 dark:bg-[#081426] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X Twitter profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-150 hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-800 dark:bg-[#081426] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send email to Abdullah Tariq"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-150 hover:border-cyan-500/40 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-800 dark:bg-[#081426] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto flex max-w-lg items-center justify-center">
            <div className="relative w-full pb-12 sm:pb-6 sm:pr-28">
              <DeveloperPortraitArtwork />

              <div className="mx-auto -mt-12 relative z-20 flex w-fit items-center gap-4 rounded-xl border border-slate-200 bg-white/95 px-5 py-3.5 shadow-lg backdrop-blur-md dark:border-cyan-400/20 dark:bg-[#071528]/90">
                <Code2 className="h-6 w-6 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <ul className="space-y-0.5 text-xs font-medium text-slate-700 dark:text-slate-200">
                  {CORE_PRINCIPLES.map((principle) => (
                    <li key={principle}>{principle}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden sm:flex flex-col gap-3.5 absolute right-0 top-6 z-20">
              {HERO_METRICS.map((metric, idx) => {
                const Icon = METRIC_ICONS[idx] ?? Briefcase;
                return (
                  <div
                    key={metric.label}
                    className="w-40 rounded-xl border border-slate-200 bg-white/95 p-3.5 shadow-sm backdrop-blur-md dark:border-cyan-400/18 dark:bg-[#08162b]/90"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono-nums text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {metric.value}
                      </span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-cyan-600 dark:border-cyan-400/20 dark:bg-[#0d213d] dark:text-cyan-400">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-snug text-slate-600 dark:text-slate-300">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:hidden">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-cyan-400/15 dark:bg-[#08162b]"
              >
                <div className="font-mono-nums text-lg font-bold text-slate-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-slate-600 dark:text-slate-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
