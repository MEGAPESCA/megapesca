"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  slides?: string[];
  positions?: string[];
};

const defaultSlides = [
  "/launch/01.jpg",
  "/launch/02.jpg",
  "/launch/03.jpg",
  "/launch/04.jpg",
  "/launch/05.jpg",
];

const defaultPositions = [
  "50% 50%",
  "50% 50%",
  "50% 20%",
  "50% 50%",
  "50% 50%",
];

export default function HeroCarousel({
  slides = defaultSlides,
  positions = defaultPositions,
}: Props) {
  const [viewportRef, api] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 30,
  });

  React.useEffect(() => {
    if (!api) return;
    const t = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(t);
  }, [api]);

  const effectivePositions = React.useMemo(() => {
    const out = [...positions];
    for (let i = 0; i < slides.length; i++) {
      if (!out[i]) out[i] = "50% 50%";
    }
    return out;
  }, [positions, slides]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <div ref={viewportRef} className="absolute inset-0 h-full">
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div key={i} className="relative h-full min-w-full">
              <Image
                src={src}
                alt={`Megapesca ${i + 1}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: effectivePositions[i],
                }}
                className="z-0"
                priority={i === 0}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
