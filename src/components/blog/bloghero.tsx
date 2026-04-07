"use client";

import Image from "next/image";
import Link from "next/link";

type BlogHeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
};

export default function BlogHero({
  title = "Que destinos elegir?",
  subtitle = "Ideas, guias y experiencias para elegir tu proxima aventura de pesca en Colombia.",
  ctaLabel = "Ver destinos",
  ctaHref = "/trips",
  imageSrc = "/launch/01.jpg",
}: BlogHeroProps) {
  return (
    <div className="theme-panel relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-[-120px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative h-[420px] w-full sm:h-[520px]">
        <Image src={imageSrc} alt="Hero Blog Megapesca" fill className="object-cover" priority />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="absolute inset-0 flex items-center text-white">
        <div className="w-full px-6 py-10 sm:px-10">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/70">
              BLOG · MEGAPESCA
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{subtitle}</p>

            <div className="mt-8 flex items-center gap-3">
              <Link href={ctaHref} className="theme-gold-button gap-3">
                {ctaLabel} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
