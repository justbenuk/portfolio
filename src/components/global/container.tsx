import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn("mx-auto max-w-6xl xl:max-w-7xl py-4 gap-4", className)}
      >
        {children}
      </div>
    </>
  );
}
