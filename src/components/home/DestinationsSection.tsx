import DestinationCard from "@/components/home/DestinationCard";

type DestinationsSectionProps = {
  linksByTitle?: Record<string, string>;
};

const DESTINATIONS = [
  {
    title: "Bahia Solano",
    images: ["/launch/homebahia1.JPG", "/launch/homebahia2.JPG", "/launch/homebahia3.JPG"],
  },
  {
    title: "Llanos Orientales",
    images: ["/launch/homellanos1.jpeg", "/launch/homellanos2.jpeg", "/launch/homellanos3.jpeg"],
  },
  {
    title: "Topocoro",
    images: ["/launch/hometopocoro1.jpg", "/launch/hometopocoro2.jpeg", "/launch/hometopocoro3.jpeg"],
  },
];

export default function DestinationsSection({ linksByTitle }: DestinationsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16">
      <div className="mb-8 text-center sm:mb-10">
        <p className="font-serif text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
          Pesca y aventura
        </p>
        <h2 className="mt-2 text-2xl font-serif font-semibold tracking-wide text-foreground sm:text-3xl">
          Destinos mas populares
        </h2>
      </div>

      <div className="md:hidden">
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3">
          {DESTINATIONS.map((destination) => (
            <div key={destination.title} className="min-w-[84%] snap-center first:pl-0 last:pr-1">
              <DestinationCard
                title={destination.title}
                images={destination.images}
                href={linksByTitle?.[destination.title]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden auto-rows-fr gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((destination) => (
          <DestinationCard
            key={destination.title}
            title={destination.title}
            images={destination.images}
            href={linksByTitle?.[destination.title]}
          />
        ))}
      </div>
    </section>
  );
}
