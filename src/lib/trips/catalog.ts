import { getTripPricing } from "@/lib/trips/pricing";

export type TripSlug = "bahia-solano" | "llanos-orientales" | "tournament";

export type TripDestinationItem = {
  slug: TripSlug;
  title: string;
  href: string;
  images: string[];
};

export type TripCatalogItem = {
  slug: TripSlug;
  title: string;
  location: string;
  reviews: number;
  ratingValue?: number;
  statusLabel?: string;
  badge: string;
  highlights: string[];
  description: string[];
  availabilityMessage: string;
  images: string[];
  reserveButtonLabel?: string;
  reviewTestimonials?: {
    quote: string;
    author: string;
    meta?: string;
  }[];
  priceCop: number;
};

const TRIPS_CATALOG: Record<TripSlug, TripCatalogItem> = {
  "bahia-solano": {
    slug: "bahia-solano",
    title: "Bahia Solano",
    location: "Costa Pacifica",
    reviews: 8,
    ratingValue: 5,
    priceCop: 3_500_000,
    badge: "Tendencia",
    highlights: [
      "5 dias 4 noches",
      "Pesca de grandes especies",
      "Hotel con playa privada",
      "Acompañamiento de capitan y guias",
    ],
    description: [
      "Bahia Solano es uno de los destinos mas buscados por quienes quieren vivir una experiencia intensa de pesca deportiva en el Pacifico colombiano, rodeados de paisajes unicos y salidas memorables.",
      "Durante la expedicion podras ir en busca de especies como pez vela, marlin, mahi mahi, gallo y atunes, acompañado por capitanes experimentados y embarcaciones equipadas para jornadas completas.",
      "Es una opcion ideal si buscas combinar aventura, comodidad, gastronomia local y una experiencia guiada de alto nivel desde el primer dia.",
    ],
    availabilityMessage:
      "Salida recomendada. Cupos limitados para la proxima fecha.",
    reserveButtonLabel: "RESERVAR ESCAPADA",
    reviewTestimonials: [],
    images: [
      "/launch/homebahia1.JPG",
      "/launch/homebahia2.JPG",
      "/launch/homebahia3.JPG",
    ],
  },
  "llanos-orientales": {
    slug: "llanos-orientales",
    title: "Llanos Orientales",
    location: "Orinoquia Colombiana",
    reviews: 6,
    ratingValue: 5,
    statusLabel: "Disponible",
    priceCop: 4_999_999,
    badge: "Rio Orinoco, Bita y Juriepe",
    highlights: [
      "6 dias 6 noches",
      "Minimo 8 viajeros por grupo",
      "Temporada de enero a marzo",
      "Experiencia autentica en los llanos",
    ],
    description: [
      "En el corazon de los Llanos Orientales te espera un escenario donde la naturaleza se muestra sin filtros: vasta, salvaje y absolutamente imponente. Aqui, las llanuras infinitas se funden con rios caudalosos que serpentean entre paisajes virgenes, creando el habitat perfecto para una de las experiencias de pesca mas intensas de Colombia. Cada jornada es un encuentro directo con lo autentico, donde el sonido del agua, el viento y la vida silvestre marcan el ritmo de la aventura.",
      "Sumergete en una pesca desafiante, donde especies como la Payara, el Peacock Bass, la sardinata y la imponente Arowana dominan las aguas con fuerza y agresividad. Preparate para ataques en superficie que rompen la calma en segundos, explosiones de adrenalina que se quedan grabadas en la memoria. Es un territorio donde los peces son tan voraces como impredecibles. Aqui las condiciones cambian, el entorno impone respeto y cada captura se convierte en una verdadera conquista.",
    ],
    availabilityMessage: "Temporada activa. Reserva anticipada recomendada.",
    reserveButtonLabel: "RESERVAR VIAJE",
    reviewTestimonials: [],
    images: [
      "/launch/homellanos1.jpeg",
      "/launch/homellanos2.jpeg",
      "/launch/homellanos3.jpeg",
    ],
  },
  tournament: {
    slug: "tournament",
    title: "Tournament",
    location: "Santander",
    reviews: 7,
    ratingValue: 5,
    priceCop: 750_000,
    badge: "3° Edición 2026",
    highlights: [
      "2 dias 1 noche.",
      "Viaje grupal.",
      "Embalse en medio de montañas, rios, paisajes serenos y jornadas activas.",
      "Ideal para pesca de Peacock Bass.",
      "Acompañamiento Mega Pesca para una experiencia brutal y unica.",
    ],
    description: [
      "Tournament by Mega Pesca es nuestro torneo insignia alrededor del Peacock Bass en Colombia: una cita anual donde la pesca deportiva se vive con intensidad, nivel y una energia que solo aparece cuando se reunen quienes comparten la misma pasion.",
      "En Topocoro, cada jornada se convierte en una experiencia que va mucho mas alla de la captura. Llegan pescadores de distintas regiones y paises para competir, conectar, aprender, compartir en comunidad y formar parte de un evento que deja huella dentro y fuera del agua.",
      "Mas que un viaje, Tournament es una experiencia diseñada para quienes quieren estar en el lugar donde sucede lo importante: un escenario imponente, una organizacion cuidada al detalle y una comunidad que entiende la pesca como estilo de vida. Estar aqui no es solo asistir a un torneo; es hacer parte de uno de los momentos mas representativos de la pesca deportiva en Colombia.",
    ],
    availabilityMessage:
      "Fechas muy solicitadas en temporada activa. Reserva con anticipacion tu salida.",
    reserveButtonLabel: "SEPARAR CUPO",
    reviewTestimonials: [],
    images: [
      "/launch/hometopocoro1.jpg",
      "/launch/hometopocoro2.jpeg",
      "/launch/hometopocoro3.jpeg",
    ],
  },
};

export function getTripHref(slug: TripSlug) {
  return `/trips/${slug}`;
}

export function getTripDestinations(): TripDestinationItem[] {
  return Object.values(TRIPS_CATALOG).map((trip) => ({
    slug: trip.slug,
    title: trip.title,
    href: getTripHref(trip.slug),
    images: trip.images,
  }));
}

export async function getTripDetail(slug: TripSlug) {
  const trip = TRIPS_CATALOG[slug];
  const pricing = await getTripPricing(trip.priceCop);

  return {
    ...trip,
    priceCop: pricing.priceCop,
    priceUsd: pricing.priceUsd,
    priceReferenceLabel: pricing.priceReferenceLabel,
  };
}
