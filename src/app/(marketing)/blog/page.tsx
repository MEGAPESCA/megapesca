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

          <article className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
            <h3 className="font-semibold mb-2 text-lg">
              Primer post de ejemplo
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Aquí irá el contenido. Más adelante conectamos un CMS o Convex para gestión.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}