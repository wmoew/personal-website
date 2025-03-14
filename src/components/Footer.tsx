import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white transition-colors duration-300
                      dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-inner dark:shadow-zinc-800/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Moe Na. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              Built with Next.js, Tailwind CSS, and <span className="text-red-500 dark:text-red-400 animate-pulse">❤️</span>
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" label="GitHub" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" />
            <SocialLink href="https://twitter.com" label="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-zinc-600 transition-all duration-300 
                hover:text-zinc-900 hover:scale-110
                dark:text-zinc-400 dark:hover:text-white"
    >
      {label}
    </Link>
  );
} 