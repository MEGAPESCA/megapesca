import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";
import { getTripPricing } from "@/lib/trips/pricing";

const TOURNAMENT_IMAGES = [
  "/launch/hometopocoro1.jpg",
  "/launch/hometopocoro2.jpeg",
  "/launch/hometopocoro3.jpeg",
];

export default async function TournamentPage() {
  const trip = await getTripDetail("tournament");
  const pricing = await getTripPricing(750_000);

  return <TripDetailPage {...trip} />;

  return (
    <TripDetailPage
      title="Tournament"
      location="Santander"
      reviews={7}
      ratingValue={5}
      priceCop={pricing.priceCop}
      priceUsd={pricing.priceUsd}
      priceReferenceLabel={pricing.priceReferenceLabel}
      badge={"3\u00B0 Edici\u00F3n 2026"}
      highlights={[
        "2 d\u00EDas 1 noche.",
        "Viaje grupal.",
        "Embalse en medio de monta\u00F1as, r\u00EDos, paisajes serenos y jornadas activas.",
        "Ideal para pesca de Peacock Bass.",
        "Acompa\u00F1amiento Mega Pesca para una experiencia brutal y \u00FAnica.",
      ]}
      description={[
        "Tournament by Mega Pesca es nuestro torneo insignia alrededor del Peacock Bass en Colombia: una cita anual donde la pesca deportiva se vive con intensidad, nivel y una energia que solo aparece cuando se reunen quienes comparten la misma pasion.",
        "En Topocoro, cada jornada se convierte en una experiencia que va mucho mas alla de la captura. Llegan pescadores de distintas regiones y paises para competir, conectar, aprender, compartir en comunidad y formar parte de un evento que deja huella dentro y fuera del agua.",
        "Mas que un viaje, Tournament es una experiencia disenada para quienes quieren estar en el lugar donde sucede lo importante: un escenario imponente, una organizacion cuidada al detalle y una comunidad que entiende la pesca como estilo de vida. Estar aqui no es solo asistir a un torneo; es hacer parte de uno de los momentos mas representativos de la pesca deportiva en Colombia.",
      ]}
      reviewTestimonials={[]}
      availabilityMessage="Fechas muy solicitadas en temporada activa. Reserva con anticipacion tu salida."
      reserveButtonLabel="SEPARAR CUPO"
      images={TOURNAMENT_IMAGES}
    />
  );
}
