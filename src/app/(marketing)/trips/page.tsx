"use client";

import DestinationsSection from "@/components/home/DestinationsSection";
import MarketingHeader from "@/components/layout/MarketingHeader";

export default function TripsPage() {
  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <section className="mx-auto max-w-5xl px-6 pt-16">
        <h1 className="mb-2 text-3xl font-bold">Viajes Megapesca</h1>
        <p className="mb-8 text-muted-foreground">
          Explora salidas guiadas, expediciones y destinos de pesca. Pronto podras reservar directamente.
        </p>
      </section>

      <DestinationsSection
        linksByTitle={{
          "Bahia Solano": "/trips/bahia-solano",
        }}
      />
    </main>
  );
}
