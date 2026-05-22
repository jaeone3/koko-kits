import Link from "next/link";

import type { Kit } from "@/content/kits/types";
import { getCategory, getKitPath } from "@/lib/kits";

export function KitCard({
  kit,
  showCategory = false,
}: {
  kit: Kit;
  showCategory?: boolean;
}) {
  const categoryTitle = showCategory ? getCategory(kit.category)?.title : null;

  return (
    <Link
      href={getKitPath(kit.category, kit.slug)}
      className="group block rounded-lg border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      {categoryTitle ? (
        <span className="inline-block rounded-md border px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {categoryTitle}
        </span>
      ) : null}
      <p className={`text-sm font-medium text-muted-foreground ${categoryTitle ? "mt-3" : ""}`}>
        {kit.level}
      </p>
      <h3 className="mt-2 text-xl font-semibold group-hover:underline">
        {kit.title}
      </h3>
      <p className="mt-3 text-muted-foreground">{kit.description}</p>
    </Link>
  );
}
