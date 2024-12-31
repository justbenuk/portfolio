import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Just Ben UK | Freelance Web Developer",
  description: "I am self-taught Web Developer based in the midlands",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
