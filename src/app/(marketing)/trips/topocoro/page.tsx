"use client";

import TripDetailPage from "@/components/trips/TripDetailPage";

const TOPOCORO_IMAGES = [
  "/launch/hometopocoro1.jpg",
  "/launch/hometopocoro2.jpeg",
  "/launch/hometopocoro3.jpeg",
];

export default function TopocoroPage() {
  return (
    <TripDetailPage
      title="Topocoro"
      location="Santander"
      reviews={7}
      priceCop="2.400.000"
      priceUsd="1250"
      badge="Escapada premium"
      highlights={[
        "3 dias 2 noches",
        "Paisajes tranquilos y gran belleza natural",
        "Ideal para una salida corta con calidad",
        "Guias y acompañamiento durante la experiencia",
      ]}
      description={[
        "Topocoro es una excelente opcion para quienes quieren una experiencia de pesca deportiva mas cercana, bien organizada y con un equilibrio ideal entre descanso, paisaje y accion.",
        "El destino se presta muy bien para escapadas cortas, viajes con amigos o jornadas donde quieres salir de la rutina sin sacrificar una experiencia bien cuidada.",
        "Su entorno natural, la tranquilidad del embalse y la posibilidad de disfrutar una salida premium lo convierten en una alternativa muy atractiva dentro del portafolio Megapesca.",
      ]}
      availabilityMessage="Alta demanda en fines de semana. Agenda tu fecha con tiempo."
      images={TOPOCORO_IMAGES}
    />
  );
}
