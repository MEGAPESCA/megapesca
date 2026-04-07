import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Megapesca",
  description:
    "Plataforma hispana integral de pesca: comunidad, torneos y megatienda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clerkPublishableKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPublishableKey) {
    throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY");
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="theme-page antialiased min-h-screen flex flex-col">
        <ClerkProvider publishableKey={clerkPublishableKey}>
          <ThemeProvider>
            <main className="flex-grow">
              {children}
            </main>

            <Footer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
