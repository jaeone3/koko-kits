import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { KitCard } from "@/components/kit/KitCard";
import { getCategories, getCategory, getKitsByCategory } from "@/lib/kits";
import { trackEvent } from "@/lib/tracking";

export function generateStaticParams() {
  return getCategories().map((category) => ({
    locale: "en",
    categorySlug: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string }>;
}) {
  const { locale, categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const kits = getKitsByCategory(category.slug);

  const h = await headers();
  await trackEvent({
    eventName: "page_view",
    locale,
    source: `category:${category.slug}`,
    referrer: h.get("referer"),
    userAgent: h.get("user-agent"),
  });

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">Category</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {category.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{category.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {kits.map((kit) => (
          <KitCard key={kit.slug} kit={kit} />
        ))}
      </div>
    </section>
  );
}
