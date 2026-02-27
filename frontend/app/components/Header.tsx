"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const nav = [
  { href: "/developers", label: "Разработчики" },
  { href: "/builds", label: "Постройки" },
  { href: "/skins", label: "Скины" },
  { href: "/mods", label: "Моды" },
  { href: "/seeds", label: "Сиды" },
] as const;

export function Header() {
  const { user, loading, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100" aria-label="RuCraft — на главную">
          <span className="text-lg">RuCraft</span>
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {loading ? (
            <span className="text-sm text-zinc-400">...</span>
          ) : user ? (
            <>
              <Link
                href="/profile"
                className="rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                Профиль
              </Link>
              {user.role === "admin" && (
                <Link
                  href="/admin"
                  className="rounded-md px-3 py-2 text-sm text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-zinc-800"
                >
                  Админ
                </Link>
              )}
              <button
                type="button"
                onClick={() => logout()}
                className="rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                Выход
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Войти
              </Link>
              <Link
                href="/auth/register"
                className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Зарегистрироваться
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
