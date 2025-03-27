import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark-border transition-colors duration-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-base">
              Built by Moe Na with Next.js, Tailwind CSS, and <span className="text-red-500 animate-pulse">❤️</span>
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/wmoew" label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/mn1098/" label="LinkedIn" />
            <p className="text-base">
              nameng9189@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string | undefined; label: string }) {
  return (
    <Link
      href={href || ''}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base transition-all duration-300"
    >
      {label}
    </Link>
  );
} 