"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { trackQuizEvent } from "@/app/actions/track";
import { buttonVariants } from "@/components/ui/button";
import type { QuizQuestion } from "@/content/kits/types";
import { cn } from "@/lib/utils";

type QuizClientProps = {
  kitSlug: string;
  locale: string;
  kitTitle: string;
  kitHref: string;
  kokoHref: string;
  questions: QuizQuestion[];
};

export function QuizClient({
  kitSlug,
  locale,
  kitTitle,
  kitHref,
  kokoHref,
  questions,
}: QuizClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const startedRef = useRef(false);
  const completedRef = useRef(false);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const isFinished = answers.length === questions.length;
  const score = useMemo(
    () =>
      questions.reduce((total, question, index) => {
        return answers[index] === question.answerIndex ? total + 1 : total;
      }, 0),
    [questions, answers],
  );

  useEffect(() => {
    if (questions.length === 0) return;
    if (startedRef.current) return;
    startedRef.current = true;
    void trackQuizEvent({ eventName: "quiz_start", kitSlug, locale });
  }, [questions.length, kitSlug, locale]);

  useEffect(() => {
    if (questions.length === 0) return;
    if (!isFinished) return;
    if (completedRef.current) return;
    completedRef.current = true;
    void trackQuizEvent({ eventName: "quiz_complete", kitSlug, locale });
  }, [isFinished, questions.length, kitSlug, locale]);

  if (questions.length === 0) {
    return (
      <section className="rounded-lg border p-5">
        <h2 className="text-xl font-semibold">Quiz coming soon</h2>
        <p className="mt-2 text-muted-foreground">
          This kit is planned, but its quiz content has not been written yet.
        </p>
        <Link
          href={kitHref}
          className={cn(buttonVariants({ variant: "outline", className: "mt-5" }))}
        >
          Back to kit
        </Link>
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border p-5">
        <p className="text-sm font-medium text-muted-foreground">
          Conversation check · {Math.min(currentIndex + 1, questions.length)} of{" "}
          {questions.length}
        </p>
        <h2 className="mt-2 text-2xl font-semibold">{kitTitle}</h2>
        <p className="mt-2 text-muted-foreground">
          Pick the reply you would say as the customer. You will get quick
          feedback, then move on.
        </p>
      </div>

      {isFinished ? (
        <section className="rounded-lg border p-5">
          <p className="text-sm font-medium text-muted-foreground">Result</p>
          <h2 className="mt-2 text-2xl font-semibold">
            You recognized {score} of {questions.length} replies.
          </h2>
          <p className="mt-3 text-muted-foreground">
            The harder part is answering without choices. Practice this cafe
            conversation in Koko.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={kokoHref} className={cn(buttonVariants())}>
              Practice in Koko
            </Link>
            <Link
              href={kitHref}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Back to kit
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className="rounded-lg border p-5">
            <p className="text-sm font-medium text-muted-foreground">
              {currentQuestion.role ?? "Choose your reply."}
            </p>
            {currentQuestion.prompt ? (
              <div className="mt-4 rounded-lg border bg-muted/40 p-4">
                <p className="text-lg font-semibold">
                  {currentQuestion.prompt}
                </p>
                {currentQuestion.promptTranslation ? (
                  <p className="mt-1 text-muted-foreground">
                    {currentQuestion.promptTranslation}
                  </p>
                ) : null}
              </div>
            ) : null}
            <h3 className="mt-5 text-xl font-semibold">
              {currentQuestion.question}
            </h3>
            <div className="mt-5 grid gap-3">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = currentAnswer === optionIndex;
                const isCorrect = currentQuestion.answerIndex === optionIndex;
                const hasAnswered = currentAnswer !== undefined;
                const showCorrect = hasAnswered && isCorrect;
                const showWrong = hasAnswered && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={hasAnswered}
                    onClick={() => setAnswers((current) => [...current, optionIndex])}
                    className={cn(
                      "rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                      isSelected && "border-foreground bg-muted",
                      showCorrect && "border-foreground bg-foreground text-background",
                      showWrong && "border-destructive bg-destructive/10",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {currentAnswer !== undefined ? (
              <div className="mt-5 rounded-lg border p-4">
                <p className="font-semibold">
                  {currentAnswer === currentQuestion.answerIndex
                    ? "Good."
                    : "Not this one."}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {currentAnswer === currentQuestion.answerIndex
                    ? currentQuestion.explanation
                    : `Use “${
                        currentQuestion.options[currentQuestion.answerIndex]
                      }” here. ${currentQuestion.explanation.replace(
                        /^Good\.?\s*/u,
                        "",
                      )}`}
                </p>
                <button
                  type="button"
                  className={cn(buttonVariants({ className: "mt-4" }))}
                  onClick={() => setCurrentIndex((index) => index + 1)}
                >
                  {currentIndex === questions.length - 1
                    ? "See result"
                    : "Next"}
                </button>
              </div>
            ) : null}
          </section>
        </>
      )}
    </div>
  );
}
