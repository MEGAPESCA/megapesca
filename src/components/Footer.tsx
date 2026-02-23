"use client";

import Image from "next/image";
import { Instagram, Facebook, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">

      {/* Línea superior dorada sutil */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">

        {/* Logo */}
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

        {/* Descripción */}
        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
          Plataforma hispana integral de pesca.
          <br />
          Comunidad, torneos y megatienda en un solo lugar.
        </p>

        {/* Redes Sociales */}
        <div className="flex gap-8 mt-10">

          <a
            href="https://www.instagram.com/megapesca___?igsh=N3JvNGM3aWtxMXlv"
            target="_blank"
            className="group"
          >
            <Instagram
              size={28}
              className="text-neutral-400 transition-all duration-300 group-hover:text-amber-400 group-hover:scale-110"
            />
          </a>

          <a
            href="https://www.facebook.com/share/1aedGcMiwj/?mibextid=wwXIfr"
            target="_blank"
            className="group"
          >
            <Facebook
              size={28}
              className="text-neutral-400 transition-all duration-300 group-hover:text-amber-400 group-hover:scale-110"
            />
          </a>

          <a
            href="https://www.tiktok.com/@megapesca_?_r=1&_t=ZS-94AJcWQOoQW"
            target="_blank"
            className="group"
          >
            <Music2
              size={28}
              className="text-neutral-400 transition-all duration-300 group-hover:text-amber-400 group-hover:scale-110"
            />
          </a>

        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Megapesca. Todos los derechos reservados.
      </div>

    </footer>
  );
}