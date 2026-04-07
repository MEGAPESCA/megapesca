"use client";

import Link from "next/link";

import AboutMegapescaSection from "@/components/home/AboutMegapescaSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import HomeCarousel from "@/components/home/HomeCarousel";
import ShopPromoSection from "@/components/home/ShopPromoSection";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import MarketingHeader from "@/components/layout/MarketingHeader";

const HOME_SLIDES = ["/launch/01.jpg", "/launch/02.jpg"];

export default function Home() {
  return (
    <main className="theme-page min-h-screen flex flex-col">
      <MarketingHeader currentPath="/" />

      <HomeCarousel slides={HOME_SLIDES} />

      <DestinationsSection />

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
