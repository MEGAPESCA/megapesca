import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";
import { getTripPricing } from "@/lib/trips/pricing";

const LLANOS_IMAGES = [
  "/launch/homellanos1.jpeg",
  "/launch/homellanos2.jpeg",
  "/launch/homellanos3.jpeg",
];

export default async function LlanosOrientalesPage() {
  const trip = await getTripDetail("llanos-orientales");
  const pricing = await getTripPricing(4_999_999);

  return <TripDetailPage {...trip} />;

  return (
    <TripDetailPage
      title="Llanos Orientales"
      location="Orinoquia Colombiana"
      reviews={6}
      ratingValue={5}
      statusLabel="Disponible"
      priceCop={pricing.priceCop}
      priceUsd={pricing.priceUsd}
      priceReferenceLabel={pricing.priceReferenceLabel}
      badge="Rio Orinoco, Bita y Juriepe"
      highlights={[
        "6 dias 6 noches",
        "Minimo 8 viajeros por grupo",
        "Temporada de enero a marzo",
        "Experiencia autentica en los llanos",
      ]}
      description={[
        "En el corazon de los Llanos Orientales te espera un escenario donde la naturaleza se muestra sin filtros: vasta, salvaje y absolutamente imponente. Aqui, las llanuras infinitas se funden con rios caudalosos que serpentean entre paisajes virgenes, creando el habitat perfecto para una de las experiencias de pesca mas intensas de Colombia. Cada jornada es un encuentro directo con lo autentico, donde el sonido del agua, el viento y la vida silvestre marcan el ritmo de la aventura.",
        "Sumergete en una pesca desafiante, donde especies como la Payara, el Peacock Bass, la sardinata y la imponente Arowana dominan las aguas con fuerza y agresividad. Preparate para ataques en superficie que rompen la calma en segundos, explosiones de adrenalina que se quedan grabadas en la memoria. Es un territorio donde los peces son tan voraces como impredecibles. Aqui las condiciones cambian, el entorno impone respeto y cada captura se convierte en una verdadera conquista.",
      ]}
      reviewTestimonials={[]}
      availabilityMessage="Temporada activa. Reserva anticipada recomendada."
      reserveButtonLabel="RESERVAR VIAJE"
      images={LLANOS_IMAGES}
    />
  );
}
