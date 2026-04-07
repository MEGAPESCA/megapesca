"use client";

import { useState } from "react";

import MarketingHeader from "@/components/layout/MarketingHeader";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/contact" />

      <section className="mx-auto max-w-xl px-6 py-16">
        <div className="theme-panel p-8">
          <h1 className="mb-2 text-3xl font-bold">Contactenos</h1>
          <p className="mb-8 text-muted-foreground">
            Escribenos y te respondemos pronto.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <input type="text" placeholder="Tu nombre" className="theme-input h-11" required />
            <input type="email" placeholder="Tu correo" className="theme-input h-11" required />
            <textarea
              placeholder="Como podemos ayudarte?"
              className="theme-input min-h-32 resize-none"
              required
            />
            <button type="submit" className="theme-gold-button h-11 px-6">
              Enviar
            </button>

            {status === "sent" && (
              <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-300">
                Mensaje enviado. Te contactaremos pronto.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
