import {
  SheetContent,
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/nav-items";
import { adminLinks } from "@/data/admin-links";
import { profileLinks } from "@/data/profile-links";
import { Separator } from "../ui/separator";
export default function ResonsiveMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href="/">Just Ben</Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-2 mt-4">
            {navItems.map((navItem, idx) => {
              const { name, href } = navItem;
              return (
                <Link href={href} key={idx}>
                  {name}
                </Link>
              );
            })}
            <Separator />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <SheetTitle>Your Profile</SheetTitle>
            {profileLinks.map((profileItem, idx) => {
              const { name, href } = profileItem;
              return (
                <Link href={href} key={idx}>
                  {name}
                </Link>
              );
            })}
            <Separator />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <SheetTitle>Admin</SheetTitle>
            {adminLinks.map((adminItem, idx) => {
              const { name, href } = adminItem;
              return (
                <Link href={href} key={idx}>
                  {name}
                </Link>
              );
            })}
            <Separator />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
