import type {ProjectItem} from '../data/portfolio';

interface ProjectPreviewProps {
  variant: ProjectItem['previewVariant'];
  title: string;
}

export function ProjectPreview({variant, title}: ProjectPreviewProps) {
  if (variant === 'fintrack') {
    return (
      <div
        aria-label={`${title} interface preview`}
        className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#071120] p-3 text-slate-200 dark:border-slate-700/60"
      >
        <div className="flex h-full gap-2.5">
          <div className="hidden w-16 shrink-0 flex-col justify-between rounded-lg bg-[#0c1a30] p-2 sm:flex">
            <div className="space-y-1.5">
              <div className="h-2 w-8 rounded bg-cyan-400/70" />
              <div className="h-1.5 w-10 rounded bg-slate-700" />
              <div className="h-1.5 w-9 rounded bg-slate-800" />
              <div className="h-1.5 w-11 rounded bg-slate-800" />
            </div>
            <div className="h-2 w-7 rounded bg-slate-700/80" />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-[#0d1f38] p-2">
                <div className="text-[9px] text-slate-400">Net Balance</div>
                <div className="font-mono-nums mt-0.5 text-xs font-semibold text-white">$48,920</div>
              </div>
              <div className="rounded-lg bg-[#0d1f38] p-2">
                <div className="text-[9px] text-slate-400">Monthly Spend</div>
                <div className="font-mono-nums mt-0.5 text-xs font-semibold text-cyan-300">$3,410</div>
              </div>
              <div className="rounded-lg bg-[#0d1f38] p-2">
                <div className="text-[9px] text-slate-400">Savings Rate</div>
                <div className="font-mono-nums mt-0.5 text-xs font-semibold text-emerald-300">34.2%</div>
              </div>
            </div>
            <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-[#0b192e] p-2.5">
              {[38, 56, 48, 72, 62, 86, 68, 94, 78, 88].map((height, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t ${
                    index === 7 ? 'bg-cyan-400' : 'bg-cyan-500/40'
                  }`}
                  style={{height: `${height}%`}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'shopvista') {
    return (
      <div
        aria-label={`${title} interface preview`}
        className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-800 via-slate-900 to-[#081526] p-3 text-slate-100 dark:border-slate-700/60"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <span className="font-semibold tracking-tight text-white">ShopVista</span>
          <span className="text-slate-300">Catalog · Cart (2)</span>
        </div>
        <div className="mt-2.5 grid h-[calc(100%-2rem)] grid-cols-12 gap-2.5">
          <div className="col-span-5 flex flex-col justify-center">
            <p className="text-xs font-semibold leading-snug text-white">
              Shop the latest trends
            </p>
            <p className="mt-1 text-[10px] leading-tight text-slate-300">
              Curated essentials with instant checkout
            </p>
            <div className="mt-2.5 inline-flex w-fit rounded bg-cyan-400 px-2 py-0.5 text-[9px] font-semibold text-slate-950">
              Explore Drop
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-2">
            <div className="flex flex-col justify-between rounded-lg bg-slate-700/40 p-2">
              <div className="h-11 rounded bg-gradient-to-b from-slate-500/50 to-slate-700/60" />
              <div className="mt-1.5 text-[9px] leading-tight">
                <div className="truncate text-slate-200">Merino Knit</div>
                <div className="font-mono-nums text-cyan-300">$84</div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-slate-700/40 p-2">
              <div className="h-11 rounded bg-gradient-to-b from-cyan-700/40 to-slate-800/70" />
              <div className="mt-1.5 text-[9px] leading-tight">
                <div className="truncate text-slate-200">Overshirt</div>
                <div className="font-mono-nums text-cyan-300">$118</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'taskify') {
    return (
      <div
        aria-label={`${title} interface preview`}
        className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-[#0b132b] via-[#13183b] to-[#081529] p-3 text-slate-100 dark:border-slate-700/60"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-white">AI-Powered Task Management</div>
            <div className="mt-0.5 text-[10px] text-slate-300">Sprint 14 · 84% Velocity</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-1.5 rounded-lg bg-white/5 p-2">
              <div className="text-[9px] font-medium text-cyan-300">In Progress</div>
              <div className="h-2 w-full rounded bg-slate-600/70" />
              <div className="h-2 w-3/4 rounded bg-slate-700/70" />
            </div>
            <div className="space-y-1.5 rounded-lg bg-white/5 p-2">
              <div className="text-[9px] font-medium text-sky-300">Review</div>
              <div className="h-2 w-5/6 rounded bg-slate-600/70" />
              <div className="h-2 w-2/3 rounded bg-slate-700/70" />
            </div>
            <div className="space-y-1.5 rounded-lg bg-white/5 p-2">
              <div className="text-[9px] font-medium text-emerald-300">Shipped</div>
              <div className="h-2 w-full rounded bg-emerald-500/40" />
              <div className="h-2 w-4/5 rounded bg-emerald-500/25" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div
        aria-label={`${title} interface preview`}
        className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#071324] p-3 text-slate-100 dark:border-slate-700/60"
      >
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-semibold text-white">Telemetry Overview</span>
          <span className="font-mono-nums text-emerald-300">99.98% Uptime</span>
        </div>
        <svg viewBox="0 0 260 100" className="mt-3 h-24 w-full">
          <path
            d="M0 78 L35 66 L70 70 L105 42 L140 50 L175 26 L210 32 L260 14"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0 78 L35 66 L70 70 L105 42 L140 50 L175 26 L210 32 L260 14 V100 H0 Z"
            fill="#22d3ee"
            fillOpacity="0.12"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'clouddocs') {
    return (
      <div
        aria-label={`${title} interface preview`}
        className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#091528] p-3 text-slate-200 dark:border-slate-700/60"
      >
        <div className="rounded-md border border-slate-700 bg-[#06101f] px-2.5 py-1.5 text-[10px] text-slate-400">
          Search API references &amp; RFCs...
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="col-span-1 space-y-1.5 border-r border-slate-800 pr-2">
            <div className="h-2 w-full rounded bg-cyan-400/50" />
            <div className="h-2 w-4/5 rounded bg-slate-700" />
            <div className="h-2 w-3/4 rounded bg-slate-800" />
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-2.5 w-1/2 rounded bg-slate-200/80" />
            <div className="h-2 w-full rounded bg-slate-700/80" />
            <div className="h-2 w-5/6 rounded bg-slate-700/60" />
            <div className="h-8 rounded bg-[#050d1a] p-1.5 font-mono-nums text-[9px] text-cyan-300">
              GET /v2/workspaces/:id
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label={`${title} interface preview`}
      className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#081322] p-3 text-slate-200 dark:border-slate-700/60"
    >
      <div className="flex items-center justify-between text-[10px] text-slate-400">
        <span>Webhook Inspector</span>
        <span className="font-mono-nums text-cyan-300">200 OK · 19ms</span>
      </div>
      <div className="mt-3 space-y-1.5 rounded-lg bg-[#050c17] p-2.5 font-mono-nums text-[10px]">
        <div className="text-cyan-300">POST /hooks/stripe</div>
        <div className="text-slate-400">x-signature: sha256=9f8e...</div>
        <div className="text-emerald-300">verified: true</div>
      </div>
    </div>
  );
}
