"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

import ThemeToggle from "@/components/ThemeToggle";
import ConvexClientProvider from "@/components/ConvexClientProvider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return (
      <main className="theme-page grid min-h-screen place-items-center p-6">
        <div className="max-w-lg space-y-3 text-center">
          <h1 className="text-2xl font-semibold">Configuracion pendiente</h1>
          <p className="text-sm text-muted-foreground">
            Falta configurar Convex (`NEXT_PUBLIC_CONVEX_URL`) para usar el dashboard.
          </p>
          <Link href="/" className="theme-outline-button">
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return <DashboardLayoutWithAuth>{children}</DashboardLayoutWithAuth>;
}

function DashboardLayoutWithAuth({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { user, isLoaded } = useUser();

  useEffect(() => setMounted(true), []);

  if (!mounted || !isLoaded) return null;

  const userName = user?.fullName?.split(" ")[0] || "Usuario";

  return (
    <ConvexClientProvider>
      <div className="theme-page grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="flex flex-col justify-between border-r border-sidebar-border bg-sidebar/80 p-4 text-sidebar-foreground backdrop-blur-xl">
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-primary">Megapesca</h2>
              <p className="text-xs text-muted-foreground">Panel privado</p>
            </div>

            <nav className="space-y-2 text-sm">
              <Link
                href="/dashboard/client"
                className="block rounded-xl px-3 py-2 transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                Cliente — Resumen
              </Link>
              <Link
                href="/dashboard/admin"
                className="block rounded-xl px-3 py-2 transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                Admin — Resumen
              </Link>
            </nav>
          </div>

          <div className="mt-6 border-t border-sidebar-border pt-3 text-xs text-muted-foreground">
            Protegido con Clerk + Convex
          </div>
        </aside>

        <main className="relative overflow-hidden p-6">
          <header className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <h1 className="text-xl font-semibold tracking-wide">
              Hola, <span className="text-primary">{userName}</span>
            </h1>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in" className="theme-outline-button">
                  Iniciar sesion
                </Link>
              </SignedOut>
            </div>
          </header>

          {children}
        </main>
      </div>
    </ConvexClientProvider>
  );
}
