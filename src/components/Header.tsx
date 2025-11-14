'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="h-auto sticky top-0 w-full z-50 backdrop-blur transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Name */}
        <Link href="/" className="flex items-center space-x-8 transition-transform duration-300"> 
          <span className="text-base">
            Moe Na
          </span>
        </Link>
        {/* Theme Toggle */}
        <ThemeToggle/>
      </div>
    </header>
  );
} 