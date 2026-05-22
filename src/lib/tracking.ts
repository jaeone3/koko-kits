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
  void event;
  // Supabase persistence will be connected after the events table is created.
}
