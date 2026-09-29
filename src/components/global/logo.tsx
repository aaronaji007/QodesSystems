import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light' | 'auto';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'light',
  onClick,
}) => {
  const logoSrc = theme === 'dark' ? '/images/qodes-logo-dark.svg' : '/images/qodes-logo.svg';

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label="QODES Systems Home"
    >
      <div className="relative h-11 w-48">
        <Image
          src={logoSrc}
          alt="QODES Systems"
          fill
          priority
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
};

export default Logo;
