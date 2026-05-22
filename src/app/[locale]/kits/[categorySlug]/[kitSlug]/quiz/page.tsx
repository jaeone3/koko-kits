import Link from "next/link";
import { notFound } from "next/navigation";

import { QuizClient } from "@/components/quiz/QuizClient";
import { buttonVariants } from "@/components/ui/button";
import { getKit, getKits } from "@/lib/kits";
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
  params: Promise<{ categorySlug: string; kitSlug: string }>;
}) {
  const { categorySlug, kitSlug } = await params;
  const kit = getKit(categorySlug, kitSlug);

  if (!kit) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6">
      <section>
        <p className="text-sm font-medium text-muted-foreground">Quiz</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {kit.title}
        </h1>
        <p className="mt-3 text-muted-foreground">
          Check whether you can recognize the right Korean response before
          practicing the conversation in Koko.
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
        kitTitle={kit.title}
        kitHref={`/en/kits/${kit.category}/${kit.slug}`}
        kokoHref={kit.cta.href}
        questions={kit.quiz}
      />
    </div>
  );
}
