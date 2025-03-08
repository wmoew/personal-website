'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-full p-2 transition-all duration-300 
                 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                 shadow-md dark:shadow-dark-glow"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-yellow-400 transform transition-transform duration-300 hover:rotate-90" />
      ) : (
        <MoonIcon className="h-5 w-5 text-indigo-700 transform transition-transform duration-300 hover:scale-110" />
      )}
    </button>
  );
} 