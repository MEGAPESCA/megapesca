"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="theme-page flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="mb-4 text-center text-xl font-semibold">Ingresar</h1>
        <div className="theme-panel p-4">
          <SignIn
            routing="path"
            path="/sign-in"
            fallbackRedirectUrl="/dashboard"
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
