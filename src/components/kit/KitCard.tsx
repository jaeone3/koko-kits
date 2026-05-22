import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { Kit } from "@/content/kits/types";
import { getKitPath } from "@/lib/kits";
import { cn } from "@/lib/utils";

export function KitCard({ kit }: { kit: Kit }) {
  const statusLabel =
    kit.status === "content-ready" ? "MVP ready" : "Planned";

  return (
    <article className="rounded-lg border p-5">
      <p className="text-sm font-medium text-muted-foreground">
        {kit.level} · {statusLabel}
      </p>
      <h3 className="mt-2 text-xl font-semibold">{kit.title}</h3>
      <p className="mt-3 text-muted-foreground">{kit.description}</p>
      <Link
        href={getKitPath(kit.category, kit.slug)}
        className={cn(buttonVariants({ className: "mt-5" }))}
      >
        View kit
      </Link>
    </article>
  );
}
