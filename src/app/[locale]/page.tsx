import Link from "next/link";
import { headers } from "next/headers";

import { KitCard } from "@/components/kit/KitCard";
import { buttonVariants } from "@/components/ui/button";
import { getKits } from "@/lib/kits";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const kits = getKits();

  const h = await headers();
  await trackEvent({
    eventName: "page_view",
    locale,
    source: "home",
    referrer: h.get("referer"),
    userAgent: h.get("user-agent"),
  });

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-16 sm:px-6 lg:py-20">
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
            Browse by category
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">All kits</h2>
          <p className="mt-2 text-muted-foreground">
            Travel, Korean Life, and Career — pick a situation and dive in.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit) => (
            <KitCard
              key={`${kit.category}-${kit.slug}`}
              kit={kit}
              showCategory
            />
          ))}
        </div>
      </section>
    </div>
  );
}
