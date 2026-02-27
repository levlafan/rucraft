import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-6">
        <Link
          href="/"
          className="font-semibold text-zinc-700 dark:text-zinc-300"
          aria-label="RuCraft — на главную"
        >
          RuCraft
        </Link>
      </div>
    </footer>
  );
}
