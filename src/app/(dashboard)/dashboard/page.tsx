"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";

import { api } from "@/../convex/_generated/api";

export default function DashboardPage() {
  return <DashboardPageWithAuth />;
}

function DashboardPageWithAuth() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { user, isLoaded } = useUser();
  const [message, setMessage] = useState("Validando tu sesion...");

  const ensureMe = useMutation(api.functions.users.ensureMe);
  const whoami = useQuery(api.functions.users.whoami, isAuthenticated ? {} : "skip");

  useEffect(() => {
    async function run() {
      if (!isLoaded || isLoading) return;
      if (!isAuthenticated) {
        router.push("/sign-in");
        return;
      }

      setMessage("Preparando tu panel...");

      try {
        await ensureMe({});

        if (whoami) {
          const role = whoami.role;
          const name = whoami.name || user?.fullName || "Usuario";

          setMessage(`Bienvenido, ${name}`);

          setTimeout(() => {
            if (role === "admin") router.push("/dashboard/admin");
            else router.push("/dashboard/client");
          }, 1200);
        }
      } catch (error) {
        console.error("Error al inicializar dashboard:", error);
        setMessage("Error al conectar. Intenta de nuevo.");
      }
    }

    run();
  }, [ensureMe, isAuthenticated, isLoaded, isLoading, router, user, whoami]);

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="theme-panel w-full max-w-lg space-y-3 p-8 text-center">
        <h1 className="text-2xl font-bold tracking-wide">{message}</h1>
        <p className="text-sm text-muted-foreground">Megapesca Dashboard</p>
      </div>
    </main>
  );
}
