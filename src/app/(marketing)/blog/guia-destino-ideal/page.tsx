import Image from "next/image";
import Link from "next/link";

import MarketingHeader from "@/components/layout/MarketingHeader";

export default function GuiaDestinoIdealPage() {
  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/blog" />

      <article className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="theme-panel overflow-hidden">
          <div className="relative h-[280px] w-full sm:h-[360px]">
            <Image
              src="/launch/homebahia2.JPG"
              alt="Guia para elegir tu destino ideal"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary">
              Destino
            </span>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Guia rapida para elegir tu destino ideal
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              Elegir bien tu destino cambia por completo la experiencia. Cuando el lugar coincide
              con tu nivel, el clima que prefieres y el tipo de pesca que quieres practicar, el
              viaje se vuelve mucho mas disfrutable desde el primer dia.
            </p>
          </div>
        </div>

        <section className="theme-panel-soft space-y-6 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Que deberias revisar antes de reservar</h2>

          <p className="leading-relaxed text-muted-foreground">
            Empieza por definir que tipo de jornada quieres vivir. No es lo mismo buscar una salida
            tranquila para aprender, que planear una expedicion intensa enfocada en especies
            especificas. Ese primer filtro te ayuda a descartar destinos que no encajan contigo.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Tambien conviene revisar el clima esperado, el tipo de embarcacion, la temporada y la
            distancia del destino. Si vas a viajar con familia o amigos, piensa ademas en la
            comodidad general del lugar, no solo en la pesca.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Si estas empezando, busca destinos con acompanamiento claro, buena logistica y jornadas
            equilibradas. Si ya tienes experiencia, puedes enfocarte en escenarios mas tecnicos o
            en viajes donde el reto sea parte de la aventura.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="theme-panel-soft p-6">
            <h3 className="text-lg font-semibold">Ideal para ti si buscas</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Un viaje claro, bien planificado y alineado con tu nivel de experiencia.
            </p>
          </div>

          <div className="theme-panel-soft p-6">
            <h3 className="text-lg font-semibold">Recomendacion rapida</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Antes de elegir, define si tu prioridad es aprender, descansar o ir por una captura
              especifica.
            </p>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/trips" className="theme-gold-button">
            Ver destinos disponibles
          </Link>
          <Link href="/blog" className="theme-outline-button">
            Volver al blog
          </Link>
        </div>
      </article>
    </main>
  );
}
