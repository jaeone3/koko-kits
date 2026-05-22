import Link from "next/link";

import { CategoryCard } from "@/components/kit/CategoryCard";
import { KitCard } from "@/components/kit/KitCard";
import { buttonVariants } from "@/components/ui/button";
import { getCategories, getKits } from "@/lib/kits";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function LocaleHomePage() {
  const categories = getCategories();
  const popularKits = getKits().slice(0, 3);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-16 sm:px-6 lg:py-24">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Koko Kits
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Free Korean conversation kits for real-life situations.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Pick a situation, learn a few useful phrases, save the kit, then
          practice the real conversation in Koko.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={routes.cafeOrderingKit}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Start Cafe Ordering
          </Link>
          <Link
            href={routes.kits}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Browse all kits
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <p className="mt-2 text-muted-foreground">
            Start with Travel, Korean Life, or Career.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Popular kits</h2>
          <p className="mt-2 text-muted-foreground">
            Initial validation starts with one representative kit per category.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {popularKits.map((kit) => (
            <KitCard key={`${kit.category}-${kit.slug}`} kit={kit} />
          ))}
        </div>
      </section>
    </div>
  );
}
