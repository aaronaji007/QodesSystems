import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light' | 'auto';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'auto',
  onClick,
}) => {
  const isDark = theme === 'dark';

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="QODES Systems Home"
    >
      {/* Interlocking Dual-Line "QS" Monogram */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 p-[1.5px] shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-200">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <defs>
            <linearGradient id="qsCyan" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.6" stopColor="#0284C7" />
              <stop offset="1" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="qsWhite" x1="10" y1="10" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>

          {/* Q Outer & Inner Concentric Vault Lines */}
          <circle cx="18" cy="22" r="12" stroke="url(#qsCyan)" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
          <circle cx="18" cy="22" r="8.5" stroke="url(#qsWhite)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Q Diagonal Exit Stroke (Dual Line) */}
          <path d="M23 27L33 37" stroke="url(#qsCyan)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M21 29L29 37" stroke="url(#qsWhite)" strokeWidth="2" strokeLinecap="round" />

          {/* S Interlocking Ribbon (Dual Stroke weaving through Q) */}
          <path
            d="M33 13.5C31 9.5 24 9.5 24 14.5C24 20 34 21 34 26.5C34 31.5 26.5 32 23 29.5"
            stroke="url(#qsWhite)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 12C33 7.5 22 7.5 22 14.5C22 22 36 23 36 29C36 34.5 27 35.5 21 32"
            stroke="url(#qsCyan)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
