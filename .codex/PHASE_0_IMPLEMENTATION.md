# Phase 0 — React Stability Implementation

**Base:** `main@fd9734fd29ee1be67ac8d583443a0fa47d5d2079`  
**Branch:** `fix/phase-zero-react-stability-2026-11-13`  
**Scope:** only stability fixes, regression tests, CI and phase-tracking docs.

## Implemented in this branch

- Moved all 3 Fake Store API requests out of render into `src/hooks/useProductCollection.js`, an effect-backed hook.
- Each collection loads independently; HTTP errors and unexpected JSON shape produce a visible, Persian error state. Loading and empty states are also explicit.
- Requests are aborted on unmount / URL change; state writes are skipped after abort.
- Removed the trailing whitespace from the first products URL.
- Added stable `key={item.id}` in all three product lists.
- Replaced all JSX `class` with `className` in Header, Nav and ProductCard.
- Changed count increment to functional state updates to avoid stale-state increments.
- Favorite heart is now a keyboard-accessible button, retaining the existing logged-in toggle behavior.
- Added React Testing Library regression tests for fetch-once, partial API failure and abort-on-unmount.
- Added GitHub Actions job for `npm ci`, `CI=true npm test -- --watch=false`, `CI=true npm run build`.

## Verification status (recorded before CI results)

- Source review: completed.
- GitHub branch / PR: to be verified after push.
- Local `npm ci`, `npm test`, `npm run build`: **NOT RUN** in this review environment.
- Browser network/console/mobile smoke testing: **NOT RUN**.
- GitHub Actions CI: configured; **result needs verification** (not assumed PASS).

## Still out of scope

Real authentication, persistent cart, functional search, semantic navigation, responsive redesign, SEO/metadata, content localization and dependency migration remain tasks for later phases.

## How to verify independently

```sh
npm ci
CI=true npm test -- --watch=false
CI=true npm run build
npm start
```

After opening the site, inspect the browser Network panel: there should be one request per endpoint on initial mount (a fresh remount is a distinct lifecycle). Repeated interaction with login/cart should not trigger new product fetches.
