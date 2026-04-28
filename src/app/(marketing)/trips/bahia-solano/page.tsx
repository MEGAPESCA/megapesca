"use client";

import TripDetailPage from "@/components/trips/TripDetailPage";

const BAHIA_IMAGES = [
  "/launch/homebahia1.JPG",
  "/launch/homebahia2.JPG",
  "/launch/homebahia3.JPG",
];

export default function BahiaSolanoPage() {
  return (
    <TripDetailPage
      title="Bahia Solano"
      location="Costa Pacifica"
      reviews={8}
      priceCop="3.500.000"
      priceUsd="875"
      badge="Tendencia"
      highlights={[
        "5 dias 4 noches",
        "Pesca de grandes especies",
        "Hotel con playa privada",
        "Acompañamiento de capitan y guias",
      ]}
      description={[
        "Bahia Solano es uno de los destinos mas buscados por quienes quieren vivir una experiencia intensa de pesca deportiva en el Pacifico colombiano, rodeados de paisajes unicos y salidas memorables.",
        "Durante la expedicion podras ir en busca de especies como pez vela, marlin, mahi mahi, gallo y atunes, acompañado por capitanes experimentados y embarcaciones equipadas para jornadas completas.",
        "Es una opcion ideal si buscas combinar aventura, comodidad, gastronomia local y una experiencia guiada de alto nivel desde el primer dia.",
      ]}
      availabilityMessage="Salida recomendada. Cupos limitados para la proxima fecha."
      images={BAHIA_IMAGES}
    />
  );
}
