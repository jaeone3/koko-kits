import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Download, FileQuestion, MessageCircle } from "lucide-react";

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

export default async function KitDetailPage({
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
    source: "kit_detail",
    referrer: h.get("referer"),
    userAgent: h.get("user-agent"),
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-10">
      <section className="pb-5 sm:border-b sm:pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            {kit.level}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {kit.title}
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-8">
            {kit.description}
          </p>
          <div className="mt-5 grid gap-2 sm:hidden">
            <Link
              href={kit.cta.href}
              className={cn(buttonVariants({ className: "w-full" }))}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Practice in Koko
            </Link>
            <Link
              href={`/en/kits/${kit.category}/${kit.slug}/quiz`}
              className={cn(
                buttonVariants({ variant: "outline", className: "w-full" }),
              )}
            >
              <FileQuestion className="size-4" aria-hidden="true" />
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-7 py-5 sm:gap-10 sm:py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="flex min-w-0 flex-col gap-7 sm:gap-12">
          <section>
            <div className="mb-3 sm:mb-5">
              <h2 className="text-xl font-semibold sm:text-2xl">Situation</h2>
              <p className="mt-2 text-muted-foreground">{kit.purpose}</p>
            </div>
            <div className="divide-y rounded-lg border sm:grid sm:gap-3 sm:divide-y-0 sm:border-0 md:grid-cols-2">
              {kit.roles.map((role) => (
                <article key={role.name} className="p-3 sm:rounded-lg sm:border sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-lg font-semibold sm:text-xl">
                      {role.name}
                    </p>
                    <span className="rounded-md border px-2 py-1 text-xs font-medium text-muted-foreground sm:hidden">
                      Role
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground sm:mt-2 sm:text-base">
                    {role.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-start gap-2 sm:mb-5">
              <MessageCircle className="mt-1 size-4 sm:size-5" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Conversation
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Read it once, then try the quiz.
                </p>
              </div>
            </div>
            <div className="border-y py-3 sm:hidden">
              {kit.dialogue.length > 0 ? (
                <>
                  {kit.dialogue.slice(0, 2).map((line, index) => (
                    <article
                      key={`${line.speaker}-${index}`}
                      className="grid gap-2 border-b py-3"
                    >
                      <span className="w-fit rounded-md border px-2 py-1 text-xs font-medium">
                        {line.speaker}
                      </span>
                      <div className="border-l-2 py-1 pl-3">
                        <p className="text-lg font-semibold">{line.korean}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {line.english}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {line.romanization}
                        </p>
                      </div>
                    </article>
                  ))}
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium">
                      <span>Show full dialogue</span>
                      <span className="text-muted-foreground group-open:hidden">
                        More
                      </span>
                      <span className="hidden text-muted-foreground group-open:inline">
                        Less
                      </span>
                    </summary>
                    <div className="border-t">
                      {kit.dialogue.slice(2).map((line, index) => (
                        <article
                          key={`${line.speaker}-${index + 2}`}
                          className="grid gap-2 border-b py-3 last:border-b-0"
                        >
                          <span className="w-fit rounded-md border px-2 py-1 text-xs font-medium">
                            {line.speaker}
                          </span>
                          <div
                            className={cn(
                              "border-l-2 py-1 pl-3",
                              line.speaker === "Customer" && "border-l-foreground",
                            )}
                          >
                            <p className="text-lg font-semibold">
                              {line.korean}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {line.english}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {line.romanization}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </details>
                </>
              ) : (
                <p className="text-muted-foreground">
                  Dialogue content placeholder.
                </p>
              )}
            </div>
            <div className="hidden rounded-lg border p-4 sm:block">
              {kit.dialogue.length > 0 ? (
                <div className="grid gap-3 sm:gap-4">
                  {kit.dialogue.map((line, index) => (
                    <article
                      key={`${line.speaker}-${index}`}
                      className="grid gap-2 md:grid-cols-[120px_minmax(0,1fr)] md:gap-3"
                    >
                      <div>
                        <span className="inline-flex rounded-md border px-2 py-1 text-xs font-medium">
                          {line.speaker}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "border-l-2 py-1 pl-3 sm:rounded-lg sm:border sm:p-4",
                          line.speaker === "Customer" &&
                            "border-l-foreground bg-muted/40 sm:border",
                        )}
                      >
                        <p className="text-lg font-semibold sm:text-xl">
                          {line.korean}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground sm:mt-2 sm:text-base">
                          {line.english}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {line.romanization}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Dialogue content placeholder.
                </p>
              )}
            </div>
          </section>
        </div>

        <aside className="hidden sm:block lg:sticky lg:top-6">
          <div className="rounded-lg border p-4 sm:p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Save and practice
            </p>
            <h2 className="mt-2 text-lg font-semibold sm:text-xl">
              Practice without answer choices in Koko.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Download the kit, see how you respond, then practice it for real
              in Koko.
            </p>
            <div className="mt-5 grid gap-2">
              <Link
                href={kit.cta.href}
                className={cn(buttonVariants({ className: "w-full" }))}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Practice in Koko
              </Link>
              <Link
                href={`/en/kits/${kit.category}/${kit.slug}/quiz`}
                className={cn(
                  buttonVariants({ variant: "outline", className: "w-full" }),
                )}
              >
                <FileQuestion className="size-4" aria-hidden="true" />
                Take the Quiz
              </Link>
              <Link
                href={`/download/${kit.category}-${kit.slug}-pdf`}
                className={cn(
                  buttonVariants({ variant: "outline", className: "w-full" }),
                )}
              >
                <Download className="size-4" aria-hidden="true" />
                Download PDF
              </Link>
              <Link
                href={`/download/${kit.category}-${kit.slug}-anki`}
                className={cn(
                  buttonVariants({ variant: "ghost", className: "w-full" }),
                )}
              >
                Download Anki deck
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-10 rounded-lg border bg-muted/30 px-6 py-10 text-center sm:mt-14 sm:px-10 sm:py-14">
        <p className="text-sm font-medium text-muted-foreground">
          Ready to use it?
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Knowing the phrase is one thing.
          <br className="hidden sm:inline" />{" "}
          Replying in real time is the hard part.
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Practice this conversation in Koko — without answer choices.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={kit.cta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Practice in Koko
          </Link>
          <Link
            href={`/en/kits/${kit.category}/${kit.slug}/quiz`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <FileQuestion className="size-4" aria-hidden="true" />
            Take the Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
