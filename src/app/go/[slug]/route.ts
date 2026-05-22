import { NextResponse } from "next/server";

import { getKits } from "@/lib/kits";
import { trackEvent } from "@/lib/tracking";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const kit = getKits().find(
    (item) => slug === `${item.category}-${item.slug}-koko`,
  );

  if (!kit) {
    return NextResponse.json({ error: "Unknown Koko route." }, { status: 404 });
  }

  const headers = request.headers;

  await trackEvent({
    eventName: "koko_cta_click",
    kitSlug: kit.slug,
    locale: kit.locale,
    source: "go_route",
    referrer: headers.get("referer"),
    userAgent: headers.get("user-agent"),
  });

  const fallbackPath = `/en/kits/${kit.category}/${kit.slug}?kokoUrl=missing`;
  const target =
    kit.slug === "cafe-ordering"
      ? process.env.KOKO_CAFE_URL || fallbackPath
      : fallbackPath;

  return NextResponse.redirect(new URL(target, request.url));
}
