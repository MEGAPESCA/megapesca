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
          className="max-h-[calc(100svh-1.25rem)] w-[min(100%-1rem,860px)] overflow-y-auto overflow-x-hidden rounded-[1.7rem] border-border/70 bg-card p-0 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:max-h-[calc(100svh-2rem)] sm:w-[min(100%-2rem,860px)] sm:overflow-hidden sm:rounded-[2rem]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[200px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(214,163,84,0.18),transparent_42%),linear-gradient(180deg,rgba(18,22,34,1),rgba(10,12,20,1))] sm:min-h-[230px] md:min-h-[500px]">
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

            <div className="relative flex flex-col justify-between bg-[linear-gradient(180deg,rgba(17,22,33,0.98),rgba(11,14,22,1))] px-5 py-5 text-center text-white sm:px-7 sm:py-7 md:px-8 md:py-8 md:text-left">
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-xl text-white/75 transition hover:bg-white/10 hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                aria-label="Cerrar popup"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div>
                <div className="mx-auto mb-4 md:mx-0 md:mb-5">
                  <div className="relative mx-auto h-12 w-[120px] sm:h-13 sm:w-[132px] md:mx-0 md:h-14 md:w-[145px]">
                    <Image
                      src="/brand/megapesca-logo.png"
                      alt="Megapesca"
                      fill
                      sizes="145px"
                      className="object-contain drop-shadow-[0_6px_18px_rgba(214,163,84,0.18)]"
                    />
                  </div>
                </div>

                <DialogTitle className="font-serif text-[2.45rem] font-semibold leading-[0.94] tracking-[-0.04em] text-white sm:text-[2.9rem] md:text-[3.35rem]">
                  Unete a nuestra comunidad
                </DialogTitle>

                <DialogDescription className="mx-auto mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-white/78 sm:text-base md:mx-0 md:text-[1.06rem]">
                  Enterate de tips, destinos, nuevos productos, experiencias y mas.
                </DialogDescription>
              </div>

              <div className="mt-6 space-y-3 sm:mt-7">
                <Link
                  href="/sign-up"
                  onClick={handleJoin}
                  className="theme-gold-button w-full text-base sm:text-[1.05rem]"
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
