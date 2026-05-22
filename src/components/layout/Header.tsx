import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={routes.home} className="text-lg font-semibold">
          Koko Kits
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href={routes.kits}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Kits
          </Link>
          <Link
            href={routes.cafeOrderingKit}
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Cafe Ordering
          </Link>
        </nav>
      </div>
    </header>
  );
}
