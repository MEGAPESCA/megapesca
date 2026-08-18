"use client";

import Link from "next/link";

import AboutMegapescaSection from "@/components/home/AboutMegapescaSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import HomeCarousel, { type HomeSlide } from "@/components/home/HomeCarousel";
import ShopPromoSection from "@/components/home/ShopPromoSection";
import CommunityWelcomePopup from "@/components/common/CommunityWelcomePopup";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import MarketingHeader from "@/components/layout/MarketingHeader";
import { getHomeTripDestinations } from "@/lib/trips/catalog";

const HOME_SLIDES: HomeSlide[] = [
  {
    src: "/launch/01.jpg",
    title: "Viaja por Colombia",
    eyebrow: "Pesca y aventura",
    href: "/trips",
    ctaLabel: "Explorar viajes",
    fit: "cover",
    position: "center center",
  },
  {
    src: "/megatienda/YARA PROMO-01.png",
    title: "Tienda deportiva",
    eyebrow: "Megatienda Megapesca",
    href: "/shop",
    ctaLabel: "Ir a la tienda",
    fit: "contain",
    position: "center center",
    imageClassName: "scale-[0.94] sm:scale-100",
    panelClassName: "bg-[#f3efe5]",
    overlayClassName: "absolute inset-0 bg-gradient-to-r from-black/78 via-black/32 to-transparent",
  },
  {
    src: "/launch/03.jpg",
    title: "Torneos y comunidad",
    eyebrow: "Experiencias Megapesca",
    href: "/blog",
    ctaLabel: "Ver comunidad",
    fit: "cover",
    position: "center center",
  },
];

export default function Home() {
  return (
    <main className="theme-page flex min-h-screen flex-col">
      <CommunityWelcomePopup />
      <MarketingHeader currentPath="/" />

      <HomeCarousel slides={HOME_SLIDES} />

      <DestinationsSection destinations={getHomeTripDestinations()} />

      <section className="pb-14 sm:pb-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Descubre nuevas experiencias
          </p>
          <Link href="/trips" className="theme-gold-button group gap-3 px-7 tracking-wide">
            Mas destinos populares
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/15 text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90">
              +
            </span>
          </Link>
        </div>
      </section>

      <ShopPromoSection />

      <AboutMegapescaSection />

      <WhatsAppFloatingButton />
    </main>
  );
}
