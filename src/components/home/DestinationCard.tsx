"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  title: string;
  images: string[];
  href?: string;
};

export default function DestinationCard({ title, images, href }: DestinationCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images]);

  const content = (
    <article className="group h-full overflow-hidden rounded-3xl border border-[#d6a354]/25 bg-gradient-to-b from-white/[0.11] via-white/[0.07] to-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a354]/55 hover:shadow-[0_26px_55px_rgba(214,163,84,0.25)]">
      <div className="relative aspect-[4/3] w-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`${title} ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {images.map((_, index) => (
            <span
              key={`${title}-${index}`}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImage ? "w-6 bg-[#d6a354]" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-5 py-5 text-center">
        <h3 className="text-xl font-serif font-semibold tracking-[0.06em] text-white">{title}</h3>
      </div>
    </article>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a354] rounded-2xl">
      {content}
    </Link>
  );
}
