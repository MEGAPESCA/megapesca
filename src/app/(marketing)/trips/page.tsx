"use client";

import DestinationCard from "@/components/home/DestinationCard";
import DestinationsSection from "@/components/home/DestinationsSection";
import MarketingHeader from "@/components/layout/MarketingHeader";
import TripsHero from "@/components/trips/TripsHero";
import {
  getHomeTripDestinations,
  getSecondaryTripDestinations,
} from "@/lib/trips/catalog";

export default function TripsPage() {
  const featuredTrips = getHomeTripDestinations();
  const upcomingTrips = getSecondaryTripDestinations();

  return (
    <main className="theme-page min-h-screen">
      <MarketingHeader currentPath="/trips" />

      <TripsHero />

      <div id="destinos">
        <DestinationsSection destinations={featuredTrips} />
      </div>

      <section className="pb-16 pt-2 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/65 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
          </div>

          <div className="mt-10 text-center">
            <p className="font-serif text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
              Proximas experiencias
            </p>
            <h2 className="mt-2 text-2xl font-serif font-semibold tracking-wide text-foreground sm:text-3xl">
              Nuevos viajes Megapesca
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Debajo de nuestros viajes insignia iremos sumando nuevas rutas,
              torneos y expediciones seleccionadas para la comunidad.
            </p>
          </div>

          {upcomingTrips.length > 0 ? (
            <>
              <div className="mt-10 md:hidden">
                <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3">
                  {upcomingTrips.map((destination) => (
                    <div
                      key={destination.title}
                      className="min-w-[84%] snap-center first:pl-0 last:pr-1"
                    >
                      <DestinationCard
                        title={destination.title}
                        images={destination.images}
                        href={destination.href}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 hidden auto-rows-fr gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
                {upcomingTrips.map((destination) => (
                  <DestinationCard
                    key={destination.title}
                    title={destination.title}
                    images={destination.images}
                    href={destination.href}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="theme-panel-soft mt-10 rounded-[28px] border border-primary/20 px-6 py-10 text-center">
              <p className="font-serif text-lg text-foreground sm:text-xl">
                Muy pronto nuevos viajes en esta seccion
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Este espacio queda listo para seguir creciendo con nuevos
                destinos, salidas curadas y experiencias especiales de
                Megapesca.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
