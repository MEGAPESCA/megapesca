import Image from "next/image";
import Link from "next/link";
import { BadgePercent, ShieldCheck, Sparkles, Truck } from "lucide-react";

const BRAND_LOGOS = [
  { src: "/marcas/brandlogo1.png", alt: "Marca 1" },
  { src: "/marcas/brandlogo2.png", alt: "Marca 2" },
  { src: "/marcas/brandlogo3.png", alt: "Marca 3" },
  { src: "/marcas/brandlogo4.png", alt: "Marca 4" },
  { src: "/marcas/brandlogo5.png", alt: "Marca 5" },
  { src: "/marcas/brandlogo6.png", alt: "Marca 6" },
];

const IMG_VERSION = "20260220";

const BENEFITS = [
  {
    icon: BadgePercent,
    title: "Descuentos especiales en senuelos, ropa y accesorios",
    description: "promociones activas durante todo el ano",
  },
  {
    icon: ShieldCheck,
    title: "Productos seleccionados para pesca real",
    description: "equipos probados para rio, mar y aventura",
  },
  {
    icon: Truck,
    title: "Envios y atencion con enfoque en la comunidad",
    description: "compra facil y acompanamiento cercano",
  },
];

function BrandMarquee() {
  const items = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="relative mt-10 w-full overflow-hidden border-y border-border/70 bg-card/70 py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />

      <div className="brand-marquee-track flex w-max items-center gap-5 px-4">
        {items.map((brand, index) => (
          <span
            key={`${brand.alt}-${index}`}
            className="inline-flex h-20 w-[250px] shrink-0 items-center justify-center px-2"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={220}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ShopPromoSection() {
  return (
    <section className="relative pb-20">
      <div className="h-16 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="w-full border-y border-border/70 bg-card/60 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-9 lg:grid-cols-[0.85fr_1.35fr]">
            <article>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-4 w-4" />
                Megatienda Megapesca
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Todo para equiparte mejor en cada salida de pesca
              </h2>

              <p className="mt-4 max-w-xl text-muted-foreground">
                Descubre seleccion premium en senuelos, canas, carreteles, ropa tecnica y equipo outdoor.
                Una tienda pensada para quienes viven la pesca en serio.
              </p>

              <ul className="mt-6 space-y-4">
                {BENEFITS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-foreground">{item.title}</span>
                        <span className="block text-sm text-muted-foreground">{item.description}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link href="/shop" className="theme-gold-button mt-7">
                Explorar la tienda
              </Link>
            </article>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={`/megatienda/YARA%20PROMO-01.png?v=${IMG_VERSION}`}
                alt="Promocion Megatienda Yara"
                fill
                className="object-contain scale-[1.08]"
                sizes="(min-width: 1280px) 62vw, (min-width: 1024px) 58vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <BrandMarquee />
        </div>
      </div>

      <div className="h-14 bg-gradient-to-b from-transparent to-transparent" />
    </section>
  );
}
