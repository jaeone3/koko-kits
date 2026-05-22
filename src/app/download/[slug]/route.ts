import { NextResponse } from "next/server";

import { getKits } from "@/lib/kits";
import { trackEvent } from "@/lib/tracking";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const kit = getKits().find((item) => {
    const baseSlug = `${item.category}-${item.slug}`;

    return slug === `${baseSlug}-pdf` || slug === `${baseSlug}-anki`;
  });

  if (!kit) {
    return NextResponse.json({ error: "Unknown download." }, { status: 404 });
  }

  const isPdf = slug.endsWith("-pdf");
  const target = isPdf ? kit.assets.pdf : kit.assets.anki;
  const headers = request.headers;

  await trackEvent({
    eventName: isPdf ? "pdf_download_click" : "anki_download_click",
    kitSlug: kit.slug,
    locale: kit.locale,
    source: "download_route",
    referrer: headers.get("referer"),
    userAgent: headers.get("user-agent"),
  });

  return NextResponse.redirect(new URL(target, request.url));
}
