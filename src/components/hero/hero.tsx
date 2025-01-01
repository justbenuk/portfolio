import hr from "@/components/assets/hr.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 py-20 gap-10">
      <div className="flex flex-col justify-center">
        <h1 className="tracking-widest font-bold text-4xl mb-4">
          Let&apos;s Talk About Your Project
        </h1>
        <p>
          A website is like your business&apos;s 24/7 storefront—always open and
          never needs a welcome mat. Without one, it&apos;s like trying to run a
          pizza shop without an oven—great ideas, but no way to deliver. In
          today&apos;s world, if you don&apos;t have a website, do you even
          exist? It&apos;s your first impression and where customers go to see
          what you&apos;re all about.
        </p>
        <div className="mt-6 space-x-4">
          <Button variant="default">
            <Link href="/hire-me">Hire Me</Link>
          </Button>
          <Button variant="outline" className="bg-green-500">
            <Link href="/work">My Work</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={hr} alt="hero image" />
      </div>
    </div>
  );
}
