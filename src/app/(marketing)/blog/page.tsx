"use client";

import MarketingHeader from "@/components/layout/MarketingHeader";
import BlogHero from "@/components/blog/bloghero";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MarketingHeader currentPath="/blog" />

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        {/* HERO */}
        <BlogHero />

        {/* CONTENIDO */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Comunidad
          </h2>

          <p className="text-zinc-300 mb-10 max-w-2xl">
            Noticias, técnicas, comparativas de equipos y coberturas de torneos.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
  {/* BLOQUE LATERAL */}
  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
    <div className="relative h-52 w-full overflow-hidden">
      <img
        src="/launch/homebahia2.JPG"
        alt="Post lateral"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>

    <div className="p-5">
      <span className="inline-block text-xs uppercase tracking-[0.22em] text-[#d6a354] mb-3">
        Destino
      </span>

      <h3 className="font-semibold mb-2 text-xl text-white leading-tight">
        Guía rápida para elegir tu destino ideal
      </h3>

      <p className="text-sm text-zinc-400 leading-relaxed">
        Qué tener en cuenta según clima, nivel de experiencia y tipo de pesca.
      </p>

      <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
        <span>6 min lectura</span>
        <span className="text-[#d6a354] transition-transform duration-300 group-hover:translate-x-1">
          Leer más →
        </span>
      </div>
    </div>
  </article>

  {/* BLOQUE PRINCIPAL */}
  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
    <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#d6a354]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px]">
      <img
        src="/launch/homebahia1.JPG"
        alt="Post principal"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
    </div>

    <div className="p-6 sm:p-8">
      <span className="inline-block text-xs uppercase tracking-[0.22em] text-[#d6a354] mb-3">
        Comunidad
      </span>

      <h3 className="font-semibold mb-2 text-2xl sm:text-3xl text-white tracking-tight">
        Cómo prepararte para una expedición de pesca en Colombia
      </h3>

      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
        Aquí irá el contenido. Más adelante conectamos un CMS o Convex para gestión.
        También puedes usar este espacio para hablar de destinos, equipo recomendado,
        logística del viaje, condiciones del clima y consejos importantes antes de salir.
      </p>

      <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-zinc-500">
        <span>8 min lectura</span>
        <span className="text-[#d6a354] transition-transform duration-300 group-hover:translate-x-1">
          Leer artículo completo →
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