import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, FileQuestion, Layers, MessageCircle } from "lucide-react";

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

export default async function KitDetailPage({
  params,
}: {
  params: Promise<{ categorySlug: string; kitSlug: string }>;
}) {
  const { categorySlug, kitSlug } = await params;
  const kit = getKit(categorySlug, kitSlug);

  if (!kit) {
    notFound();
  }

  const formatCount = (count: number, label: string) =>
    `${count || "TBD"} ${label}${count === 1 ? "" : "s"}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section className="border-b pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            {kit.level} · {kit.status === "content-ready" ? "MVP ready" : "Planned"}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance">
            {kit.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {kit.description}
          </p>
        </div>
      </section>

      <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="flex min-w-0 flex-col gap-12">
          <section>
            <div className="mb-5 flex items-center gap-2">
              <Layers className="size-5" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Study path</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <article className="rounded-lg border p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  1. Learn
                </p>
                <p className="mt-2 font-semibold">
                  {formatCount(kit.phrases.length, "phrase")}
                </p>
              </article>
              <article className="rounded-lg border p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  2. Read
                </p>
                <p className="mt-2 font-semibold">Staff / Customer dialogue</p>
              </article>
              <article className="rounded-lg border p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  3. Check
                </p>
                <p className="mt-2 font-semibold">
                  {formatCount(kit.quiz.length, "quiz question")}
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Situation</h2>
              <p className="mt-2 text-muted-foreground">{kit.purpose}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {kit.roles.map((role) => (
                <article key={role.name} className="rounded-lg border p-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Role
                  </p>
                  <p className="mt-2 text-xl font-semibold">{role.name}</p>
                  <p className="mt-2 text-muted-foreground">
                    {role.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Key phrases</h2>
              <p className="mt-2 text-muted-foreground">
                Korean first, then meaning and romanization.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border">
              {kit.phrases.length > 0 ? (
                kit.phrases.map((phrase, index) => (
                  <article
                    key={phrase.korean}
                    className="grid gap-3 border-b p-4 last:border-b-0 md:grid-cols-[40px_minmax(0,1fr)]"
                  >
                    <div className="flex size-8 items-center justify-center rounded-md bg-muted text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xl font-semibold">{phrase.korean}</p>
                      <p className="mt-2 text-muted-foreground">
                        {phrase.english}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {phrase.romanization}
                      </p>
                      {phrase.tip ? (
                        <p className="mt-3 text-sm text-muted-foreground">
                          {phrase.tip}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))
              ) : (
                <p className="p-4 text-muted-foreground">
                  Phrase content placeholder.
                </p>
              )}
            </div>
          </section>

          <section>
            <div className="mb-5 flex items-center gap-2">
              <MessageCircle className="size-5" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-semibold">Short dialogue</h2>
                <p className="mt-2 text-muted-foreground">
                  Read the exchange once, then try the quiz.
                </p>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              {kit.dialogue.length > 0 ? (
                <div className="grid gap-4">
                  {kit.dialogue.map((line, index) => (
                    <article
                      key={`${line.speaker}-${index}`}
                      className="grid gap-3 md:grid-cols-[120px_minmax(0,1fr)]"
                    >
                      <div>
                        <span className="inline-flex rounded-md border px-2 py-1 text-xs font-medium">
                          {line.speaker}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "rounded-lg border p-4",
                          line.speaker === "Customer" && "bg-muted/40",
                        )}
                      >
                        <p className="text-xl font-semibold">{line.korean}</p>
                        <p className="mt-2 text-muted-foreground">
                          {line.english}
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

        <aside className="lg:sticky lg:top-6">
          <div className="rounded-lg border p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Save and practice
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              Practice without answer choices in Koko.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Download the kit, check your reactions, then move into real
              conversation practice.
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
    </div>
  );
}
