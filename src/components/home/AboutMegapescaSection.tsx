import Image from "next/image";
import Link from "next/link";

const PANELS = [
  {
    title: "Que es Megapesca",
    text: "Megapesca nacio de una conexion profunda con la biodiversidad de Colombia. Queremos que cada pescador deportivo fortalezca su relacion con la naturaleza y promueva el cuidado de las especies, la fauna y la flora de nuestros rios y embalses.",
    image: "/launch/homellanos3.jpeg",
  },
  {
    title: "Comunidad",
    text: "Somos una comunidad de pescadores leales y apasionados por este deporte. Nuestro objetivo es cultivar respeto por la naturaleza y crear espacios de libertad, companerismo y amistad que unan a las personas alrededor de una misma pasion.",
    image: "/launch/homellanos1.jpeg",
  },
  {
    title: "Experiencias",
    text: "Megapesca te invita a recorrer Colombia, desde la alta montana hasta los llanos y las costas. Abrimos la puerta a destinos unicos para que vivas jornadas de pesca deportiva en lugares virgenes, autenticos e inolvidables.",
    image: "/launch/hometopocoro1.jpg",
  },
];

export default function AboutMegapescaSection() {
  return (
    <section className="w-full py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PANELS.map((panel) => (
            <article
              key={panel.title}
              className="group relative isolate min-h-[430px] overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />

              <div className="relative z-10 flex h-full flex-col px-6 py-8 text-white sm:px-8">
                <h3 className="text-3xl font-extrabold uppercase tracking-[0.06em]">
                  {panel.title}
                </h3>
                <p className="mt-8 max-w-[34ch] text-[1.06rem] leading-8 text-white/90">
                  {panel.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/trips" className="theme-gold-button">
            Ver experiencias
          </Link>
          <Link href="/contact" className="theme-outline-button">
            Unirme a la comunidad
          </Link>
        </div>
      </div>
    </section>
  );
}
