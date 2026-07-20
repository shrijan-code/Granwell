# Granwell website

A static site — plain HTML/CSS/JS, no build step, no framework. Deploy it anywhere that serves static files.

## Files

- `index.html` — Home
- `services.html` — full Support at Home service detail + FAQ
- `about.html` — about Granwell, values, ACQSC registration status
- `contact.html` — contact details + enquiry form
- `privacy-policy.html` — draft privacy policy (see TODO — not legally reviewed)
- `feedback-complaints.html` — how to give feedback, complain, or reach ACQSC/OPAN directly
- `404.html` — not-found page
- `styles.css` — design system (colours, type, layout, all page components)
- `script.js` — mobile nav + scroll reveal
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler/SEO/AI-search directives
- `favicon.svg`, `apple-touch-icon.png`, `og-image.png` — brand icon + social preview image, generated from the site's own palette (eucalyptus/paper/ochre) and arch motif

## Deploy (easiest options)

- **Vercel**: `vercel` from this folder, or drag-and-drop the folder at vercel.com/new
- **Netlify**: drag-and-drop the folder at app.netlify.com/drop
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch

No environment variables, no Node install required. `404.html` is picked up automatically by Netlify and GitHub Pages; on Vercel it works for statically-served 404s by default.

## SEO & AI search

- Every page has a unique `<title>`, meta description, canonical URL, Open Graph and Twitter Card tags.
- JSON-LD structured data: `HomeHealthCareService` (home), `BreadcrumbList` (every interior page), `FAQPage` (services page).
- `sitemap.xml` lists indexable pages; `robots.txt` allows all crawlers and points to it.
- `llms.txt` gives AI assistants/answer engines a plain-language summary of the business and key pages, plus explicit notes not to overstate ACQSC registration status.
- `privacy-policy.html` and `404.html` are marked `noindex` so they don't compete with real content in search results.

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

1. **Domain** — all canonical/OG URLs currently assume `https://granwell.com.au` (inferred from the existing `@granwell.com.au` email addresses). Update every `canonical`/`og:url`/JSON-LD URL and the URLs in `sitemap.xml`, `robots.txt` and `llms.txt` if the real domain differs.
2. **Phone number** — placeholder (`[ADD PHONE NUMBER]`) in Contact, footer, and the Feedback & Complaints page.
3. **ABN** — placeholder in the footer and Privacy Policy.
4. **FormSubmit activation** — see above; someone with access to `info@granwell.com.au` needs to click the one-time confirmation link after the first real submission.
5. **Snapforms embed for the service agreement** — separate from the enquiry form above; add this when that step of the client journey is built.
6. **Privacy Policy** — `privacy-policy.html` is a structural draft (Australian Privacy Principles headings) with placeholders. It has **not** been reviewed by a lawyer and should not go live as-is.
7. **ACQSC registration status** — About, the trust strip, and Feedback & Complaints all say registration is "in progress." Update this copy once registration is confirmed, and add the registration/provider ID once issued.
8. **Stock photography** — hero/service images are hotlinked from Unsplash as placeholders, and the social preview image (`og-image.png`) is a generated placeholder using the brand palette. Replace both with real, licensed photography before launch.

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
- The site is multi-page (Home / Services / About / Contact / legal) rather
  than a single long scroll, so each page can be indexed and ranked on its
  own terms — this is the main change from the original single-page build.
