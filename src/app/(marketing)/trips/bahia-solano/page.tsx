"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MarketingHeader from "@/components/layout/MarketingHeader";

const BAHIA_IMAGES = [
  "/launch/homebahia1.JPG",
  "/launch/homebahia2.JPG",
  "/launch/homebahia3.JPG",
];

export default function BahiaSolanoPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-10">
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/trips" className="transition hover:text-foreground">
            Travel
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Bahia Solano</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_460px]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {BAHIA_IMAGES.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                  activeImage === idx ? "border-primary shadow-[0_10px_24px_rgba(214,163,84,0.25)]" : "border-border hover:border-primary/60"
                }`}
              >
                <Image src={img} alt={`Bahia Solano miniatura ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          <div className="theme-panel-soft order-1 relative overflow-hidden lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4]">
              <Image src={BAHIA_IMAGES[activeImage]} alt="Bahia Solano" fill className="object-cover" />
            </div>
          </div>

          <article className="theme-panel order-3 p-6">
            <h1 className="text-3xl font-semibold tracking-wide">BAHIA SOLANO</h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="font-medium text-emerald-600 dark:text-emerald-300">Disponible</span>
              <span className="text-muted-foreground">Costa Pacifica</span>
              <span className="text-primary">★★★★★</span>
              <span className="text-muted-foreground">8 reviews</span>
            </div>

            <div className="mt-5 text-4xl font-semibold tracking-tight text-foreground">
              Desde 3.500.000
              <span className="ml-3 text-xl font-normal text-muted-foreground">| USD (1900)</span>
            </div>

            <p className="mt-5 text-2xl text-primary">Tendencia</p>

            <ul className="mt-5 space-y-1 text-lg leading-tight text-muted-foreground sm:text-[22px]">
              <li>• 5 dias 4 noches</li>
              <li>• Pesca de gigantes</li>
              <li>• Hotel con playa privada</li>
              <li>• Gastronomia deliciosa</li>
            </ul>

            <p className="mt-6 text-[15px] leading-8 text-muted-foreground">
              En este recorrido por el Pacifico vamos en busca de las especies deseadas: Pez Vela,
              Marlyn, Gallo, Mahi Mahi, Atunes, entre otras grandes especies. Las embarcaciones con
              nosotros son completamente equipadas y seguras, ademas podras ir acompanado de capitan
              experimentado y guias durante las jornadas completas.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-lg text-emerald-700 dark:text-emerald-300 sm:text-2xl">
              Hurry! Solo <strong>4 Personas</strong>.
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center overflow-hidden rounded-xl border border-border bg-secondary/80">
                <button
                  type="button"
                  onClick={() => setQty((v) => Math.max(1, v - 1))}
                  className="h-12 w-10 text-xl transition hover:bg-secondary"
                >
                  -
                </button>
                <span className="w-10 text-center text-lg">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((v) => v + 1)}
                  className="h-12 w-10 text-xl transition hover:bg-secondary"
                >
                  +
                </button>
              </div>
              <button type="button" className="theme-gold-button h-12 flex-1 rounded-xl text-base tracking-wide">
                RESERVAR AHORA
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
