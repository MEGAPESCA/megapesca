import Image from "next/image";
import Link from "next/link";

import MarketingHeader from "@/components/layout/MarketingHeader";

export default function PrepararteExpedicionPage() {
  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/blog" />

      <article className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="theme-panel overflow-hidden">
          <div className="relative h-[300px] w-full sm:h-[420px]">
            <Image
              src="/launch/homebahia1.JPG"
              alt="Prepararte para una expedicion de pesca en Colombia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary">
              Comunidad
            </span>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Como prepararte para una expedicion de pesca en Colombia
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              Cuando te preparas con anticipacion, el viaje cambia por completo. Llevas lo
              necesario, entiendes mejor el entorno y puedes concentrarte en disfrutar la
              experiencia en vez de resolver imprevistos sobre la marcha.
            </p>
          </div>
        </div>

        <section className="theme-panel-soft space-y-6 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">1. Define el objetivo de tu viaje</h2>

          <p className="leading-relaxed text-muted-foreground">
            Antes de pensar en equipo o ropa, deja claro que quieres vivir en esta salida. Puede
            ser una experiencia relajada, un viaje para aprender una tecnica nueva o una expedicion
            enfocada en especies concretas. Ese objetivo ordena todas las demas decisiones.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight">2. Revisa equipo, clima y logistica</h2>

          <p className="leading-relaxed text-muted-foreground">
            Lleva ropa adecuada para humedad, sol y cambios de temperatura. Verifica accesorios
            basicos como guantes, gafas, hidratacion, proteccion solar y una bolsa segura para tus
            objetos personales. Si vas a viajar desde otra ciudad, confirma horarios, traslados y
            puntos de encuentro con tiempo.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight">3. Llega listo para disfrutar la experiencia</h2>

          <p className="leading-relaxed text-muted-foreground">
            Dormir bien, comer ligero antes de salir y llegar con una expectativa realista ayuda
            mucho. Cuando entiendes el ritmo de la jornada y el tipo de condiciones que vas a
            encontrar, disfrutas mas cada momento y aprovechas mejor la experiencia.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="theme-panel-soft p-6">
            <h3 className="text-lg font-semibold">Equipo</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Lleva solo lo necesario, pero bien pensado para el tipo de pesca que vas a realizar.
            </p>
          </div>

          <div className="theme-panel-soft p-6">
            <h3 className="text-lg font-semibold">Clima</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Consulta lluvia, viento y temperatura para que nada te tome por sorpresa.
            </p>
          </div>

          <div className="theme-panel-soft p-6">
            <h3 className="text-lg font-semibold">Actitud</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ve con disposicion de aprender, adaptarte y disfrutar cada momento del viaje.
            </p>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/trips" className="theme-gold-button">
            Explorar viajes
          </Link>
          <Link href="/blog" className="theme-outline-button">
            Volver al blog
          </Link>
        </div>
      </article>
    </main>
  );
}
