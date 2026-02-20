"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HomeCarousel from "@/components/home/HomeCarousel";
import DestinationsSection from "@/components/home/DestinationsSection";
import MarketingHeader from "@/components/layout/MarketingHeader";
import ShopPromoSection from "@/components/home/ShopPromoSection";
import AboutMegapescaSection from "@/components/home/AboutMegapescaSection";

const HOME_SLIDES = ["/launch/01.jpg", "/launch/02.jpg"];

export default function Home() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Permitir anular redirección con ?noredirect=1
    const params = new URLSearchParams(window.location.search);
    const noRedirect = params.get("noredirect") === "1";

    // Si ya redirigió una vez, no vuelve a redirigir
    const already = localStorage.getItem("mp_redirected_once") === "1";

    if (!noRedirect && !already) {
      localStorage.setItem("mp_redirected_once", "1");
      // RUTA REAL (los route groups no aparecen en la URL)
      router.replace("/first-opportunity");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-zinc-400 animate-pulse">Cargando Megapesca...</p>
          {/* Enlace de respaldo si falla JS */}
          <Link href="/first-opportunity" className="text-xs text-[#d6a354] underline underline-offset-4">
            Ir ahora
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <MarketingHeader currentPath="/" />

      <HomeCarousel slides={HOME_SLIDES} />

      <DestinationsSection />

      <section className="pb-14 sm:pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
            Descubre nuevas experiencias
          </p>
          <Link
            href="/trips"
            className="group inline-flex items-center gap-3 rounded-full border border-[#d6a354]/50 bg-gradient-to-r from-[#f1c981] via-[#d6a354] to-[#b88739] px-7 py-3 text-sm font-semibold tracking-wide text-black shadow-[0_10px_30px_rgba(214,163,84,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:from-[#f6d798] hover:via-[#e1b46a] hover:to-[#c89242] hover:shadow-[0_20px_42px_rgba(214,163,84,0.55)]"
          >
            Más destinos populares
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/15 text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90">
              +
            </span>
          </Link>
        </div>
      </section>

      <ShopPromoSection />

      <AboutMegapescaSection />

      <footer className="border-t border-white/10 text-center text-xs text-zinc-400 py-4">
        © {new Date().getFullYear()} Megapesca. Todos los derechos reservados.
      </footer>
    </main>
  );
}
