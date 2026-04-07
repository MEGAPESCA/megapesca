"use client";

import Image from "next/image";
import { Facebook, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-card/70 text-foreground backdrop-blur-xl">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-8">
          <Image
            src="/brand/megapesca-logo.png"
            alt="Megapesca Logo"
            width={220}
            height={220}
            className="object-contain"
            priority
          />
        </div>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Plataforma hispana integral de pesca.
          <br />
          Comunidad, torneos y megatienda en un solo lugar.
        </p>

        <div className="mt-10 flex gap-8">
          <a
            href="https://www.instagram.com/megapesca___?igsh=N3JvNGM3aWtxMXlv"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Instagram
              size={28}
              className="text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
            />
          </a>

          <a
            href="https://www.facebook.com/share/1aedGcMiwj/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Facebook
              size={28}
              className="text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
            />
          </a>

          <a
            href="https://www.tiktok.com/@megapesca_?_r=1&_t=ZS-94AJcWQOoQW"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Music2
              size={28}
              className="text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-border/70 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Megapesca. Todos los derechos reservados.
      </div>
    </footer>
  );
}
