"use client";

import DestinationsSection from "@/components/home/DestinationsSection";
import MarketingHeader from "@/components/layout/MarketingHeader";
import TripsHero from "@/components/trips/TripsHero";
import { getTripDestinations } from "@/lib/trips/catalog";

export default function TripsPage() {
  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <TripsHero />

      <div id="destinos">
        <DestinationsSection destinations={getTripDestinations()} />
      </div>
    </main>
  );
}
