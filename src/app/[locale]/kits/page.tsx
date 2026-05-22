import { KitCard } from "@/components/kit/KitCard";
import { getCategories, getKitsByCategory } from "@/lib/kits";

export default function KitsPage() {
  const categories = getCategories();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Korean conversation kits
        </h1>
        <p className="mt-3 text-muted-foreground">
          Short, practical Korean kits for specific real-life situations.
        </p>
      </div>
      {categories.map((category) => (
        <section key={category.slug}>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">{category.title}</h2>
            <p className="mt-2 text-muted-foreground">
              {category.description}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {getKitsByCategory(category.slug).map((kit) => (
              <KitCard key={kit.slug} kit={kit} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
