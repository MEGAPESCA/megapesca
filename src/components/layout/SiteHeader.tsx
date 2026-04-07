"use client";

import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="relative z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full flex-col items-center justify-center py-3 sm:flex-row sm:justify-between sm:px-8 sm:py-4">
        <Link href="/" className="flex items-center justify-center">
          <div className="relative flex h-32 w-auto items-center justify-center sm:h-40">
            <Image
              src="/brand/megapesca-logo.png"
              alt="Megapesca"
              fill
              sizes="(max-width: 640px) 80vw, 400px"
              className="object-contain drop-shadow-[0_4px_12px_rgba(214,163,84,0.24)]"
              priority
            />
          </div>
        </Link>

        <nav className="mt-2 hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <Link href="/first-opportunity#lanzamiento" className="transition hover:text-foreground">
            Lanzamiento
          </Link>
          <Link href="/first-opportunity#suscribe" className="transition hover:text-foreground">
            Suscribete
          </Link>
        </nav>

        <ThemeToggle className="mt-4 sm:mt-0" />
      </div>
    </header>
  );
}
