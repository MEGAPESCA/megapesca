"use client";

import { type FormEvent, useState } from "react";

import type { TripDestinationItem } from "@/lib/trips/catalog";

type CustomTripSectionProps = {
  destinations: TripDestinationItem[];
};

const serviceOptions = [
  { id: "transport", label: "Transporte", detail: "Traslado desde el aeropuerto JMC en Rionegro, Antioquia." },
  { id: "boat", label: "Bote y motor", detail: "Navegacion para la jornada de pesca." },
  { id: "guide", label: "Guias de pesca", detail: "Acompanamiento Mega Pesca." },
  { id: "food", label: "Alimentacion", detail: "Comidas segun la duracion de la experiencia." },
  { id: "snacks", label: "Snacks y bebidas", detail: "Hidratacion y refrigerios para la ruta." },
  { id: "lodging", label: "Hospedaje", detail: "Opciones de alojamiento para tu grupo." },
];

const customDestinationLabels: Partial<Record<TripDestinationItem["slug"], string>> = {
  "la-liga": "Guatape",
};

function getCustomDestinationLabel(destination: TripDestinationItem | undefined) {
  if (!destination) return "Necesito asesoria Mega Pesca";

  return customDestinationLabels[destination.slug] ?? destination.title;
}

const fieldClassName =
  "mt-2 w-full rounded-xl border border-border bg-background/70 px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function CustomTripSection({
  destinations,
}: CustomTripSectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const selectableDestinations = destinations.filter(
    (destination) => destination.slug !== "tournament",
  );

  function toggleService(serviceId: string) {
    setSelectedServices((currentServices) =>
      currentServices.includes(serviceId)
        ? currentServices.filter((id) => id !== serviceId)
        : [...currentServices, serviceId],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
    const destinationSlug = form.get("destination")?.toString();
    const destination = selectableDestinations.find(
      (item) => item.slug === destinationSlug,
    );
    const selectedServiceLabels = serviceOptions
      .filter((service) => selectedServices.includes(service.id))
      .map((service) => service.label);
    const date = form.get("date")?.toString();
    const groupSize = form.get("groupSize")?.toString();
    const notes = form.get("notes")?.toString().trim();

    const message = [
      "Hola Mega Pesca, quiero cotizar una experiencia personalizada.",
      `Destino: ${getCustomDestinationLabel(destination)}`,
      date ? `Fecha exacta deseada: ${date}` : "",
      groupSize ? `Numero de viajeros: ${groupSize}` : "",
      selectedServiceLabels.length > 0
        ? `Servicios: ${selectedServiceLabels.join(", ")}`
        : "Servicios: Quiero recomendacion de Mega Pesca",
      notes ? `Detalles adicionales: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (phone) {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
      return;
    }

    window.location.href = "/contact";
  }

  return (
    <section className="px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-card shadow-[0_28px_70px_rgba(15,23,42,0.16)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
          <div className="pointer-events-none absolute -right-28 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.65fr] lg:gap-12">
              <div className="lg:pt-2">
                <p className="font-serif text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                  Experiencias a tu medida
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-foreground sm:text-4xl">
                  Tu pesca, a tu manera
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Cada destino visible en Mega Pesca puede convertirse en una salida creada para tu grupo. Define lo esencial y nosotros construimos una propuesta clara, practica y a tu medida.
                </p>
                <div className="mt-6 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">
                  El valor se cotiza segun el destino, la fecha, el numero de viajeros y los servicios elegidos.
                </div>
                <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-muted-foreground">
                  <p className="font-serif text-xs uppercase tracking-[0.18em] text-primary">
                    Siempre incluido
                  </p>
                  Todas nuestras aventuras incluyen poliza viajera.
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-[1.35fr_0.8fr_0.65fr]">
                  <label className="text-sm font-medium text-foreground">
                    <span className="font-serif text-xs uppercase tracking-[0.18em] text-primary">01. Destino</span>
                    <select required name="destination" defaultValue="" className={fieldClassName}>
                      <option value="" disabled>Elige un destino de Mega Pesca</option>
                      {selectableDestinations.map((destination) => (
                        <option key={destination.slug} value={destination.slug}>
                          {getCustomDestinationLabel(destination)}
                        </option>
                      ))}
                      <option value="advisory">Quiero asesoria Mega Pesca</option>
                    </select>
                  </label>

                  <label className="text-sm font-medium text-foreground">
                    <span className="font-serif text-xs uppercase tracking-[0.18em] text-primary">02. Fecha</span>
                    <input required name="date" type="date" className={fieldClassName} />
                  </label>

                  <label className="text-sm font-medium text-foreground">
                    <span className="font-serif text-xs uppercase tracking-[0.18em] text-primary">03. Viajeros</span>
                    <input required min="1" name="groupSize" type="number" placeholder="Personas" className={fieldClassName} />
                  </label>
                </div>

                <details open className="mt-6 rounded-2xl border border-border bg-background/35">
                  <summary className="cursor-pointer list-none px-4 py-4 sm:px-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-serif text-xs uppercase tracking-[0.18em] text-primary">04. Servicios para tu experiencia</p>
                        <p className="mt-1 text-sm text-muted-foreground">Selecciona los que te interesan. Puedes elegir varios.</p>
                      </div>
                      <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary">Desglosar</span>
                    </div>
                  </summary>

                  <div className="border-t border-border px-4 py-4 sm:px-5">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service.id);

                        return (
                          <label
                            key={service.id}
                            className={`cursor-pointer rounded-xl border p-3 transition ${
                              isSelected
                                ? "border-primary bg-primary/10 shadow-[0_8px_20px_rgba(214,163,84,0.12)]"
                                : "border-border bg-card/50 hover:border-primary/50"
                            }`}
                          >
                            <input
                              checked={isSelected}
                              className="sr-only"
                              name="services"
                              type="checkbox"
                              value={service.id}
                              onChange={() => toggleService(service.id)}
                            />
                            <span className="block text-sm font-semibold text-foreground">{service.label}</span>
                            <span className="mt-1 block text-xs leading-5 text-muted-foreground">{service.detail}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </details>

                <label className="mt-5 block text-sm font-medium text-foreground">
                  <span className="font-serif text-xs uppercase tracking-[0.18em] text-primary">05. Cuentanos tu idea</span>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Comparte el tipo de pesca, nivel de experiencia, expectativas del grupo o cualquier detalle especial."
                    className={fieldClassName}
                  />
                </label>

                <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-5 text-muted-foreground">
                    Recibiras una cotizacion personalizada segun la informacion que compartas con nuestro equipo.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_rgba(214,163,84,0.28)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Solicitar cotizacion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
