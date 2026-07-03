# Emara Software Solutions — PRD

## Current State: STATIC DISPLAY WEBSITE (no backend)
Per user request, the app was converted from full-stack to a static, display-only marketing site.
- All backend functions removed. `backend/server.py` now only exposes `GET /api/health`.
- No database, no contact form, no inquiry emails, no admin hub, no file uploads.
- Frontend (`frontend/src/App.js`) is fully self-contained with hardcoded content.

## Sections
- Sticky nav (logo + The Studio / Expertise / Showcase; mobile menu).
- Hero (Playfair Display, mocha/champagne/gold, logo side card, CTAs → Portfolio & Services).
- About / Design Philosophy.
- Services (5: UI/UX, Brand Redesign, Web Development, SEO, Website Maintenance).
- Portfolio: 5 hardcoded demo projects, each with 7 images, category filter.
- Project detail modal with image carousel (prev/next, counter, thumbnails).
- Footer (brand, quick links, services, copyright). Contact column removed per user.

## Hardcoded demo projects (placeholder images, swap later)
1. Aurelia Couture — Brand Redesign
2. Lumière Fine Dining Portal — Web Development
3. Vault Private Wealth App — UI UX Design
4. Élan Wellness Growth — SEO
5. Maison Noir Boutique — Website Maintenance

## Design
Dark luxury: mocha #120E0D, champagne #F7E7CE, gold #D4AF37, Playfair Display + Work Sans.
(index.css must keep the @tailwind directives — critical.)

## Backlog / Next
- Replace placeholder project images + demo copy with the client's real content.
- Logo: customer asset URL (LOGO_URL constant in App.js).
- (Optional) Re-introduce a contact method (mailto link or form) if desired later.

## History
- 2026-06-21: Initial full-stack build; fixed webpack dev-server v4→v5 crash; fixed missing @tailwind directives; added footer; set inquiry email to info@emarasoftware.com; added image upload + carousel (object storage).
- 2026-06 (this session): Converted to static display site — removed backend functions, admin hub, contact form/section; hardcoded 5 projects × 7 images.
