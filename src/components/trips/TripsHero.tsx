"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/launch/heroviajes1.jpg",
  "/launch/heroviajes2.jpg",
  "/launch/heroviajes3.jpg",
  "/launch/heroviajes4.jpg",
];

function getReserveHref() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!phone) {
    return "/contact";
  }

  const text = encodeURIComponent(
    "Hola, quiero reservar un viaje con Megapesca.",
  );

  return `https://wa.me/${phone}?text=${text}`;
}

function getNextIndex(current: number) {
  const choices = HERO_IMAGES.map((_, index) => index).filter(
    (index) => index !== current,
  );

  return choices[Math.floor(Math.random() * choices.length)] ?? current;
}

export default function TripsHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reserveHref = getReserveHref();
  const reserveIsExternal = reserveHref.startsWith("https://");

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

            <div className="absolute inset-x-0 bottom-36 p-5 sm:top-auto sm:bottom-16 sm:translate-y-0 sm:p-6 lg:bottom-20 lg:p-8">
              <div className="w-full max-w-[18.5rem] sm:max-w-[30rem] lg:max-w-[36rem]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-primary/90 drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)] sm:text-[0.68rem]">
                  Temporada activa
                </p>

                <h1 className="mt-3 max-w-[14ch] font-serif text-[1.08rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:hidden">
                  <span className="block">Viajes creados</span>
                  <span className="block">para vivir la pesca</span>
                  <span className="block">con mas intensidad.</span>
                </h1>

                <h1 className="mt-3 hidden max-w-[18ch] font-serif text-[1.85rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:block lg:max-w-[20ch] lg:text-[2.45rem]">
                  <span className="block">Viajes creados para vivir</span>
                  <span className="block whitespace-nowrap text-[1.1em]">
                    la pesca con mas intensidad.
                  </span>
                </h1>

                <a
                  href={reserveHref}
                  target={reserveIsExternal ? "_blank" : undefined}
                  rel={reserveIsExternal ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_16px_36px_rgba(236,182,75,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:mt-6 sm:px-6 sm:py-3.5 sm:text-[0.76rem]"
                >
                  Reservar viaje
                </a>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 sm:bottom-8">
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
