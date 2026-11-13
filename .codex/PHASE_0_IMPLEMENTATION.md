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

## Verification status — 2026-11-13

- Source review: **completed**; only the Phase 0 scope was changed.
- GitHub branch and draft PR: **created** — https://github.com/lilysadatrasoul/reaact_store/pull/1
- GitHub Actions CI for commit `74a42ba7b4990a9101261773a978b6e7942c0376`: **PASS** for `npm ci`, `CI=true npm test -- --watch=false`, and `CI=true npm run build` on Node.js 20. Verified runs:
  - PR workflow: https://github.com/lilysadatrasoul/reaact_store/actions/runs/43492829344 — success.
  - Push workflow: https://github.com/lilysadatrasoul/reaact_store/actions/runs/43492759455 — success.
- The first push workflow of commit `358abdd5` failed in the test step because a Jest DOM matcher was not imported; corrected in commit `74a42ba7`. The subsequent full test/build runs passed.
- Local `npm ci`, tests and build in the review environment: **NOT RUN** (CI was used instead).
- Browser Network/Console and mobile/desktop visual smoke testing: **NOT RUN**; do not mark Phase 0 fully verified until these are checked.
- `main`: **unchanged**, no merge or deployment.

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
