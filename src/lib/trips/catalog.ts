import { getTripPricing } from "@/lib/trips/pricing";

export type TripSlug =
  | "bahia-solano"
  | "llanos-orientales"
  | "tournament"
  | "topocoro"
  | "amani"
  | "la-liga"
  | "santo-domingo"
  | "punchina"
  | "jaguas"
  | "la-miel"
  | "playas";

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
    badge: "Bita Alto y Rio Juriepe",
    highlights: [
      "8 dias 7 noches",
      "6 dias de pesca",
      "Campamento al frente del rio",
      "Pesca en Bita Alto y Rio Juriepe",
      "Transporte 4x4 para desplazamiento",
    ],
    includedItems: [
      "Bote, motor, guia local y guia Mega Pesca",
      "Alimentacion local por 6 dias",
      "Hidratacion y snacks por 6 dias",
      "Transporte 4x4 para desplazamiento",
      "Poliza de viaje",
    ],
    description: [
      "En el corazon de los Llanos Orientales te espera un escenario donde la naturaleza se muestra sin filtros: vasta, salvaje y absolutamente imponente. Aqui, las llanuras infinitas se funden con rios caudalosos que serpentean entre paisajes virgenes, creando el habitat perfecto para una de las experiencias de pesca mas intensas de Colombia. Cada jornada es un encuentro directo con lo autentico, donde el sonido del agua, el viento y la vida silvestre marcan el ritmo de la aventura.",
      "Sumergete en una pesca desafiante, donde especies como la Payara, el Peacock Bass, la sardinata y la imponente Arowana dominan las aguas con fuerza y agresividad. Preparate para ataques en superficie que rompen la calma en segundos, explosiones de adrenalina que se quedan grabadas en la memoria. Es un territorio donde los peces son tan voraces como impredecibles. Aqui las condiciones cambian, el entorno impone respeto y cada captura se convierte en una verdadera conquista.",
    ],
    availabilityMessage: "Temporada activa. Reserva anticipada recomendada.",
    reserveButtonLabel: "RESERVAR VIAJE",
    reviewTestimonials: [],
    images: [
      "/launch/homellanos1.jpg",
      "/launch/homellanos2.jpg",
      "/launch/homellanos3.jpg",
      "/launch/homellanos4.jpg",
      "/launch/homellanos5.jpg",
      "/launch/homellanos6.jpeg",
      "/launch/homellanos7.jpg",
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
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "2 desayunos y 2 almuerzos",
      "Alojamiento 1 noche en acomodacion multiple",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    availabilityMessage:
      "Fechas muy solicitadas en temporada activa. Reserva con anticipacion tu salida.",
    reserveButtonLabel: "SEPARAR CUPO",
    reviewTestimonials: [],
    images: [
      "/launch/hometournament1.jpg",
      "/launch/hometournament2.jpg",
      "/launch/hometournament3.jpg",
    ],
  },
  topocoro: {
    slug: "topocoro",
    title: "Topocoro",
    location: "Santander",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Prontamente",
    priceCop: 680_000,
    badge: "Embalse",
    highlights: [
      "2 dias de pesca",
      "Viaje grupal",
      "Pesca en embalse",
      "Capturas de Peacock Bass",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "2 desayunos y 2 almuerzos tipo fiambre",
      "Hospedaje multiple 1 noche",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    description: [
      "Topocoro es una salida pensada para quienes quieren vivir la pesca del Peacock Bass en un embalse rodeado de caños, montañas, cascadas y rios que le dan a cada jornada una atmosfera poderosa y profundamente natural.",
      "Es un escenario ideal para una experiencia grupal de dos dias de pesca, con recorridos en bote, lectura del agua y un entorno que mezcla tranquilidad, paisaje y ataques explosivos en embalse. Una propuesta perfecta para quienes buscan tecnica, aventura y una conexion real con este destino emblematico de Santander.",
    ],
    availabilityMessage:
      "Proximamente anunciaremos fechas y cupos disponibles.",
    reserveButtonLabel: "QUIERO MI CUPO",
    reviewTestimonials: [],
    images: [
      "/launch/hometopocoro1.jpg",
      "/launch/hometopocoro2.jpeg",
      "/launch/hometopocoro3.jpg",
      "/launch/hometopocoro4.jpg",
    ],
  },
  amani: {
    slug: "amani",
    title: "Amani",
    location: "Caldas",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Prontamente",
    priceCop: 780_000,
    badge: "Embalse",
    highlights: [
      "2 dias de pesca",
      "Viaje grupal",
      "Pesca en embalse",
      "Capturas de Peacock Bass",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "2 desayunos y 2 almuerzos tipo fiambre",
      "Hospedaje multiple 1 noche",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    description: [
      "Amani es una salida pensada para quienes quieren vivir la pesca del Peacock Bass en un embalse rodeado de caños, montañas, cascadas y rios que convierten cada jornada en una experiencia intensa y visualmente poderosa.",
      "Es un destino ideal para una experiencia grupal de dos dias de pesca, con recorridos en bote, lectura del agua y un entorno que mezcla tranquilidad, paisaje y ataques explosivos en embalse. Una propuesta perfecta para quienes buscan aventura, tecnica y una conexion real con la pesca deportiva en Caldas.",
    ],
    availabilityMessage:
      "Proximamente anunciaremos fechas y cupos disponibles.",
    reserveButtonLabel: "QUIERO MI CUPO",
    reviewTestimonials: [],
    images: [
      "/launch/homeamani1.jpg",
      "/launch/homeamani2.jpg",
      "/launch/homeamani3.jpg",
      "/launch/homeamani4.jpg",
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
      "Encuentro competitivo en embalse",
      "Proximo encuentro 3ra edicion 2027",
    ],
    description: [
      "La Liga by Mega Pesca nace como un formato pensado para quienes disfrutan la competencia, la tecnica y la emocion de medirse jornada tras jornada en escenarios que exigen lectura, precision y constancia. No es solo un encuentro de pesca: es una temporada construida para reunir a quienes viven este deporte con mentalidad, disciplina y pasion real.",
      "En el Embalse Penol-Guatape, el Black Bass encuentra el escenario perfecto para jornadas activas, decisiones rapidas y capturas que se ganan lance a lance. Cada fecha mezcla estrategia, comunidad y adrenalina, creando un ambiente donde el nivel sube y cada participante siente que hace parte de algo que vale la pena seguir.",
      "Con dos temporadas y una gran final, La Liga busca consolidarse como una de las citas mas atractivas para la pesca deportiva de Black Bass en Colombia. Es una propuesta para competir, compartir y volver una y otra vez, con el sello de Mega Pesca y una experiencia pensada para dejar huella desde el primer lanzamiento.",
    ],
    includedItems: [
      "Pesca en bote, motor y guia local",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
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
      "/launch/homelaliga5.jpg",
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
    images: [
      "/launch/homesantodomingo2.jpg",
      "/launch/homesantodomingo3.jpg",
      "/launch/homesantodomingo4.jpg",
    ],
  },
  punchina: {
    slug: "punchina",
    title: "Punchina",
    location: "Oriente Antioqueno",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Disponible",
    priceCop: 250_000,
    badge: "Embalses Oriente",
    highlights: [
      "1 dia de pesca",
      "Viaje grupal",
      "Pesca en embalse",
      "Capturas de Mojarra, Morrudo y Black Bass",
    ],
    description: [
      "Punchina es una salida pensada para quienes disfrutan la pesca en embalses del Oriente Antioqueno, en un entorno de montana donde el agua, la vegetacion y la calma del paisaje crean una jornada distinta para desconectarse y concentrarse en la pesca real.",
      "En este escenario de San Carlos es posible encontrarse con especies como Mojarra, Morrudo y Black Bass, en una experiencia grupal de un dia que combina recorrido en bote, lectura del agua y acompanamiento local. Es una opcion ideal para quienes quieren vivir una jornada completa, cercana y bien organizada, con el sello de Mega Pesca.",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "Desayuno y almuerzo tipo fiambre",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    availabilityMessage:
      "Salida recomendada. Reserva tu jornada con anticipacion.",
    reserveButtonLabel: "RESERVAR JORNADA",
    reviewTestimonials: [],
    images: [
      "/launch/homepunchina1.jpg",
      "/launch/homepunchina2.jpg",
      "/launch/homepunchina3.jpg",
      "/launch/homepunchina4.jpg",
    ],
  },
  jaguas: {
    slug: "jaguas",
    title: "Jaguas",
    location: "Oriente Antioqueno",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Disponible",
    priceCop: 260_000,
    badge: "Embalses Oriente",
    highlights: [
      "1 dia de pesca",
      "Viaje grupal",
      "Pesca en embalse",
      "Capturas de Mojarra, Morrudo y Black Bass",
    ],
    description: [
      "Jaguas es una salida pensada para quienes quieren vivir una jornada de pesca en embalse dentro del Oriente Antioqueno, rodeados de montanas, agua tranquila y escenarios que invitan a leer cada movimiento con paciencia y estrategia.",
      "En este entorno de San Roque es posible encontrarse con especies como Mojarra, Morrudo y Black Bass, en una experiencia grupal de un dia que combina recorrido en bote, guia local y el sello cercano de Mega Pesca. Es una opcion ideal para quienes buscan una salida bien organizada, accesible y con verdadera conexion con la pesca deportiva.",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "Desayuno y almuerzo tipo fiambre",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    availabilityMessage:
      "Salida recomendada. Reserva tu jornada con anticipacion.",
    reserveButtonLabel: "RESERVAR JORNADA",
    reviewTestimonials: [],
    images: [
      "/launch/homejaguas1.jpg",
      "/launch/homejaguas2.jpg",
      "/launch/homejaguas3.jpg",
      "/launch/homejaguas4.jpg",
    ],
  },
  "la-miel": {
    slug: "la-miel",
    title: "La Miel",
    location: "Sonson Antioquia",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Disponible",
    priceCop: 680_000,
    badge: "Temporada de verano",
    highlights: [
      "1 dia de pesca",
      "Viaje grupal",
      "Pesca en rio",
      "Temporada de verano",
    ],
    description: [
      "Rio La Miel es una salida pensada para quienes quieren vivir una jornada de pesca en uno de esos escenarios donde el paisaje pesa tanto como la captura. Entre montanas, cascadas y naturaleza salvaje, este rio antioqueno de caudal medio propone una experiencia activa, visualmente poderosa y llena de conexion con el entorno.",
      "En sus aguas es posible encontrarse con especies como Mojarra, Picuda y Dorada, en una experiencia grupal que combina recorrido, lectura del rio y acompanamiento local. La Miel es ideal para quienes buscan una salida distinta, con el equilibrio entre comodidad, aventura y una pesca autentica con el sello de Mega Pesca.",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "1 desayuno, 1 almuerzo y 1 cena tipo fiambre",
      "Alojamiento 1 noche en cabana al frente del rio",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    availabilityMessage:
      "Temporada recomendada en verano. Reserva tu jornada con anticipacion.",
    reserveButtonLabel: "RESERVAR JORNADA",
    reviewTestimonials: [],
    images: [
      "/launch/homeriolamiel1.jpg",
      "/launch/homeriolamiel2.jpg",
      "/launch/homeriolamiel3.jpg",
      "/launch/homeriolamiel4.jpg",
    ],
  },
  playas: {
    slug: "playas",
    title: "Playas",
    location: "San Rafael Antioquia",
    reviews: 0,
    ratingValue: 0,
    statusLabel: "Prontamente",
    priceCop: 270_000,
    badge: "Embalse Oriente",
    highlights: [
      "1 dia de pesca",
      "Viaje grupal",
      "Pesca en embalse",
      "Capturas de Mojarra, Morrudo, Black Bass y Pavon",
    ],
    includedItems: [
      "Transporte desde Rionegro Ant",
      "Pesca en bote, motor y guia local",
      "Desayuno y almuerzo tipo fiambre",
      "Trofeos y reconocimientos",
      "Poliza de viaje",
    ],
    description: [
      "Playas es una salida pensada para quienes quieren disfrutar una jornada de pesca en embalse dentro del Oriente Antioqueno, en un entorno de agua abierta, montana y paisajes que invitan a desconectarse y concentrarse por completo en la experiencia.",
      "En este escenario de San Rafael es posible encontrarse con especies como Mojarra, Morrudo, Black Bass y Pavon, en una experiencia grupal de un dia que combina recorrido en bote, lectura del agua y acompanamiento local. Es una opcion ideal para quienes buscan una salida cercana, dinamica y bien organizada con el sello de Mega Pesca.",
    ],
    availabilityMessage:
      "Proximamente anunciaremos fechas y cupos disponibles.",
    reserveButtonLabel: "QUIERO MI CUPO",
    reviewTestimonials: [],
    images: [
      "/launch/homeplayas1.jpg",
      "/launch/homeplayas2.jpg",
      "/launch/homeplayas3.jpg",
    ],
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
