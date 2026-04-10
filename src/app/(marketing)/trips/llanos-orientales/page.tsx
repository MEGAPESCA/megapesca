"use client";

import TripDetailPage from "@/components/trips/TripDetailPage";

const LLANOS_IMAGES = [
  "/launch/homellanos1.jpeg",
  "/launch/homellanos2.jpeg",
  "/launch/homellanos3.jpeg",
];

export default function LlanosOrientalesPage() {
  return (
    <TripDetailPage
      title="Llanos Orientales"
      location="Orinoquia Colombiana"
      reviews={6}
      priceCop="2.900.000"
      priceUsd="1450"
      badge="Aventura de rio"
      highlights={[
        "4 dias 3 noches",
        "Pesca en escenarios naturales amplios",
        "Ideal para grupos y escapadas guiadas",
        "Experiencia autentica en los llanos",
      ]}
      description={[
        "Llanos Orientales te ofrece una experiencia distinta, con paisajes abiertos, rios llenos de vida y jornadas donde la conexion con la naturaleza se siente desde el primer momento.",
        "Es un destino perfecto si quieres combinar tecnica, exploracion y una atmosfera mucho mas relajada, con espacios ideales para aprender, perfeccionar habilidades y disfrutar en grupo.",
        "La experiencia se complementa con logistica guiada, atencion cercana y una inmersion total en una de las regiones mas especiales de Colombia.",
      ]}
      availabilityMessage="Temporada activa. Reserva anticipada recomendada."
      images={LLANOS_IMAGES}
    />
  );
}
