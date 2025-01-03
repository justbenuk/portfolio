import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Just Ben UK | Freelance Web Developer",
  description: "I am self-taught Web Developer based in the midlands",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
