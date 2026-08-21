"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MarketingHeader from "@/components/layout/MarketingHeader";

type ReviewTestimonial = {
  quote: string;
  author: string;
  meta?: string;
};

type TripDetailPageProps = {
  title: string;
  location: string;
  reviews: number;
  ratingValue?: number;
  statusLabel?: string;
  reviewsLabel?: string;
  priceCop: number;
  priceUsd: number;
  priceReferenceLabel?: string;
  badge: string;
  highlights: string[];
  description: string[];
  includedItems?: string[];
  availabilityMessage: string;
  images: string[];
  reviewTestimonials?: ReviewTestimonial[];
  reserveButtonLabel?: string;
};

function getReserveHref(title: string, qty: number) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!phone) {
    return "/contact";
  }

  const text = encodeURIComponent(
    `Hola, quiero reservar ${qty} cupo(s) para ${title} con Megapesca.`,
  );

  return `https://wa.me/${phone}?text=${text}`;
}

function formatCop(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

export default function TripDetailPage({
  title,
  location,
  reviews,
  ratingValue = 5,
  statusLabel = "Prontamente",
  reviewsLabel,
  priceCop,
  priceUsd,
  priceReferenceLabel,
  badge,
  highlights,
  description,
  includedItems = [],
  availabilityMessage,
  images,
  reviewTestimonials = [],
  reserveButtonLabel = "RESERVAR AHORA",
}: TripDetailPageProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  const reserveHref = useMemo(() => getReserveHref(title, qty), [qty, title]);
  const reserveIsExternal = reserveHref.startsWith("https://");
  const formattedCop = useMemo(() => formatCop(priceCop), [priceCop]);
  const formattedUsd = useMemo(() => formatUsd(priceUsd), [priceUsd]);
  const roundedRating = Math.max(0, Math.min(5, Math.round(ratingValue)));
  const ratingText = ratingValue.toFixed(1);
  const reviewCountLabel =
    reviewsLabel ?? `${reviews} ${reviews === 1 ? "opinion" : "opiniones"}`;

  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-10">
        <div className="mb-6 hidden text-sm text-muted-foreground sm:block">
          <Link href="/trips" className="transition hover:text-foreground">
            Viajes
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">{title}</span>
        </div>

        <div className="theme-panel mb-5 p-5 sm:hidden">
          <p className="font-serif text-[0.7rem] uppercase tracking-[0.24em] text-primary">
            {location}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-foreground">
            {title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-medium text-emerald-600 dark:text-emerald-300">
              {statusLabel}
            </span>
            <span className="text-muted-foreground">{location}</span>
            <span
              className="flex items-center gap-1 text-primary"
              aria-label={`Calificacion de ${ratingText} sobre 5`}
            >
              {Array.from({ length: 5 }, (_, idx) => (
                <span
                  key={`mobile-star-${idx}`}
                  aria-hidden="true"
                  className={idx < roundedRating ? "" : "opacity-30"}
                >
                  {"\u2605"}
                </span>
              ))}
            </span>
            <span className="text-muted-foreground">
              {ratingText} · {reviewCountLabel}
            </span>
          </div>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Precio por viajero
            </p>
            <div className="mt-2 text-[2.2rem] font-semibold leading-none tracking-tight text-foreground">
              Desde {formattedCop}
            </div>
            <span className="mt-3 inline-flex rounded-full border border-border bg-secondary/70 px-3 py-1 text-sm text-muted-foreground">
              USD {formattedUsd} aprox.
            </span>
            {priceReferenceLabel ? (
              <p className="mt-3 text-xs leading-6 text-muted-foreground">
                {priceReferenceLabel}
              </p>
            ) : null}
          </div>

          <p className="mt-5 text-[2rem] leading-none text-primary">{badge}</p>
          <div className="mt-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 shadow-[0_12px_28px_rgba(214,163,84,0.12)]">
            <span className="font-serif text-xs uppercase tracking-[0.24em] text-primary">
              Sello Mega Pesca
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_460px]">
          <div className="order-1 min-w-0 lg:order-2">
            <div className="theme-panel-soft relative overflow-hidden">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4]">
                <Image
                  src={images[activeImage]}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>

            <div className="no-scrollbar mt-4 flex max-w-full gap-3 overflow-x-auto pb-1 lg:hidden">
              {images.map((img, idx) => (
                <button
                  key={`${img}-mobile`}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition ${
                    activeImage === idx
                      ? "border-primary shadow-[0_10px_24px_rgba(214,163,84,0.25)]"
                      : "border-border hover:border-primary/60"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${title} miniatura ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="order-2 hidden gap-3 lg:order-1 lg:flex lg:flex-col">
            {images.map((img, idx) => (
              <button
                key={`${img}-desktop`}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                  activeImage === idx
                    ? "border-primary shadow-[0_10px_24px_rgba(214,163,84,0.25)]"
                    : "border-border hover:border-primary/60"
                }`}
              >
                <Image
                  src={img}
                  alt={`${title} miniatura ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <article className="theme-panel order-3 p-6">
            <div className="hidden sm:block">
              <p className="font-serif text-xs uppercase tracking-[0.24em] text-primary">
                {location}
              </p>
              <h1 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-foreground">
                {title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                <span className="font-medium text-emerald-600 dark:text-emerald-300">
                  {statusLabel}
                </span>
                <span className="text-muted-foreground">{location}</span>
                <span
                  className="flex items-center gap-1 text-primary"
                  aria-label={`Calificacion de ${ratingText} sobre 5`}
                >
                  {Array.from({ length: 5 }, (_, idx) => (
                    <span
                      key={`desktop-star-${idx}`}
                      aria-hidden="true"
                      className={idx < roundedRating ? "" : "opacity-30"}
                    >
                      {"\u2605"}
                    </span>
                  ))}
                </span>
                <span className="text-muted-foreground">
                  {ratingText} · {reviewCountLabel}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Precio por viajero
                </p>
                <div className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
                  Desde {formattedCop}
                </div>
                <span className="mt-3 inline-flex rounded-full border border-border bg-secondary/70 px-3 py-1 text-sm text-muted-foreground">
                  USD {formattedUsd} aprox.
                </span>
                {priceReferenceLabel ? (
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">
                    {priceReferenceLabel}
                  </p>
                ) : null}
              </div>

              <p className="mt-5 text-2xl text-primary">{badge}</p>
              <div className="mt-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 shadow-[0_12px_28px_rgba(214,163,84,0.12)]">
                <span className="font-serif text-xs uppercase tracking-[0.24em] text-primary">
                  Sello Mega Pesca
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-base leading-tight text-muted-foreground sm:mt-5 sm:text-lg">
              {highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            {includedItems.length > 0 ? (
              <section className="mt-8">
                <p className="font-serif text-xs uppercase tracking-[0.24em] text-primary">
                  Tu experiencia incluye
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {includedItems.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-secondary/45 px-4 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:min-h-[112px]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-xs font-semibold tracking-[0.18em] text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-6 text-foreground/90 sm:text-[15px]">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-muted-foreground">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {reviewTestimonials.length > 0 ? (
              <section className="mt-8">
                <p className="font-serif text-xs uppercase tracking-[0.24em] text-primary">
                  Lo que dicen los viajeros
                </p>
                <div className="mt-4 grid gap-4">
                  {reviewTestimonials.map((testimonial) => (
                    <div
                      key={`${testimonial.author}-${testimonial.quote}`}
                      className="rounded-2xl border border-border bg-secondary/50 p-4"
                    >
                      <p className="text-sm leading-7 text-foreground/90">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-3">
                        <p className="text-sm font-medium text-foreground">
                          {testimonial.author}
                        </p>
                        {testimonial.meta ? (
                          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            {testimonial.meta}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

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
                {reserveButtonLabel}
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
