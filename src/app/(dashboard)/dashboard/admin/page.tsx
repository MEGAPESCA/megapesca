"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";

import { api } from "@/../convex/_generated/api";

export default function AdminDashboardPage() {
  return <AdminDashboardPageWithAuth />;
}

function AdminDashboardPageWithAuth() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const me = useQuery(api.functions.users.whoami, isAuthenticated ? {} : "skip");
  const ensureMe = useMutation(api.functions.users.ensureMe);
  const ensuredOnce = useRef(false);

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace("/sign-in");
      return;
    }

    if (me === undefined) return;

    if (me === null && !ensuredOnce.current) {
      ensuredOnce.current = true;
      void (async () => {
        try {
          await ensureMe({});
        } catch (e) {
          console.error("ensureMe en admin fallo:", e);
        }
      })();
      return;
    }

    if (me && me.role !== "admin") {
      router.replace("/dashboard/client");
    }
  }, [ensureMe, isAuthenticated, isLoading, me, router]);

  if (isLoading || (isAuthenticated && me === undefined)) {
    return (
      <main className="grid min-h-screen place-items-center">
        <p className="text-sm text-muted-foreground">Verificando permisos...</p>
      </main>
    );
  }

  if (!me || me.role !== "admin") return null;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <p className="text-muted-foreground">Metricas: ventas, usuarios y pedidos.</p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {["Ventas hoy", "Usuarios activos", "Tickets abiertos", "Pedidos pendientes"].map((title) => (
          <div key={title} className="theme-panel-soft p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-2xl font-bold text-primary">—</p>
          </div>
        ))}
      </section>
    </div>
  );
}
