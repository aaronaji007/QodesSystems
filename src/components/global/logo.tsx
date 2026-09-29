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
      {/* Grafein-Style Diagonal "QS" Monogram */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 p-[1.5px] shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-200">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Top-Left: Chunky Q Squircle with 45° Diagonal Spur */}
          <rect 
            x="7" 
            y="7" 
            width="18" 
            height="18" 
            rx="6" 
            stroke="#38BDF8" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <line 
            x1="18" 
            y1="18" 
            x2="24.5" 
            y2="24.5" 
            stroke="#38BDF8" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />

          {/* Bottom-Right: Clean, Unmistakable 2-Curve S Flow */}
          <path 
            d="M 39 23.5 H 30 C 25 23.5 25 29.5 29.5 29.5 H 35 C 39.5 29.5 39.5 36 34.5 36 H 25.5" 
            stroke="#FFFFFF" 
            strokeWidth="4.5" 
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
