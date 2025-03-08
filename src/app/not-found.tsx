import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-zinc-900 dark:text-white">
        404
      </h1>
      <h2 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-zinc-600 dark:text-zinc-400">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
} 