"use client";

import BlogHero from "@/components/blog/bloghero";
import MarketingHeader from "@/components/layout/MarketingHeader";

export default function BlogPage() {
  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/blog" />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20">
        <BlogHero />

        <div className="mt-16">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight">Comunidad</h2>

          <p className="mb-10 max-w-2xl text-muted-foreground">
            Noticias, tecnicas, comparativas de equipos y coberturas de torneos.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
            <article className="theme-panel-soft group relative overflow-hidden">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="/launch/homebahia2.JPG"
                  alt="Post lateral"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-5">
                <span className="mb-3 inline-block text-xs uppercase tracking-[0.22em] text-primary">
                  Destino
                </span>

                <h3 className="mb-2 text-xl font-semibold leading-tight text-foreground">
                  Guia rapida para elegir tu destino ideal
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Que tener en cuenta segun clima, nivel de experiencia y tipo de pesca.
                </p>

                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>6 min lectura</span>
                  <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                    Leer mas →
                  </span>
                </div>
              </div>
            </article>

            <article className="theme-panel group relative overflow-hidden">
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px]">
                <img
                  src="/launch/homebahia1.JPG"
                  alt="Post principal"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <span className="mb-3 inline-block text-xs uppercase tracking-[0.22em] text-primary">
                  Comunidad
                </span>

                <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Como prepararte para una expedicion de pesca en Colombia
                </h3>

                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Aqui ira el contenido. Mas adelante conectamos un CMS o Convex para gestion.
                  Tambien puedes usar este espacio para hablar de destinos, equipo recomendado,
                  logistica del viaje, condiciones del clima y consejos importantes antes de salir.
                </p>

                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground sm:text-sm">
                  <span>8 min lectura</span>
                  <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                    Leer articulo completo →
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
