# Granwell website

A static site — plain HTML/CSS/JS, no build step, no framework. Deploy it anywhere that serves static files.

## Files

- `index.html` — Home
- `services.html` — full Support at Home service detail + FAQ
- `about.html` — about Granwell, values, ACQSC registration status
- `contact.html` — contact details + enquiry form
- `privacy-policy.html` — Privacy Collection Notice (see TODO — recipients table and review date still need confirming)
- `feedback-complaints.html` — how to give feedback, complain, or reach ACQSC/OPAN directly
- `404.html` — not-found page
- `styles.css` — design system (colours, type, layout, all page components)
- `script.js` — mobile nav + scroll reveal
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler/SEO/AI-search directives
- `favicon.svg`, `apple-touch-icon.png`, `og-image.png` — brand icon + social preview image, generated from the site's own palette (eucalyptus/paper/ochre) and arch motif
- `_headers` — Netlify security headers (CSP, HSTS, X-Frame-Options, etc.) — Netlify-specific; see Security section below if deploying elsewhere

## Deploy (easiest options)

- **Vercel**: `vercel` from this folder, or drag-and-drop the folder at vercel.com/new
- **Netlify**: drag-and-drop the folder at app.netlify.com/drop
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch

No environment variables, no Node install required. `404.html` is picked up automatically by Netlify and GitHub Pages; on Vercel it works for statically-served 404s by default.

## SEO & AI search

- Every page has a unique `<title>`, meta description, canonical URL, Open Graph and Twitter Card tags.
- JSON-LD structured data: `HomeHealthCareService` (home, `areaServed` is set to Australia nationally), `BreadcrumbList` (every interior page), `FAQPage` (services page, includes the categories-vs-funding-classifications and hoarding/squalor questions).
- `sitemap.xml` lists indexable pages; `robots.txt` allows all crawlers and points to it.
- `llms.txt` gives AI assistants/answer engines a plain-language summary of the business and key pages, plus explicit notes not to overstate ACQSC registration status.
- `privacy-policy.html` and `404.html` are marked `noindex` so they don't compete with real content in search results.

## Security

- **Headers**: `_headers` sets a Content-Security-Policy (scoped to the actual scripts/styles/fonts/images/form-action in use — self-hosted script, Google Fonts, Unsplash images, FormSubmit form submission), HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a locked-down `Permissions-Policy`. This file is Netlify-specific syntax — if deploying to Vercel or elsewhere, translate it to that platform's headers config (e.g. `vercel.json` → `headers`).
- **Spam protection**: the contact form has a hidden honeypot field (`_honey`) and reasonable `maxlength` limits on all fields. Server-side validation/rate-limiting is handled by FormSubmit itself, not by Granwell — there's no backend here to add custom validation to.
- **Email obfuscation**: `info@` and `invoices@` addresses are rendered as `user [at] domain [dot] com [dot] au` in the HTML and reassembled into real `mailto:` links by `script.js` at runtime (see the `.js-email` elements) — this deters basic scrapers without hiding anything from real visitors. `complaints@` is deliberately left as a plain, always-visible `mailto:` link, since the ACQSC expects a direct complaints channel to remain easily accessible even without JavaScript.
- **HTTPS**: confirmed every resource on the site (fonts, images, form action) is already loaded over `https://` — no mixed-content risk.
- **Analytics**: none are currently wired up. If you add any (Google Analytics, Meta Pixel, etc.), disclose it in `privacy-policy.html` first.

## Domain setup (once granwell.com.au is connected)

The site currently deploys to a Netlify subdomain, but every canonical tag, Open Graph URL, and JSON-LD `url`/`item` field across all pages already points to `https://granwell.com.au/`. Once the custom domain is connected in Netlify:

