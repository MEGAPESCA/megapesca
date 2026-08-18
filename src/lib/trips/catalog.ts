import { getTripPricing } from "@/lib/trips/pricing";

export type TripSlug =
  | "bahia-solano"
  | "llanos-orientales"
  | "tournament"
  | "la-liga"
  | "santo-domingo";

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
  isListed?: boolean;
  isHomeFeatured?: boolean;
  reviews: number;
  ratingValue?: number;
  statusLabel?: string;
  badge: string;
  highlights: string[];
  description: string[];
  includedItems?: string[];
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
    isListed: false,
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
    isHomeFeatured: true,
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
      "Campamento al frente del rio",
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
    isHomeFeatured: true,
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
  "la-liga": {
    slug: "la-liga",
    title: "La Liga",
    location: "Embalse Penol-Guatape",
    isHomeFeatured: true,
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Prontamente",
    priceCop: 180_000,
    badge: "Proximo encuentro 3ra edicion 2027",
    highlights: [
      "2 temporadas y 1 final",
      "Pesca de Black Bass",
      "Embalse Penol-Guatape",
      "Proximo encuentro 3ra edicion 2027",
    ],
    description: [
      "La Liga by Mega Pesca nace como un formato pensado para quienes disfrutan la competencia, la tecnica y la emocion de medirse jornada tras jornada en escenarios que exigen lectura, precision y constancia. No es solo un encuentro de pesca: es una temporada construida para reunir a quienes viven este deporte con mentalidad, disciplina y pasion real.",
      "En el Embalse Penol-Guatape, el Black Bass encuentra el escenario perfecto para jornadas activas, decisiones rapidas y capturas que se ganan lance a lance. Cada fecha mezcla estrategia, comunidad y adrenalina, creando un ambiente donde el nivel sube y cada participante siente que hace parte de algo que vale la pena seguir.",
      "Con dos temporadas y una gran final, La Liga busca consolidarse como una de las citas mas atractivas para la pesca deportiva de Black Bass en Colombia. Es una propuesta para competir, compartir y volver una y otra vez, con el sello de Mega Pesca y una experiencia pensada para dejar huella desde el primer lanzamiento.",
    ],
    availabilityMessage:
      "Inscripciones proximamente para la 3ra edicion 2027.",
    reserveButtonLabel: "QUIERO MI CUPO",
    reviewTestimonials: [],
    images: [
      "/launch/homelaliga1.jpg",
      "/launch/homelaliga2.jpg",
      "/launch/homelaliga3.jpg",
      "/launch/homelaliga4.jpg",
    ],
  },
  "santo-domingo": {
    slug: "santo-domingo",
    title: "Santo Domingo",
    location: "Oriente Antioqueno",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Disponible",
    priceCop: 160_000,
    badge: "Temporada de Verano",
    highlights: [
      "Caminata de rio",
      "Pesca de sabaleta",
      "1 dia de pesca",
      "Viaje grupal",
    ],
    description: [
      "Santo Domingo es una salida pensada para quienes disfrutan la pesca en escenarios vivos, tecnicos y profundamente naturales. En el Oriente Antioqueno, este rio de caudal medio y aguas cristalinas propone una jornada distinta: una experiencia de lectura del entorno, precision y movimiento constante, donde cada tramo exige atencion real y buena toma de decisiones.",
      "La ruta atraviesa rocas lisas, pasos boscosos y sectores de agua virgen que convierten la caminata en parte esencial de la experiencia. Aqui la sabaleta, especie nativa y emblemática de Colombia, no se pesca por azar: se gana con astucia, tecnica y paciencia. Es una salida corta en duracion, pero intensa en sensaciones, ideal para quienes quieren conectar con un rio autentico y una pesca fina en medio del paisaje antioqueno.",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Desayuno y almuerzo tipo fiambre",
      "Trofeos y reconocimientos",
      "Poliza viajera",
    ],
    availabilityMessage:
      "Salida recomendada en temporada de verano. Reserva tu jornada con anticipacion.",
    reserveButtonLabel: "RESERVAR JORNADA",
    reviewTestimonials: [],
    images: ["/launch/01.jpg", "/launch/04.jpg", "/launch/05.jpg"],
  },
};

export function getTripHref(slug: TripSlug) {
  return `/trips/${slug}`;
}

export function getTripDestinations(): TripDestinationItem[] {
  return Object.values(TRIPS_CATALOG)
    .filter((trip) => trip.isListed !== false)
    .map((trip) => ({
      slug: trip.slug,
      title: trip.title,
      href: getTripHref(trip.slug),
      images: trip.images,
    }));
}

export function getHomeTripDestinations(): TripDestinationItem[] {
  return Object.values(TRIPS_CATALOG)
    .filter((trip) => trip.isListed !== false && trip.isHomeFeatured === true)
    .map((trip) => ({
      slug: trip.slug,
      title: trip.title,
      href: getTripHref(trip.slug),
      images: trip.images,
    }));
}

export function getSecondaryTripDestinations(): TripDestinationItem[] {
  return Object.values(TRIPS_CATALOG)
    .filter((trip) => trip.isListed !== false && trip.isHomeFeatured !== true)
    .map((trip) => ({
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
