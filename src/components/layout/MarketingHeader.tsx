"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Tienda" },
  { href: "/trips", label: "Viajes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contactenos" },
  { href: "/first-opportunity", label: "First-Opportunity" },
];

type MarketingHeaderProps = {
  currentPath?: string;
};

export default function MarketingHeader({ currentPath }: MarketingHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-screen border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative block h-12 w-[145px] transition-transform duration-300 hover:scale-[1.03] sm:h-16 sm:w-[260px]"
          aria-label="Megapesca"
        >
          <Image
            src="/brand/megapesca-logo.png"
            alt="Megapesca"
            fill
            sizes="190px"
            className="object-contain object-left drop-shadow-[0_6px_12px_rgba(214,163,84,0.18)]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
          {NAV_LINKS.map((item) => {
            const isActive = item.href === currentPath;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "rounded-full bg-card px-3 py-2 text-foreground shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
                    : "rounded-full px-3 py-2 text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-border/80 bg-background/70 p-2 transition hover:bg-secondary sm:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
          </button>

          <SignedOut>
            <Link href="/sign-in" className="theme-outline-button hidden sm:inline-flex">
              Ingresar
            </Link>
            <Link href="/sign-up" className="theme-gold-button hidden px-4 py-2 sm:inline-flex">
              Registrarse
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard" className="theme-outline-button hidden sm:inline-flex">
              Mi panel
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/70 bg-background/95 sm:hidden">
          <div className="px-4 pt-3">
            <ThemeToggle className="w-full justify-center" />
          </div>

          <nav className="flex flex-col gap-2 px-4 py-3 text-sm text-muted-foreground">
            {NAV_LINKS.map((item) => {
              const isActive = item.href === currentPath;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "rounded-xl bg-card px-3 py-2 text-foreground"
                      : "rounded-xl px-3 py-2 transition hover:bg-secondary hover:text-foreground"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <SignedOut>
              <Link
                href="/sign-in"
                className="theme-outline-button mt-2 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ingresar
              </Link>
              <Link
                href="/sign-up"
                className="theme-gold-button w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Registrarse
              </Link>
            </SignedOut>

            <SignedIn>
              <Link
                href="/dashboard"
                className="theme-outline-button mt-2 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mi panel
              </Link>
            </SignedIn>
          </nav>
        </div>
      )}
    </header>
  );
}
