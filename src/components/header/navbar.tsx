"use client";
import { navItems } from "@/data/nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="tracking-widest hidden lg:flex flex-row space-x-4">
      {navItems.map((item, idx) => {
        const { name, href } = item;
        return (
          <Link
            href={href}
            key={idx}
            className={`${pathname === href && "underline decoration-purple-500 underline-offset-8"}`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
