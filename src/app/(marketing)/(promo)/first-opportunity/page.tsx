"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import HeroCarousel from "@/components/launch/HeroCarousel";
import SubscribeForm from "@/components/launch/SubscribeForm";

export default function FirstOpportunity() {
  const router = useRouter();
  const [clicks, setClicks] = useState(0);

  const handleSecretClick = () => {
    setClicks((prev) => prev + 1);
    if (clicks + 1 >= 3) {
      setClicks(0);
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="lanzamiento" className="relative h-screen overflow-hidden">
        <HeroCarousel />

        <div className="pointer-events-none absolute left-1/2 top-0 z-40 -translate-x-1/2 sm:top-[2%]">
          <div className="logo-anim-float logo-anim-intro relative aspect-[5/2] w-[66vw] max-w-[340px] sm:w-[27vw] sm:max-w-[460px]">
            <Image
              src="/brand/megapesca-logo.png"
              alt="Megapesca"
              fill
              sizes="(max-width: 640px) 66vw, 460px"
              className="object-contain drop-shadow-[0_8px_24px_rgba(255,255,255,0.30)] dark:drop-shadow-[0_8px_24px_rgba(255,255,255,0.30)]"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-[6vh] top-[16vh] z-30 sm:top-[22vh]">
          <div className="mx-auto flex h-full max-w-4xl items-center justify-center">
            <div className="theme-panel flex h-full w-full flex-col p-4 text-center md:p-6">
              <h1 className="mb-2 text-[clamp(20px,4.2vw,38px)] font-bold leading-tight">
                Preparate para el gran lanzamiento de{" "}
                <span className="whitespace-nowrap text-primary">Megapesca.co</span>
              </h1>

              <p className="mb-3 text-[clamp(12px,1.3vw,16px)] text-muted-foreground">
                Ofertas exclusivas, torneos en tiempo real y una MEGATIENDA con rifas y mucho mas.
                Esta es una plataforma unica pensada para el pescador. Estamos afinando cada detalle para ti.
              </p>

              <div id="suscribe" className="flex flex-1 items-center">
                <div className="w-full">
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="absolute bottom-2 left-0 right-0 z-30 text-center text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} Megapesca. Todos los derechos reservados.
        </footer>

        <button
          onClick={handleSecretClick}
          aria-label="Volver al inicio"
          className="absolute left-2 top-2 z-[60] h-10 w-10 rounded-md bg-transparent transition hover:bg-white/5 active:bg-white/10"
          title="Area protegida"
        >
          <span className="sr-only">Volver al inicio</span>
        </button>
      </section>
    </div>
  );
}
