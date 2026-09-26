import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'auto',
}) => {
  const isDark = theme === 'dark';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="QODES Systems Home"
    >
      {/* Minimalist Tech Monogram */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 p-[1.5px] shadow-sm">
        <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center overflow-hidden relative">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <defs>
              <linearGradient id="qodesGradient" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E40AF" />
                <stop offset="0.5" stopColor="#2563EB" />
                <stop offset="1" stopColor="#0284C7" />
              </linearGradient>
            </defs>
            {/* Outer Geometric Ring */}
            <circle
              cx="19"
              cy="19"
              r="12"
              stroke="url(#qodesGradient)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Inner Core Node */}
            <circle cx="19" cy="19" r="4" fill="url(#qodesGradient)" />
            {/* Minimalist Intersecting Data Tail */}
            <path
              d="M26 26L33 33"
              stroke="url(#qodesGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <span
            className={`text-xl font-bold tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            QODES
          </span>
          <span
            className={`text-[9px] font-semibold tracking-[0.3em] uppercase leading-none mt-1 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            SYSTEMS
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
