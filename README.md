# Granwell website

A static site — plain HTML/CSS/JS, no build step, no framework. Deploy it anywhere that serves static files.

## Files
- `index.html` — all page content
- `styles.css` — design system (colours, type, layout)
- `script.js` — mobile nav + scroll reveal

## Deploy (easiest options)
- **Vercel**: `vercel` from this folder, or drag-and-drop the folder at vercel.com/new
- **Netlify**: drag-and-drop the folder at app.netlify.com/drop
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch

No environment variables, no Node install required.

## Before this goes live — TODO
1. **Phone number** — currently a placeholder in the Contact section and footer.
2. **ABN** — placeholder in the footer.
3. **Snapforms embed** — the contact form currently opens the visitor's email
   client (`mailto:`) as a functional placeholder. Swap in the Snapforms
   embed script the same way it's wired on the PPM site; field names
   (`name`, `email`, `phone`, `message`) are already aligned so the layout
   shouldn't need to change.
4. **Privacy Policy / Feedback & Complaints links** in the footer point to
   `#` — link these once those documents have a public URL (PDF or page).
5. **ACQSC registration status** — the About section and trust strip both
   say registration is "in progress." Update this copy once registration is
   confirmed, and consider adding the registration/provider ID once issued.
6. **Favicon / social preview image** — not included yet.

## Design notes
- Palette: eucalyptus green (primary), ochre (warm accent), brick (calls to
  action), warm paper background — deliberately avoids the "cream +
  terracotta" and "black + neon" looks that read as AI-generated defaults.
- Type: Fraunces (display) + Public Sans (body), loaded from Google Fonts.
- Signature motif: the arch/threshold shape (doorway, fanlight window) used
  on the hero image, service cards, and about image — ties back to the
  core idea of staying in your own home.
- Services copy is grouped by what a visitor actually cares about, not by
  ACQSC category number — but each card is labelled with its Support at
  Home registration category (1, 3, 4) for transparency, since Category 4
  (care management) is the licence Granwell's whole model depends on.
