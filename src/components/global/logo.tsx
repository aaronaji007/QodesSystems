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
          {/* Top-Left: Chunky Q Vault with Diagonal Spur */}
          <path 
            d="M 12 8 C 8 8 6 10 6 14 L 6 22 C 6 26 8 28 12 28 L 18 28 L 26 36 C 27.5 37.5 30 36.5 30 34.5 L 30 30 L 24 24 L 24 14 C 24 10 22 8 18 8 Z M 14 14 L 16 14 C 17.1 14 18 14.9 18 16 L 18 20 C 18 21.1 17.1 22 16 22 L 14 22 C 12.9 22 12 21.1 12 20 L 12 16 C 12 14.9 12.9 14 14 14 Z" 
            fill="#38BDF8" 
          />
          {/* Bottom-Right: Chunky S Curve Aligned Diagonally */}
          <path 
            d="M 36 20 C 40 20 42 22 42 26 L 42 34 C 42 38 40 40 36 40 L 28 40 C 24 40 22 38 22 34 L 28 34 C 28.5 34 29 34.5 29 35 C 29 35.5 29.5 36 30 36 L 35 36 C 36.1 36 37 35.1 37 34 L 37 31 C 37 29.9 36.1 29 35 29 L 27 29 C 23 29 21 27 21 23 L 21 21 L 26 21 L 26 23 C 26 24.1 26.9 25 28 25 L 35 25 C 36.5 25 37 24.5 37 23.5 C 37 22.5 36.5 22 35 22 L 29 22 C 29 20 31 20 36 20 Z" 
            fill="#FFFFFF" 
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
