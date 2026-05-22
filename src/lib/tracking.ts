import { getSupabaseServerClient } from "@/lib/supabase/server";

type TrackEventInput = {
  eventName:
    | "page_view"
    | "pdf_download_click"
    | "anki_download_click"
    | "quiz_start"
    | "quiz_complete"
    | "koko_cta_click";
  kitSlug?: string;
  locale?: string;
  source?: string;
  referrer?: string | null;
  userAgent?: string | null;
};

export async function trackEvent(event: TrackEventInput) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return;
  }

  const { error } = await supabase.from("events").insert({
    event_name: event.eventName,
    kit_slug: event.kitSlug ?? null,
    locale: event.locale ?? null,
    source: event.source ?? null,
    referrer: event.referrer ?? null,
    user_agent: event.userAgent ?? null,
  });

  if (error) {
    console.error("Failed to track event", {
      eventName: event.eventName,
      kitSlug: event.kitSlug,
      error: error.message,
    });
  }
}
