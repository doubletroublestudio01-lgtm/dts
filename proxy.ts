import { NextRequest, NextResponse } from "next/server";

const blogRedirects: Record<string, string> = {
  "/blog/luxury-brand-case-studies":
    "/blog/luxury-brand-case-studies-what-successful-brands-do-differently",

  "/blog/case-studies-website-transformations-for-automotive-hospitality-clients":
    "/blog/automotive-hospitality-website-transformation-case-studies",

  "/blog/seo-for-luxury-brands-positioning-keywords-authority-building":
    "/blog/seo-for-luxury-brands-positioning-keywords-authority",

  "/blog/building-a-luxury-brand-from-scratch-roadmap-identity-market-entry":
    "/blog/building-luxury-brand-from-scratch-roadmap-identity-market-entry",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const normalizedPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  const destination = blogRedirects[normalizedPath];

  // Redirect old blog paths directly to their final URLs.
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;

    return NextResponse.redirect(url, 308);
  }

  // Remove trailing slashes from other page URLs.
  if (
    pathname !== normalizedPath &&
    !pathname.startsWith("/.well-known/") &&
    !/\/[^/]+\.[^/]+\/$/.test(pathname)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = normalizedPath;

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}