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
  title = "¿Qué destinos elegir?",
  subtitle = "Ideas, guías y experiencias para elegir tu próxima aventura de pesca en Colombia.",
  ctaLabel = "Ver destinos",
  ctaHref = "/trips",
  imageSrc = "/launch/01.jpg",
}: BlogHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
      {/* Glow dorado */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[#d6a354]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-[-120px] h-72 w-72 rounded-full bg-[#d6a354]/10 blur-3xl" />

      {/* Imagen */}
      <div className="relative h-[420px] w-full sm:h-[520px]">
        <Image
          src={imageSrc}
          alt="Hero Blog Megapesca"
          fill
          className="object-cover"
          priority
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 py-10 sm:px-10">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-400">
              BLOG · MEGAPESCA
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300">
              {subtitle}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 rounded-full border border-[#d6a354]/50 bg-gradient-to-r from-[#f1c981] via-[#d6a354] to-[#b88739] px-7 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-1"
              >
                {ctaLabel} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}