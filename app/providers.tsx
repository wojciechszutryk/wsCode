"use client";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
    >
      <Theme appearance="dark" accentColor="red">
        {children}
      </Theme>
    </ThemeProvider>
  );
}
