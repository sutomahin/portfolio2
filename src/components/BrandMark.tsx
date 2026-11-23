interface BrandMarkProps {
  className?: string;
}

export function BrandMark({className = 'w-7 h-7'}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 36 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 26L13.5 6H18L10.5 20.5H17.5L15.2 26H3Z"
        className="fill-cyan-500 dark:fill-cyan-400"
      />
      <path
        d="M17.5 6H33L30.4 11H24.8L17.2 26H11.6L19.2 11H15L17.5 6Z"
        className="fill-slate-900 dark:fill-white"
      />
    </svg>
  );
}
