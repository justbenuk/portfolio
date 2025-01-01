"use client";
import Header from "@/components/header/header";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Container>
        <h1 className="flex items-center justify-center font-bold text-7xl capitalize">
          oh no!!!{" "}
        </h1>
        <div className="mb-10 text-2xl text-center px-6">
          Something as gone wrong
        </div>
        <div className="flex items-center justify-center">
          <Button variant="outline" size="lg" className="bg-green-500">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </Container>
      <div></div>
    </div>
  );
}
