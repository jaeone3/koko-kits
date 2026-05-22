import Link from "next/link";

import type { Category } from "@/content/kits/types";
import { getKitsByCategory } from "@/lib/kits";

export function CategoryCard({ category }: { category: Category }) {
  const kitCount = getKitsByCategory(category.slug).length;

  return (
    <Link
      href={`/en/kits/${category.slug}`}
      className="group block rounded-lg border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <p className="text-sm font-medium text-muted-foreground">
        {kitCount} kits
      </p>
      <h2 className="mt-2 text-2xl font-semibold group-hover:underline">
        {category.title}
      </h2>
      <p className="mt-3 min-h-12 text-muted-foreground">
        {category.description}
      </p>
    </Link>
  );
}
