"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/launch/homebahia1.JPG",
  "/launch/homellanos1.jpeg",
  "/launch/hometopocoro1.jpg",
];

function getNextIndex(current: number) {
  const choices = HERO_IMAGES.map((_, index) => index).filter(
    (index) => index !== current,
  );

  return choices[Math.floor(Math.random() * choices.length)] ?? current;
}

export default function TripsHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => getNextIndex(current));
    }, 1200 + Math.floor(Math.random() * 800));

    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section className="pb-10 pt-0 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="theme-panel relative overflow-hidden rounded-none border-x-0 border-t-0 border-border/70 bg-card/60 sm:rounded-[2rem] sm:border">
          <div className="relative min-h-[72svh] overflow-hidden sm:min-h-[560px] lg:min-h-[720px]">
            {HERO_IMAGES.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt="Viajes Megapesca"
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-opacity duration-700 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/34 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
            <div className="pointer-events-none absolute left-[14%] top-[18%] h-32 w-32 rounded-full bg-primary/12 blur-3xl" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-6 lg:p-8">
              <div className="w-full max-w-[20rem] sm:max-w-[36rem] lg:max-w-[48rem]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-primary/90 drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)] sm:text-[0.68rem]">
                  Temporada activa
                </p>

                <h1 className="mt-3 max-w-[12ch] font-serif text-[1.15rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:max-w-[20ch] sm:text-[1.95rem] lg:max-w-[24ch] lg:text-[2.75rem]">
                  <span className="block">Viajes creados para vivir</span>
                  <span className="block whitespace-nowrap text-[1.1em]">
                    la pesca con mas intensidad.
                  </span>
                </h1>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 sm:bottom-8">
              {HERO_IMAGES.map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-9 bg-primary shadow-[0_0_18px_rgba(236,182,75,0.4)]"
                      : "w-2.5 bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
