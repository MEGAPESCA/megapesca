"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="theme-page flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="mb-4 text-center text-xl font-semibold">Registrarse</h1>
        <div className="theme-panel p-4">
          <SignUp
            routing="path"
            path="/sign-up"
            fallbackRedirectUrl="/dashboard"
            signInUrl="/sign-in"
            appearance={{
              variables: { colorPrimary: "#d6a354" },
              layout: { socialButtonsVariant: "iconButton" },
            }}
          />
        </div>
      </div>
    </main>
  );
}
