"use client";

import * as React from "react";

type YesNo = "yes" | "no" | "";

export default function SubscribeForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [isClient, setIsClient] = React.useState<YesNo>("");
  const [joinWA, setJoinWA] = React.useState<YesNo>("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [ok, setOk] = React.useState(false);

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const validPhone = (v: string) => v.trim() === "" || /^\+?\d[\d\s-]{6,}$/.test(v.trim());

  const isValid =
    name.trim().length >= 2 &&
    validEmail(email) &&
    validPhone(whatsapp) &&
    isClient !== "" &&
    joinWA !== "";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(false);

    if (!isValid) {
      setError("Por favor completa los campos requeridos.");
      return;
    }

    try {
      setLoading(true);
      console.log("Suscripcion:", {
        name,
        email,
        whatsapp,
        isClient,
        joinWA,
      });
      setOk(true);
    } catch {
      setError("Ocurrio un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "theme-input h-11 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary/30";

  const groupLabel = "text-left text-sm font-medium text-white";

  const yesNoBox = (checked: boolean) =>
    `flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 transition ${
      checked
        ? "border-primary/60 bg-primary/20 text-white"
        : "border-white/20 bg-white/10 text-white hover:bg-white/15"
    }`;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="col-span-1">
          <label className={groupLabel} htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            className={`${inputCls} mt-1`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-span-1">
          <label className={groupLabel} htmlFor="email">
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className={`${inputCls} mt-1`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-span-1 sm:col-span-2">
          <label className={groupLabel} htmlFor="whatsapp">
            WhatsApp <span className="font-normal text-white/70">(opcional)</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+57 3xx xxx xxxx"
            className={`${inputCls} mt-1`}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="col-span-1">
          <p className={groupLabel}>Ya eres cliente?</p>
          <div className="mt-2 flex items-center gap-3">
            <label className={yesNoBox(isClient === "yes")}>
              <input
                type="checkbox"
                className="accent-white"
                checked={isClient === "yes"}
                onChange={() => setIsClient(isClient === "yes" ? "" : "yes")}
              />
              <span>Si</span>
            </label>
            <label className={yesNoBox(isClient === "no")}>
              <input
                type="checkbox"
                className="accent-white"
                checked={isClient === "no"}
                onChange={() => setIsClient(isClient === "no" ? "" : "no")}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="col-span-1">
          <p className={groupLabel}>Quieres unirte a nuestro grupo de WhatsApp?</p>
          <div className="mt-2 flex items-center gap-3">
            <label className={yesNoBox(joinWA === "yes")}>
              <input
                type="checkbox"
                className="accent-white"
                checked={joinWA === "yes"}
                onChange={() => setJoinWA(joinWA === "yes" ? "" : "yes")}
              />
              <span>Si</span>
            </label>
            <label className={yesNoBox(joinWA === "no")}>
              <input
                type="checkbox"
                className="accent-white"
                checked={joinWA === "no"}
                onChange={() => setJoinWA(joinWA === "no" ? "" : "no")}
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      {error && (
        <p className="rounded-md border border-red-500/30 bg-red-900/30 px-3 py-2 text-sm text-red-200">
          {error}
        </p>
      )}
      {ok && (
        <p className="rounded-md border border-emerald-500/30 bg-emerald-900/20 px-3 py-2 text-sm text-emerald-200">
          Listo. Te avisaremos del lanzamiento y novedades.
        </p>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={!isValid || loading}
          className="theme-gold-button h-11 px-6 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Quiero estar al tanto"}
        </button>
      </div>

      <p className="text-center text-xs text-white/70">
        Sin spam. Solo noticias del lanzamiento y ofertas.
      </p>
    </form>
  );
}
