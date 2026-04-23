import Image from "next/image";

export default function TripsHero() {
  return (
    <section className="px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="theme-panel relative overflow-hidden rounded-[2rem] border-border/70 bg-card/60">
          <div className="relative min-h-[460px] overflow-hidden sm:min-h-[560px] lg:min-h-[720px]">
            <Image
              src="/launch/04.jpg"
              alt="Viajes Megapesca"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/34 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
            <div className="pointer-events-none absolute left-[14%] top-[18%] h-32 w-32 rounded-full bg-primary/12 blur-3xl" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
              <div className="w-full max-w-[24rem] sm:max-w-[36rem] lg:max-w-[48rem]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-primary/90 drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)] sm:text-[0.68rem]">
                  Temporada activa
                </p>

                <h1 className="mt-3 max-w-[18ch] font-serif text-[1.35rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:max-w-[20ch] sm:text-[1.95rem] lg:max-w-[24ch] lg:text-[2.75rem]">
                  <span className="block">Viajes creados para vivir</span>
                  <span className="block whitespace-nowrap">
                    la pesca con mas intensidad.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