1. Confirm the canonical tags actually resolve (visit each page at the real domain and check there's no redirect loop or mismatch).
2. Set up a 301 redirect from the Netlify subdomain (`melodious-moonbeam-d2cb61.netlify.app`) to `granwell.com.au` — Netlify's domain settings do this automatically once a custom domain is set as primary, but verify it in Netlify's dashboard rather than assuming.
3. Until that redirect is live, both URLs are technically reachable, which risks duplicate-content indexing — the canonical tags mitigate this but a hard redirect is the real fix.

## Contact form

The enquiry form on `contact.html` uses [FormSubmit](https://formsubmit.co) —
a free service with no signup and no backend: the form POSTs straight to
`https://formsubmit.co/info@granwell.com.au` and FormSubmit emails the
submission to that inbox. There's nothing to install or host.

**One-time setup:** the *first* submission triggers an activation email
from FormSubmit to `info@granwell.com.au` — someone needs to click the
confirmation link in that email once. After that, every submission is
emailed straight through automatically.

This is the general "get in touch" form only. The separate **service
agreement** (used once someone is ready to sign up as a client) is a
different, more detailed form and will be embedded via **Snapforms**
instead, the same way it's done on the PPM site — that's a separate piece
of work, not part of this enquiry form.

## Before this goes live — TODO

All placeholders now use one convention: `[ADD: field name]` — search the codebase for `[ADD:` to find every remaining one.

1. **Domain** — see "Domain setup" above.
2. **Phone number** — `[ADD: phone number]` in Contact and the Feedback & Complaints page.
3. **ABN** — `[ADD: ABN]` in the footer (every page) and Privacy Policy.
4. **FormSubmit activation** — see Contact form section above; someone with access to `info@granwell.com.au` needs to click the one-time confirmation link after the first real submission.
5. **Snapforms embed for the service agreement** — separate from the enquiry form above; add this when that step of the client journey is built.
6. **Privacy Policy legal review** — `privacy-policy.html` now reflects Granwell's approved Privacy Collection Notice structure (My Aged Care/Medicare references, associated-provider disclosures, a recipients table, OPAN contact), replacing the earlier bare-bones draft. It's still flagged with `[ADD: date]` for last-reviewed date and should be checked against Granwell's actual current data-sharing arrangements (especially the recipients table) by a qualified advisor before being treated as final.
7. **ACQSC registration status** — About, the trust strip, and Feedback & Complaints all say registration is "in progress." Update this copy once registration is confirmed, and add the registration/provider ID once issued.
8. **Stock photography** — hero/service images are hotlinked from Unsplash as placeholders, and the social preview image (`og-image.png`) is a generated placeholder using the brand palette. Replace both with real, licensed photography before launch.
9. **Category 2 card** (`services.html#category-2`) — currently says Granwell doesn't deliver assistive technology/home modifications. Remove or update this if that changes.
10. **Recipients table** (Privacy Policy, section 4) — lists categories of recipients (My Aged Care, ACQSC, associated providers, Services Australia, IT/software providers) based on what a Support at Home provider typically shares and with whom. Confirm this matches Granwell's actual arrangements — don't leave it as a guess.

## Design notes

- Palette: eucalyptus green (primary), ochre (warm accent), brick (calls to
  action), warm paper background — deliberately avoids the "cream +
  terracotta" and "black + neon" looks that read as AI-generated defaults.
- Type: Fraunces (display) + Public Sans (body), loaded from Google Fonts.
- Signature motif: the arch/threshold shape (doorway, fanlight window) used
  on the hero image, service cards, about image, and now the favicon/social
  preview image — ties back to the core idea of staying in your own home.
- Services copy is grouped by what a visitor actually cares about, not by
  ACQSC category number — but each card/section is labelled with its Support
  at Home registration category (1, 3, 4) for transparency, since Category 4
  (care management) is the licence Granwell's whole model depends on.
  Category 2 is shown too, explicitly marked as not currently delivered, so
  visitors who've seen the full category list elsewhere aren't left confused
  by a silent gap.
- Hoarding & squalor assistance is **not** listed as a Granwell service —
  it's delivered through a separate government program (CHSP), not Support
  at Home. It's referenced only as a referral/signposting note on the
  Category 3 section and FAQ.
- Granwell's service area is national (Australia-wide), not Canberra-only —
  the "local, not a call centre" differentiator is expressed through
  relationship continuity (one real care partner) rather than geography.
  The registered office (Canberra, ACT) and the service area are kept
  distinct throughout the copy.
- The site is multi-page (Home / Services / About / Contact / legal) rather
  than a single long scroll, so each page can be indexed and ranked on its
  own terms — this is the main change from the original single-page build.
