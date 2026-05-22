import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { Category } from "@/content/kits/types";
import { getKitsByCategory } from "@/lib/kits";
import { cn } from "@/lib/utils";

export function CategoryCard({ category }: { category: Category }) {
  const kitCount = getKitsByCategory(category.slug).length;

  return (
    <article className="rounded-lg border p-5">
      <p className="text-sm font-medium text-muted-foreground">
        {kitCount} kits
      </p>
      <h2 className="mt-2 text-2xl font-semibold">{category.title}</h2>
      <p className="mt-3 min-h-12 text-muted-foreground">
        {category.description}
      </p>
      <Link
        href={`/en/kits/${category.slug}`}
        className={cn(buttonVariants({ variant: "outline", className: "mt-5" }))}
      >
        View category
      </Link>
    </article>
  );
}
