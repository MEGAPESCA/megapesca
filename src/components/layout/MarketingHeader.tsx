"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Tienda" },
  { href: "/trips", label: "Viajes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contáctenos" },
  { href: "/first-opportunity", label: "First-Opportunity" },
];

type MarketingHeaderProps = {
  currentPath?: string;
};

export default function MarketingHeader({ currentPath }: MarketingHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-screen border-b border-[#d6a354]/20 bg-gradient-to-r from-black/85 via-black/80 to-black/85 backdrop-blur-xl">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="relative block h-12 w-[145px] sm:h-16 sm:w-[260px] transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Megapesca"
        >
          <Image
            src="/brand/megapesca-logo.png"
            alt="Megapesca"
            fill
            sizes="190px"
            className="object-contain object-left drop-shadow-[0_6px_12px_rgba(214,163,84,0.25)]"
            priority
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-2 text-sm text-zinc-300">
          {NAV_LINKS.map((item) => {
            const isActive = item.href === currentPath;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-white/12 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="sm:hidden border border-[#d6a354]/35 bg-white/5 p-2 hover:bg-white/10 transition"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white mt-1.5" />
            <span className="block h-0.5 w-5 bg-white mt-1.5" />
          </button>

          <SignedOut>
            <Link
              href="/sign-in"
              className="border border-[#d6a354]/35 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-all duration-300"
            >
              Ingresar
            </Link>
            <Link
              href="/sign-up"
              className="bg-gradient-to-r from-[#f1c981] via-[#d6a354] to-[#b88739] text-black font-semibold px-4 py-2 text-sm shadow-[0_8px_24px_rgba(214,163,84,0.3)] hover:brightness-110 transition-all duration-300"
            >
              Registrarse
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="border border-[#d6a354]/35 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-all duration-300"
            >
              Mi panel
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#d6a354]/20 bg-black/95">
          <nav className="px-4 py-3 flex flex-col gap-2 text-sm text-zinc-200">
            {NAV_LINKS.map((item) => {
              const isActive = item.href === currentPath;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-2 transition ${
                    isActive ? "bg-white/12 text-white" : "hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
