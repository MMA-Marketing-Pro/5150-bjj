// Host canonicalization — 301 alias hosts to the apex domain.
// Hash-prefixed preview deployments (<hash>.5150-bjj.pages.dev) are
// deliberately NOT redirected so previews stay testable.
const CANONICAL_HOST = '5150bjj.com';
const REDIRECT_HOSTS = new Set(['www.5150bjj.com', '5150-bjj.pages.dev']);

export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);
    if (REDIRECT_HOSTS.has(url.hostname)) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
  } catch (e) {
    // never let the redirect layer take the site down
  }
  return context.next();
}
