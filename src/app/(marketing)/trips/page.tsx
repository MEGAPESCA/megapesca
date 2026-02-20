"use client";

import DestinationsSection from "@/components/home/DestinationsSection";
import MarketingHeader from "@/components/layout/MarketingHeader";

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MarketingHeader currentPath="/trips" />

      <section className="max-w-5xl mx-auto px-6 pt-16">
        <h1 className="text-3xl font-bold mb-2">Viajes Megapesca</h1>
        <p className="text-zinc-300 mb-8">
          Explora salidas guiadas, expediciones y destinos de pesca. Pronto podrás reservar directamente.
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
