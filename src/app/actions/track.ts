"use server";

import { headers } from "next/headers";

import { trackEvent } from "@/lib/tracking";

type QuizEventInput = {
  eventName: "quiz_start" | "quiz_complete";
  kitSlug: string;
  locale?: string;
};

export async function trackQuizEvent(input: QuizEventInput) {
  const h = await headers();

  await trackEvent({
    eventName: input.eventName,
    kitSlug: input.kitSlug,
    locale: input.locale,
    source: "quiz_client",
    referrer: h.get("referer"),
    userAgent: h.get("user-agent"),
  });
}
