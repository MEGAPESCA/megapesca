"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 text-xs font-medium text-muted-foreground shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl",
        className
      )}
    >
      <Moon
        className={cn(
          "h-3.5 w-3.5 transition-colors",
          !isLight ? "text-primary" : "text-muted-foreground"
        )}
      />
      <Switch
        checked={isLight}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
        aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      />
      <Sun
        className={cn(
          "h-3.5 w-3.5 transition-colors",
          isLight ? "text-primary" : "text-muted-foreground"
        )}
      />
    </div>
  );
}
