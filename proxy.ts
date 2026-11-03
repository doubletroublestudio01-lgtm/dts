import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ==========================================
  // SEO AUDIT FIX #3
  // Luxury Brand Case Studies
  // ==========================================

  if (pathname === "/blog/luxury-brand-case-studies/") {
    return NextResponse.redirect(
      new URL(
        "/blog/luxury-brand-case-studies-what-successful-brands-do-differently",
        request.url
      ),
      308
    );
  }

  // ==========================================
  // SEO AUDIT FIX #4
  // Automotive & Hospitality Case Studies
  // ==========================================

  if (
    pathname ===
    "/blog/case-studies-website-transformations-for-automotive-hospitality-clients/"
  ) {
    return NextResponse.redirect(
      new URL(
        "/blog/automotive-hospitality-website-transformation-case-studies",
        request.url
      ),
      308
    );
  }

  // ==========================================
  // NORMAL TRAILING SLASH REDIRECT
  // Preserve existing website URL behaviour
  // ==========================================

  if (
    pathname !== "/" &&
    pathname.endsWith("/") &&
    !pathname.startsWith("/.well-known/") &&
    !/\.[^/]+\/$/.test(pathname)
  ) {
    const url = new URL(request.url);

    url.pathname = pathname.slice(0, -1);

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
