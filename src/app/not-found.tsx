import Header from "@/components/header/header";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import nf from "@/components/assets/nf.svg";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Container>
        <Image src={nf} alt="not foound" className="w-96 mx-auto" />
        <div className="my-10 text-2xl text-center px-6">
          Oops! Looks like this page took a wrong turn... and ended up in
          Narnia.
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
