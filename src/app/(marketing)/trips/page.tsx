"use client";

import DestinationsSection from "@/components/home/DestinationsSection";
import MarketingHeader from "@/components/layout/MarketingHeader";
import TripsHero from "@/components/trips/TripsHero";

export default function TripsPage() {
  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <TripsHero />

      <div id="destinos">
        <DestinationsSection
          linksByTitle={{
            "Bahia Solano": "/trips/bahia-solano",
            "Llanos Orientales": "/trips/llanos-orientales",
            Tournament: "/trips/tournament",
          }}
        />
      </div>
    </main>
  );
}
