import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold rainbow-text">
        404
      </h1>
      <h2 className="">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-zinc-600 dark:text-zinc-400">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="rounded-lg border px-6 py-3 inline-block hover:no-underline"
      >
        Go Back Home
      </Link>
    </div>
  );
} 