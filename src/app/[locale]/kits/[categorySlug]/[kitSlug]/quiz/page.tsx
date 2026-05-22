import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { QuizClient } from "@/components/quiz/QuizClient";
import { buttonVariants } from "@/components/ui/button";
import { getKit, getKits } from "@/lib/kits";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getKits().map((kit) => ({
    locale: "en",
    categorySlug: kit.category,
    kitSlug: kit.slug,
  }));
}

export default async function KitQuizPage({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string; kitSlug: string }>;
}) {
  const { locale, categorySlug, kitSlug } = await params;
  const kit = getKit(categorySlug, kitSlug);

  if (!kit) {
    notFound();
  }

  const h = await headers();
  await trackEvent({
    eventName: "page_view",
    kitSlug: kit.slug,
    locale,
    source: "quiz",
    referrer: h.get("referer"),
    userAgent: h.get("user-agent"),
  });

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6">
      <section>
        <p className="text-sm font-medium text-muted-foreground">Quiz</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {kit.title}
        </h1>
        <p className="mt-3 text-muted-foreground">
          See if you can pick the right Korean reply. Then practice the real
          conversation in Koko.
        </p>
        <div className="mt-6">
          <Link
            href={`/en/kits/${kit.category}/${kit.slug}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Back to kit
          </Link>
        </div>
      </section>
      <QuizClient
        kitSlug={kit.slug}
        locale={locale}
        kitTitle={kit.title}
        kitHref={`/en/kits/${kit.category}/${kit.slug}`}
        kokoHref={kit.cta.href}
        questions={kit.quiz}
      />
    </div>
  );
}
