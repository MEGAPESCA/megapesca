"use client";

import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const STORAGE_KEY = "megapesca-community-popup-dismissed";
const OPEN_DELAY_MS = 1200;

export default function CommunityWelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem(STORAGE_KEY);

    if (dismissed === "true") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const handleJoin = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <SignedOut>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="w-[min(100%-1.25rem,980px)] overflow-hidden rounded-[2rem] border-border/70 bg-card p-0 shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[270px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(214,163,84,0.18),transparent_42%),linear-gradient(180deg,rgba(18,22,34,1),rgba(10,12,20,1))] md:min-h-[520px]">
              <div className="pointer-events-none absolute inset-x-[18%] top-[10%] h-28 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-[28%] bottom-[6%] h-24 rounded-full bg-primary/12 blur-3xl" />

              <Image
                src="/launch/homellanos1.jpeg"
                alt="Comunidad Megapesca"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover opacity-90"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
            </div>

            <div className="relative flex flex-col justify-between bg-[linear-gradient(180deg,rgba(17,22,33,0.98),rgba(11,14,22,1))] px-6 py-7 text-center text-white sm:px-8 sm:py-9 md:text-left">
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-xl text-white/75 transition hover:bg-white/10 hover:text-white"
                aria-label="Cerrar popup"
              >
                <X className="h-5 w-5" />
              </button>

              <div>
                <div className="mx-auto mb-6 flex w-fit items-center justify-center rounded-full border border-primary/25 bg-white/5 px-4 py-2 backdrop-blur-sm md:mx-0">
                  <div className="relative h-12 w-[120px] sm:h-14 sm:w-[145px]">
                    <Image
                      src="/brand/megapesca-logo.png"
                      alt="Megapesca"
                      fill
                      sizes="145px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <DialogTitle className="font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
                  Unete a nuestra comunidad
                </DialogTitle>

                <DialogDescription className="mt-5 text-base leading-7 text-white/78 sm:text-lg">
                  Enterate de tips, destinos, nuevos productos, experiencias y mas.
                </DialogDescription>

                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-primary/90">
                  Vive Megapesca desde adentro
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href="/sign-up"
                  onClick={handleJoin}
                  className="theme-gold-button w-full text-base sm:text-lg"
                >
                  Unirme
                </Link>

                <button
                  type="button"
                  onClick={() => handleOpenChange(false)}
                  className="w-full text-sm font-medium text-white/70 transition hover:text-white"
                >
                  Ahora no
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </SignedOut>
  );
}
