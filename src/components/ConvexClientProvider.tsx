"use client";

import { ReactNode, useMemo } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
let convex: ConvexReactClient | null = null;

function getConvexClient() {
  if (!convexUrl) {
    throw new Error("Missing NEXT_PUBLIC_CONVEX_URL");
  }

  if (!convex) {
    convex = new ConvexReactClient(convexUrl);
  }

  return convex;
}

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const client = getConvexClient();

  const patchedUseAuth = useMemo(() => {
    return () => ({
      ...auth,
      getToken: async (opts?: { template?: string }) => {
        const token = await auth.getToken({ ...opts, template: "convex" });
        return token;
      },
    });
  }, [auth]);

  return (
    <ConvexProviderWithClerk client={client} useAuth={patchedUseAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
