import { Users2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { profileLinks } from "@/data/profile-links";
import { adminLinks } from "@/data/admin-links";
import { Separator } from "../ui/separator";
export default function Profile() {
  return (
    <div className="hidden lg:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Users2 className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {profileLinks.map((item, idx) => {
            const { name, href } = item;
            return (
              <DropdownMenuItem key={idx}>
                <Link href={href} className="capitalize">
                  {name}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <Separator />
          {adminLinks.map((adminItem, idx) => {
            const { name, href } = adminItem;
            return (
              <DropdownMenuItem key={idx}>
                <Link href={href} className="capitalize">
                  {name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
