# Phase 1 — Responsive Storefront (in progress)

**Base:** `main@09d95447dcab1daeff57f74d25b14914bf2a96ab`  
**Branch:** `feature/phase-one-responsive-storefront-2026-11-13`  
**Date:** 2026-11-13  
**Scope:** Frontend presentation and minimal in-memory search. Not an e-commerce backend.

## Implementation notes

- A neutral Persian RTL visual baseline with responsive Header, search, cart count, demo-login control and simple in-page navigation.
- Three section anchors: `#products`, `#bestsellers`, `#suggested`.
- Responsive manual Bootstrap carousel with local images, semantic text and accessible controls. Carousel does **not** autoplay.
- Common ProductCard: responsive image sizing, reusable layout, clamped titles, formatted USD price (the Fake Store API currency), favorite button with `aria-pressed`, count and cart action only in the original products section.
- `Bestselling.js` and `SuggestedGoods.js` now delegate to shared `ProductCard`; behaviors are unchanged except consistent presentation.
- Controlled search input filters **already loaded titles only** across the three sections, without new API requests. Does not search Fake Store API globally.
- Search results include empty-result status. Loading/error/empty API states remain available.
- `public/index.html` declares `lang=fa`, `dir=rtl`, meaningful title and metadata; removed references to assets absent in the repository tree.
- All original Phase 0 API and count behavior is retained.

## Known functional limitations

- Login is a UI toggle, not authentication.
- Cart is a count, not a persisted cart or checkout.
- 'Bestsellers' actually uses the Fake Store API jewelery category; 'Suggested' is the first 8 products. Both are **demo labels**, not ranking or personalization.
- Responsive CSS design is provisional; owner has not chosen final brand colors, typography or style.
- English product titles originate from the external API.
- Image assets are local; the product images are from Fake Store API.

## Verification and acceptance

- The existing 3 Phase 0 regression tests must continue to pass.
- 3 new regression tests cover in-memory search, navigation anchors and favorite button state.
- PR GitHub Actions: `npm ci`, `CI=true npm test -- --watch=false`, `CI=true npm run build`.
- Until run results are verified, do **not** state tests or build PASS.
- Browser acceptance remains pending: desktop and phone widths 320/375/768/1024/1440, no horizontal overflow, clear hero text, legible cards, working menu, cart and search.
- Owner should approve the visual direction before merging Phase 1. Do not deploy.

## Next decisions

- Brand identity (store name, palette, typeface).
- Whether categories and section names should align strictly with API data or become real backend-driven recommendations.
- Whether real cart/login/checkout is desired in a later phase.
