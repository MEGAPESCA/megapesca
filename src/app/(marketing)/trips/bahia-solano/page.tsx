"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <main className="min-h-screen bg-black text-white">
      <MarketingHeader currentPath="/trips" />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-10">
        <div className="mb-6 text-sm text-zinc-500">
          <Link href="/trips" className="hover:text-zinc-800 transition">Travel</Link>
          <span className="mx-2">›</span>
          <span className="text-zinc-800">Bahía Solano</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_460px]">
          <div className="order-2 lg:order-1 flex lg:flex-col gap-3">
            {BAHIA_IMAGES.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                  activeImage === idx ? "border-[#d6a354]" : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                <Image src={img} alt={`Bahía Solano miniatura ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4]">
              <Image src={BAHIA_IMAGES[activeImage]} alt="Bahía Solano" fill className="object-cover" />
            </div>
          </div>

          <article className="order-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-lg">
            <h1 className="text-3xl font-semibold tracking-wide">BAHÍA SOLANO</h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-emerald-600 font-medium">In Stock</span>
              <span className="text-zinc-600">Costa Pacífica</span>
              <span className="text-amber-500">★★★★★</span>
              <span className="text-zinc-500">8 reviews</span>
            </div>

            <div className="mt-5 text-4xl font-semibold text-[#d94b4b] tracking-tight">
              Desde 3.500.000
              <span className="ml-3 text-xl text-zinc-500 font-normal">| USD (1900)</span>
            </div>

            <p className="mt-5 text-[#d94b4b] text-2xl">Tendencia</p>

            <ul className="mt-5 space-y-1 text-zinc-700 text-[22px] leading-tight">
              <li>• 5 días 4 noches</li>
              <li>• Pesca de gigantes</li>
              <li>• Hotel con playa privada</li>
              <li>• Gastronomía deliciosa</li>
            </ul>

            <p className="mt-6 text-[15px] leading-8 text-zinc-700">
              En este recorrido por el Pacífico vamos en busca de las especies deseadas: Pez Vela,
              Marlyn, Gallo, Mahi Mahi, Atunes, entre otras grandes especies. Las embarcaciones con
              nosotros son completamente equipadas y seguras, además podrás ir acompañado de capitán
              experimentado y guías durante las jornadas completas.
            </p>

            <div className="mt-6 rounded-md border border-emerald-300 bg-emerald-50/60 px-4 py-3 text-center text-emerald-700 text-2xl">
              Hurry! Solo <strong>4 Personas</strong>.
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center overflow-hidden rounded-md border border-zinc-300 bg-zinc-100">
                <button
                  type="button"
                  onClick={() => setQty((v) => Math.max(1, v - 1))}
                  className="h-12 w-10 text-xl hover:bg-zinc-200 transition"
                >
                  -
                </button>
                <span className="w-10 text-center text-lg">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((v) => v + 1)}
                  className="h-12 w-10 text-xl hover:bg-zinc-200 transition"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="flex-1 h-12 rounded-md bg-black text-white text-lg tracking-wide hover:bg-zinc-800 transition"
              >
                RESERVAR AHORA
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
