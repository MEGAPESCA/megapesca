import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const BRAND_LOGOS = [
  { src: "/marcas/brandlogo1.png", alt: "Marca 1" },
  { src: "/marcas/brandlogo2.png", alt: "Marca 2" },
  { src: "/marcas/brandlogo3.png", alt: "Marca 3" },
  { src: "/marcas/brandlogo4.png", alt: "Marca 4" },
  { src: "/marcas/brandlogo5.png", alt: "Marca 5" },
  { src: "/marcas/brandlogo6.png", alt: "Marca 6" },
];

const FEATURED_PRODUCTS = [
  {
    name: "MAG DOD YARA",
    href: "https://store.megapesca.co/products/mag-dod-yara?variant=52584241398035",
    imageSrc: "/megatienda/YARA PROMO-01.png",
    imagePosition: "18% 74%",
    accent: "NUEVO",
  },
  {
    name: "Linea Tournament Yara",
    href: "https://store.megapesca.co/products/linea-tournament-yara?variant=52927157895443",
    imageSrc: "/megatienda/YARA PROMO-01.png",
    imagePosition: "78% 42%",
    accent: "YARA",
  },
  {
    name: "Encrenca",
    href: "https://store.megapesca.co/products/encrenca?variant=52551470579987",
    imageSrc: "/megatienda/YARA PROMO-01.png",
    imagePosition: "58% 78%",
    accent: "DESTACADO",
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
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 text-center sm:mb-7">
              <p className="font-serif text-[clamp(1.2rem,2.8vw,2.15rem)] font-semibold leading-tight tracking-[0.07em] text-primary/75 drop-shadow-[0_0_18px_rgba(214,163,84,0.24)]">
                Distribuidor oficial de Yara en Colombia
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[36rem] overflow-hidden px-0 py-1 sm:max-w-4xl sm:px-4 sm:py-3 lg:max-w-5xl">
              <div className="pointer-events-none absolute inset-x-[18%] top-[10%] h-28 rounded-full bg-primary/20 blur-3xl sm:inset-x-[20%] sm:h-36" />
              <div className="pointer-events-none absolute inset-x-[22%] bottom-[8%] h-24 rounded-full bg-primary/12 blur-3xl sm:inset-x-[28%] sm:h-28" />
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[15/9]">
                <Image
                  src="/megatienda/YARA PROMO-01.png"
                  alt="Promocion Megatienda Yara"
                  fill
                  className="object-contain scale-[1.22] sm:scale-[1.16] lg:scale-[1.12]"
                  sizes="(min-width: 1280px) 68vw, (min-width: 1024px) 62vw, (min-width: 640px) 78vw, 96vw"
                  priority
                />
              </div>
            </div>
          </div>

          <article className="mx-auto mt-8 max-w-5xl text-center sm:mt-10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" />
              Megatienda Megapesca
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              Productos destacados para tu proxima jornada
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed tracking-[0.08em] text-muted-foreground sm:text-base">
              Explora una seleccion real de nuestra tienda y descubre equipos pensados para pescar con confianza en cada salida.
            </p>

            <div className="mt-8 md:hidden">
              <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2">
                {FEATURED_PRODUCTS.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-panel-soft group min-w-[82%] snap-center overflow-hidden p-3 text-left"
                  >
                    <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_top,rgba(214,163,84,0.16),transparent_38%),linear-gradient(180deg,rgba(20,24,35,0.98),rgba(10,12,20,0.98))]">
                      <div className="absolute left-3 top-3 z-10 rounded-full border border-primary/20 bg-background/75 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                        {product.accent}
                      </div>
                      <div className="pointer-events-none absolute inset-x-[20%] top-[12%] h-24 rounded-full bg-primary/16 blur-3xl" />
                      <div className="pointer-events-none absolute inset-x-[24%] bottom-[8%] h-16 rounded-full bg-primary/10 blur-3xl" />
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: product.imagePosition }}
                        sizes="82vw"
                      />
                    </div>
                    <div className="px-2 pb-1 pt-4">
                      <p className="font-serif text-2xl font-semibold leading-tight text-foreground">
                        {product.name}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Ver producto
                        <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 hidden gap-5 md:grid md:grid-cols-3">
              {FEATURED_PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-panel-soft group overflow-hidden p-4 text-left"
                >
                  <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.8rem] bg-[radial-gradient(circle_at_top,rgba(214,163,84,0.14),transparent_36%),linear-gradient(180deg,rgba(20,24,35,0.98),rgba(10,12,20,0.98))]">
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-primary/20 bg-background/75 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                      {product.accent}
                    </div>
                    <div className="pointer-events-none absolute inset-x-[20%] top-[12%] h-24 rounded-full bg-primary/16 blur-3xl" />
                    <div className="pointer-events-none absolute inset-x-[24%] bottom-[8%] h-16 rounded-full bg-primary/10 blur-3xl" />
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: product.imagePosition }}
                      sizes="(min-width: 1280px) 26vw, (min-width: 768px) 30vw, 100vw"
                    />
                  </div>
                  <div className="px-2 pb-1 pt-5">
                    <p className="font-serif text-[1.75rem] font-semibold leading-tight text-foreground">
                      {product.name}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Ver producto
                      <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/shop" className="theme-gold-button mt-8">
              Explorar la tienda
            </Link>
          </article>
        </div>

        <div className="mt-6 w-full">
          <BrandMarquee />
        </div>
      </div>

      <div className="h-14 bg-gradient-to-b from-transparent to-transparent" />
    </section>
  );
}
