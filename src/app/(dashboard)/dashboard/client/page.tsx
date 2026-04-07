"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";

import { api } from "@/../convex/_generated/api";
import type { Doc } from "@/../convex/_generated/dataModel";

export default function ClientDashboardPage() {
  return <ClientDashboardPageWithAuth />;
}

function ClientDashboardPageWithAuth() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      router.replace("/sign-in");
    }
  }, [isAuthenticated, isLoading, router]);

  const captures = useQuery(api.functions.captures.listMine, isAuthenticated ? {} : "skip");
  const loading = isLoading || captures === undefined;

  if (!isAuthenticated) {
    return (
      <main className="grid min-h-screen place-items-center">
        <p className="text-sm text-muted-foreground">Redirigiendo a inicio de sesion...</p>
      </main>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Mi Dashboard</h1>
        <p className="text-muted-foreground">
          Aqui veras tus compras, capturas, equipo y favoritos.
        </p>
      </header>

      <section className="theme-panel p-4">
        <h3 className="font-semibold">Capturas</h3>

        <div className="mt-4">
          {loading && <p className="text-sm text-muted-foreground">Cargando...</p>}

          {!loading && captures && captures.length === 0 && (
            <p className="text-sm text-muted-foreground">Aun no tienes capturas.</p>
          )}

          {!loading && captures && captures.length > 0 && (
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {captures.map((capture: Doc<"captures">) => (
                <li key={capture._id} className="theme-panel-soft p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{capture.species}</span>
                    <span className="text-muted-foreground">
                      {new Date(capture.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {capture.location} • {capture.weightKg ?? "?"} kg • {capture.lengthCm ?? "?"} cm
                  </p>
                  {capture.notes && (
                    <p className="mt-1 text-xs text-muted-foreground">{capture.notes}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
