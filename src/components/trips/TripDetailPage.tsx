"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MarketingHeader from "@/components/layout/MarketingHeader";

type TripDetailPageProps = {
  title: string;
  location: string;
  reviews: number;
  priceCop: string;
  priceUsd: string;
  badge: string;
  highlights: string[];
  description: string[];
  availabilityMessage: string;
  images: string[];
};

function getReserveHref(title: string, qty: number) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!phone) {
    return "/contact";
  }

  const text = encodeURIComponent(
    `Hola, quiero reservar ${qty} cupo(s) para ${title} con Megapesca.`
  );

  return `https://wa.me/${phone}?text=${text}`;
}

export default function TripDetailPage({
  title,
  location,
  reviews,
  priceCop,
  priceUsd,
  badge,
  highlights,
  description,
  availabilityMessage,
  images,
}: TripDetailPageProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  const reserveHref = useMemo(() => getReserveHref(title, qty), [qty, title]);
  const reserveIsExternal = reserveHref.startsWith("https://");

  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-10">
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/trips" className="transition hover:text-foreground">
            Viajes
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">{title}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_460px]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                  activeImage === idx
                    ? "border-primary shadow-[0_10px_24px_rgba(214,163,84,0.25)]"
                    : "border-border hover:border-primary/60"
                }`}
              >
                <Image src={img} alt={`${title} miniatura ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          <div className="theme-panel-soft order-1 relative overflow-hidden lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4]">
              <Image src={images[activeImage]} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          <article className="theme-panel order-3 p-6">
            <p className="font-serif text-xs uppercase tracking-[0.24em] text-primary">{location}</p>
            <h1 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-foreground">{title}</h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="font-medium text-emerald-600 dark:text-emerald-300">Disponible</span>
              <span className="text-muted-foreground">{location}</span>
              <span className="text-primary">★★★★★</span>
              <span className="text-muted-foreground">{reviews} reviews</span>
            </div>

            <div className="mt-5 text-4xl font-semibold tracking-tight text-foreground">
              Desde {priceCop}
              <span className="ml-3 text-xl font-normal text-muted-foreground">| USD ({priceUsd})</span>
            </div>

            <p className="mt-5 text-2xl text-primary">{badge}</p>

            <ul className="mt-5 space-y-2 text-base leading-tight text-muted-foreground sm:text-lg">
              {highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-muted-foreground">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-lg text-emerald-700 dark:text-emerald-300 sm:text-2xl">
              {availabilityMessage}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center overflow-hidden rounded-xl border border-border bg-secondary/80">
                <button
                  type="button"
                  onClick={() => setQty((value) => Math.max(1, value - 1))}
                  className="h-12 w-10 text-xl transition hover:bg-secondary"
                >
                  -
                </button>
                <span className="w-10 text-center text-lg">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((value) => value + 1)}
                  className="h-12 w-10 text-xl transition hover:bg-secondary"
                >
                  +
                </button>
              </div>

              <a
                href={reserveHref}
                className="theme-gold-button h-12 flex-1 rounded-xl text-base tracking-wide"
                target={reserveIsExternal ? "_blank" : undefined}
                rel={reserveIsExternal ? "noopener noreferrer" : undefined}
              >
                RESERVAR AHORA
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
