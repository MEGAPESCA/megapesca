"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type HomeSlide = {
  src: string;
  title: string;
  eyebrow: string;
  href: string;
  ctaLabel: string;
  fit?: "cover" | "contain";
  position?: string;
  imageClassName?: string;
  panelClassName?: string;
  overlayClassName?: string;
};

type HomeCarouselProps = {
  slides: HomeSlide[];
};

export default function HomeCarousel({ slides }: HomeCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, [slides]);

  return (
    <section className="relative h-[68svh] min-h-[520px] w-full overflow-hidden border-b border-border/70 sm:h-[72vh] sm:min-h-[560px] lg:h-[74vh] lg:min-h-[620px] xl:h-[78vh]">
      {slides.map((slide, index) => {
        const isContain = slide.fit === "contain";

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`relative h-full w-full ${slide.panelClassName ?? "bg-black"}`}>
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                style={{
                  objectFit: isContain ? "contain" : "cover",
                  objectPosition: slide.position ?? "center center",
                }}
                className={slide.imageClassName ?? ""}
              />

              <div
                className={
                  slide.overlayClassName ??
                  "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.32)_38%,rgba(0,0,0,0.76)_100%)]"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/18 to-transparent" />
            </div>

            <Link
              href={slide.href}
              className="absolute inset-0 z-[1] block"
              aria-label={`${slide.ctaLabel}: ${slide.title}`}
            />

            <div className="absolute inset-0 z-[2] flex items-end pointer-events-none">
              <div className="w-full px-5 pb-18 pt-16 sm:px-8 sm:pb-20 md:px-10 lg:px-12 lg:pb-24">
                <div className="relative max-w-[18rem] sm:max-w-[30rem] lg:max-w-[40rem]">
                  <div className="pointer-events-none absolute -left-8 top-0 h-28 w-28 rounded-full bg-primary/20 blur-3xl sm:h-36 sm:w-36" />
                  <div className="pointer-events-none absolute -bottom-6 left-12 h-24 w-24 rounded-full bg-primary/12 blur-3xl sm:h-32 sm:w-32" />

                  <p className="relative mb-3 font-serif text-[11px] font-medium uppercase tracking-[0.28em] text-primary sm:text-xs">
                    {slide.eyebrow}
                  </p>

                  <h1 className="relative text-balance font-serif text-[clamp(2.25rem,8vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-white [text-shadow:0_12px_30px_rgba(0,0,0,0.42)]">
                    {slide.title}
                  </h1>

                  <div className="relative mt-6 flex items-center">
                    <span className="theme-gold-button gap-3 px-5 py-2.5 text-xs uppercase tracking-[0.18em] sm:text-sm">
                      {slide.ctaLabel}
                      <span aria-hidden="true">+</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-white/55 hover:bg-white/80"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
