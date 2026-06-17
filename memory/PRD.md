# Charlotte LLC — Corporate Website

## Original Problem Statement
Build the website for Charlotte LLC (a Kentucky-registered LLC) — a holding company that
operates snow.gg, spy.lu and Charlotte Telecommunications (outside EMEA). Each brand has a
short description, three key stats, and a "Visit" link.

## User Choices
- Language: English by default with a French toggle (bilingual EN/FR).
- No logo provided → custom clean, premium identity (not basic/simple).
- No contact form.
- Dark, premium/cinematic aesthetic.
- Multiple pages (multi-page site, not single-page).
- Founders Pierre & Emeric integrated with backstory + photos; "snow" renamed to "Charlotte" in those texts.
- FLYX Ltd is the **sister company** handling European (EMEA) operations.

## Architecture
- Frontend: React (CRA + craco) + Tailwind + framer-motion, React Router (BrowserRouter).
- No backend logic used (static marketing site); FastAPI/Mongo template untouched.
- Pages: `/` (Home hub), `/brands`, `/founders`, `/operations`, `/about`.
- i18n via `LanguageContext` + `i18n/translations.js` (EN/FR), wraps the Router so language persists across routes.

## Implemented (2026-06)
- Multi-page routing with shared `Layout` (Navbar, Footer, ScrollProgress, scroll-to-top).
- Home: animated hero (scramble label, magnetic CTAs), status ticker (marquee), Explore hub (4 links).
- Brands page: 3 interactive cards (spotlight + 3D tilt, count-up stats, external Visit links).
- Founders page: Pierre & Emeric with real photos, bios and quotes (snow→Charlotte in copy).
- Operations page: 3 live timezone clocks (Louisville / Nicosia / Strasbourg).
- About page: company story + sister company FLYX Ltd (EMEA) + Kentucky LLC.
- Navbar with EN/FR toggle, active states, and a mobile hamburger menu.
- Removed earlier network-canvas dots/lines and custom mouse cursor (per user feedback).
- Verified by testing agent: 100% frontend pass (routing, photos, clocks, i18n, mobile menu).

## Brands (unchanged)
- Charlotte Telecommunications → https://charlottetelecom.com
- spy.lu → https://spy.lu
- snow.gg → https://snow.gg  (brand card kept as snow.gg with live link)

## Backlog / Next
- P1: Confirm whether the snow.gg brand card itself should be renamed to "Charlotte".
- P2: Per-brand detail pages; SEO meta per route; sitemap.
- P2: Optional contact / lead capture if desired later.
