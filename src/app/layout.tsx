import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Megapesca",
  description: "Plataforma hispana integral de pesca: comunidad, torneos y megatienda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!clerkPublishableKey) {
    throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <html lang="es">
        <body className="antialiased bg-black text-white">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
